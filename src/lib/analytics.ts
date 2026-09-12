/**
 * Google Analytics 4 (GA4) Integration Utility
 * Measurement ID: G-BBC0SPSM84
 */

export const GA_MEASUREMENT_ID = 'G-BBC0SPSM84';

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Generic event tracker that safely calls window.gtag if present.
 */
export function trackEvent(eventName: string, params?: Record<string, any>): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track Call-to-Action (CTA) clicks across the site.
 */
export function trackCTAClick(ctaName: string, ctaLocation: string): void {
  trackEvent('cta_click', {
    cta_name: ctaName,
    cta_location: ctaLocation,
  });
}

/**
 * Track WhatsApp interaction clicks.
 */
export function trackWhatsAppClick(location: string): void {
  trackEvent('whatsapp_click', {
    location,
  });
}

/**
 * Track Phone / Call interaction clicks.
 */
export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    location,
  });
}

/**
 * Track successful contact form submissions (lead generation).
 * NOTE: Strictly no PII (name, email, phone, message) is sent.
 */
export function trackLead(params: { lead_source?: string } = { lead_source: 'website' }): void {
  trackEvent('generate_lead', {
    lead_source: params.lead_source || 'website',
  });
}

/**
 * Track service selection or inquiry interest.
 */
export function trackServiceInterest(serviceName: string): void {
  trackEvent('service_interest', {
    service_name: serviceName,
  });
}

/**
 * Track case study / portfolio project views and inquiries.
 */
export function trackPortfolioClick(projectName: string): void {
  trackEvent('portfolio_click', {
    project_name: projectName,
  });
}
