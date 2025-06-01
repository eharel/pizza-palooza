import { useEffect } from "react";

type ConfirmationDialogProps = {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isDestructive?: boolean;
};

function ConfirmationDialog({
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDestructive = false,
}: ConfirmationDialogProps) {
  // Add event listener for Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCancel();
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCancel]); // Only re-run if onCancel changes

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-dark/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h3 className="mb-4 text-xl font-bold">{title}</h3>
        <p className="mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            className="rounded-full border border-stone px-4 py-2 text-sm font-medium text-stone-dark transition-colors hover:bg-stone-light/50"
            onClick={onCancel}
          >
            {cancelText}
          </button>
          <button
            className={`rounded-full px-4 py-2 text-sm font-medium text-white transition-colors ${
              isDestructive
                ? "bg-tomato hover:bg-tomato-dark"
                : "bg-primary hover:bg-primary-dark"
            }`}
            onClick={onConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDialog;
