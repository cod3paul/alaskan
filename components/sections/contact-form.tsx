"use client";

import * as React from "react";
import { contactPageContent } from "@/content/contact";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

type FormType = "general" | "retail" | "wholesale";

export function ContactForm() {
  const [formType, setFormType] = React.useState<FormType>("general");

  const formTitle =
    formType === "general"
      ? contactPageContent.form.submit.general
      : contactPageContent.form.submit.partner;

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] items-start">
      <section aria-labelledby="contact-heading" className="space-y-6">
        <div className="space-y-3">
          <h2
            id="contact-heading"
            className="text-display-md text-foreground"
          >
            {contactPageContent.form.heading}
          </h2>
          <p className="text-sm text-gray-600">
            Choose the option that best describes your inquiry and we’ll route
            it to the right team.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Contact type"
          className="inline-flex flex-wrap gap-3"
        >
          {(["general", "retail", "wholesale"] as const).map((type) => (
            <button
              key={type}
              role="tab"
              aria-selected={formType === type}
              onClick={() => setFormType(type)}
              className={`font-display text-[11px] uppercase tracking-[0.22em] px-5 py-2.5 border-2 rounded-full transition-colors ${
                formType === type
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-[var(--color-border-subtle)] text-foreground hover:border-primary"
              }`}
            >
              {contactPageContent.form.types[type]}
            </button>
          ))}
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="firstName"
              label={contactPageContent.form.placeholders.firstName}
              autoComplete="given-name"
            />
            <Field
              id="lastName"
              label={contactPageContent.form.placeholders.lastName}
              autoComplete="family-name"
            />
          </div>
          <Field
            id="email"
            type="email"
            label={contactPageContent.form.placeholders.email}
            autoComplete="email"
          />
          {formType !== "general" && (
            <Field
              id="company"
              label={contactPageContent.form.placeholders.company}
              autoComplete="organization"
            />
          )}
          <Field
            id="message"
            label={contactPageContent.form.placeholders.message}
            as="textarea"
            rows={5}
          />

          <Button type="submit" size="lg">
            {formTitle}
          </Button>
        </form>
      </section>

      <aside className="space-y-6">
        <div className="rounded-2xl bg-secondary px-8 py-8 text-primary-foreground">
          <h3 className="mb-3 font-display text-xl uppercase tracking-[0.18em]">
            {contactPageContent.sidebar.distributorHeading}
          </h3>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            <strong className="block text-primary-foreground">
              {siteConfig.distributor.name}
            </strong>
            {siteConfig.distributor.address}
            <br />
            {siteConfig.distributor.suite}
            <br />
            {siteConfig.distributor.city}
          </p>
          <a
            href={siteConfig.distributor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm text-primary hover:underline"
          >
            {siteConfig.distributor.websiteLabel}
          </a>
        </div>

        <div className="rounded-2xl bg-primary px-8 py-8 text-primary-foreground">
          <h3 className="mb-3 font-display text-xl uppercase tracking-[0.18em]">
            {contactPageContent.sidebar.scaleHeading}
          </h3>
          <p className="text-sm text-primary-foreground/85 leading-relaxed">
            {contactPageContent.sidebar.scaleDescription}
          </p>
        </div>
      </aside>
    </div>
  );
}

type FieldProps = {
  id: string;
  label: string;
  as?: "input" | "textarea";
  type?: string;
  rows?: number;
  autoComplete?: string;
};

function Field({
  id,
  label,
  as = "input",
  type = "text",
  rows,
  autoComplete,
}: FieldProps) {
  const InputTag = as;
  const commonClasses =
    "mt-1 block w-full rounded-lg border-2 border-[var(--color-border-subtle)] bg-white px-4 text-sm text-foreground placeholder:text-[color:var(--text-secondary)] focus:border-primary focus:outline-none";

  return (
    <div className="text-sm">
      <label htmlFor={id} className="block text-foreground/85">
        {label}
      </label>
      <InputTag
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows : undefined}
        autoComplete={autoComplete}
        className={
          as === "textarea"
            ? `${commonClasses} py-3 resize-none`
            : `${commonClasses} h-11`
        }
      />
    </div>
  );
}

