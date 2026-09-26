import React from 'react';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastsProps {
  toasts: Toast[];
}

export function Toasts({ toasts }: ToastsProps) {
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type}`}>
          {toast.type === 'info' && <div className="spinner" />}
          <div>{toast.message}</div>
        </div>
      ))}
    </div>
  );
}
