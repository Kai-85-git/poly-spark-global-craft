
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

const Settings = () => {
  const { data: settings, isLoading } = useQuery({
    queryKey: ['user-settings'],
    queryFn: async () => {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session?.user) throw new Error('ログインが必要です');

      const { data, error } = await supabase
        .from('user_settings')
        .select('*')
        .eq('user_id', session.session.user.id)
        .single();
      
      if (error) throw error;
      return data;
    }
  });

  const handleUpdateSetting = async (key: string, value: any) => {
    try {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session?.user) {
        toast.error('ログインが必要です');
        return;
      }

      const { error } = await supabase
        .from('user_settings')
        .upsert({
          user_id: session.session.user.id,
          [key]: value
        });

      if (error) throw error;
      toast.success('設定が更新されました');
    } catch (error: any) {
      toast.error('エラーが発生しました: ' + error.message);
    }
  };

  if (isLoading) {
    return <AppLayout title="設定"><div>読み込み中...</div></AppLayout>;
  }

  return (
    <AppLayout title="設定">
      <div className="container mx-auto space-y-6">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">設定</h2>
          <p className="text-muted-foreground">
            アプリケーションの設定を管理します。
          </p>
        </section>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>一般設定</CardTitle>
              <CardDescription>
                アプリケーションの基本設定
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>ダークモード</Label>
                  <p className="text-sm text-muted-foreground">
                    ダークモードを有効にする
                  </p>
                </div>
                <Switch
                  checked={settings?.theme === 'dark'}
                  onCheckedChange={(checked) => 
                    handleUpdateSetting('theme', checked ? 'dark' : 'light')
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>言語</Label>
                  <p className="text-sm text-muted-foreground">
                    表示言語を選択
                  </p>
                </div>
                <Select
                  value={settings?.language}
                  onValueChange={(value) => handleUpdateSetting('language', value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="言語を選択" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ja">日本語</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>通知</Label>
                  <p className="text-sm text-muted-foreground">
                    アプリケーションからの通知を受け取る
                  </p>
                </div>
                <Switch
                  checked={settings?.notification_enabled}
                  onCheckedChange={(checked) => 
                    handleUpdateSetting('notification_enabled', checked)
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;
