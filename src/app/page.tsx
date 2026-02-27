import Image from "next/image";
import Link from "next/link";

/* ── SVG Icons (Morandi palette) ── */

function IconTrack() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8A9C9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function IconMentor() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9AAEA8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function IconTask() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9AD7C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconReport() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8AAE8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function IconPain({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9E9690" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8AAE8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ── Page ── */

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744] via-[#243352] to-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,169,201,0.15),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32 text-center">
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 drop-shadow-2xl">
            <Image
              src="/logo.png"
              alt="育見未來 BloomPath"
              width={176}
              height={176}
              className="rounded-[32px]"
              priority
            />
          </div>

          <h1 className="mb-6">
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 tracking-wide">
              育見未來
            </span>
            <span className="block text-lg sm:text-xl text-white/50 font-semibold tracking-widest uppercase">
              BloomPath
            </span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-white/90 leading-relaxed max-w-xl mx-auto mb-4">
            別再焦慮孩子的成長，
            <br className="sm:hidden" />
            讓科學為你指路。
          </p>
          <p className="text-sm sm:text-base text-white/45 max-w-md mx-auto">
            基於蒙特梭利與正向教養的 AI 育兒夥伴
          </p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="max-w-4xl mx-auto px-6 -mt-6 pb-16 relative z-10">
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-border/50">
          <h2 className="text-xl sm:text-2xl font-extrabold text-text text-center mb-2">
            這些煩惱，你也有嗎？
          </h2>
          <p className="text-sm text-text-muted text-center mb-8">
            每位父母都經歷過的育兒焦慮
          </p>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {painPoints.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-cream flex items-center justify-center shrink-0 mt-0.5">
                  <IconPain d={p.icon} />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution intro */}
      <section className="max-w-3xl mx-auto px-6 pb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text mb-4">
          育見未來，幫你把焦慮變成行動
        </h2>
        <p className="text-text-secondary leading-relaxed">
          不再只是「擔心」，而是每天都知道可以為孩子做什麼。
          <br className="hidden sm:block" />
          我們把兒童發展科學，變成你手機裡最實用的育兒工具。
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ background: f.bg }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-text mb-1">{f.title}</h3>
              <p className="text-xs text-primary-dark font-semibold mb-2">{f.solves}</p>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why different */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-extrabold text-text text-center mb-3">
          為什麼選擇育見未來？
        </h2>
        <p className="text-sm text-text-muted text-center mb-10">
          不只是另一個育兒 App
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {differentiators.map((d) => (
            <div key={d.title} className="bg-white rounded-2xl p-6 shadow-sm border border-border/50 text-center">
              <div className="text-2xl mb-3">{d.badge}</div>
              <h3 className="font-bold text-text mb-2">{d.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-border/50">
          <h3 className="font-bold text-text text-center mb-6">一般育兒 App vs 育見未來</h3>
          <div className="space-y-4">
            {comparisons.map((c) => (
              <div key={c.ours} className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                <p className="text-sm text-text-muted text-right line-through decoration-text-muted/30">{c.others}</p>
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                  <IconCheck />
                </div>
                <p className="text-sm text-text font-semibold">{c.ours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-extrabold text-text text-center mb-10">
          三步驟，開始科學育兒
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/15 text-text-secondary font-bold text-base flex items-center justify-center mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-bold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-text mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-12">
        <div className="rounded-2xl bg-white border border-border/50 p-10 sm:p-14 text-center shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-text mb-3">
            即將上架 App Store
          </h2>
          <p className="text-text-muted mb-6">
            Coming soon to the App Store
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-text-secondary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <span className="text-text-secondary font-semibold text-sm">敬請期待</span>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="max-w-4xl mx-auto px-6 pb-8">
        <div className="flex items-center justify-center gap-6 text-sm text-text-muted">
          <Link href="/privacy" className="hover:text-primary-dark transition-colors">
            隱私政策
          </Link>
          <span className="text-border">|</span>
          <Link href="/terms" className="hover:text-primary-dark transition-colors">
            服務條款
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ── Data ── */

const painPoints = [
  {
    icon: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01",
    text: "孩子發展到底正不正常？上網查越查越焦慮，每個說法都不一樣。",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
    text: "每天忙到沒時間研究教養方法，想陪孩子成長卻不知道從何開始。",
  },
  {
    icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    text: "買了一堆教養書，但理論太多、實際能做的太少，難以落實到日常生活。",
  },
  {
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    text: "朋友的孩子已經會走路了，我的還不會——到底該不該擔心？",
  },
  {
    icon: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    text: "知道蒙特梭利很好，但不是每個家庭都能負擔專業課程或教具。",
  },
  {
    icon: "M3 3v18h18M18.7 8l-5.1 5.2-2.8-2.7L7 14.3",
    text: "孩子的進步都在腦中，沒有系統化記錄，回頭看什麼都記不清楚。",
  },
];

const features = [
  {
    icon: <IconTrack />,
    bg: "rgba(184,169,201,0.12)",
    title: "科學化發展追蹤",
    solves: "解決：不知道孩子發展是否正常",
    desc: "224 項技能指標，依照國際兒童發展標準設計，涵蓋 0-18 歲八大領域。清楚看見孩子在哪些方面領先、哪些需要多一點關注。",
  },
  {
    icon: <IconMentor />,
    bg: "rgba(154,174,168,0.12)",
    title: "AI 育兒導師",
    solves: "解決：教養問題找不到可靠答案",
    desc: "凌晨三點也能問的育兒顧問。基於蒙特梭利方法，針對你孩子的年齡與發展狀況，給出個人化的具體建議，不是複製貼上的通用回答。",
  },
  {
    icon: <IconTask />,
    bg: "rgba(201,173,124,0.12)",
    title: "每日成長任務",
    solves: "解決：知道理論卻不知怎麼實踐",
    desc: "每天 3 個量身打造的親子活動，用 5-15 分鐘就能完成。把蒙特梭利教育理念融入日常生活，不需要特殊教具，在家就能做。",
  },
  {
    icon: <IconReport />,
    bg: "rgba(138,174,138,0.12)",
    title: "每週成長報告",
    solves: "解決：成長軌跡沒有系統記錄",
    desc: "自動彙整一週的進展，用清晰的圖表呈現孩子的成長趨勢。不只記錄過去，更幫你看見下一步的發展方向。",
  },
];

const differentiators = [
  {
    badge: "0-18",
    title: "完整覆蓋成長全程",
    desc: "大多數育兒 App 只做 0-5 歲。育見未來陪伴孩子從嬰兒到青少年，一個 App 用到大。",
  },
  {
    badge: "AI",
    title: "懂你孩子的 AI",
    desc: "不是通用型 AI，而是了解你孩子年齡、發展階段和手足關係的個人化育兒導師。",
  },
  {
    badge: "5'",
    title: "每天只要 5 分鐘",
    desc: "不需要大量時間投入。每天完成一個小任務，就能持續推動孩子的發展。",
  },
];

const comparisons = [
  { others: "只追蹤身高體重", ours: "追蹤 224 項認知與行為發展指標" },
  { others: "通用教養文章", ours: "AI 依孩子狀況給個人化建議" },
  { others: "被動記錄", ours: "每天主動推薦成長任務" },
  { others: "只做 0-5 歲", ours: "完整涵蓋 0-18 歲八大領域" },
  { others: "英文介面", ours: "繁體中文原生設計" },
];

const stats = [
  { value: "224", label: "技能追蹤項目" },
  { value: "8", label: "發展領域" },
  { value: "0-18", label: "歲全覆蓋" },
];

const steps = [
  {
    title: "建立孩子檔案",
    desc: "輸入孩子的基本資料，系統自動匹配對應的發展階段與適齡技能。",
  },
  {
    title: "每天花 5 分鐘",
    desc: "完成 AI 推薦的每日任務，在日常互動中自然推動孩子成長。",
  },
  {
    title: "看見成長軌跡",
    desc: "每週收到成長報告，清楚掌握進步趨勢，知道下一步該關注什麼。",
  },
];
