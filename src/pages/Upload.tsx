import { useState, useCallback } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload as UploadIcon, FileImage, X, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Upload() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  }, []);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (files.length === 0) {
      toast({
        title: "تنبيه",
        description: "الرجاء رفع مخطوطة واحدة على الأقل",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "نجح!",
        description: "تمت معالجة المخطوطات بنجاح",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar />
      
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-['Amiri']">
              رفع المخطوطات
            </h1>
            <p className="text-lg text-muted-foreground font-['Cairo']">
              ارفع مخطوطاتك وابدأ عملية النسخ الآلي بالذكاء الاصطناعي
            </p>
          </div>

          {/* Upload Area */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  border-2 border-dashed rounded-lg p-12 text-center transition-all
                  ${isDragging 
                    ? "border-accent bg-accent/5 scale-[1.02]" 
                    : "border-border hover:border-accent/50"
                  }
                `}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <UploadIcon className="w-8 h-8 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-bold font-['Cairo']">
                      اسحب وأفلت الملفات هنا
                    </p>
                    <p className="text-sm text-muted-foreground font-['Cairo']">
                      أو انقر لاختيار الملفات من جهازك
                    </p>
                  </div>
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    onChange={handleFileInput}
                    className="hidden"
                    id="file-input"
                  />
                  <label htmlFor="file-input">
                    <Button variant="outline" className="font-['Cairo']" asChild>
                      <span>اختر الملفات</span>
                    </Button>
                  </label>
                  <p className="text-xs text-muted-foreground font-['Cairo']">
                    الصيغ المدعومة: PDF, JPG, PNG (حتى 10 ملفات)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Files List */}
          {files.length > 0 && (
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-['Cairo'] mb-4">
                  الملفات المرفوعة ({files.length})
                </h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <FileImage className="w-8 h-8 text-accent flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium font-['Cairo'] truncate">
                          {file.name}
                        </p>
                        <p className="text-sm text-muted-foreground font-['Cairo']">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        className="flex-shrink-0"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Process Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleProcess}
              disabled={isProcessing || files.length === 0}
              className="font-['Cairo'] text-lg px-12 py-6 bg-gradient-to-r from-accent to-[hsl(42,85%,48%)]"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="ml-2 animate-spin" />
                  جاري المعالجة...
                </>
              ) : (
                <>
                  <CheckCircle className="ml-2" />
                  بدء المعالجة
                </>
              )}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
