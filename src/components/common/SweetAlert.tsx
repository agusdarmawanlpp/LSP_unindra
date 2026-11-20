import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type AlertType = 'success' | 'warning' | 'error' | 'info' | 'confirm';

interface SweetAlertProps {
  isOpen: boolean;
  type: AlertType;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  onClose: () => void;
}

export const SweetAlert: React.FC<SweetAlertProps> = ({
  isOpen,
  type,
  title,
  message,
  confirmText = 'OK',
  cancelText = 'Batal',
  onConfirm,
  onCancel,
  onClose,
}) => {
  if (!isOpen) return null;

  const icons = {
    success: <CheckCircle2 className="w-16 h-16 text-emerald-500 animate-bounce" />,
    warning: <AlertTriangle className="w-16 h-16 text-amber-500 animate-pulse" />,
    error: <XCircle className="w-16 h-16 text-rose-500" />,
    info: <Info className="w-16 h-16 text-blue-500" />,
    confirm: <AlertTriangle className="w-16 h-16 text-amber-500" />,
  };

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-100 text-center relative transform transition-all animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 rounded-lg p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex justify-center mb-4">{icons[type]}</div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">{message}</p>

        <div className="flex items-center justify-center gap-3">
          {(type === 'confirm' || onCancel) && (
            <button
              type="button"
              onClick={handleCancel}
              className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors min-w-[100px]"
            >
              {cancelText}
            </button>
          )}
          <button
            type="button"
            onClick={handleConfirm}
            className={`px-6 py-2.5 text-sm font-semibold text-white rounded-xl shadow-md transition-all min-w-[100px] ${
              type === 'error'
                ? 'bg-rose-600 hover:bg-rose-700 shadow-rose-600/20'
                : type === 'warning' || type === 'confirm'
                ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
                : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/20'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export interface ToastProps {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

export const ToastNotification: React.FC<{
  toasts: ToastProps[];
  onRemove: (id: string) => void;
}> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center justify-between p-4 rounded-xl shadow-xl text-white text-sm font-medium transition-all animate-in slide-in-from-right duration-300 ${
            toast.type === 'success'
              ? 'bg-emerald-600'
              : toast.type === 'error'
              ? 'bg-rose-600'
              : 'bg-blue-600'
          }`}
        >
          <div className="flex items-center gap-3">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 shrink-0" />}
            {toast.type === 'error' && <XCircle className="w-5 h-5 shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 shrink-0" />}
            <span>{toast.message}</span>
          </div>
          <button
            onClick={() => onRemove(toast.id)}
            className="text-white/80 hover:text-white ml-3 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
