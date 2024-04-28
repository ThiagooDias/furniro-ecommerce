import React, { useEffect } from 'react'

interface NotificationProps {
  message: string
  duration: number
  onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, duration, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-4 right-4 bg-green-200 text-green-800 px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 opacity-100">
      {message}
    </div>
  );
};

export default Notification