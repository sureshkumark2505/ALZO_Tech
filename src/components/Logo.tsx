import React from 'react';
import logoImg from '../assets/logo.png';

export interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  iconOnly?: boolean;
  className?: string;
  isDarkTheme?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showTagline = false,
  iconOnly = false,
  className = '',
  isDarkTheme = false,
}) => {
  const iconSizes = {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  const taglineSizes = {
    xs: 'text-[7px]',
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[10px]',
    xl: 'text-xs',
  };

  if (iconOnly) {
    return (
      <div className={`relative flex items-center justify-center flex-shrink-0 bg-transparent ${className}`}>
        <img
          src={logoImg}
          alt="ALZO Logo"
          className={`${iconSizes[size]} object-contain drop-shadow-[0_4px_12px_rgba(37,99,235,0.25)]`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 select-none bg-transparent ${className}`}>
      {/* Isolated Transparent SD Elevate Logo */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]} flex items-center justify-center bg-transparent`}>
        <img
          src={logoImg}
          alt="ALZO"
          className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight font-extrabold">
          <span
            className={`${textSizes[size]} ${
              isDarkTheme ? 'text-white' : 'text-slate-900'
            } font-display tracking-wider font-extrabold`}
          >
            ALZO
          </span>
          <span
            className={`${textSizes[size]} ml-1.5 font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 font-bold`}
          >
            Tech
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-3 h-[1.5px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            <span
              className={`font-mono font-bold tracking-[0.16em] uppercase ${
                isDarkTheme ? 'text-slate-400' : 'text-slate-500'
              } ${taglineSizes[size]}`}
            >
              We Innovate, You Elevate
            </span>
            <span className="w-3 h-[1.5px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
          </div>
        )}
      </div>
    </div>
  );
};
