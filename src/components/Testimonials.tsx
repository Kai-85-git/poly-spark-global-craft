
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "PolySparkのおかげで、マーケティング素材の海外展開が驚くほど効率的になりました。以前は1週間かかっていた作業が今ではわずか数時間で完了します。",
      name: "田中 健太",
      title: "マーケティング部長",
      company: "グローバルコスメティクス株式会社",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      quote: "多言語対応の課題に長年悩まされてきましたが、PolySparkを導入してからはコンテンツのローカライズが格段に早くなり、品質も向上しました。特に画像のテキスト自動置換は素晴らしい機能です。",
      name: "鈴木 美咲",
      title: "グローバルマーケティングリード",
      company: "テックイノベーション社",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      quote: "海外15カ国への展開で言語対応に苦労していましたが、PolySparkのAI翻訳はブランドの世界観を維持した自然な文章を生成してくれます。コスト削減だけでなく、世界展開のスピードが一気に加速しました。",
      name: "佐藤 拓也",
      title: "CEO",
      company: "グローバルギフト株式会社",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            PolySpark AIが世界中の企業のグローバルマーケティングをどのように変革しているか
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  {/* Quote SVG */}
                  <svg className="h-8 w-8 text-polyspark-300" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H9c0-1.7 1.3-3 3-3h1V8h-3zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-5c0-1.7 1.3-3 3-3h1V8h-3z" />
                  </svg>
                </div>

                <blockquote className="flex-1">
                  <p className="text-lg mb-4">{testimonial.quote}</p>
                </blockquote>

                <div className="flex items-center mt-6">
                  <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center gap-1">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-medium">4.9/5</span>
            <span className="text-muted-foreground ml-1">お客様満足度</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
