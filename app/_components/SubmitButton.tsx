"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  pendingLabel,
  extraDisable,
}: {
  children: React.ReactNode;
  pendingLabel: React.ReactNode;
  extraDisable?: boolean;
}) {
  // NEEDS TO BE A CLIENT COMPONENT
  // NEEDS TO BE RENDERED INSIDE A FORM COMPONENT
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || extraDisable}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 cursor-pointer"
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
