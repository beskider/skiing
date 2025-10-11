import CookieConsent from "react-cookie-consent"

export const MainCookieConsent = () => (
    <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="cookies_consent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
    >
        This website uses cookies to enhance the user experience.
    </CookieConsent>
)