import React, { useState, useRef } from 'react';
import { Upload, FileText, CheckCircle2, X, Eye, File, ArrowUpRight } from 'lucide-react';

interface DropzoneProps {
  label: string;
  accept?: string;
  maxSizeMB?: number;
  initialFileName?: string;
  onFileSelect?: (file: File | null) => void;
  required?: boolean;
}

export const Dropzone: React.FC<DropzoneProps> = ({
  label,
  accept = '.pdf,.png,.jpg,.jpeg',
  maxSizeMB = 5,
  initialFileName,
  onFileSelect,
  required = false
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(initialFileName || null);
  const [progress, setProgress] = useState<number>(initialFileName ? 100 : 0);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    setProgress(10);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 25;
      });
    }, 150);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`Ukuran file melebihi batas maksimum ${maxSizeMB} MB`);
      return;
    }
    setSelectedFile(file);
    setFileName(file.name);
    simulateUpload(file);
    if (onFileSelect) onFileSelect(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    setFileName(null);
    setProgress(0);
    setIsUploading(false);
    if (inputRef.current) inputRef.current.value = '';
    if (onFileSelect) onFileSelect(null);
  };

  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-gray-700">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>

      {!fileName ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
            dragActive
              ? 'border-blue-500 bg-blue-50/80 scale-[1.01]'
              : 'border-gray-300 hover:border-blue-400 bg-gray-50/50 hover:bg-gray-50'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <div className="flex flex-col items-center justify-center gap-1.5">
            <div className="w-10 h-10 rounded-full bg-blue-100/80 text-blue-600 flex items-center justify-center">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-800">
                Tarik & Lepas file ke sini, atau <span className="text-blue-600 underline">Pilih File</span>
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Format: PDF, PNG, JPG (Maks. {maxSizeMB} MB)
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-xl p-3 bg-white shadow-sm space-y-2">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-gray-800 truncate">{fileName}</p>
                <p className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Berhasil Diunggah
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => alert(`Pratinjau dokumen: ${fileName}`)}
                className="p-1.5 text-gray-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                title="Pratinjau Dokumen"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={removeFile}
                className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                title="Hapus File"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          {isUploading && (
            <div className="space-y-1 pt-1">
              <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-blue-600 h-full rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-gray-500 text-right">Mengunggah... {progress}%</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
