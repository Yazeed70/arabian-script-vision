import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import patternBg from "@/assets/pattern-bg.png";

export const CTA = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent -z-10" />
      <div 
        className="absolute inset-0 opacity-5 -z-10"
        style={{ 
          backgroundImage: `url(${patternBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold font-['Amiri'] text-white">
          جاهز لبدء رحلة النسخ الرقمي؟
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-['Cairo'] max-w-2xl mx-auto leading-relaxed">
          انضم إلى مئات الباحثين واحفظ التراث العربي للأجيال القادمة
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link to="/upload">
            <Button
              size="lg"
              className="group font-['Cairo'] text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-[--shadow-elegant]"
            >
              ابدأ مجاناً الآن
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="font-['Cairo'] text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10"
          >
            تواصل معنا
          </Button>
        </div>
      </div>
    </section>
  );
};
