import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // in milliseconds
}

function Toast({ message, type = "success", duration = 3000 }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!isVisible) return null;

  const bgColor =
    type === "success"
      ? "bg-green-100 border-green-500 text-green-700"
      : type === "error"
      ? "bg-red-100 border-red-500 text-red-700"
      : "bg-blue-100 border-blue-500 text-blue-700";

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in">
      <div
        className={`rounded-md border-l-4 px-4 py-3 shadow-md ${bgColor}`}
        role="alert"
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Toast;
