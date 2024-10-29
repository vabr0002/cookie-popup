import Button from "@/components/Button";
import { FaCookieBite } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  return (
    <div className="cookie-layout">
      <div className="icons">
        <FaCookieBite className="cookie-icon" />
        <IoMdClose className="close-icon" />
      </div>
      <div className="cookie-text">
        <p>We use cookies to improve your user experience.</p>
        <button className="cookie-button">I like cookies</button>
      </div>
    </div>
  );
}
