export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="w-20 h-20 rounded-3xl bg-primary/15 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🌱</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text mb-4 tracking-tight">
          BloomPath
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-xl mx-auto">
          用科學方法，陪孩子走每一步。<br />
          基於蒙特梭利與正向教養，AI 驅動的兒童發展追蹤 App。
        </p>
        <p className="text-base text-text-muted mt-2">
          Science-based parenting, one step at a time.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-[20px] p-6 shadow-sm"
            >
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="text-lg font-bold text-text mb-1">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="bg-white rounded-[20px] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-2">即將上架 App Store</h2>
          <p className="text-text-secondary">Coming soon to the App Store</p>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    icon: "📊",
    title: "發展追蹤",
    desc: "224 項技能，涵蓋 0-18 歲的八大發展領域，系統化追蹤孩子的成長。",
  },
  {
    icon: "🤖",
    title: "AI 育兒導師",
    desc: "隨時提問教養難題，獲得基於蒙特梭利方法的個人化建議。",
  },
  {
    icon: "📋",
    title: "每日任務",
    desc: "每天 3 個適齡活動建議，輕鬆融入日常生活，培養孩子的獨立性。",
  },
  {
    icon: "📈",
    title: "成長週報",
    desc: "每週自動生成成長報告，掌握孩子的進步趨勢與發展重點。",
  },
];
