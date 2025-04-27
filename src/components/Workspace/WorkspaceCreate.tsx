
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/components/ui/sonner';

const WorkspaceCreate = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data: session } = await supabase.auth.getSession();
      if (!session.session?.user) {
        toast.error('ログインが必要です');
        return;
      }

      const { error } = await supabase
        .from('workspaces')
        .insert({
          name,
          description,
          user_id: session.session.user.id
        });

      if (error) throw error;

      toast.success('ワークスペースが作成されました');
      setName('');
      setDescription('');
    } catch (error: any) {
      toast.error('エラーが発生しました: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">ワークスペース名</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="新しいワークスペース"
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">説明</Label>
        <Input
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="ワークスペースの説明"
        />
      </div>

      <Button type="submit" className="w-full">
        作成
      </Button>
    </form>
  );
};

export default WorkspaceCreate;
