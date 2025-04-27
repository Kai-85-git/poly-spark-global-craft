
import React from 'react';
import AppLayout from '@/components/AppLayout';
import SNSAccountList from '@/components/SNS/SNSAccountList';
import SNSPostScheduler from '@/components/SNS/SNSPostScheduler';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SNSScheduler = () => {
  return (
    <AppLayout title="SNS配信">
      <div className="container mx-auto space-y-6">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">SNS配信</h2>
          <p className="text-muted-foreground">
            複数のSNSアカウントに一括で投稿を予約できます。
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>アカウント管理</CardTitle>
              <CardDescription>
                連携済みのSNSアカウントを管理します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SNSAccountList />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>投稿スケジュール</CardTitle>
              <CardDescription>
                新しい投稿を作成・予約します。
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SNSPostScheduler />
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default SNSScheduler;
