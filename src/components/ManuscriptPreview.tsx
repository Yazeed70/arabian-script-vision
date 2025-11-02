import { Card, CardContent } from "@/components/ui/card";
import manuscriptSample from "@/assets/manuscript-sample.jpg";

export const ManuscriptPreview = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <Card className="overflow-hidden shadow-[--shadow-elegant] hover:shadow-[--shadow-gold] transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-0">
                <img
                  src={manuscriptSample}
                  alt="عينة من مخطوط عربي قديم"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-['Amiri']">
              دقة استثنائية في النسخ
            </h2>
            <p className="text-lg text-muted-foreground font-['Cairo'] leading-relaxed">
              نستخدم أحدث تقنيات التعلم العميق المدربة على آلاف المخطوطات العربية
              التاريخية لضمان أعلى دقة في التعرف على النصوص، حتى مع المخطوطات القديمة
              والمتضررة.
            </p>
            <ul className="space-y-4 font-['Cairo']">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">
                  معالجة ذكية للصور لتحسين جودة المخطوطات المتضررة
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">
                  تصحيح لغوي تلقائي باستخدام معالجة اللغة الطبيعية
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
                <span className="text-foreground">
                  دعم مختلف أنواع الخطوط العربية التاريخية
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
