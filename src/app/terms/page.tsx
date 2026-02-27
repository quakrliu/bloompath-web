import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - BloomPath",
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-extrabold text-text mb-2">Terms of Service</h1>
      <p className="text-sm text-text-muted mb-8">Last updated: February 28, 2026</p>

      <div className="prose">
        <Section title="1. Acceptance of Terms">
          By downloading, installing, or using BloomPath (&quot;the App&quot;), you agree to
          be bound by these Terms of Service. If you do not agree, please do not use
          the App.
        </Section>

        <Section title="2. Description of Service">
          BloomPath is an AI-powered parenting companion that helps parents track
          their children&apos;s developmental milestones. The App provides skill tracking,
          AI mentoring, daily task suggestions, and weekly growth reports based on
          Montessori and positive parenting methodologies.
        </Section>

        <Section title="3. Account Registration">
          You must create an account to use BloomPath. You are responsible for
          maintaining the confidentiality of your login credentials. You agree to
          provide accurate information during registration.
        </Section>

        <Section title="4. Subscriptions & Payments">
          <BulletList
            items={[
              "BloomPath offers a free tier with limited features and a premium subscription (BloomPath Pro).",
              "Subscriptions are billed through Apple's App Store. Payment is charged to your Apple ID account.",
              "Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.",
              "You can manage or cancel your subscription in your device's Settings > Apple ID > Subscriptions.",
              "A 7-day free trial is available for new subscribers. If not cancelled before the trial ends, your subscription will begin automatically.",
            ]}
          />
        </Section>

        <Section title="5. Free Tier Limitations">
          The free tier includes: up to 5 AI chat messages per day, tracking for 1
          child, and access to basic daily tasks. Weekly reports and advanced tasks
          require a BloomPath Pro subscription.
        </Section>

        <Section title="6. AI-Generated Content Disclaimer">
          The AI mentor provides general parenting guidance based on established
          methodologies. It is not a substitute for professional medical, psychological,
          or educational advice. Always consult qualified professionals for specific
          concerns about your child&apos;s development.
        </Section>

        <Section title="7. User Conduct">
          You agree not to misuse the App, attempt to reverse-engineer it, or use it
          for any unlawful purpose. You are solely responsible for the content you
          input into the App.
        </Section>

        <Section title="8. Intellectual Property">
          All content, design, and technology in BloomPath are owned by Quakr. You
          may not copy, modify, or distribute any part of the App without prior
          written consent.
        </Section>

        <Section title="9. Limitation of Liability">
          BloomPath is provided &quot;as is&quot; without warranties of any kind. We are not
          liable for any damages arising from your use of the App, including but not
          limited to data loss, service interruptions, or reliance on AI-generated
          content.
        </Section>

        <Section title="10. Termination">
          We reserve the right to suspend or terminate your account if you violate
          these terms. You may delete your account at any time through the App
          settings.
        </Section>

        <Section title="11. Changes to Terms">
          We may update these Terms from time to time. Continued use of the App after
          changes constitutes acceptance of the new terms.
        </Section>

        <Section title="12. Governing Law">
          These Terms are governed by the laws of Taiwan (R.O.C.).
        </Section>

        <Section title="13. Contact Us">
          If you have questions about these Terms, please contact us at:{" "}
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
