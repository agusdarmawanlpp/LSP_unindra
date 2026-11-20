import React, { useRef, useState, useEffect } from 'react';
import { Eraser, Check, PenTool, RotateCcw } from 'lucide-react';

interface SignaturePadProps {
  onSave?: (dataUrl: string) => void;
  initialValue?: string;
  label?: string;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({
  onSave,
  initialValue,
  label = 'Tanda Tangan Digital'
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(Boolean(initialValue));
  const [savedPreview, setSavedPreview] = useState<string | null>(initialValue || null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = canvas.parentElement?.clientWidth || 400;
    canvas.height = 160;

    // Styling lines
    ctx.strokeStyle = '#0D6EFD';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (initialValue && !savedPreview) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = initialValue;
    }
  }, [initialValue]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasSignature(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setSavedPreview(null);
    if (onSave) onSave('');
  };

  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    setSavedPreview(dataUrl);
    if (onSave) onSave(dataUrl);
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-gray-700 flex items-center gap-1.5">
          <PenTool className="w-3.5 h-3.5 text-blue-600" />
          {label}
        </label>
        {savedPreview && (
          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
            <Check className="w-3.5 h-3.5" /> Tersimpan
          </span>
        )}
      </div>

      <div className="relative border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-xl bg-gray-50/50 overflow-hidden transition-colors">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-40 cursor-crosshair touch-none"
        />
        {!hasSignature && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-400 text-xs font-medium gap-2">
            <PenTool className="w-4 h-4 opacity-50" />
            Goreskan tanda tangan digital di area ini
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={clearCanvas}
          className="text-xs font-medium text-gray-600 hover:text-rose-600 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-rose-50 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Bersihkan
        </button>

        <button
          type="button"
          onClick={handleSave}
          disabled={!hasSignature}
          className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 px-4 py-1.5 rounded-lg shadow-sm transition-all"
        >
          <Check className="w-3.5 h-3.5" />
          Simpan Tanda Tangan
        </button>
      </div>
    </div>
  );
};
