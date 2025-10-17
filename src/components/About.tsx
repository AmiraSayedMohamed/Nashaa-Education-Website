const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-12 items-center">
          {/* Text Content centered */}
          <div className="space-y-8 animate-fade-in max-w-3xl mx-auto text-center">
            <div className="bg-card rounded-3xl px-8 py-6 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold font-ar text-foreground mb-4 text-center">
                يعني إيه نشأ؟
              </h2>
            </div>

            <div className="space-y-6 font-ar text-lg md:text-xl text-foreground leading-relaxed">
              <p className="bg-card/30 backdrop-blur-sm rounded-2xl p-6">
                كلمة نشأ جاية من معنى البداية والتأسيس... إحنا بنؤمن إن الطفل لما يتعلم صح من بدري، بيكبر ومعاه أدوات تخليه يسبق غيره بخطوات.
              </p>
            </div>

            <div className="bg-card rounded-3xl px-8 py-6 shadow-lg mt-8">
              <h2 className="text-3xl md:text-4xl font-bold font-ar text-foreground mb-4 text-center">
                مين إحنا؟
              </h2>
            </div>

            <div className="space-y-6 font-ar text-lg md:text-xl text-foreground leading-relaxed">
              <p className="bg-card/30 backdrop-blur-sm rounded-2xl p-6">
                إحنا منصة تعليمية للأطفال والمراهقين من 6 لـ 17 سنة، بنقدملهم مهارات المستقبل: البرمجة، الذكاء الاصطناعي، وريادة الأعمال. هدفنا نجهز جيل جديد مبتكر، واثق من نفسه، وعنده فكر قيادي يقدر يغير العالم.
              </p>
            </div>
            {/* Image row - responsive */}
            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6">
              <img src="/1.png" alt="feature-1" className="w-36 md:w-48 h-auto rounded-lg shadow-lg" />
              <img src="/3.png" alt="feature-2" className="w-36 md:w-48 h-auto rounded-lg shadow-lg" />
              <img src="/6.png" alt="feature-3" className="w-36 md:w-48 h-auto rounded-lg shadow-lg" />
            </div>
          </div>

          {/* image removed - text centered for clarity */}
        </div>
      </div>
    </section>
  );
};

export default About;
