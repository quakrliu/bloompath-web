import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744] via-[#243352] to-cream" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,169,201,0.15),transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-24 sm:pb-32 text-center">
          {/* Logo */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-8 drop-shadow-2xl">
            <Image
              src="/logo.png"
              alt="BloomPath Logo"
              width={176}
              height={176}
              className="rounded-[32px]"
              priority
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2 tracking-tight">
            BloomPath
          </h1>
          <p className="text-lg sm:text-xl text-white/60 mb-6">
            綻放之路
          </p>

          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-lg mx-auto mb-3">
            用科學方法，陪孩子走每一步。
          </p>
          <p className="text-base sm:text-lg text-white/50 max-w-lg mx-auto">
            基於蒙特梭利與正向教養，AI 驅動的兒童發展追蹤 App
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 -mt-8 pb-16 relative z-10">
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-xl"
                style={{ background: f.color }}
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary-dark mb-1">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-extrabold text-text text-center mb-10">
          三步驟開始
        </h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-10 h-10 rounded-full bg-primary/15 text-primary-dark font-extrabold text-lg flex items-center justify-center mx-auto mb-4">
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

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2744] to-[#2a3d5f] p-10 sm:p-14 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(184,169,201,0.2),transparent_60%)]" />
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              即將上架 App Store
            </h2>
            <p className="text-white/60 mb-6">
              Coming soon to the App Store
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <svg className="w-5 h-5 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-white/90 font-semibold text-sm">敬請期待</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "📊",
    color: "rgba(184,169,201,0.15)",
    title: "發展追蹤",
    desc: "224 項技能，涵蓋 0-18 歲的八大發展領域，系統化追蹤孩子的成長里程碑。",
  },
  {
    icon: "🧠",
    color: "rgba(154,174,168,0.15)",
    title: "AI 育兒導師",
    desc: "隨時提問教養難題，獲得基於蒙特梭利方法的個人化建議與指導。",
  },
  {
    icon: "✅",
    color: "rgba(201,173,124,0.15)",
    title: "每日任務",
    desc: "每天 3 個適齡活動建議，輕鬆融入日常生活，培養孩子的獨立性與能力。",
  },
  {
    icon: "📈",
    color: "rgba(138,174,138,0.15)",
    title: "成長週報",
    desc: "每週自動生成成長報告，掌握孩子的進步趨勢與下一步發展重點。",
  },
];

const stats = [
  { value: "224", label: "技能追蹤項目" },
  { value: "8", label: "發展領域" },
  { value: "0-18", label: "歲全覆蓋" },
];

const steps = [
  {
    title: "建立孩子檔案",
    desc: "輸入孩子的基本資料，系統自動匹配對應的發展階段。",
  },
  {
    title: "追蹤每日成長",
    desc: "完成 AI 推薦的每日任務，記錄技能進展與里程碑。",
  },
  {
    title: "查看成長報告",
    desc: "每週收到詳細的成長分析，了解孩子的發展方向。",
  },
];
