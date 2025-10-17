import { Clock, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const levels = [
    {
      title: "مغامرة البرمجة والذكاء الاصطناعي مع PictoBlox",
      sessions: 12,
      duration: 120,
      icon: BookOpen,
      descAr:
        "استعد لطفلك لرحلة ممتعة في عالم البرمجة والذكاء الاصطناعي! في هذه الدورة، سيتعلم الأطفال تصميم تطبيقات تفاعلية، تحريك شخصيات، وبرمجة ألعاب ومشاريع ممتعة باستخدام PictoBlox بطريقة سهلة ومرئية. الدورة تنمي التفكير الإبداعي، مهارات حل المشكلات، وتمنح الطفل شعور الإنجاز عند عرض مشاريعه للأهل.",
      features: [
        "تعلم البرمجة بطريقة مرئية ممتعة للأطفال.",
        "مشاريع عملية تعزز الثقة بالنفس والإبداع.",
        "تطوير مهارات منطقية وحل المشكلات أثناء اللعب.",
        "بيئة تعليمية آمنة وداعمة للطفل.",
      ],
      age: "8 - 11 سنة",
      color: "from-secondary to-primary",
    },
    {
      title: "أساسيات البايثون بطريقة ممتعة",
      sessions: 12,
      duration: 120,
      icon: Clock,
      descAr:
        "دورة صممت خصيصًا للمراهقين ليتعرفوا على لغة البرمجة بايثون من خلال مشاريع ممتعة وعملية. سيتعلم الطالب كتابة البرامج البسيطة، استخدام المتغيرات، الحلقات والدوال بطريقة تفاعلية.",
      features: [
        "تعلم لغة بايثون بطريقة ممتعة وسهلة.",
        "مشاريع عملية مثل ألعاب صغيرة وأدوات مفيدة.",
        "تحضير للدورات المتقدمة في الذكاء الاصطناعي وعلوم البيانات.",
        "تعزيز مهارات التفكير المنطقي والاستقلالية لدى المراهقين.",
      ],
      age: "12 - 15 سنة",
      color: "from-accent to-secondary",
    },
    {
      title: "رحلة الذكاء الاصطناعي للمبدعين",
      sessions: 12,
      duration: 120,
      icon: Award,
      descAr:
        "دورة متقدمة تمنح المراهقين فرصة الغوص في عالم الذكاء الاصطناعي الحقيقي. سيتعلم الطالب بناء نماذج تعلم الآلة، تحليل البيانات، وتصميم مشاريع حقيقية مثل تصنيف الصور أو النصوص، وأنظمة التوصية البسيطة.",
      features: [
        "تعلم الذكاء الاصطناعي بطريقة ممتعة وتطبيقية.",
        "بناء مشروع عملي جاهز للعرض في محفظة الطالب.",
        "تطوير مهارات تحليل البيانات والتفكير النقدي.",
        "تحضير لدراسة علوم البيانات أو هندسة الذكاء الاصطناعي.",
      ],
      age: "15 - 18 سنة",
      color: "from-primary to-accent",
    },
    {
      title: "مغامرة ريادة الأعمال للطفل الصغير",
      sessions: 12,
      duration: 120,
      icon: BookOpen,
      descAr:
        "في هذه الدورة، سيتعلم الطفل كيف يحوّل أفكاره المبدعة إلى مشاريع صغيرة ملموسة! سيكتشف الأطفال خطوات توليد الفكرة، تصميم منتج مصغر، والتخطيط البسيط، مع تعلم مهارات العرض والتعاون مع زملائهم.",
      features: [
        "تعلم خطوات بناء الفكرة وتحويلها إلى مشروع صغير.",
        "تعزيز مهارات العرض، التعاون، وحل المشكلات.",
        "مشاريع ممتعة تشجع الإبداع والمسؤولية.",
        "تنمية روح المبادرة والابتكار لدى الطفل.",
      ],
      age: "8 - 11 سنة",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          {/* Header image from public/2.png */}
          <div className="mx-auto mb-6">
            <img src="/2.png" alt="header" className="mx-auto w-40 md:w-56 h-auto" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-ar text-foreground mb-4">
            احجز المسار الكامل الآن
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-en text-secondary mb-6">
            Book the Complete Path Now
          </h3>
          {/* AI track header removed as requested */}
        </div>

        {/* Levels */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {levels.map((level, index) => (
            <div
              key={index}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${level.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
              
              <div className="relative bg-card rounded-3xl p-8 shadow-2xl hover:shadow-[0_0_40px_rgba(69,195,238,0.4)] transition-all duration-500 hover:scale-105">
                {/* Icon */}
                <div className="mb-6 inline-block">
                  {/* icon background: use primary gradient for the "مغامرة البرمجة" card, otherwise use level color */}
                  <div className={`bg-gradient-primary p-5 rounded-2xl`}>
                    <level.icon className="w-10 h-10 text-background" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold font-ar text-foreground mb-6">
                  {level.title}
                </h3>

                {/* Details */}
                <div className="space-y-4 mb-4">
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-secondary" />
                      <span className="font-ar text-lg">{level.sessions} حصة</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="font-ar text-lg">{level.duration} دقيقة / حصة</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-ar text-lg text-secondary">الفئة العمرية:</span>
                      <span className="font-ar text-lg">{level.age}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base font-ar text-muted-foreground leading-relaxed mb-4">
                  {level.descAr}
                </p>

                {/* Features list */}
                {level.features && (
                  <ul className="list-disc list-inside space-y-2 mb-6 text-base font-ar text-muted-foreground">
                    {level.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-primary hover:opacity-90 transition-opacity text-background font-bold text-lg h-12 rounded-xl shadow-lg`}
                  onClick={() => {
                    const formSection = document.getElementById("free-trial-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span className="font-ar">المزيد عن المستوى</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-background font-bold text-2xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-[0_0_40px_rgba(69,195,238,0.5)]"
            onClick={() => {
              const formSection = document.getElementById("free-trial-form");
              formSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="font-ar">احجز المسار الكامل الآن</span>
            <span className="mx-3">|</span>
            <span className="font-en">Book Complete Track Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
