import { useState } from "react";
import Button from "../../ui/Buttons/Button";
import { useFetcher } from "react-router-dom";
import { Order } from "../../types/order";
import ConfirmationDialog from "../../ui/ConfirmationDialog";
import { formatCurrency } from "../../utils/helpers";
import { PRIORITY_MULTIPLIER } from "../../constants/pricing";

export default function UpdateOrder({ order }: { order: Order }) {
  const fetcher = useFetcher();
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Calculate the priority fee (20% of the order price)
  const priorityFee = order.orderPrice * PRIORITY_MULTIPLIER;
  
  // Format the percentage for display
  const priorityPercentage = PRIORITY_MULTIPLIER * 100;
  
  const handleMakePriority = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    setShowConfirmation(true);
  };
  
  const handleConfirm = () => {
    setShowConfirmation(false);
    // Use React Router's fetcher to submit the form
    fetcher.submit({}, { method: "PATCH" });
  };
  
  const handleCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <fetcher.Form id="priority-form" method="patch" className="text-right" onSubmit={(e) => {
        // Only allow form submission through our explicit submit() call
        if (!showConfirmation) {
          e.preventDefault();
          setShowConfirmation(true);
        }
      }}>
        <Button 
          onClick={handleMakePriority} 
          disabled={fetcher.state === "loading"}
        >
          Make priority
        </Button>
      </fetcher.Form>
      
      {showConfirmation && (
        <ConfirmationDialog
          title="Make Order Priority"
          message={
            `Making this order priority will cost an additional ${priorityPercentage}% (${formatCurrency(priorityFee)}). ` +
            `Your order will be prioritized over non-priority orders.`
          }
          confirmText="Make Priority"
          cancelText="Cancel"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </>
  );
}
