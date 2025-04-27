
import React from 'react';
import AppLayout from '@/components/AppLayout';
import ImageUploader from '@/components/ImageLocalization/ImageUploader';
import ConversionHistory from '@/components/ImageLocalization/ConversionHistory';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/components/ui/sonner';

const ImageLocalization = () => {
  return (
    <AppLayout title="画像ローカライゼーション">
      <div className="container mx-auto space-y-6">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">画像ローカライゼーション</h2>
          <p className="text-muted-foreground">
            画像のテキストを多言語に変換し、SNSに最適なサイズで出力します。
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>画像アップロード</CardTitle>
              <CardDescription>
                PSD、PNG、JPEGファイルをアップロードできます。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploader />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>変換履歴</CardTitle>
              <CardDescription>
                過去の変換履歴を確認できます。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ConversionHistory />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default ImageLocalization;
