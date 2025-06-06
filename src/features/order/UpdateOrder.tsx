import Button from "../../ui/Buttons/Button";
import { useFetcher } from "react-router-dom";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="patch" className="text-right">
      <Button>Make priority</Button>
    </fetcher.Form>
  );
}
