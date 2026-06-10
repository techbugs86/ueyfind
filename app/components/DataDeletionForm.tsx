"use client";

import { useState, type FormEvent } from "react";

type Status =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export default function DataDeletionForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus({ state: "loading" });

    try {
      const res = await fetch("/api/delete-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus({ state: "error", message: data.error ?? "Something went wrong." });
        return;
      }

      setStatus({ state: "success", message: data.message });
      setName("");
      setEmail("");
      setConfirmed(false);
    } catch {
      setStatus({
        state: "error",
        message: "Couldn't reach the server. Please try again.",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="mt-5 rounded-2xl border border-brand-mint/60 bg-[#E4F7F1] p-5">
        <p className="font-poppins text-sm leading-relaxed text-brand-deep">
          {status.message}
        </p>
      </div>
    );
  }

  const loading = status.state === "loading";

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-brand-coral/30 bg-[#FCEAE6] px-5 py-4 text-left transition-colors hover:bg-[#fbe0da]"
      >
        <span className="font-poppins text-sm font-semibold text-brand-deep sm:text-base">
          Permanently delete my data
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-brand-coral transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-4">
          <p className="font-poppins text-sm leading-relaxed text-brand-dark/70">
            Enter your name and the email tied to your account. We&apos;ll verify and
            erase everything within 30 days.
          </p>

          <div className="flex flex-col gap-1.5">
        <label htmlFor="del-name" className="font-poppins text-sm font-medium text-brand-deep">
          Name
        </label>
        <input
          id="del-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 font-poppins text-sm text-brand-deep outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-coral"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="del-email" className="font-poppins text-sm font-medium text-brand-deep">
          Account email
        </label>
        <input
          id="del-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="rounded-2xl border border-brand-dark/10 bg-white px-4 py-3 font-poppins text-sm text-brand-deep outline-none transition-colors placeholder:text-brand-dark/40 focus:border-brand-coral"
        />
      </div>

      <label className="flex items-start gap-2.5 font-poppins text-sm text-brand-dark/70">
        <input
          type="checkbox"
          required
          checked={confirmed}
          onChange={(e) => setConfirmed(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-coral"
        />
        <span>
          I understand this permanently deletes all my stored memories and account
          data. This cannot be undone.
        </span>
      </label>

      {status.state === "error" && (
        <p className="font-poppins text-sm text-brand-coral">{status.message}</p>
      )}

      <button
        type="submit"
        disabled={loading || !confirmed}
        className="mt-1 cursor-pointer rounded-2xl bg-gradient-to-r from-brand-coral-soft to-brand-coral px-6 py-3.5 font-poppins font-medium text-white shadow-lg transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
            {loading ? "Submitting…" : "Request data deletion"}
          </button>
        </form>
      )}
    </div>
  );
}
