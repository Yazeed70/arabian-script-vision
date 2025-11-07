import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Download, 
  Copy, 
  Check,
  Calendar,
  FileText,
  Image as ImageIcon,
  Sparkles
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import manuscriptSample from "@/assets/manuscript-sample.jpg";

export default function ManuscriptDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);
  const [extractedText, setExtractedText] = useState(`بسم الله الرحمن الرحيم

الحمد لله رب العالمين، والصلاة والسلام على أشرف المرسلين، سيدنا محمد وعلى آله وصحبه أجمعين.

أما بعد، فإن هذا الكتاب في علم الفقه والأصول، جمعت فيه ما تيسر من المسائل المهمة والقواعد الأساسية التي يحتاج إليها طالب العلم.

وقد رتبته على أبواب وفصول، مبتدئاً بكتاب الطهارة، ثم الصلاة، ثم الزكاة، وهكذا في سائر أبواب الفقه.

سائلاً المولى عز وجل أن ينفع به، وأن يجعله خالصاً لوجهه الكريم، إنه ولي ذلك والقادر عليه.

وصلى الله على سيدنا محمد وعلى آله وصحبه وسلم.`);

  // Mock data - في التطبيق الحقيقي سيتم جلبها من قاعدة البيانات
  const manuscript = {
    id,
    title: "مخطوط الفقه والأصول",
    date: "2024-01-15",
    status: "مكتمل",
    pages: 45,
    accuracy: 96.5,
    uploadDate: "15 يناير 2024",
    processingTime: "12 دقيقة",
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(extractedText);
    setIsCopied(true);
    toast({
      title: "تم النسخ",
      description: "تم نسخ النص إلى الحافظة",
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([extractedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${manuscript.title}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "تم التحميل",
      description: "تم تحميل الملف بنجاح",
    });
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate("/gallery")}
              className="mb-4 font-['Cairo']"
            >
              <ArrowRight className="ml-2 w-4 h-4" />
              العودة للمعرض
            </Button>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-['Amiri'] mb-2">
                  {manuscript.title}
                </h1>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground font-['Cairo']">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {manuscript.uploadDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    {manuscript.pages} صفحة
                  </span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    دقة {manuscript.accuracy}%
                  </span>
                </div>
              </div>
              
              <Badge className="bg-green-500/10 text-green-600 border-green-500/20 font-['Cairo'] w-fit">
                {manuscript.status}
              </Badge>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Original Image */}
            <Card className="lg:sticky lg:top-24 h-fit">
              <CardHeader>
                <CardTitle className="font-['Cairo'] flex items-center gap-2">
                  <ImageIcon className="w-5 h-5" />
                  المخطوطة الأصلية
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden border-2 border-border">
                  <img
                    src={manuscriptSample}
                    alt="المخطوطة الأصلية"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-bold font-['Cairo'] mb-2">معلومات المعالجة</h4>
                  <div className="space-y-2 text-sm font-['Cairo'] text-muted-foreground">
                    <div className="flex justify-between">
                      <span>وقت المعالجة:</span>
                      <span className="text-foreground">{manuscript.processingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>نسبة الدقة:</span>
                      <span className="text-accent font-bold">{manuscript.accuracy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>عدد الصفحات:</span>
                      <span className="text-foreground">{manuscript.pages}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extracted Text */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-['Cairo'] flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    النص المستخرج
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="font-['Cairo']"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 ml-2" />
                      ) : (
                        <Copy className="w-4 h-4 ml-2" />
                      )}
                      نسخ
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDownload}
                      className="font-['Cairo']"
                    >
                      <Download className="w-4 h-4 ml-2" />
                      تحميل
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="view" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 font-['Cairo']">
                    <TabsTrigger value="view">عرض</TabsTrigger>
                    <TabsTrigger value="edit">تعديل</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="view" className="mt-4">
                    <div className="prose prose-lg max-w-none">
                      <div className="p-6 bg-muted/30 rounded-lg border-2 border-border min-h-[600px] font-['Amiri'] text-lg leading-loose whitespace-pre-wrap">
                        {extractedText}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="edit" className="mt-4">
                    <Textarea
                      value={extractedText}
                      onChange={(e) => setExtractedText(e.target.value)}
                      className="min-h-[600px] font-['Amiri'] text-lg leading-loose resize-none"
                      placeholder="قم بتعديل النص هنا..."
                    />
                    <div className="mt-4 flex justify-end">
                      <Button className="font-['Cairo']">
                        حفظ التعديلات
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
