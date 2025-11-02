import { Brain, FileSearch, Languages, Shield, Sparkles, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "ذكاء اصطناعي متقدم",
    description: "نماذج تعلم عميق مدربة على آلاف المخطوطات العربية التاريخية",
  },
  {
    icon: FileSearch,
    title: "معالجة الصور الذكية",
    description: "تحسين جودة الصور وإزالة التشويش تلقائياً قبل المعالجة",
  },
  {
    icon: Languages,
    title: "تصحيح لغوي دقيق",
    description: "معالجة لغوية طبيعية لتصحيح الأخطاء وتحسين دقة النص",
  },
  {
    icon: Zap,
    title: "سرعة فائقة",
    description: "معالجة المخطوطات في دقائق بدلاً من ساعات العمل اليدوي",
  },
  {
    icon: Shield,
    title: "حماية وأمان",
    description: "تشفير شامل لحماية مخطوطاتك الثمينة وبياناتك الحساسة",
  },
  {
    icon: Sparkles,
    title: "نتائج احترافية",
    description: "نصوص رقمية قابلة للبحث والتعديل بجودة عالية",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-['Amiri']">
            مميزات استثنائية
          </h2>
          <p className="text-lg text-muted-foreground font-['Cairo'] max-w-2xl mx-auto">
            تقنيات حديثة ومتطورة لخدمة التراث العربي
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-[--shadow-elegant] transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold font-['Cairo']">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-['Cairo'] leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
