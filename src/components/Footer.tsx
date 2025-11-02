import { BookOpen, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <span className="font-bold text-xl font-['Cairo']">نسخ المخطوطات</span>
            </div>
            <p className="text-primary-foreground/80 font-['Cairo'] leading-relaxed">
              منصة متقدمة لنسخ المخطوطات العربية باستخدام الذكاء الاصطناعي
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg font-['Cairo']">روابط سريعة</h3>
            <ul className="space-y-2 font-['Cairo']">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  عن المنصة
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  كيف يعمل
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  الأسعار
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  المدونة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg font-['Cairo']">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                <span className="font-['Cairo']">info@manuscripts.edu.sa</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-['Cairo']">الجامعة الإسلامية، المدينة المنورة</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 font-['Cairo']">
            © 2025 منصة نسخ المخطوطات. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};
