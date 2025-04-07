import React, { useState } from "react";
import { toast } from "react-toastify";
interface SubscribeProps {
  margin: string;
  inputStyle: string;
  footer: boolean;
}
const SubscribeForm: React.FC<SubscribeProps> = ({
  margin,
  inputStyle,
  footer,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchQuery.trim() === "") {
      // Input is empty, show error toast
      toast.error("Please enter a email!");
    } else {
      // Input is not empty, perform search or other actions here
      toast.success("Thanks for subscription!");
    }
    setSearchQuery("");
  };

  return (
    <form className="hero-form" onSubmit={handleSubmit}>
      <div className={margin}>
        <input
          type="email"
          className={inputStyle}
          placeholder="Enter Your Email"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {footer ? (
          <button type="submit" className="input-group-text custom-btn">
            Subscribe
          </button>
        ) : (
          <button type="submit" className="custom-btn">
            <span className="icofont-location-arrow"></span>
          </button>
        )}
      </div>
    </form>
  );
};

export default SubscribeForm;
