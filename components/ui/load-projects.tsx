"use client";
import { useState, useRef } from "react";
import { createPortal } from "react-dom";

export default function LoadProjects({
  btnText,
  alertText,
}: {
  btnText: string;
  alertText: string;
}) {
  const [showAlert, setShowAlert] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const loadProjects = () => {
    setShowAlert(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <>
      <button
        onClick={loadProjects}
        className="p-2 rounded bg-blue hover:bg-lightdark-blue text-black flex items-center gap-1"
      >
        {btnText}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4998 4.16675V15.8334M10.4998 15.8334L16.3332 10.0001M10.4998 15.8334L4.6665 10.0001"
            className="stroke-black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {showAlert && (
        <div
          className={`fixed bottom-4 right-4 text-black bg-white dark:text-white dark:bg-black p-3 backdrop-blur rounded-lg border border-light bg-opacity-30 dark:bg-opacity-30 pointer-events-none animate-[appear_0.2s_ease-in]`}
        >
          <span>{alertText}</span>
        </div>
      )}
    </>
  );
}
