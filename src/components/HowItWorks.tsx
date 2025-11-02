import { Upload, Cpu, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "ارفع المخطوطة",
    description: "اسحب وأفلت ملف المخطوطة أو حدده من جهازك",
  },
  {
    icon: Cpu,
    number: "02",
    title: "المعالجة الذكية",
    description: "يقوم الذكاء الاصطناعي بمعالجة وتحليل المخطوطة تلقائياً",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "احصل على النص",
    description: "راجع وعدّل النص الرقمي الدقيق وقم بتحميله",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Amiri']">
            كيف يعمل النظام؟
          </h2>
          <p className="text-lg text-muted-foreground font-['Cairo'] max-w-2xl mx-auto">
            ثلاث خطوات بسيطة فقط لتحويل مخطوطتك إلى نص رقمي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/4 right-[16%] left-[16%] h-0.5 bg-gradient-to-l from-accent via-primary to-accent opacity-20" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative text-center space-y-6 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 right-1/2 translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white font-bold text-xl font-['Cairo'] shadow-[--shadow-gold]">
                {step.number}
              </div>

              {/* Icon Circle */}
              <div className="pt-12 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center border-2 border-accent/20 hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold font-['Cairo']">{step.title}</h3>
                <p className="text-muted-foreground font-['Cairo'] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
