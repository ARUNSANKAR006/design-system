import React, { InputHTMLAttributes } from 'react';

interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  error = false,
  errorMessage,
  size = 'medium',
  startIcon,
  endIcon,
  fullWidth = false,
  disabled = false,
  className = '',
  id,
  ...rest
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  
  const sizeClasses = {
    small: 'py-1 px-2 text-sm',
    medium: 'py-2 px-3 text-md',
    large: 'py-3 px-4 text-lg',
  };
  
  const baseClasses = 'rounded border transition-colors focus:outline-none focus:ring-2';
  const stateClasses = error
    ? 'border-red-500 focus:ring-red-500'
    : disabled
      ? 'border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <div className={`flex flex-col ${widthClass} ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className={`mb-1 text-sm font-medium ${error ? 'text-red-500' : 'text-gray-700'}`}
        >
          {label}
        </label>
      )}
      
      <div className="relative flex items-center">
        {startIcon && (
          <div className="absolute left-3 flex items-center pointer-events-none">
            {startIcon}
          </div>
        )}
        
        <input
          id={inputId}
          className={`${baseClasses} ${stateClasses} ${sizeClasses[size]} ${startIcon ? 'pl-10' : ''} ${endIcon ? 'pr-10' : ''} ${widthClass}`}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={`${inputId}-helper ${error ? `${inputId}-error` : ''}`}
          {...rest}
        />
        
        {endIcon && (
          <div className="absolute right-3 flex items-center pointer-events-none">
            {endIcon}
          </div>
        )}
      </div>
      
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-xs text-gray-500">
          {helperText}
        </p>
      )}
      
      {error && errorMessage && (
        <p id={`${inputId}-error`} className="mt-1 text-xs text-red-500">
          {errorMessage}
        </p>
      )}
    </div>
  );
};