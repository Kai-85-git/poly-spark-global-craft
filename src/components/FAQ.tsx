
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "どのような言語に対応していますか？",
      answer: "現在、日本語、英語、中国語（簡体字・繁体字）、韓国語、フランス語、ドイツ語、スペイン語、イタリア語、ポルトガル語、ロシア語、アラビア語、ヒンディー語、タイ語、ベトナム語の計15言語に対応しています。エンタープライズプランではカスタム言語の追加も可能です。"
    },
    {
      question: "生成されたコンテンツの品質はどうですか？",
      answer: "PolySpark AIは最新のGPT-4oとClaude 3 Haikuをベースにした独自の微調整モデルを使用しており、単なる機械翻訳ではなく、各言語市場に最適化されたローカライズドコンテンツを生成します。また、お客様のブランドスタイルガイドを学習させることで、ブランドの世界観を維持した高品質なコンテンツ生成が可能です。"
    },
    {
      question: "画像のテキスト置換はどのように機能しますか？",
      answer: "アップロードされた画像（PSD/PNG/JPEG対応）に対して、AIがテキスト領域を自動検出し、翻訳されたテキストに置き換えます。フォントや色、サイズなどのスタイルを維持しながら、各言語に最適な形で配置調整も行います。また、SNSプラットフォームごとに最適なサイズにリサイズし、高速読み込みのためのWebP最適化も自動で実行します。"
    },
    {
      question: "SNS投稿の予約配信に対応しているプラットフォームは？",
      answer: "現在、X（旧Twitter）、Instagram、LinkedIn APIと連携しており、これらのプラットフォームへの直接投稿が可能です。各プラットフォームのアカウント認証後、生成したコンテンツをスケジュール設定して自動投稿できます。タイムゾーン対応のスケジューラにより、各国のベストタイミングでの投稿も簡単に設定できます。"
    },
    {
      question: "チーム機能ではどのような権限設定が可能ですか？",
      answer: "Owner（管理者）、Editor（編集者）、Viewer（閲覧者）の3つの権限レベルを設定可能です。Ownerはすべての管理権限を持ち、Editorはコンテンツの作成・編集が可能、Viewerはコンテンツの閲覧のみ可能です。また、操作ログは180日間保存され、誰がいつどのような操作を行ったか追跡できます。"
    },
    {
      question: "セキュリティ対策はどうなっていますか？",
      answer: "すべてのデータはAWS上で管理され、通信はTLS 1.3で暗号化されています。アップロードされたブランドスタイルガイドなどの機密データはAWS KMSによる暗号化で保存されます。エンタープライズプランではシングルサインオン(SSO)による認証も可能です。また、SOC2 Type II認証を取得しており、企業のセキュリティ要件に対応しています。"
    },
    {
      question: "無料トライアルはありますか？",
      answer: "はい、ビジネスプランでは14日間の無料トライアルをご利用いただけます。クレジットカード情報なしでサインアップ可能で、トライアル期間中はビジネスプランのすべての機能をお試しいただけます。トライアル終了前に通知メールをお送りし、継続利用されない場合は自動的に終了するので安心してお試しいただけます。"
    },
    {
      question: "カスタムな要望や統合は可能ですか？",
      answer: "エンタープライズプランでは、お客様の業界や特定のニーズに合わせたAIモデルの微調整や、社内システムとのAPI統合など、カスタムソリューションを提供しています。また、Salesforce、HubSpotなどの主要CRMとの連携も可能です。具体的な要望については、営業担当にお問い合わせください。"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            よくある質問
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            PolySpark AIについてよくいただく質問とその回答
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            他にご質問がありますか？ <a href="/contact" className="text-polyspark-600 hover:underline">お問い合わせ</a> ください。
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
