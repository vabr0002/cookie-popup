import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import Button from "./Button";

const CookiePopup = () => {
  return (
    <div className="cookie-layout">
      <div className="icons">
        <FaCookieBite className="cookie-icon" />
        <IoMdClose className="close-icon" />
      </div>
      <div className="cookie-text">
        <p>We use cookies to improve your user experience.</p>
        <Button text="I like cookies" />
      </div>
    </div>
  );
};

export default CookiePopup;
