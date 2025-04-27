
import React from 'react';
import { Code, Image, Share2, BarChart2 } from 'lucide-react';

const Features = () => {
  // Features data
  const features = [
    {
      id: 1,
      title: '多言語コピー生成',
      description: '入力されたテキストを元に、ブランドのトーンや声を維持しながら、最大15言語で自然なマーケティングコピーを生成します。スタイルガイドをアップロードし、微調整されたAIモデルがブランドアイデンティティに忠実なコンテンツを作成します。',
      icon: <Code className="h-12 w-12 text-polyspark-600" />,
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
      features: [
        '最大15言語対応（日英中韓など主要言語）',
        'Markdownスタイルガイドの反映',
        'ブランドトーンの一貫性を保持',
        '1回で最大10パターン生成可能'
      ]
    },
    {
      id: 2,
      title: '画像ローカライゼーション',
      description: '既存の画像素材を各言語市場向けに自動で最適化。テキスト部分を自動検出し、翻訳版に置き換え、各SNSプラットフォームに最適なサイズにリサイズします。画像品質を維持しながらWebP形式に変換し、高速読み込みを実現。',
      icon: <Image className="h-12 w-12 text-polyspark-600" />,
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
      features: [
        'PSD/PNG/JPEG対応',
        'テキストレイヤ自動検出・翻訳',
        'SNS最適サイズ自動調整',
        'WebP最適化書き出し'
      ]
    },
    {
      id: 3,
      title: 'SNS予約投稿',
      description: '生成したコンテンツを主要SNSプラットフォームへ直接配信。各国のベストタイムに合わせた投稿スケジューリング、複数アカウントの一括管理、投稿パフォーマンスの分析まで、統合されたワークフローで効率化します。',
      icon: <Share2 className="h-12 w-12 text-polyspark-600" />,
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
      features: [
        'X/Instagram/LinkedIn API連携',
        'タイムゾーン最適化投稿スケジュール',
        '複数アカウント同時管理',
        'エンゲージメント分析レポート'
      ]
    },
    {
      id: 4,
      title: 'チームワークスペース',
      description: '複数メンバーでコンテンツ管理を効率化するためのチーム機能。権限管理や操作履歴の記録で、大規模なマーケティングチームでも安心して利用できます。組織単位での生成上限管理や請求の一元化も可能です。',
      icon: <BarChart2 className="h-12 w-12 text-polyspark-600" />,
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
      features: [
        'Owner/Editor/Viewer権限設定',
        '操作履歴180日保存',
        '組織単位での生成上限管理',
        '一括請求オプション'
      ]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            主要機能
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            PolySpark AI は海外マーケティングのコンテンツ作成から配信までの全てを自動化し、
            工数とコストを大幅に削減します
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="rounded-xl overflow-hidden border shadow-lg">
                  <img 
                    src={feature.imageUrl} 
                    alt={feature.title} 
                    className="w-full h-auto object-cover aspect-video" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-polyspark-100">
                  {feature.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{feature.title}</h3>
                <p className="text-lg text-muted-foreground">{feature.description}</p>
                
                <ul className="space-y-3 pt-4">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-polyspark-600"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
