import { BookOpen, Users, FileCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    value: "1000+",
    label: "مخطوطة معالجة",
  },
  {
    icon: Users,
    value: "500+",
    label: "باحث نشط",
  },
  {
    icon: FileCheck,
    value: "99.5%",
    label: "معدل الدقة",
  },
  {
    icon: Clock,
    value: "5 دقائق",
    label: "متوسط وقت المعالجة",
  },
];

export const Stats = () => {
  return (
    <section className="py-16 px-4 border-y border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center space-y-3 group hover:scale-105 transition-transform"
            >
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-accent font-['Cairo']">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-['Cairo']">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
