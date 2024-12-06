"use client";
import { useState, useRef } from "react";
import { ArrowDownIcon } from "@/components/svg";

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
        <ArrowDownIcon />
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
