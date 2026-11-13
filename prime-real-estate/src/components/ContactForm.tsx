"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage, copy } from "@/components/LanguageProvider";
import { business, whatsappUrl } from "@/data/site";
import { contactSchema, type ContactFormValues } from "@/lib/contact";

const initialValues: ContactFormValues = {
  name: "", phone: "", email: "", interest: "Buy", propertyType: "", locality: "", budget: "", message: "", consent: false, website: "",
};

export function ContactForm() {
  const { language } = useLanguage();
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const t = (key: keyof typeof copy) => copy[key][language];
  const setField = (field: keyof ContactFormValues, value: string | boolean) =>
    setValues((current) => ({ ...current, [field]: value }));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry. Please try WhatsApp instead.");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  const followUp = `Hi Prime Real Estate, I am ${values.name}. I am interested in ${values.interest.toLowerCase()}${values.propertyType ? ` a ${values.propertyType.toLowerCase()}` : ""} in ${values.locality}. ${values.message}`;
  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={46} /><h2>Thanks, {values.name.split(" ")[0]}!</h2>
        <p>Your enquiry is ready. Continue on WhatsApp to connect with our Ahmedabad team.</p>
        <a className="button button-primary" href={whatsappUrl(followUp)} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <label>{t("name")}<input autoComplete="name" value={values.name} onChange={(event) => setField("name", event.target.value)} aria-invalid={Boolean(errors.name)} />{errors.name && <small className="field-error">{errors.name}</small>}</label>
        <label>{t("phone")}<input autoComplete="tel" inputMode="tel" value={values.phone} onChange={(event) => setField("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} />{errors.phone && <small className="field-error">{errors.phone}</small>}</label>
        <label>Email (optional)<input type="email" autoComplete="email" value={values.email} onChange={(event) => setField("email", event.target.value)} aria-invalid={Boolean(errors.email)} />{errors.email && <small className="field-error">{errors.email}</small>}</label>
        <label>I am interested in<select value={values.interest} onChange={(event) => setField("interest", event.target.value)}><option>Buy</option><option>Sell</option><option>Rent</option><option>Documentation</option><option>Other</option></select></label>
        <label>Property type<select value={values.propertyType} onChange={(event) => setField("propertyType", event.target.value)}><option value="">Choose one</option><option>Flat</option><option>House</option><option>Shop</option><option>Office</option><option>Plot</option><option>Not sure yet</option></select>{errors.propertyType && <small className="field-error">{errors.propertyType}</small>}</label>
        <label>{t("locality")}<input value={values.locality} onChange={(event) => setField("locality", event.target.value)} placeholder="e.g. Gota" aria-invalid={Boolean(errors.locality)} />{errors.locality && <small className="field-error">{errors.locality}</small>}</label>
        <label>Budget (optional)<input value={values.budget} onChange={(event) => setField("budget", event.target.value)} placeholder="e.g. ₹20,000 / month" /></label>
        <label className="full-field">{t("message")}<textarea rows={4} value={values.message} onChange={(event) => setField("message", event.target.value)} placeholder="Tell us what you are looking for" aria-invalid={Boolean(errors.message)} />{errors.message && <small className="field-error">{errors.message}</small>}</label>
        <label className="honeypot" aria-hidden="true">Website<input tabIndex={-1} autoComplete="off" value={values.website} onChange={(event) => setField("website", event.target.value)} /></label>
        <label className="consent-field full-field"><input type="checkbox" checked={values.consent} onChange={(event) => setField("consent", event.target.checked)} />I agree that Prime Real Estate may contact me about this enquiry.</label>
        {errors.consent && <small className="field-error full-field">{errors.consent}</small>}
      </div>
      {status === "error" && <p className="form-error" role="alert">{errorMessage} You can also call us at <a href={`tel:${business.phone}`}>{business.phone}</a>.</p>}
      <button className="button button-primary form-submit" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : t("send")}</button>
    </form>
  );
}
