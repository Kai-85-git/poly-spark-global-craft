
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '@/components/AppLayout';
import WorkspacesList from '@/components/Workspace/WorkspacesList';
import WorkspaceCreate from '@/components/Workspace/WorkspaceCreate';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Workspaces = () => {
  const navigate = useNavigate();

  return (
    <AppLayout title="ワークスペース">
      <div className="container mx-auto space-y-6">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">ワークスペース</h2>
          <p className="text-muted-foreground">
            プロジェクトごとにチームメンバーと共同作業できます。
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>ワークスペース一覧</CardTitle>
              <CardDescription>
                参加中のワークスペース
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WorkspacesList />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>新規作成</CardTitle>
              <CardDescription>
                新しいワークスペースを作成
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WorkspaceCreate />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Workspaces;
