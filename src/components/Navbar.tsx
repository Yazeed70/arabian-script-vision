import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--primary))] flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl font-['Cairo']">نسخ المخطوطات</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-accent transition-colors font-['Cairo']">
              الرئيسية
            </Link>
            <Link to="/upload" className="text-foreground hover:text-accent transition-colors font-['Cairo']">
              رفع مخطوطة
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-accent transition-colors font-['Cairo']">
              المعرض
            </Link>
            <Button variant="default" className="font-['Cairo']">
              تسجيل الدخول
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground hover:text-accent transition-colors font-['Cairo']"
                onClick={() => setIsMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                to="/upload"
                className="text-foreground hover:text-accent transition-colors font-['Cairo']"
                onClick={() => setIsMenuOpen(false)}
              >
                رفع مخطوطة
              </Link>
              <Link
                to="/gallery"
                className="text-foreground hover:text-accent transition-colors font-['Cairo']"
                onClick={() => setIsMenuOpen(false)}
              >
                المعرض
              </Link>
              <Button variant="default" className="font-['Cairo']">
                تسجيل الدخول
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
