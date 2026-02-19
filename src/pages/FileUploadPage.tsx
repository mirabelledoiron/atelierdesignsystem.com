import StorybookLayout from "@/components/StorybookLayout";
import PageHeader from "@/components/PageHeader";
import ComponentSection from "@/components/ComponentSection";
import DocBlock from "@/components/DocBlock";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, File, X, Image } from "lucide-react";

export default function FileUploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (fileList: FileList | null) => {
    if (fileList) setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  const removeFile = (index: number) => setFiles((prev) => prev.filter((_, i) => i !== index));

  return (
    <StorybookLayout>
      <PageHeader title="File Upload" subtitle="Drag-and-drop and click-to-upload file input patterns." />

      <DocBlock
        usage="Use FileUpload for collecting files from users. The drag-and-drop zone provides a large target area, while button upload works for simpler use cases."
        doItems={["Show accepted file types and size limits", "Display file names and sizes after selection", "Allow removing individual files from the list"]}
        dontItems={["Don't auto-upload without user confirmation", "Avoid accepting all file types without validation"]}
        apiRows={[
          { prop: "accept", type: "string", desc: "Accepted file types (e.g., 'image/*,.pdf')" },
          { prop: "multiple", type: "boolean", default: "false", desc: "Allow selecting multiple files" },
          { prop: "maxSize", type: "number", desc: "Maximum file size in bytes" },
          { prop: "onFilesSelected", type: "(files: File[]) => void", desc: "Callback with selected files" },
        ]}
      />

      <ComponentSection title="Drag & Drop Zone" description="Drop files or click to browse.">
        <div
          className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 transition-colors cursor-pointer ${
            dragOver ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
          onClick={() => inputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-muted-foreground" />
          <div className="text-center">
            <p className="text-sm font-medium text-foreground">Drop files here or click to browse</p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG, PDF up to 10MB</p>
          </div>
          <input ref={inputRef} type="file" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)} />
        </div>

        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border px-3 py-2">
                {file.type.startsWith("image/") ? <Image className="w-4 h-4 text-muted-foreground" /> : <File className="w-4 h-4 text-muted-foreground" />}
                <span className="text-sm text-foreground flex-1 truncate">{file.name}</span>
                <span className="text-xs text-muted-foreground">{(file.size / 1024).toFixed(1)}KB</span>
                <button onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive"><X className="w-4 h-4" /></button>
              </div>
            ))}
          </div>
        )}
      </ComponentSection>

      <ComponentSection title="Button Upload" description="Simple button-style file trigger.">
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => inputRef.current?.click()}>
            <Upload className="w-4 h-4 mr-2" /> Choose File
          </Button>
          <span className="text-sm text-muted-foreground">No file chosen</span>
        </div>
      </ComponentSection>
    </StorybookLayout>
  );
}
