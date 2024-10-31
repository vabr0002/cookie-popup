import CookiePopup from "@/components/CookiePopup";
import If from "@/components/If";

export default function Home() {
  const cookieIsAccepted = true;

  return (
    <div>
      <If condition={cookieIsAccepted}>
        <CookiePopup />
      </If>
    </div>
  );
}
