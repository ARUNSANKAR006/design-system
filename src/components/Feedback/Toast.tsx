import React, { useEffect, useState } from 'react';

type ToastVariant = 'info' | 'success' | 'warning' | 'error';

interface ToastProps {
  variant?: ToastVariant;
  message: string;
  title?: string;
  duration?: number;
  onClose?: () => void;
  icon?: React.ReactNode;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const Toast: React.FC<ToastProps> = ({
  variant = 'info',
  message,
  title,
  duration = 5000,
  onClose,
  icon,
  position = 'bottom-right',
}) => {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);
  
  const variantClasses = {
    info: 'bg-blue-50 border-blue-500 text-blue-700',
    success: 'bg-green-50 border-green-500 text-green-700',
    warning: 'bg-yellow-50 border-yellow-500 text-yellow-700',
    error: 'bg-red-50 border-red-500 text-red-700',
  };
  
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };
  
  if (!isVisible) return null;
  
  return (
    <div 
      role="alert"
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      className={`fixed ${positionClasses[position]} z-50 flex items-start p-4 rounded shadow-lg border-l-4 min-w-64 max-w-md ${variantClasses[variant]}`}
    >
      {icon && <div className="mr-4 flex-shrink-0">{icon}</div>}
      
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1">{title}</h4>}
        <p className="text-sm">{message}</p>
      </div>
      
      <button
        type="button"
        className="ml-4 text-gray-500 hover:text-gray-700"
        onClick={() => {
          setIsVisible(false);
          onClose?.();
        }}
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};