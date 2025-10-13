import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowDown } from "lucide-react";
import { toast } from "sonner";

const TrialForm = () => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.childName || !formData.age || !formData.phone) {
      toast.error("من فضلك املأ جميع البيانات / Please fill all fields");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast.success("تم التسجيل بنجاح! سنتواصل معك قريباً / Registration successful! We'll contact you soon");
    
    // Reset form
    setFormData({ childName: "", age: "", phone: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

        {/* Form */}
        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Child Name */}
            <div className="space-y-3">
              <Label htmlFor="childName" className="text-xl font-ar text-foreground">
                اسم الطفل / Child Name
              </Label>
              <Input
                id="childName"
                name="childName"
                type="text"
                value={formData.childName}
                onChange={handleChange}
                placeholder="أدخل اسم الطفل / Enter child's name"
                className="h-14 text-lg bg-input border-border focus:border-secondary focus:ring-secondary rounded-xl"
              />
            </div>

            {/* Age */}
            <div className="space-y-3">
              <Label htmlFor="age" className="text-xl font-ar text-foreground">
                العمر / Age
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                min="6"
                max="17"
                value={formData.age}
                onChange={handleChange}
                placeholder="أدخل العمر (6-17) / Enter age (6-17)"
                className="h-14 text-lg bg-input border-border focus:border-secondary focus:ring-secondary rounded-xl"
              />
            </div>

            {/* Phone */}
            <div className="space-y-3">
              <Label htmlFor="phone" className="text-xl font-ar text-foreground">
                رقم الهاتف / Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="أدخل رقم الهاتف / Enter phone number"
                className="h-14 text-lg bg-input border-border focus:border-secondary focus:ring-secondary rounded-xl"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-16 text-xl font-bold bg-gradient-primary hover:opacity-90 transition-opacity rounded-xl shadow-lg hover:shadow-xl"
            >
              <span className="font-ar">سجل الآن</span>
              <span className="mx-2">|</span>
              <span className="font-en">Register Now</span>
            </Button>
          </form>
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
