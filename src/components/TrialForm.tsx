import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1egEG3U1Zs4NXXhO9PFh2Ni2umdqw8ZkWZIR12HGIIxo/edit";

const TrialForm = () => {
  return (
    <section id="free-trial-form" className="py-20 px-4 bg-gradient-to-b from-background to-primary">
      <div className="max-w-3xl mx-auto">
        {/* CTA Heading with Arrow */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-ar text-accent mb-6">
            جرب حصة مجانية!
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-en text-secondary mb-8">
            Try a Free Session!
          </h3>
          <div className="flex justify-center animate-bounce">
            <ArrowDown className="w-12 h-12 text-accent" />
          </div>
        </div>

        {/* Single CTA to Google Form */}
        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up text-center">
          <p className="text-lg font-ar text-foreground mb-6">
            للتسجيل في الحصة المجانية، اضغط على الزر للانتقال إلى نموذج التسجيل.
          </p>

          <a href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
            <Button
              className="w-full h-16 text-xl font-bold bg-gradient-primary hover:opacity-90 transition-opacity rounded-xl shadow-lg hover:shadow-xl"
            >
              <span className="font-ar">سجل الآن</span>
              <span className="mx-2">|</span>
              <span className="font-en">Register Now</span>
            </Button>
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-4 animate-fade-in">
          <p className="text-lg font-ar text-muted-foreground">
            سنتواصل معك خلال 24 ساعة لتحديد موعد الحصة المجانية
          </p>
          <p className="text-lg font-en text-muted-foreground">
            We'll contact you within 24 hours to schedule your free session
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrialForm;
