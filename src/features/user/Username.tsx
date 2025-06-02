import { RootState } from "../../store";
import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state: RootState) => state.user.username);

  if (username === "") {
    return null;
  }

  return <p className="text-sm font-semibold uppercase">{username}</p>;
}

export default Username;
