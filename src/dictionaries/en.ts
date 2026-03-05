import type { Dictionary } from "./types";

const en: Dictionary = {
  common: {
    brand: "BloomPath",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    copyright: "Quakr",
    supportEmail: "Support: bloompath@quakr.dev",
  },
  home: {
    hero: {
      line1: "BloomPath",
      line2: "AI Parenting Companion",
      alt: "BloomPath - AI Parenting Companion",
      tagline: "Stop worrying about your child's growth.",
      taglineBreak: "Let science guide the way.",
      subtitle:
        "AI parenting companion based on Montessori & positive parenting",
    },
    painPoints: {
      title: "Sound Familiar?",
      subtitle: "Every parent has been there",
      items: [
        "Is my child developing normally? The more you search online, the more anxious you get — every source says something different.",
        "Too busy to research parenting methods. You want to support your child's growth but don't know where to start.",
        "Bought tons of parenting books, but too much theory and too little practice — hard to apply in daily life.",
        "Your friend's child is already walking, but yours isn't — should you be worried?",
        "You know Montessori is great, but not every family can afford professional classes or materials.",
        "Your child's progress is all in your head — no systematic records, nothing to look back on.",
      ],
    },
    solution: {
      title: "BloomPath Turns Worry Into Action",
      line1: "Stop just worrying — know exactly what you can do for your child every day.",
      line2: "We turn child development science into the most practical parenting tool on your phone.",
    },
    features: [
      {
        title: "Science-Based Development Tracking",
        solves: "Solves: Not knowing if your child is developing normally",
        desc: "224 skill indicators designed to international child development standards, covering 8 domains from ages 0-18. See clearly where your child excels and where they need more attention.",
      },
      {
        title: "AI Parenting Mentor",
        solves: "Solves: Can't find reliable parenting answers",
        desc: "A parenting consultant available even at 3 AM. Based on Montessori methods, it gives personalized advice for your child's age and development — not generic copy-paste answers.",
      },
      {
        title: "Daily Growth Tasks",
        solves: "Solves: Knowing the theory but not how to practice",
        desc: "3 tailored parent-child activities each day, completable in 5-15 minutes. Bringing Montessori education into daily life — no special materials needed, doable at home.",
      },
      {
        title: "Weekly Growth Reports",
        solves: "Solves: No systematic record of growth",
        desc: "Automatically compiles the week's progress with clear charts showing growth trends. Not just recording the past — helping you see what to focus on next.",
      },
    ],
    differentiators: {
      title: "Why Choose BloomPath?",
      subtitle: "Not just another parenting app",
      items: [
        {
          badge: "0-18",
          title: "Full Coverage From 0 to 18",
          desc: "Most parenting apps only cover ages 0-5. BloomPath accompanies your child from infancy to adolescence — one app for the entire journey.",
        },
        {
          badge: "AI",
          title: "AI That Knows Your Child",
          desc: "Not a generic AI, but a personalized parenting mentor that understands your child's age, developmental stage, and sibling dynamics.",
        },
        {
          badge: "5'",
          title: "Just 5 Minutes a Day",
          desc: "No huge time commitment needed. Complete one small task daily to continuously support your child's development.",
        },
      ],
    },
    comparison: {
      title: "Typical Parenting Apps vs BloomPath",
      items: [
        {
          others: "Only tracks height and weight",
          ours: "Tracks 224 cognitive & behavioral development indicators",
        },
        {
          others: "Generic parenting articles",
          ours: "AI gives personalized advice based on your child",
        },
        {
          others: "Passive recording",
          ours: "Proactively recommends daily growth tasks",
        },
        {
          others: "Only covers ages 0-5",
          ours: "Full coverage of 8 domains, ages 0-18",
        },
        {
          others: "Single language",
          ours: "Bilingual: 繁體中文 & English",
        },
      ],
    },
    howItWorks: {
      title: "Three Steps to Science-Based Parenting",
      steps: [
        {
          title: "Create a Child Profile",
          desc: "Enter your child's basic info — the system automatically matches the right developmental stage and age-appropriate skills.",
        },
        {
          title: "Spend 5 Minutes Daily",
          desc: "Complete AI-recommended daily tasks to naturally promote your child's growth through everyday interactions.",
        },
        {
          title: "See the Growth Journey",
          desc: "Receive weekly growth reports to clearly track progress trends and know what to focus on next.",
        },
      ],
    },
    storyShowcase: {
      badge: "Pro Feature",
      title: "AI Bedtime Stories — Your Child Is the Hero",
      subtitle: "A unique story every night, turning today's skills into an adventure",
      description: "After completing daily tasks, AI weaves your child's name and the skills they practiced into a personalized bedtime story. Not a canned story — each one is unique and created just for your child. Skills are reinforced naturally through a warm, immersive narrative.",
      howTitle: "How It Works",
      howSteps: [
        "Your child completes 3 daily tasks",
        "AI casts your child as the hero, weaving in today's skills",
        "A warm bedtime story is generated",
        "Listen with text-to-speech, or read together",
      ],
      ageTitle: "Stories That Grow With Your Child",
      ageSubtitle: "Story length adapts to your child's age, matching their attention span at every stage",
      ageItems: [
        { age: "0-3 yrs", length: "400-600 words", time: "~3 min", theme: "Cute animals, warm family" },
        { age: "4-6 yrs", length: "800-1,000 words", time: "~6 min", theme: "Adventure, friendship, fantasy" },
        { age: "7-9 yrs", length: "1,200-1,400 words", time: "~9 min", theme: "Puzzles, teamwork, magic" },
        { age: "10-12 yrs", length: "1,500-1,800 words", time: "~11 min", theme: "Mystery, science adventure" },
        { age: "13-18 yrs", length: "2,000-2,200 words", time: "~14 min", theme: "Self-discovery, philosophy" },
      ],
      ageFootnote: "A child's attention span is roughly \"age × 2-3 minutes\" — a Montessori observation",
    },
    stats: [
      { value: "224", label: "Skills Tracked" },
      { value: "8", label: "Development Domains" },
      { value: "0-18", label: "Years Full Coverage" },
    ],
    cta: {
      title: "Coming Soon to the App Store",
      subtitle: "Your AI parenting companion is almost here",
      badge: "Stay Tuned",
    },
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 28, 2026",
    sections: [
      {
        title: "1. Introduction",
        content:
          'BloomPath ("we", "our", or "the App") is developed and operated by Quakr. This Privacy Policy explains how we collect, use, and protect your information when you use the BloomPath mobile application.',
      },
      {
        title: "2. Information We Collect",
        items: [
          "Account information: email address and password (managed via Supabase Authentication).",
          "Child profile data: name, birth date, and gender — provided voluntarily by you.",
          "Usage data: skill progress tracking, daily task completion, chat conversations with the AI mentor, and weekly report data.",
          "Subscription information: purchase status managed through Adapty (we do not store payment details).",
        ],
      },
      {
        title: "3. How We Use Your Information",
        items: [
          "Provide personalized development tracking and AI-powered parenting guidance.",
          "Generate weekly growth reports based on your child's activity.",
          "Sync your data across devices via our cloud service.",
          "Manage your subscription status.",
        ],
      },
      {
        title: "4. Data Storage & Security",
        content:
          "Your data is stored securely on Supabase cloud infrastructure. We use industry-standard encryption for data in transit (TLS) and at rest. Your account is protected by your password credentials.",
      },
      {
        title: "5. Third-Party Services",
        items: [
          "Supabase — authentication and cloud data storage.",
          "Adapty — subscription and in-app purchase management.",
          "OpenAI — AI chat functionality (conversations are processed but not stored by OpenAI for training).",
          "Expo / EAS — app build and distribution infrastructure.",
        ],
      },
      {
        title: "6. Children's Privacy",
        content:
          "BloomPath is a tool for parents, not for children to use directly. We do not knowingly collect data from children. All child profile information is entered and managed by the parent user.",
      },
      {
        title: "7. Data Retention & Deletion",
        content:
          "You may delete your child's data at any time through the app settings. When you delete your account, all associated data is permanently removed from our servers.",
      },
      {
        title: "8. Your Rights",
        content:
          "You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at the email below.",
      },
      {
        title: "9. Changes to This Policy",
        content:
          "We may update this Privacy Policy from time to time. We will notify you of significant changes through the App.",
      },
    ],
    contactTitle: "10. Contact Us",
    contactText:
      "If you have questions about this Privacy Policy, please contact us at:",
  },
  terms: {
    title: "Terms of Service",
    lastUpdated: "Last updated: March 3, 2026",
    sections: [
      {
        title: "1. Acceptance of Terms",
        content:
          'By downloading, installing, or using BloomPath ("the App"), you agree to be bound by these Terms of Service. If you do not agree, please do not use the App.',
      },
      {
        title: "2. Description of Service",
        content:
          "BloomPath is an AI-powered parenting companion that helps parents track their children's developmental milestones. The App provides skill tracking, AI mentoring, daily task suggestions, and weekly growth reports based on Montessori and positive parenting methodologies.",
      },
      {
        title: "3. Account Registration",
        content:
          "You must create an account to use BloomPath. You are responsible for maintaining the confidentiality of your login credentials. You agree to provide accurate information during registration.",
      },
      {
        title: "4. Subscriptions & Payments",
        items: [
          "BloomPath offers a free tier with limited features and a premium subscription (BloomPath Pro).",
          "Subscriptions are billed through Apple's App Store. Payment is charged to your Apple ID account.",
          "Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.",
          "You can manage or cancel your subscription in your device's Settings > Apple ID > Subscriptions.",
          "A 7-day free trial is available for new subscribers. If not cancelled before the trial ends, your subscription will begin automatically.",
        ],
      },
      {
        title: "5. Refund Policy",
        items: [
          "All purchases are processed through the Apple App Store. BloomPath does not directly collect or handle payment information.",
          'To request a refund, please contact Apple Support (https://support.apple.com/HT204084) or use the "Report a Problem" page in your purchase history.',
          "Refund eligibility is determined by Apple in accordance with their refund policies.",
          "No refunds will be issued for partially used subscription periods.",
          "BloomPath cannot process refunds on behalf of the App Store.",
        ],
      },
      {
        title: "6. Free Tier Limitations",
        content:
          "The free tier includes: up to 5 AI chat messages per day, tracking for 1 child, and access to basic daily tasks. Weekly reports and advanced tasks require a BloomPath Pro subscription.",
      },
      {
        title: "7. AI-Generated Content Disclaimer",
        content:
          "The AI mentor provides general parenting guidance based on established methodologies. It is not a substitute for professional medical, psychological, or educational advice. Always consult qualified professionals for specific concerns about your child's development.",
      },
      {
        title: "8. User Conduct",
        content:
          "You agree not to misuse the App, attempt to reverse-engineer it, or use it for any unlawful purpose. You are solely responsible for the content you input into the App.",
      },
      {
        title: "9. Intellectual Property",
        content:
          "All content, design, and technology in BloomPath are owned by Quakr. You may not copy, modify, or distribute any part of the App without prior written consent.",
      },
      {
        title: "10. Limitation of Liability",
        content:
          'BloomPath is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the App, including but not limited to data loss, service interruptions, or reliance on AI-generated content.',
      },
      {
        title: "11. Termination",
        content:
          "We reserve the right to suspend or terminate your account if you violate these terms. You may delete your account at any time through the App settings.",
      },
      {
        title: "12. Changes to Terms",
        content:
          "We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the new terms.",
      },
      {
        title: "13. Governing Law",
        content: "These Terms are governed by the laws of Taiwan (R.O.C.).",
      },
    ],
    contactTitle: "14. Contact Us",
    contactText:
      "If you have questions about these Terms, please contact us at:",
  },
};

export default en;
