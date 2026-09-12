import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

/**
 * Escapes untrusted user input before injecting into HTML email templates.
 */
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Basic email format validator.
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 1. Method restriction: POST only
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({
      success: false,
      message: 'Method Not Allowed. Only POST requests are accepted.',
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    // 2. Honeypot check: If bot filled hidden field, drop silently
    if (body._hp || body._gotcha) {
      return res.status(200).json({
        success: true,
        message: 'Enquiry received successfully.',
      });
    }

    const {
      name,
      businessName,
      email,
      phone = '',
      service = 'Website & Brand Digital',
      budget = '$3k - $8k',
      message,
    } = body;

    // 3. Strict Server-side Input Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0 || name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid full name (max 100 characters).',
      });
    }

    if (!businessName || typeof businessName !== 'string' || businessName.trim().length === 0 || businessName.trim().length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid business or organization name (max 150 characters).',
      });
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid work email address.',
      });
    }

    if (phone && (typeof phone !== 'string' || phone.length > 50)) {
      return res.status(400).json({
        success: false,
        message: 'Phone number must be less than 50 characters.',
      });
    }

    if (!service || typeof service !== 'string' || service.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid service option.',
      });
    }

    if (!budget || typeof budget !== 'string' || budget.length > 50) {
      return res.status(400).json({
        success: false,
        message: 'Please select a valid budget tier.',
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        message: 'Please provide project details (max 3000 characters).',
      });
    }

    // 4. Check Server-Side Configuration (Secrets never exposed to client)
    const apiKey = process.env.RESEND_API_KEY;
    const senderEmail = process.env.ALZO_SENDER_EMAIL || 'ALZO Tech <onboarding@resend.dev>';

    // Support primary email, secondary email, or comma-separated list of emails
    const rawEmails = [
      process.env.ALZO_CONTACT_EMAIL,
      process.env.ALZO_CONTACT_EMAIL_2,
      process.env.ALZO_CONTACT_EMAILS,
    ]
      .filter(Boolean)
      .join(',');

    const recipientEmails = Array.from(
      new Set(
        rawEmails
          .split(',')
          .map((e) => e.trim())
          .filter((e) => e.length > 0 && isValidEmail(e))
      )
    );

    if (!apiKey) {
      console.error('Server Configuration Error: Missing RESEND_API_KEY');
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please contact the administrator.',
      });
    }

    if (recipientEmails.length === 0) {
      console.error('Server Configuration Error: Missing ALZO_CONTACT_EMAIL or ALZO_CONTACT_EMAIL_2');
      return res.status(500).json({
        success: false,
        message: 'Receiving email configuration error. Please contact the administrator.',
      });
    }

    const cleanName = name.trim();
    const cleanBusiness = businessName.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanService = service.trim();
    const cleanBudget = budget.trim();
    const cleanMessage = message.trim();

    // 5. Construct Safe Sanitized Content
    const escapedName = escapeHtml(cleanName);
    const escapedBusiness = escapeHtml(cleanBusiness);
    const escapedEmail = escapeHtml(cleanEmail);
    const escapedPhone = cleanPhone ? escapeHtml(cleanPhone) : '<em>Not provided</em>';
    const escapedService = escapeHtml(cleanService);
    const escapedBudget = escapeHtml(cleanBudget);
    const escapedMessage = escapeHtml(cleanMessage).replace(/\n/g, '<br />');

    const timestampFormatted = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    const plainTextBody = `
==================================================
NEW ALZO TECH WEBSITE ENQUIRY
==================================================

Name:                  ${cleanName}
Business/Organization: ${cleanBusiness}
Work Email:            ${cleanEmail}
Phone / WhatsApp:      ${cleanPhone || 'Not provided'}
Selected Service:      ${cleanService}
Estimated Budget:      ${cleanBudget}

Project Requirements & Commercial Goals:
--------------------------------------------------
${cleanMessage}
--------------------------------------------------

Source:    ALZO Tech Website (https://alzotech.com)
Submitted: ${timestampFormatted} (IST)
==================================================
`.trim();

    const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>New ALZO Tech Website Enquiry</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f8faff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8faff; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 28px 32px; background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: #ffffff;">
              <table width="100%">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace, sans-serif; letter-spacing: 2px; text-transform: uppercase; color: #60a5fa; font-weight: 700; margin-bottom: 6px;">
                      ALZO TECH &bull; LEAD TELEMETRY
                    </div>
                    <div style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                      New Strategic Project Enquiry
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                
                <!-- Client Overview Grid -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; color: #64748b; letter-spacing: 1px; font-weight: 600; margin-bottom: 12px;">
                      Client Overview
                    </div>
                    <table width="100%" cellpadding="8" cellspacing="0" style="background-color: #f8faff; border-radius: 12px; border: 1px solid #e2e8f0; font-size: 14px;">
                      <tr>
                        <td width="35%" style="color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Full Name:</td>
                        <td width="65%" style="color: #0f172a; font-weight: 700; border-bottom: 1px solid #edf2f7;">${escapedName}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Business / Brand:</td>
                        <td style="color: #0f172a; font-weight: 700; border-bottom: 1px solid #edf2f7;">${escapedBusiness}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Work Email:</td>
                        <td style="border-bottom: 1px solid #edf2f7;">
                          <a href="mailto:${escapedEmail}" style="color: #2563eb; text-decoration: none; font-weight: 600;">${escapedEmail}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Phone / WhatsApp:</td>
                        <td style="color: #0f172a; font-weight: 600; border-bottom: 1px solid #edf2f7;">
                          ${cleanPhone ? `<a href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}" style="color: #059669; text-decoration: none; font-weight: 700;">${escapedPhone}</a>` : '<em>Not provided</em>'}
                        </td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-weight: 600; border-bottom: 1px solid #edf2f7;">Primary Service:</td>
                        <td style="color: #4f46e5; font-weight: 700; border-bottom: 1px solid #edf2f7;">${escapedService}</td>
                      </tr>
                      <tr>
                        <td style="color: #64748b; font-weight: 600;">Estimated Budget:</td>
                        <td style="color: #059669; font-weight: 700;">${escapedBudget}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message Box -->
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="font-size: 11px; font-family: 'JetBrains Mono', monospace; text-transform: uppercase; color: #64748b; letter-spacing: 1px; font-weight: 600; margin-bottom: 12px;">
                      Project Scope & Requirements
                    </div>
                    <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #2563eb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                      ${escapedMessage}
                    </div>
                  </td>
                </tr>

                <!-- Direct Action Buttons -->
                <tr>
                  <td style="padding-bottom: 16px;">
                    <table width="100%">
                      <tr>
                        <td align="center">
                          <a href="mailto:${escapedEmail}?subject=${encodeURIComponent('Re: Your ALZO Tech Project Inquiry - ' + cleanBusiness)}" style="display: inline-block; background-color: #2563eb; color: #ffffff; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 13px; text-decoration: none; margin-right: 8px;">
                            Reply via Email &rarr;
                          </a>
                          ${cleanPhone ? `
                          <a href="https://wa.me/${cleanPhone.replace(/[^0-9]/g, '')}" style="display: inline-block; background-color: #059669; color: #ffffff; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 13px; text-decoration: none;">
                            Chat on WhatsApp &rarr;
                          </a>` : ''}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 32px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; font-family: 'JetBrains Mono', monospace;">
              <table width="100%">
                <tr>
                  <td align="left">
                    ALZO Tech Lead Ingress Engine
                  </td>
                  <td align="right">
                    ${timestampFormatted}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    // 6. Send Email via Resend to all configured recipients
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmails,
      replyTo: cleanEmail,
      subject: `New ALZO Tech Website Enquiry - ${cleanBusiness || cleanName}`,
      text: plainTextBody,
      html: htmlBody,
    });

    if (error) {
      console.error('Resend delivery error:', error.message || error);
      return res.status(502).json({
        success: false,
        message: 'Unable to deliver inquiry email at this time. Please try again or reach out directly on WhatsApp.',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Your project enquiry has been delivered successfully.',
      id: data?.id,
    });
  } catch (err: any) {
    console.error('API Error in /api/contact:', err?.message || err);
    return res.status(500).json({
      success: false,
      message: 'An unexpected error occurred while processing your enquiry. Please try again.',
    });
  }
}
