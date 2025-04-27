
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Twitter, Facebook, Instagram, Linkedin, Trash2 } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

const SNSAccountList = () => {
  const { data: accounts, isLoading } = useQuery({
    queryKey: ['sns-accounts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sns_accounts')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  const platformIcons = {
    twitter: <Twitter className="h-5 w-5" />,
    facebook: <Facebook className="h-5 w-5" />,
    instagram: <Instagram className="h-5 w-5" />,
    linkedin: <Linkedin className="h-5 w-5" />
  };

  const handleConnect = (platform: string) => {
    toast.info('この機能は現在開発中です');
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('sns_accounts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast.success('アカウントが削除されました');
    } catch (error: any) {
      toast.error('エラーが発生しました: ' + error.message);
    }
  };

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => handleConnect('twitter')} className="gap-2">
          <Twitter className="h-4 w-4" />
          Twitter連携
        </Button>
        <Button variant="outline" onClick={() => handleConnect('facebook')} className="gap-2">
          <Facebook className="h-4 w-4" />
          Facebook連携
        </Button>
        <Button variant="outline" onClick={() => handleConnect('instagram')} className="gap-2">
          <Instagram className="h-4 w-4" />
          Instagram連携
        </Button>
        <Button variant="outline" onClick={() => handleConnect('linkedin')} className="gap-2">
          <Linkedin className="h-4 w-4" />
          LinkedIn連携
        </Button>
      </div>

      <div className="space-y-2">
        {accounts?.map((account) => (
          <div key={account.id} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              {platformIcons[account.platform]}
              <span>{account.account_name}</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => handleDelete(account.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        {accounts?.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            連携済みのアカウントがありません
          </p>
        )}
      </div>
    </div>
  );
};

export default SNSAccountList;
