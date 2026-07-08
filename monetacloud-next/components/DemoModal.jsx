"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Eyebrow from "./ui/Eyebrow";
import Button from "./ui/Button";
import FormField from "./ui/FormField";

const EMAILJS_PUBLIC_KEY = "ngQ6S-PSHLtvYSuor";
const EMAILJS_SERVICE_ID = "service_22vqe4l";
const EMAILJS_TEMPLATE_ID = "template_cwidomn";

export default function DemoModal({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const t = setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 50);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      clearTimeout(t);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitted(false);
      setErrors({});
      setSending(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = {};
    if (!data.name) next.name = "Required";
    if (!data.email || !/.+@.+\..+/.test(data.email)) next.email = "Valid email required";
    if (!data.company) next.company = "Required";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSending(true);
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: data.name,
        email: data.email,
        company: data.company,
        message: data.message || "—",
      })
      .then(() => {
        setSending(false);
        setSubmitted(true);
      })
      .catch(() => {
        setSending(false);
        setErrors({ submit: "Something went wrong. Please try again." });
      });
  };

  const inputCls = (err) =>
    "w-full h-11 bg-bg-primary border rounded-md px-4 text-[15px] text-white placeholder:text-ink-muted focus:outline-none transition-colors " +
    (err ? "border-red-500 focus:border-red-400" : "border-line focus:border-accent-indigo");

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div
        className="fixed inset-0 z-50 flex items-start justify-center px-4 md:px-6"
        style={{ paddingTop: "clamp(16px, 4vh, 48px)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onClick={onClose}
      >
        <div
          ref={dialogRef}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[520px] card !rounded-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          style={{ padding: "20px 24px" }}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-8 h-8 grid place-items-center rounded-md hover:bg-bg-tertiary"
            style={{ color: "#94a3b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          {submitted ? (
            <div className="py-8 text-center">
              <div className="w-12 h-12 mx-auto rounded-full grad-line grid place-items-center mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <h2 className="text-h3 mb-2">Request received</h2>
              <p className="text-[14px] text-ink-secondary max-w-sm mx-auto">
                Thanks — we&apos;ll follow up within one business day to schedule your billing and margin review.
              </p>
              <Button variant="primary" onClick={onClose} className="mt-5">
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="text-center">
                <Eyebrow className="mb-2 flex flex-col items-center [&_.eyebrow-rule]:mx-auto">Book a Demo</Eyebrow>
              </div>
              <p id="demo-modal-title" className="text-[14px] text-ink-secondary mb-4 leading-[1.55] text-center">
                Have questions about Cloud FinOps or Cloud Reseller Billing? Want to schedule a demo? We&apos;d love to connect.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                <FormField label="Name*">
                  <input name="name" className={inputCls(errors.name)} />
                </FormField>
                <FormField label="Work Email*">
                  <input name="email" type="email" className={inputCls(errors.email)} />
                </FormField>
                <FormField label="Company*">
                  <input name="company" className={inputCls(errors.company)} />
                </FormField>
                <FormField label="What would you like to discuss? (Optional)">
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full bg-bg-primary border border-line rounded-md px-3 py-2 text-[14px] text-white placeholder:text-ink-muted focus:outline-none focus:border-accent-indigo transition-colors resize-none"
                  />
                </FormField>
                <Button type="submit" variant="primary" className="w-full !py-3 mt-1" disabled={sending}>
                  {sending ? "Sending…" : "Book a Demo"}
                </Button>
                {errors.submit && <p className="text-[12px] text-red-400 text-center">{errors.submit}</p>}
                <p className="text-[11px] text-ink-muted text-center">By submitting you agree to moneta&apos;s privacy policy.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
