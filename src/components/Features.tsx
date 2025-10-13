import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";
import entrepreneurs from "@/assets/entrepreneurs-image.png";
import futureImage from "@/assets/future-image.png";
import learningImage from "@/assets/learning-image.png";

const Features = () => {
  const features = [
    { image: feature1, alt: "Special Smart Calculator Projects" },
    { image: feature2, alt: "Games and AI ChatBot Learning" },
    { image: feature3, alt: "Problem Solving Skills" },
  ];

  const learningFeatures = [
    { image: entrepreneurs, alt: "Teaching Entrepreneurship" },
    { image: futureImage, alt: "Learning About the Future" },
    { image: learningImage, alt: "Learning Shapes Their Future" },
  ];

  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Interactive Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={feature.image}
                alt={feature.alt}
                className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="space-y-8">
          <div className="text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold font-ar text-accent mb-4">
              رحلة التعلم مع نشأ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold font-en text-secondary">
              Learning Journey with NASHA
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-[0_0_30px_rgba(69,195,238,0.5)] transition-all duration-500 animate-slide-up hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img
                  src={feature.image}
                  alt={feature.alt}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
