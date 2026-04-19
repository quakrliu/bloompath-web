export interface LegalSection {
  title: string;
  content?: string;
  items?: string[];
}

export interface Dictionary {
  common: {
    brand: string;
    privacyPolicy: string;
    termsOfService: string;
    copyright: string;
    supportEmail: string;
  };
  home: {
    hero: {
      line1: string;
      line2: string;
      alt: string;
      tagline: string;
      taglineBreak: string;
      subtitle: string;
      emailPlaceholder: string;
      emailCta: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
    };
    socialProof: {
      items: string[];
    };
    appDemo: {
      title: string;
      subtitle: string;
      screens: Array<{ title: string; desc: string }>;
    };
    painPoints: {
      title: string;
      subtitle: string;
      items: string[];
    };
    solution: {
      title: string;
      line1: string;
      line2: string;
    };
    features: Array<{ title: string; solves: string; desc: string }>;
    ageNavigator: {
      title: string;
      subtitle: string;
      groups: Array<{
        range: string;
        label: string;
        desc: string;
        features: string[];
      }>;
    };
    differentiators: {
      title: string;
      subtitle: string;
      items: Array<{ badge: string; title: string; desc: string }>;
    };
    comparison: {
      title: string;
      items: Array<{ others: string; ours: string }>;
    };
    howItWorks: {
      title: string;
      steps: Array<{ title: string; desc: string }>;
    };
    storyShowcase: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      howTitle: string;
      howSteps: string[];
      ageTitle: string;
      ageSubtitle: string;
      ageItems: Array<{ age: string; length: string; time: string; theme: string }>;
      ageFootnote: string;
    };
    testimonials: {
      title: string;
      items: Array<{ quote: string; author: string; childAge: string; seed: number }>;
    };
    meetMei: {
      badge: string;
      title: string;
      subtitle: string;
      quote: string;
      credentials: string[];
      blogLabel: string;
      blogUrl: string;
      youtubeLabel: string;
      youtubeUrl: string;
    };
    pricing: {
      title: string;
      subtitle: string;
      earlyBird: string;
      free: { name: string; price: string; desc: string; features: string[]; cta: string };
      pro: { name: string; price: string; originalPrice: string; period: string; desc: string; features: string[]; cta: string };
    };
    stats: Array<{ value: string; label: string }>;
    emailCapture: {
      title: string;
      subtitle: string;
      placeholder: string;
      cta: string;
      disclaimer: string;
      success: string;
    };
    cta: {
      title: string;
      subtitle: string;
      badge: string;
    };
    appStoreUrl: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
    contactTitle: string;
    contactText: string;
  };
  terms: {
    title: string;
    lastUpdated: string;
    sections: LegalSection[];
    contactTitle: string;
    contactText: string;
  };
}

export type Locale = "zh-TW" | "en";
