import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Download, Eye, Clock, CheckCircle, Loader2, Search } from "lucide-react";
import { useState } from "react";

// Mock data
const manuscripts = [
  {
    id: 1,
    title: "كتاب الطب النبوي",
    date: "2024-01-15",
    status: "completed",
    pages: 120,
    accuracy: 98.5,
  },
  {
    id: 2,
    title: "ديوان شعر أندلسي",
    date: "2024-01-14",
    status: "processing",
    pages: 85,
    accuracy: 0,
  },
  {
    id: 3,
    title: "رسالة في علم الفلك",
    date: "2024-01-13",
    status: "completed",
    pages: 65,
    accuracy: 99.2,
  },
  {
    id: 4,
    title: "مخطوط في الجغرافيا",
    date: "2024-01-12",
    status: "completed",
    pages: 145,
    accuracy: 97.8,
  },
  {
    id: 5,
    title: "كتاب في الفقه",
    date: "2024-01-11",
    status: "pending",
    pages: 200,
    accuracy: 0,
  },
  {
    id: 6,
    title: "مجموعة شعرية",
    date: "2024-01-10",
    status: "completed",
    pages: 75,
    accuracy: 98.9,
  },
];

const statusConfig = {
  completed: {
    label: "مكتمل",
    icon: CheckCircle,
    color: "bg-green-500/10 text-green-700 border-green-200",
  },
  processing: {
    label: "قيد المعالجة",
    icon: Loader2,
    color: "bg-blue-500/10 text-blue-700 border-blue-200",
  },
  pending: {
    label: "في الانتظار",
    icon: Clock,
    color: "bg-yellow-500/10 text-yellow-700 border-yellow-200",
  },
};

export default function Gallery() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredManuscripts = manuscripts.filter((ms) => {
    const matchesSearch = ms.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || ms.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Amiri']">
              معرض المخطوطات
            </h1>
            <p className="text-lg text-muted-foreground font-['Cairo']">
              تصفح جميع المخطوطات المعالجة ونتائجها
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="ابحث في المخطوطات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 font-['Cairo']"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={filterStatus === "all" ? "default" : "outline"}
                  onClick={() => setFilterStatus("all")}
                  className="font-['Cairo']"
                >
                  الكل
                </Button>
                <Button
                  variant={filterStatus === "completed" ? "default" : "outline"}
                  onClick={() => setFilterStatus("completed")}
                  className="font-['Cairo']"
                >
                  مكتمل
                </Button>
                <Button
                  variant={filterStatus === "processing" ? "default" : "outline"}
                  onClick={() => setFilterStatus("processing")}
                  className="font-['Cairo']"
                >
                  قيد المعالجة
                </Button>
              </div>
            </div>
          </div>

          {/* Manuscripts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredManuscripts.map((manuscript) => {
              const status = statusConfig[manuscript.status as keyof typeof statusConfig];
              const StatusIcon = status.icon;

              return (
                <Card
                  key={manuscript.id}
                  className="group hover:shadow-[--shadow-elegant] transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <FileText className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <Badge className={`${status.color} font-['Cairo']`}>
                        <StatusIcon className={`w-3 h-3 ml-1 ${manuscript.status === 'processing' ? 'animate-spin' : ''}`} />
                        {status.label}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold font-['Cairo'] line-clamp-2">
                      {manuscript.title}
                    </h3>

                    {/* Info */}
                    <div className="space-y-2 text-sm text-muted-foreground font-['Cairo']">
                      <div className="flex justify-between">
                        <span>عدد الصفحات:</span>
                        <span className="font-semibold text-foreground">
                          {manuscript.pages}
                        </span>
                      </div>
                      {manuscript.status === "completed" && (
                        <div className="flex justify-between">
                          <span>الدقة:</span>
                          <span className="font-semibold text-accent">
                            {manuscript.accuracy}%
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>التاريخ:</span>
                        <span className="font-semibold text-foreground">
                          {manuscript.date}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    {manuscript.status === "completed" && (
                      <div className="flex gap-2 pt-2">
                        <Button variant="outline" size="sm" className="flex-1 font-['Cairo']">
                          <Eye className="w-4 h-4 ml-2" />
                          عرض
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1 font-['Cairo']">
                          <Download className="w-4 h-4 ml-2" />
                          تحميل
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredManuscripts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-['Cairo'] text-lg">
                لم يتم العثور على مخطوطات
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
