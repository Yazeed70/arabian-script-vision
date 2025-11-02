import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-['Cairo'] text-foreground">
              مدعوم بالذكاء الاصطناعي المتقدم
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Amiri'] leading-tight">
            احفظ التراث العربي
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              بدقة الذكاء الاصطناعي
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-['Cairo'] leading-relaxed">
            منصة متطورة تحول المخطوطات العربية القديمة إلى نصوص رقمية دقيقة باستخدام أحدث
            تقنيات التعلم العميق والمعالجة اللغوية الطبيعية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/upload">
              <Button
                size="lg"
                className="group font-['Cairo'] text-lg px-8 py-6 bg-gradient-to-r from-accent to-[hsl(42,85%,48%)] hover:shadow-[--shadow-gold] transition-all duration-300"
              >
                ابدأ النسخ الآن
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="font-['Cairo'] text-lg px-8 py-6 border-2 hover:bg-accent/5"
              >
                استكشف المعرض
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent font-['Cairo']">
                99%+
              </div>
              <div className="text-sm text-muted-foreground font-['Cairo']">دقة النسخ</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent font-['Cairo']">
                10x
              </div>
              <div className="text-sm text-muted-foreground font-['Cairo']">أسرع من اليدوي</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent font-['Cairo']">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-['Cairo']">متاح دائماً</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
