"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useTranslation } from "@/components/LanguageProvider";

/* ─────────────────────────────────────────────
   SVG ICON PRIMITIVES
───────────────────────────────────────────── */

function IconCheck({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function IconApple() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   PHONE MOCKUP COMPONENT
   CSS-only device frame with app screen content
───────────────────────────────────────────── */

type PhoneScreenKey = "tasks" | "tracking" | "ai";

function PhoneScreen({ screen }: { screen: PhoneScreenKey }) {
  if (screen === "tasks") {
    return (
      <div className="h-full bg-cream flex flex-col">
        <div className="px-4 pt-4 pb-3 border-b border-border/50">
          <p className="text-[10px] text-text-muted">2026年4月1日 星期二</p>
          <p className="text-sm font-bold text-text">今日成長任務</p>
        </div>
        <div className="flex-1 px-4 py-3 space-y-2.5">
          {[
            { done: true, label: "語言：說出 3 種顏色", badge: "語言" },
            { done: true, label: "精細動作：穿珠子練習", badge: "動作" },
            { done: false, label: "社交：角色扮演遊戲", badge: "社交" },
          ].map((task, i) => (
            <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl" style={{ background: task.done ? "rgba(141,155,142,0.12)" : "white" }}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${task.done ? "bg-primary text-white" : "border-2 border-border"}`}>
                {task.done && <IconCheck />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-[10px] leading-tight ${task.done ? "text-text-muted line-through" : "text-text font-semibold"}`}>{task.label}</p>
              </div>
              <span className="text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-secondary/20 text-secondary shrink-0">{task.badge}</span>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4">
          <div className="rounded-xl bg-primary/15 p-2.5">
            <p className="text-[9px] text-primary-dark font-bold">完成度 2/3</p>
            <div className="mt-1.5 h-1.5 rounded-full bg-border overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "67%" }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (screen === "tracking") {
    return (
      <div className="h-full bg-cream flex flex-col">
        <div className="px-4 pt-4 pb-3 border-b border-border/50">
          <p className="text-[10px] text-text-muted">小明 · 3 歲 2 個月</p>
          <p className="text-sm font-bold text-text">發展里程碑</p>
        </div>
        <div className="flex-1 px-4 py-3 space-y-2.5">
          {[
            { label: "語言發展", pct: 78, color: "#8D9B8E" },
            { label: "精細動作", pct: 65, color: "#C4A882" },
            { label: "社交情緒", pct: 82, color: "#D4B5B0" },
            { label: "認知思考", pct: 71, color: "#8D9B8E" },
          ].map((item, i) => (
            <div key={i}>
              <div className="flex justify-between mb-1">
                <p className="text-[9px] text-text-secondary">{item.label}</p>
                <p className="text-[9px] font-bold text-text">{item.pct}%</p>
              </div>
              <div className="h-1.5 rounded-full bg-border overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700" style={{ width: `${item.pct}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 pb-4">
          <div className="rounded-xl bg-secondary/15 p-2.5 text-center">
            <p className="text-[9px] text-secondary font-bold">已完成 163 / 224 項指標</p>
          </div>
        </div>
      </div>
    );
  }

  // AI chat screen
  return (
    <div className="h-full bg-cream flex flex-col">
      <div className="px-4 pt-4 pb-3 border-b border-border/50">
        <p className="text-[10px] text-text-muted">AI 育兒導師</p>
        <p className="text-sm font-bold text-text">隨時可問</p>
      </div>
      <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden">
        <div className="flex justify-end">
          <div className="max-w-[75%] bg-primary text-white rounded-2xl rounded-tr-sm px-3 py-2">
            <p className="text-[9px] leading-tight">我的孩子 2 歲還不說話，正常嗎？</p>
          </div>
        </div>
        <div className="flex gap-1.5">
          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
            <span className="text-[6px] font-bold text-primary-dark">AI</span>
          </div>
          <div className="max-w-[80%] bg-white rounded-2xl rounded-tl-sm px-3 py-2 shadow-sm">
            <p className="text-[9px] leading-tight text-text-secondary">根據你孩子目前的發展紀錄，語言發展在正常範圍內。以下是 3 個可以在家做的語言活動...</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[75%] bg-primary/15 rounded-2xl rounded-tr-sm px-3 py-2">
            <p className="text-[9px] leading-tight text-primary-dark">好的，謝謝！那活動 1 怎麼做？</p>
          </div>
        </div>
      </div>
      <div className="px-3 pb-4">
        <div className="flex gap-2 bg-white rounded-xl px-3 py-2 shadow-sm border border-border/50">
          <div className="flex-1 h-3 rounded-full bg-border/50" />
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <IconArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

function getScreenImage(screen: PhoneScreenKey, locale: string): string {
  const images: Record<PhoneScreenKey, Record<string, string>> = {
    tasks: { "zh-TW": "/images/app-roadmap.png", en: "/images/app-roadmap-en.png" },
    tracking: { "zh-TW": "/images/app-roadmap-detail.png", en: "/images/app-roadmap-detail-en.png" },
    ai: { "zh-TW": "/images/app-mentor.png", en: "/images/app-mentor.png" },
  };
  return images[screen][locale] ?? images[screen].en;
}

function PhoneMockup({ screen, isCenter = false, locale = "zh-TW" }: { screen: PhoneScreenKey; isCenter?: boolean; locale?: string }) {
  return (
    <div
      className={`relative transition-all duration-500 ${isCenter ? "scale-100 z-10" : "scale-90 opacity-70"}`}
      style={{ width: isCenter ? 200 : 180, height: isCenter ? 400 : 360 }}
    >
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[36px] bg-stone-800 shadow-[0_32px_64px_-16px_rgba(74,69,67,0.35)]" />
      {/* Screen border */}
      <div className="absolute inset-[3px] rounded-[33px] bg-stone-900 overflow-hidden">
        {/* Dynamic island */}
        <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-stone-900 rounded-full z-20" />
        {/* Screen content — real app screenshots */}
        <div className="absolute inset-0 rounded-[30px] overflow-hidden">
          <Image
            src={getScreenImage(screen, locale)}
            alt={`BloomPath ${screen} screen`}
            fill
            className="object-cover object-top"
            sizes="200px"
          />
        </div>
      </div>
      {/* Side button */}
      <div className="absolute right-[-2px] top-[80px] w-[3px] h-[40px] rounded-l-full bg-stone-700" />
      <div className="absolute left-[-2px] top-[70px] w-[3px] h-[28px] rounded-r-full bg-stone-700" />
      <div className="absolute left-[-2px] top-[108px] w-[3px] h-[28px] rounded-r-full bg-stone-700" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   EMAIL FORM COMPONENT
───────────────────────────────────────────── */

function EmailForm({ placeholder, cta, disclaimer, success }: { placeholder: string; cta: string; disclaimer: string; success: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    // Simulate async submission
    setTimeout(() => setStatus("success"), 1200);
  }, [email]);

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 bg-primary/15 rounded-2xl px-5 py-4 border border-primary/30">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
          <IconCheck className="text-white" />
        </div>
        <p className="text-sm font-semibold text-primary-dark">{success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
          placeholder={placeholder}
          className="flex-1 min-w-0 bg-white/80 border border-border rounded-xl px-4 py-3 text-sm text-text placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="shrink-0 bg-primary hover:bg-primary-dark text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-300 active:scale-[0.98] disabled:opacity-60 whitespace-nowrap"
        >
          {status === "loading" ? "..." : cta}
        </button>
      </div>
      {status === "error" && (
        <p className="text-xs text-red-500 pl-1">Please enter a valid email address.</p>
      )}
      <p className="text-xs text-text-muted pl-1">{disclaimer}</p>
    </form>
  );
}

/* ─────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────── */

export default function Home() {
  const { t, locale } = useTranslation();
  const h = t.home;
  const [activeSlide, setActiveSlide] = useState(1);
  const [activeAge, setActiveAge] = useState(0);

  const slides: PhoneScreenKey[] = ["tasks", "tracking", "ai"];

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ── 1. HERO — Split Screen ── */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0EDE8] via-cream to-[#E8EDE8]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(141,155,142,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(196,168,130,0.1),transparent_60%)]" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-0">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">

            {/* Left: Content */}
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/70 border border-border rounded-full px-4 py-1.5 mb-8 animate-fade-up">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                <span className="text-xs font-bold text-text-secondary tracking-wide uppercase">Coming to App Store</span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 animate-fade-up delay-100">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold text-text tracking-tighter leading-none mb-3">
                  {h.hero.line1}
                </span>
                <span className="block text-lg md:text-xl text-text-muted font-semibold tracking-widest uppercase">
                  {h.hero.line2}
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl font-bold text-text/80 leading-relaxed mb-2 animate-fade-up delay-200">
                {h.hero.tagline}
                <br />
                {h.hero.taglineBreak}
              </p>
              <p className="text-base text-text-muted mb-8 animate-fade-up delay-300">
                {h.hero.subtitle}
              </p>

              {/* Stats pills */}
              <div className="flex gap-3 mb-8 animate-fade-up delay-400">
                <div className="bg-white/80 border border-border rounded-xl px-4 py-2.5 text-center">
                  <div className="text-2xl font-extrabold text-text tracking-tighter">{h.hero.stat1Value}</div>
                  <div className="text-xs text-text-muted">{h.hero.stat1Label}</div>
                </div>
                <div className="bg-white/80 border border-border rounded-xl px-4 py-2.5 text-center">
                  <div className="text-2xl font-extrabold text-text tracking-tighter">{h.hero.stat2Value}</div>
                  <div className="text-xs text-text-muted">{h.hero.stat2Label}</div>
                </div>
                <div className="bg-primary/15 border border-primary/30 rounded-xl px-4 py-2.5 text-center">
                  <div className="text-2xl font-extrabold text-primary-dark tracking-tighter">1,247</div>
                  <div className="text-xs text-text-muted">on waitlist</div>
                </div>
              </div>

              {/* Email form */}
              <div className="animate-fade-up delay-500">
                <EmailForm
                  placeholder={h.hero.emailPlaceholder}
                  cta={h.hero.emailCta}
                  disclaimer={h.emailCapture.disclaimer}
                  success={h.emailCapture.success}
                />
              </div>

              {/* App store badge */}
              <div className="mt-6 flex items-center gap-2 animate-fade-up delay-600">
                <div className="flex items-center gap-2 bg-stone-900 text-white rounded-xl px-4 py-2.5 text-sm font-semibold">
                  <IconApple />
                  <span>App Store</span>
                  <span className="text-stone-400 text-xs">· Coming Soon</span>
                </div>
              </div>
            </div>

            {/* Right: Phone mockup */}
            <div className="hidden lg:flex items-center justify-center relative animate-fade-up delay-300">
              <div className="animate-float">
                <PhoneMockup screen={slides[activeSlide] as PhoneScreenKey} isCenter locale={locale} />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-16 top-16 bg-white rounded-2xl p-3 shadow-[0_8px_32px_-8px_rgba(74,69,67,0.12)] border border-border/50 min-w-[130px] animate-fade-up delay-500">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-xl bg-primary/20 flex items-center justify-center">
                    <IconCheck className="text-primary-dark" />
                  </div>
                  <span className="text-xs font-bold text-text">{locale === "zh-TW" ? "任務完成" : "Task Done"}</span>
                </div>
                <p className="text-[10px] text-text-muted">{locale === "zh-TW" ? "每日成長任務 2/3" : "Daily Tasks 2/3"}</p>
                <div className="mt-1.5 h-1 rounded-full bg-border overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: "67%" }} />
                </div>
              </div>

              <div className="absolute -right-12 bottom-24 bg-white rounded-2xl p-3 shadow-[0_8px_32px_-8px_rgba(74,69,67,0.12)] border border-border/50 min-w-[120px] animate-fade-up delay-600">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary">
                      <IconStar />
                    </span>
                  ))}
                </div>
                <p className="text-[10px] font-bold text-text">4.9 / 5.0</p>
                <p className="text-[9px] text-text-muted">Early testers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SOCIAL PROOF STRIP ── */}
      <section className="py-5 bg-white/60 border-y border-border/50 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...h.socialProof.items, ...h.socialProof.items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm text-text-secondary font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── 3. APP DEMO CAROUSEL ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header — left aligned (DESIGN_VARIANCE=8) */}
          <div className="mb-14">
            <span className="inline-block text-xs font-bold text-primary-dark bg-primary/12 rounded-full px-4 py-1.5 mb-4 tracking-wide uppercase">
              App Preview
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter mb-3">
              {h.appDemo.title}
            </h2>
            <p className="text-text-secondary max-w-md">
              {h.appDemo.subtitle}
            </p>
          </div>

          {/* Phone carousel */}
          <div className="flex flex-col items-center gap-10">
            {/* Phones row */}
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {slides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="transition-all duration-500 focus:outline-none"
                  aria-label={`View screen ${i + 1}`}
                >
                  <PhoneMockup screen={s} isCenter={i === activeSlide} locale={locale} />
                </button>
              ))}
            </div>

            {/* Screen labels & dots */}
            <div className="text-center">
              <p className="font-bold text-text mb-1">{h.appDemo.screens[activeSlide].title}</p>
              <p className="text-sm text-text-muted max-w-xs mx-auto">{h.appDemo.screens[activeSlide].desc}</p>
              <div className="flex justify-center gap-2 mt-4">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeSlide ? "w-8 bg-primary" : "w-2 bg-border hover:bg-text-muted"}`}
                    aria-label={`Go to screen ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES — 2-col zig-zag (NOT 3-col equal) ── */}
      <section className="py-20 md:py-28 bg-white/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-14">
            <span className="inline-block text-xs font-bold text-secondary bg-secondary/15 rounded-full px-4 py-1.5 mb-4 tracking-wide uppercase">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter">
              {h.solution.title}
            </h2>
          </div>

          <div className="space-y-16">
            {h.features.map((feature, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
              >
                {/* Visual panel */}
                <div className={`rounded-3xl p-8 min-h-[200px] flex items-center justify-center ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}
                  style={{
                    background: [
                      "linear-gradient(135deg, rgba(141,155,142,0.15) 0%, rgba(245,240,235,0.8) 100%)",
                      "linear-gradient(135deg, rgba(196,168,130,0.15) 0%, rgba(245,240,235,0.8) 100%)",
                      "linear-gradient(135deg, rgba(212,181,176,0.15) 0%, rgba(245,240,235,0.8) 100%)",
                      "linear-gradient(135deg, rgba(141,155,142,0.12) 0%, rgba(196,168,130,0.12) 100%)",
                    ][i]
                  }}
                >
                  {/* Feature visual: large number + icon area */}
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                      style={{ background: ["rgba(141,155,142,0.25)", "rgba(196,168,130,0.25)", "rgba(212,181,176,0.25)", "rgba(141,155,142,0.2)"][i] }}
                    >
                      {i === 0 && (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8D9B8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
                        </svg>
                      )}
                      {i === 1 && (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C4A882" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      )}
                      {i === 2 && (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4B5B0" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                          <path d="m9 12 2 2 4-4" />
                        </svg>
                      )}
                      {i === 3 && (
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8D9B8E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                        </svg>
                      )}
                    </div>
                    <p className="text-4xl font-extrabold text-text/10 tracking-tighter select-none">
                      {["224", "AI", "5'", "7d"][i]}
                    </p>
                  </div>
                </div>

                {/* Text panel */}
                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <p className="text-xs font-bold text-secondary uppercase tracking-wide mb-3">{feature.solves}</p>
                  <h3 className="text-2xl font-extrabold text-text tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. AGE NAVIGATOR ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <span className="inline-block text-xs font-bold text-accent bg-accent/20 rounded-full px-4 py-1.5 mb-4 tracking-wide uppercase">
              Age-Specific
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter mb-3">
              {h.ageNavigator.title}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              {h.ageNavigator.subtitle}
            </p>
          </div>

          {/* Age tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
            {h.ageNavigator.groups.map((group, i) => (
              <button
                key={i}
                onClick={() => setActiveAge(i)}
                className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                  i === activeAge
                    ? "bg-primary text-white shadow-[0_4px_16px_rgba(141,155,142,0.35)]"
                    : "bg-white/60 text-text-secondary border border-border hover:border-primary/40 hover:text-text"
                }`}
              >
                <span className="block text-xs opacity-70">{group.range}</span>
                <span>{group.label}</span>
              </button>
            ))}
          </div>

          {/* Age content */}
          <div className="bg-white/80 rounded-3xl p-8 border border-border/50 transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-xl font-extrabold text-text mb-2">
                  {h.ageNavigator.groups[activeAge].range} 歲 · {h.ageNavigator.groups[activeAge].label}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {h.ageNavigator.groups[activeAge].desc}
                </p>
                <div className="inline-flex items-center gap-2 bg-primary/12 rounded-full px-4 py-2 text-sm font-semibold text-primary-dark">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                  BloomPath 追蹤這個階段
                </div>
              </div>
              <div className="space-y-3">
                {h.ageNavigator.groups[activeAge].features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <IconCheck className="text-primary-dark" />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. COMPARISON TABLE ── */}
      <section className="py-20 md:py-28 bg-white/40 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-text tracking-tighter text-center mb-12">
            {h.comparison.title}
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border/50 bg-white shadow-[0_20px_40px_-15px_rgba(74,69,67,0.08)]">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto_1fr] bg-cream/60 border-b border-border/50">
              <div className="px-6 py-4 text-sm font-bold text-text-muted text-center">Others</div>
              <div className="w-px bg-border/50" />
              <div className="px-6 py-4 text-sm font-bold text-primary-dark text-center flex items-center justify-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <IconCheck className="text-white" />
                </div>
                BloomPath
              </div>
            </div>
            {/* Rows */}
            {h.comparison.items.map((c, i) => (
              <div key={i} className={`grid grid-cols-[1fr_auto_1fr] ${i < h.comparison.items.length - 1 ? "border-b border-border/30" : ""}`}>
                <div className="px-6 py-4 flex items-center justify-end gap-2">
                  <p className="text-sm text-text-muted text-right line-through decoration-text-muted/40">{c.others}</p>
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 text-red-400">
                    <IconX />
                  </div>
                </div>
                <div className="w-px bg-border/30 my-3" />
                <div className="px-6 py-4 flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 text-primary-dark">
                    <IconCheck className="text-primary-dark" />
                  </div>
                  <p className="text-sm text-text font-semibold">{c.ours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. TESTIMONIALS — Asymmetric (NOT 3-col equal) ── */}
      <section className="py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <span className="inline-block text-xs font-bold text-accent bg-accent/20 rounded-full px-4 py-1.5 mb-4 tracking-wide uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter">
              {h.testimonials.title}
            </h2>
          </div>

          {/* Asymmetric grid: 1 large left + 2 stacked right */}
          <div className="grid md:grid-cols-[5fr_4fr] gap-5">
            {/* Large testimonial */}
            <div className="bg-white rounded-3xl p-8 border border-border/50 shadow-[0_20px_40px_-15px_rgba(74,69,67,0.07)] flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-secondary"><IconStar /></span>
                  ))}
                </div>
                <p className="text-text-secondary leading-relaxed text-base mb-6">
                  &ldquo;{h.testimonials.items[0].quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${h.testimonials.items[0].seed}/48/48`}
                  alt={h.testimonials.items[0].author}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-text text-sm">{h.testimonials.items[0].author}</p>
                  <p className="text-xs text-text-muted">{h.testimonials.items[0].childAge}</p>
                </div>
              </div>
            </div>

            {/* Two stacked smaller testimonials */}
            <div className="flex flex-col gap-5">
              {h.testimonials.items.slice(1).map((item, i) => (
                <div key={i} className="bg-cream/60 rounded-3xl p-6 border border-border/50 flex flex-col justify-between flex-1">
                  <p className="text-text-secondary leading-relaxed text-sm mb-5">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://picsum.photos/seed/${item.seed}/40/40`}
                      alt={item.author}
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-text text-sm">{item.author}</p>
                      <p className="text-xs text-text-muted">{item.childAge}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. PRICING ── */}
      <section className="py-20 md:py-28 bg-white/40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-primary-dark bg-primary/12 rounded-full px-4 py-1.5 mb-4 tracking-wide uppercase">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter mb-3">
              {h.pricing.title}
            </h2>
            <p className="text-text-secondary">{h.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free tier */}
            <div className="bg-white/80 rounded-3xl p-8 border border-border/50">
              <div className="mb-6">
                <p className="text-sm font-bold text-text-muted uppercase tracking-wide mb-2">{h.pricing.free.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-text tracking-tighter">{h.pricing.free.price}</span>
                </div>
                <p className="text-sm text-text-muted mt-2">{h.pricing.free.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {h.pricing.free.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-border flex items-center justify-center shrink-0">
                      <IconCheck className="text-text-muted" />
                    </div>
                    <span className="text-sm text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-border text-text font-bold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 active:scale-[0.98]">
                {h.pricing.free.cta}
              </button>
            </div>

            {/* Pro tier */}
            <div className="relative bg-white rounded-3xl p-8 border-2 border-primary/50 shadow-[0_20px_40px_-15px_rgba(141,155,142,0.25)]">
              {/* Early bird badge — hidden when empty */}
              {h.pricing.earlyBird && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                {h.pricing.earlyBird}
              </div>
              )}
              <div className="mb-6">
                <p className="text-sm font-bold text-primary-dark uppercase tracking-wide mb-2">{h.pricing.pro.name}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-text tracking-tighter">{h.pricing.pro.price}</span>
                  <span className="text-text-muted">{h.pricing.pro.period}</span>
                  {h.pricing.pro.originalPrice && <span className="text-sm text-text-muted line-through">{h.pricing.pro.originalPrice}</span>}
                </div>
                <p className="text-sm text-text-muted mt-2">{h.pricing.pro.desc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {h.pricing.pro.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <IconCheck className="text-primary-dark" />
                    </div>
                    <span className="text-sm text-text font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm transition-all duration-300 active:scale-[0.98] shadow-[0_4px_16px_rgba(141,155,142,0.4)]">
                {h.pricing.pro.cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FINAL EMAIL CAPTURE CTA ── */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-b from-white to-cream/60 rounded-3xl p-12 border border-border/50 shadow-[0_20px_60px_-20px_rgba(74,69,67,0.1)]">
            {/* Logo */}
            <div className="w-16 h-16 mx-auto mb-6">
              <Image
                src="/logo.png"
                alt="BloomPath"
                width={64}
                height={64}
                className="rounded-2xl"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text tracking-tighter mb-3">
              {h.emailCapture.title}
            </h2>
            <p className="text-text-secondary mb-8">
              {h.emailCapture.subtitle}
            </p>

            <EmailForm
              placeholder={h.emailCapture.placeholder}
              cta={h.emailCapture.cta}
              disclaimer={h.emailCapture.disclaimer}
              success={h.emailCapture.success}
            />

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-text-muted">
              <div className="flex items-center gap-1.5">
                <IconCheck className="text-primary-dark" />
                <span>Free forever plan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconCheck className="text-primary-dark" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-1.5">
                <IconApple />
                <span>iOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
