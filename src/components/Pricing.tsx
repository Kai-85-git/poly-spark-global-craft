
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'スターター',
      price: '19,800',
      billing: '月額',
      description: '小規模チーム向け、多言語コンテンツ作成の基本機能を提供',
      features: [
        '月間500文字まで多言語変換',
        '月間20画像までローカライズ',
        '5言語まで対応',
        '2ユーザーまで',
        '基本的なAPI連携',
      ],
      cta: '無料で始める',
      popular: false,
    },
    {
      name: 'ビジネス',
      price: '49,800',
      billing: '月額',
      description: '成長中の企業向け、拡張機能と高度なAI生成能力を提供',
      features: [
        '月間2,000文字まで多言語変換',
        '月間100画像までローカライズ',
        '全15言語対応',
        '10ユーザーまで',
        'SNS予約投稿（5アカウント）',
        'ブランドスタイルガイド連携',
        '優先サポート',
      ],
      cta: '14日間無料トライアル',
      popular: true,
    },
    {
      name: 'エンタープライズ',
      price: '要問合せ',
      billing: '',
      description: '大規模組織向け、カスタム機能と専用サポートを提供',
      features: [
        '無制限の多言語変換',
        '無制限の画像ローカライズ',
        'カスタム言語対応',
        '無制限ユーザー',
        'SNS予約投稿（無制限）',
        'カスタムAIモデル微調整',
        '専任カスタマーサクセス',
        'SSO認証',
        'SLA保証',
      ],
      cta: '営業に問い合わせる',
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            シンプルな料金プラン
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            あらゆる規模のビジネスに対応した透明性のある価格設定。
            必要な機能だけを、必要なだけ。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative rounded-xl border bg-background p-8 shadow-sm transition-all ${
                plan.popular ? 'ring-2 ring-polyspark-600 shadow-md' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 transform -translate-y-1/2">
                  <span className="bg-polyspark-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    おすすめ
                  </span>
                </div>
              )}
              
              <div className="mb-5">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-bold tracking-tight">¥{plan.price}</span>
                  {plan.billing && <span className="ml-1 text-lg text-muted-foreground">/{plan.billing}</span>}
                </div>
                <p className="mt-4 text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-polyspark-600 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-polyspark-600 hover:bg-polyspark-700 text-white' 
                    : 'bg-polyspark-100 hover:bg-polyspark-200 text-polyspark-800'
                }`}
                onClick={() => navigate('/signup')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            特別なニーズがありますか？ <a href="/contact" className="text-polyspark-600 hover:underline">お問い合わせ</a> ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
