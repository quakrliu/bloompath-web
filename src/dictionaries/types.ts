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
  };
  home: {
    hero: {
      line1: string;
      line2: string;
      alt: string;
      tagline: string;
      taglineBreak: string;
      subtitle: string;
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
    stats: Array<{ value: string; label: string }>;
    cta: {
      title: string;
      subtitle: string;
      badge: string;
    };
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
