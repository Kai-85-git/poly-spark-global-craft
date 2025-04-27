
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';

const SNSPostScheduler = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div>
          <Input
            placeholder="投稿内容を入力"
            className="h-24"
          />
        </div>
        <Button 
          onClick={() => toast.info('この機能は現在開発中です')}
          className="w-full"
        >
          投稿を予約
        </Button>
      </div>
    </div>
  );
};

export default SNSPostScheduler;
