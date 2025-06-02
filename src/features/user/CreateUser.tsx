import { useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../../ui/Buttons/Button";
import { updateUsername } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (username === "") return;

    dispatch(updateUsername(username));
    navigate("/menu");
  }

  return (
    <div className="container mx-auto max-w-2xl rounded-lg bg-warm px-4 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Create an Account
        </h2>
        <p className="mb-8 text-center text-text-secondary">
          Join PizzaPalooza today and get 20% off your first order! Your pizza
          will be at your door in 30 minutes or less, guaranteed.
        </p>
      </div>
      <div className="card p-6 text-center">
        <form onSubmit={handleSubmit} className="mx-auto max-w-md">
          <p>👋 Welcome! Please start by telling us your name:</p>

          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input mb-6 mt-4 text-center"
          />

          <div>
            <Button disabled={username === ""} classNameAddition="rounded-full">
              Start ordering
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
