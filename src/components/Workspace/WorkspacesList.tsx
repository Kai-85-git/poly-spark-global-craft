
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, ArrowRight } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const WorkspacesList = () => {
  const navigate = useNavigate();
  const { data: workspaces, isLoading } = useQuery({
    queryKey: ['workspaces'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('workspaces')
        .select('*');
      
      if (error) throw error;
      return data;
    }
  });

  if (isLoading) {
    return <div>読み込み中...</div>;
  }

  return (
    <div className="space-y-4">
      {workspaces?.map((workspace) => (
        <div key={workspace.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="space-y-1">
            <h3 className="font-medium">{workspace.name}</h3>
            <p className="text-sm text-muted-foreground">{workspace.description}</p>
          </div>
          <Button variant="ghost" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      ))}
      {workspaces?.length === 0 && (
        <p className="text-sm text-muted-foreground text-center py-4">
          参加中のワークスペースはありません
        </p>
      )}
    </div>
  );
};

export default WorkspacesList;
