import { Clock, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const levels = [
    {
      title: "مبتدئ",
      titleEn: "Beginner",
      sessions: 12,
      duration: 120,
      icon: BookOpen,
      descAr: "المستوى المثالي لبداية رحلة طفلك في عالم البرمجة والذكاء الاصطناعي. سيتعلم المفاهيم الأساسية بطريقة تفاعلية وممتعة، ويبني أول مشاريعه البرمجية البسيطة.",
      descEn: "Perfect level to start your child's journey in programming and AI. Learn basic concepts interactively.",
      color: "from-secondary to-primary",
    },
    {
      title: "متوسط",
      titleEn: "Intermediate",
      sessions: 12,
      duration: 120,
      icon: Clock,
      descAr: "بعد إتقان الأساسيات، ينتقل طفلك إلى مستوى أعمق من المهارات. سيعمل على مشاريع أكثر تعقيداً ويتعلم كيفية دمج البرمجة مع الذكاء الاصطناعي لإنشاء تطبيقات ذكية.",
      descEn: "After mastering basics, move to deeper skills with more complex AI-integrated projects.",
      color: "from-accent to-secondary",
    },
    {
      title: "متقدم",
      titleEn: "Advanced",
      sessions: 12,
      duration: 120,
      icon: Award,
      descAr: "المستوى الأعلى حيث يصبح طفلك قادراً على بناء مشاريع احترافية متكاملة. سيتقن تقنيات متقدمة في الذكاء الاصطناعي والبرمجة، ويكون مستعداً لمواجهة تحديات المستقبل بثقة.",
      descEn: "Highest level where your child builds professional complete projects with advanced AI techniques.",
      color: "from-primary to-accent",
    },
  ];

  return (
    <section id="courses" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold font-ar text-foreground mb-4">
            احجز المسار الكامل الآن
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-en text-secondary mb-6">
            Book the Complete Path Now
          </h3>
          <div className="inline-block bg-gradient-primary px-8 py-4 rounded-2xl">
            <h4 className="text-2xl md:text-3xl font-bold font-ar text-background">
              مسار برمجة الذكاء الاصطناعي AI
            </h4>
            <p className="text-lg font-en text-background/90">
              AI Programming Track
            </p>
          </div>
          <p className="text-xl font-ar text-muted-foreground mt-6">
            يتضمن هذا المسار 3 برامج متكاملة
          </p>
          <p className="text-lg font-en text-muted-foreground">
            This track includes 3 comprehensive programs
          </p>
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
                  <div className={`bg-gradient-to-br ${level.color} p-5 rounded-2xl`}>
                    <level.icon className="w-10 h-10 text-background" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold font-ar text-foreground mb-2">
                  {level.title}
                </h3>
                <p className="text-xl font-en text-secondary mb-6">
                  {level.titleEn}
                </p>

                {/* Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <BookOpen className="w-5 h-5 text-secondary" />
                    <span className="font-ar text-lg">
                      {level.sessions} حصة | {level.sessions} Sessions
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="font-ar text-lg">
                      {level.duration} دقيقة / حصة | {level.duration} min/session
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base font-ar text-muted-foreground leading-relaxed mb-4">
                  {level.descAr}
                </p>
                <p className="text-sm font-en text-muted-foreground leading-relaxed mb-6">
                  {level.descEn}
                </p>

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${level.color} hover:opacity-90 transition-opacity text-background font-bold text-lg h-12 rounded-xl shadow-lg`}
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
