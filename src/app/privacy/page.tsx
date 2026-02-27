import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BloomPath",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold text-text mb-2">Privacy Policy</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: February 28, 2026</p>

      <div className="prose">
        <Section title="1. Introduction">
          BloomPath (&quot;we&quot;, &quot;our&quot;, or &quot;the App&quot;) is developed and operated by
          Quakr. This Privacy Policy explains how we collect, use, and protect your
          information when you use the BloomPath mobile application.
        </Section>

        <Section title="2. Information We Collect">
          <BulletList
            items={[
              "Account information: email address and password (managed via Supabase Authentication).",
              "Child profile data: name, birth date, and gender — provided voluntarily by you.",
              "Usage data: skill progress tracking, daily task completion, chat conversations with the AI mentor, and weekly report data.",
              "Subscription information: purchase status managed through Adapty (we do not store payment details).",
            ]}
          />
        </Section>

        <Section title="3. How We Use Your Information">
          <BulletList
            items={[
              "Provide personalized development tracking and AI-powered parenting guidance.",
              "Generate weekly growth reports based on your child's activity.",
              "Sync your data across devices via our cloud service.",
              "Manage your subscription status.",
            ]}
          />
        </Section>

        <Section title="4. Data Storage & Security">
          Your data is stored securely on Supabase cloud infrastructure. We use
          industry-standard encryption for data in transit (TLS) and at rest. Your
          account is protected by your password credentials.
        </Section>

        <Section title="5. Third-Party Services">
          <BulletList
            items={[
              "Supabase — authentication and cloud data storage.",
              "Adapty — subscription and in-app purchase management.",
              "OpenAI — AI chat functionality (conversations are processed but not stored by OpenAI for training).",
              "Expo / EAS — app build and distribution infrastructure.",
            ]}
          />
        </Section>

        <Section title="6. Children's Privacy">
          BloomPath is a tool for parents, not for children to use directly. We do
          not knowingly collect data from children. All child profile information is
          entered and managed by the parent user.
        </Section>

        <Section title="7. Data Retention & Deletion">
          You may delete your child&apos;s data at any time through the app settings.
          When you delete your account, all associated data is permanently removed
          from our servers.
        </Section>

        <Section title="8. Your Rights">
          You have the right to access, correct, or delete your personal data. To
          exercise these rights, contact us at the email below.
        </Section>

        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. We will notify you of
          significant changes through the App.
        </Section>

        <Section title="10. Contact Us">
          If you have questions about this Privacy Policy, please contact us at:{" "}
          <a href="mailto:support@quakr.dev" className="text-primary hover:underline">
            support@quakr.dev
          </a>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
