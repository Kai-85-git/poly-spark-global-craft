
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

const ImageUploader = () => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      setUploading(true);
      setProgress(0);

      // Upload to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError, data } = await supabase.storage
        .from('image-localization')
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Create conversion record
      const { error: dbError } = await supabase
        .from('image_conversions')
        .insert([
          {
            original_image: data.path,
            status: 'pending'
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      toast.success('画像がアップロードされました');
      setProgress(100);
    } catch (error: any) {
      toast.error('エラーが発生しました: ' + error.message);
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.psd']
    },
    maxFiles: 1
  });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
          ${uploading ? 'pointer-events-none opacity-50' : 'hover:border-primary hover:bg-primary/5'}`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          <Upload className="h-8 w-8 text-muted-foreground" />
          {isDragActive ? (
            <p>ドロップしてアップロード</p>
          ) : (
            <>
              <p className="text-muted-foreground">
                クリックまたはドラッグ＆ドロップで
                <br />
                画像をアップロード
              </p>
              <p className="text-xs text-muted-foreground">
                対応フォーマット: PSD, PNG, JPEG
              </p>
            </>
          )}
        </div>
      </div>

      {uploading && (
        <div className="space-y-2">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-center text-muted-foreground">
            アップロード中...
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
