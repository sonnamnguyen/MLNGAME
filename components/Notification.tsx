import React, { useEffect } from 'react';

interface NotificationProps {
  readonly message: string;
  readonly type: 'success' | 'error' | 'info' | 'warning';
  readonly duration?: number;
  readonly onClose: () => void;
}

export function Notification({ message, type, duration = 3000, onClose }: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    info: 'bg-blue-600',
    warning: 'bg-yellow-600'
  }[type];

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠'
  }[type];

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 z-40 animate-pulse max-w-sm`}>
      <span className="text-xl font-bold">{icon}</span>
      <p className="text-sm">{message}</p>
    </div>
  );
}

interface NotificationStackProps {
  readonly notifications: Array<{ readonly id: string; readonly message: string; readonly type: 'success' | 'error' | 'info' | 'warning' }>;
  readonly onRemove: (id: string) => void;
}

export function NotificationStack({ notifications, onRemove }: NotificationStackProps) {
  return (
    <div className="fixed top-4 right-4 space-y-2 z-40">
      {notifications.map(notif => (
        <Notification
          key={notif.id}
          message={notif.message}
          type={notif.type}
          onClose={() => onRemove(notif.id)}
        />
      ))}
    </div>
  );
}
