import { Target, Users, HeartHandshake } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      titleAr: "التدريب على مشاريع عملية",
      titleEn: "Practical Project Training",
      descAr: "نؤمن بأن التعلم الحقيقي يحدث عند التطبيق. لذلك، نقدم لأطفالكم تدريباً عملياً على مشاريع حقيقية بطريقة ممتعة ومبسطة تناسب أعمارهم. كل طفل يبني مشروعه الخاص خطوة بخطوة، من الفكرة إلى التنفيذ، مما يعزز ثقته بنفسه ويطور مهاراته الإبداعية.",
      descEn: "We believe real learning happens through application. We provide hands-on training on real projects in a fun, age-appropriate way.",
    },
    {
      icon: Users,
      titleAr: "مدربين متخصصين في تعليم الأطفال",
      titleEn: "Specialized Children's Trainers",
      descAr: "فريقنا من المدربين ليسوا فقط خبراء في مجالاتهم، بل هم متخصصون في التعامل مع الأطفال والمراهقين. يستخدمون أساليب تعليمية تفاعلية حديثة تجعل التعلم ممتعاً ومشوقاً، مع مراعاة الفروق الفردية بين الأطفال وضمان أن كل طفل يتلقى الاهتمام الذي يستحقه.",
      descEn: "Our trainers are not just experts in their fields, but specialists in teaching children using interactive modern methods.",
    },
    {
      icon: HeartHandshake,
      titleAr: "متابعة مستمرة مع الآباء",
      titleEn: "Continuous Parent Follow-up",
      descAr: "نحن نؤمن بأهمية مشاركة الأسرة في رحلة التعلم. لذلك نوفر متابعة دورية مع أولياء الأمور لإطلاعهم على تقدم أطفالهم، نقاط قوتهم، والمهارات التي يكتسبونها. كما نقدم توصيات مخصصة لكل طفل لمساعدته على تحقيق أقصى استفادة من البرنامج التعليمي.",
      descEn: "We provide regular updates to parents about their children's progress, strengths, and acquired skills.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold font-ar text-accent mb-4">
            لماذا تختار نشأ؟
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-en text-secondary">
            Why Choose NASHA?
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 inline-block">
                <div className="icon-gradient">
                  <feature.icon className="w-12 h-12" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-ar text-foreground mb-3">
                {feature.titleAr}
              </h3>
              <p className="text-base font-en text-secondary mb-4">
                {feature.titleEn}
              </p>
              
              <p className="text-lg font-ar text-muted-foreground leading-relaxed mb-4">
                {feature.descAr}
              </p>
              <p className="text-sm font-en text-muted-foreground leading-relaxed">
                {feature.descEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
