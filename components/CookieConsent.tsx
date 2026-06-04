"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies for analytics and advertising. By continuing, you accept our{" "}
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-white text-gray-900 px-4 py-2 rounded font-medium whitespace-nowrap cursor-pointer hover:bg-gray-100 transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
