import { GraduationCap, Lightbulb, Brain } from "lucide-react";
import programsImage from "@/assets/programs-image.png";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      titleAr: "طفلك هتعلمه ريادة أعمال:",
      titleEn: "Entrepreneurship",
      descAr: "لأنها هتخليه يعرف يحوّل أفكاره لمشاريع صغيرة، ويكبر وهو عنده فكر قيادي وشخصية قوية قادرة تواجه التحديات.",
    },
    {
      icon: Lightbulb,
      titleAr: "طفلك هتعلمه ذكاء إصطناعي:",
      titleEn: "Artificial Intelligence",
      descAr: "لأنه هو المستقبل اللي كله تكنولوجيا. لما يتقنه بدري، هيفهم العالم الجديد ويبقى سابق غيره بخطوات.",
    },
    {
      icon: Brain,
      titleAr: "طفلك هتعلمه برمجة:",
      titleEn: "Programming",
      descAr: "لأن البرمجة مش بس كود... دي لغة المستقبل اللي بتخلي عقله منظم، وتعلمه إزاي يحل المشكلات ويفكر بطريقة مبتكرة.",
    },
  ];

  return (
    <section id="programs" className="py-20 px-4 bg-gradient-to-b from-primary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-ar text-foreground mb-6">
            ماذا نقدم لأطفالكم؟
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-en text-secondary">
            What We Teach Your Children
          </h3>
        </div>

        <div className="grid md:grid-cols-1 gap-12 mb-16">
          {/* Programs Cards centered */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="icon-gradient">
                    <program.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-2xl font-bold font-ar text-foreground">
                      {program.titleAr}
                    </h3>
                    <p className="text-lg font-ar text-muted-foreground leading-relaxed">
                      {program.descAr}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* image removed per design - content centered */}
        </div>
      </div>
    </section>
  );
};

export default Programs;
