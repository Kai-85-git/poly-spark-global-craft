
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

const ConversionHistory = () => {
  const { data: conversions, isLoading, error } = useQuery({
    queryKey: ['image-conversions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('image_conversions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return (
      <div className="flex justify-center p-4">
        <Loader2 className="h-6 w-6 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertDescription>
          エラーが発生しました。再度お試しください。
        </AlertDescription>
      </Alert>
    );
  }

  if (!conversions?.length) {
    return (
      <div className="text-center text-muted-foreground p-4">
        変換履歴がありません
      </div>
    );
  }

  return (
    <ScrollArea className="h-[400px]">
      <div className="space-y-4">
        {conversions.map((conversion) => (
          <div
            key={conversion.id}
            className="flex items-center gap-4 p-4 rounded-lg border"
          >
            <div className="h-16 w-16 bg-muted rounded-md flex items-center justify-center">
              <img
                src={`https://zbaxvfyozlsqlrvnrdtd.supabase.co/storage/v1/object/public/image-localization/${conversion.original_image}`}
                alt="Original"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {conversion.original_image}
              </p>
              <p className="text-sm text-muted-foreground">
                {new Date(conversion.created_at).toLocaleString()}
              </p>
            </div>
            <div className="text-sm">
              {conversion.status === 'pending' ? (
                <span className="text-yellow-600">処理中</span>
              ) : conversion.status === 'completed' ? (
                <span className="text-green-600">完了</span>
              ) : (
                <span className="text-red-600">エラー</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

export default ConversionHistory;
