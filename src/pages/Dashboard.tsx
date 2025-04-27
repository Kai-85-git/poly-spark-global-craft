
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { FileText, Image as ImageIcon, Share2, Sparkles, Star, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';

// Mock data for dashboard
const activityData = [
  {
    id: 1,
    type: 'copy',
    title: '新製品紹介コピー',
    languages: ['en', 'zh-CN', 'ko'],
    date: '2024-04-24',
    user: '佐藤 健太',
  },
  {
    id: 2,
    type: 'image',
    title: '夏季キャンペーンバナー',
    languages: ['en', 'es', 'fr', 'it'],
    date: '2024-04-23',
    user: '田中 明',
  },
  {
    id: 3,
    type: 'sns',
    title: '新商品発表投稿',
    languages: ['en', 'zh-CN'],
    platform: ['twitter', 'instagram'],
    date: '2024-04-21',
    user: '山田 花子',
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Usage stats
  const usageStats = {
    copyGeneration: { used: 750, total: 2000, percentage: 37.5 },
    imageLocalization: { used: 45, total: 100, percentage: 45 },
    snsScheduling: { used: 12, total: 50, percentage: 24 },
    teamMembers: { used: 4, total: 10, percentage: 40 },
  };

  return (
    <AppLayout title="ダッシュボード">
      <div className="space-y-8">
        {/* Welcome section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">ようこそ、田中さん</h2>
            <p className="text-muted-foreground">今日もグローバルマーケティングを効率化しましょう！</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="border-polyspark-200 text-polyspark-700 hover:bg-polyspark-50"
              onClick={() => navigate('/workspaces')}
            >
              ワークスペース管理
            </Button>
            <Button
              className="bg-polyspark-600 hover:bg-polyspark-700 text-white"
              onClick={() => navigate('/copy-generator')}
            >
              新しいコピーを作成
            </Button>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/copy-generator')}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">多言語コピー生成</CardTitle>
              <FileText className="h-5 w-5 text-polyspark-600" />
            </CardHeader>
            <CardContent>
              <CardDescription className="pb-4">テキストをブランドトーンで多言語変換</CardDescription>
              <Button variant="ghost" size="sm" className="w-full justify-between text-polyspark-600 hover:text-polyspark-700 hover:bg-polyspark-50">
                コピーを作成 <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/image-localization')}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">画像ローカライズ</CardTitle>
              <ImageIcon className="h-5 w-5 text-polyspark-600" />
            </CardHeader>
            <CardContent>
              <CardDescription className="pb-4">画像のテキストを多言語に自動変換</CardDescription>
              <Button variant="ghost" size="sm" className="w-full justify-between text-polyspark-600 hover:text-polyspark-700 hover:bg-polyspark-50">
                画像を変換 <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => navigate('/sns-scheduler')}>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-lg font-medium">SNS配信</CardTitle>
              <Share2 className="h-5 w-5 text-polyspark-600" />
            </CardHeader>
            <CardContent>
              <CardDescription className="pb-4">SNSへの予約投稿を自動化</CardDescription>
              <Button variant="ghost" size="sm" className="w-full justify-between text-polyspark-600 hover:text-polyspark-700 hover:bg-polyspark-50">
                配信スケジュール <ArrowRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Usage stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">今月の使用状況</CardTitle>
            <CardDescription>ビジネスプランの使用量（2024/04/01-2024/04/30）</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">多言語コピー生成</span>
                <span className="text-sm text-muted-foreground">{usageStats.copyGeneration.used}/{usageStats.copyGeneration.total} 文字</span>
              </div>
              <Progress value={usageStats.copyGeneration.percentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">画像ローカライズ</span>
                <span className="text-sm text-muted-foreground">{usageStats.imageLocalization.used}/{usageStats.imageLocalization.total} 画像</span>
              </div>
              <Progress value={usageStats.imageLocalization.percentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">SNS予約投稿</span>
                <span className="text-sm text-muted-foreground">{usageStats.snsScheduling.used}/{usageStats.snsScheduling.total} 投稿</span>
              </div>
              <Progress value={usageStats.snsScheduling.percentage} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">チームメンバー</span>
                <span className="text-sm text-muted-foreground">{usageStats.teamMembers.used}/{usageStats.teamMembers.total} ユーザー</span>
              </div>
              <Progress value={usageStats.teamMembers.percentage} className="h-2" />
            </div>

            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/billing')}>
                プランをアップグレード
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">最近のアクティビティ</CardTitle>
            <CardDescription>チーム全体の最近の活動履歴</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activityData.map((activity) => (
                <div key={activity.id} className="flex items-start p-3 hover:bg-gray-50 rounded-md -mx-2">
                  <div className="h-8 w-8 rounded-full bg-polyspark-100 flex items-center justify-center mr-3 flex-shrink-0">
                    {activity.type === 'copy' && <FileText className="h-4 w-4 text-polyspark-600" />}
                    {activity.type === 'image' && <ImageIcon className="h-4 w-4 text-polyspark-600" />}
                    {activity.type === 'sns' && <Share2 className="h-4 w-4 text-polyspark-600" />}
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:justify-between">
                      <p className="font-medium">
                        {activity.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {activity.date}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {activity.user} · {activity.languages.length}言語
                      {activity.platform && ` · ${activity.platform.length}プラットフォーム`}
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="ghost" size="sm" className="w-full mt-2" onClick={() => navigate('/activity')}>
                すべての活動を表示
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Tips and resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gradient-to-br from-polyspark-50 to-polyspark-100 border-polyspark-200">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg font-medium">活用Tips</CardTitle>
                <Sparkles className="h-5 w-5 text-polyspark-500" />
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">多言語プロジェクトをワークスペースで整理すると効率的です</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">スタイルガイドをアップロードでブランドトーンの一貫性が向上します</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm">SNS投稿は現地時間15-18時が最も効果的な配信時間帯です</span>
                </li>
              </ul>
              <Button variant="ghost" size="sm" className="w-full mt-4 text-polyspark-700" onClick={() => navigate('/guides')}>
                もっと見る
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">リソース</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate('/guides/quickstart')}>
                  <FileText className="h-4 w-4 mr-2" /> クイックスタートガイド
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate('/guides/image-tips')}>
                  <ImageIcon className="h-4 w-4 mr-2" /> 画像最適化のポイント
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => navigate('/guides/sns-best-practices')}>
                  <Share2 className="h-4 w-4 mr-2" /> SNS配信のベストプラクティス
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
