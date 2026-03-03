"use client";

import { useTranslation } from "@/components/LanguageProvider";

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  const p = t.privacy;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold text-text mb-2">{p.title}</h1>
      <p className="text-sm text-text-muted mb-8">{p.lastUpdated}</p>

      <div className="prose">
        {p.sections.map((section, i) => (
          <Section key={i} title={section.title}>
            {"content" in section && section.content ? (
              section.content
            ) : null}
            {"items" in section && section.items ? (
              <BulletList items={section.items} />
            ) : null}
          </Section>
        ))}

        <Section title={p.contactTitle}>
          {p.contactText}{" "}
          <a
            href="mailto:support@quakr.dev"
            className="text-primary hover:underline"
          >
            support@quakr.dev
          </a>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-text mb-3">{title}</h2>
      <div className="text-text-secondary leading-7">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
