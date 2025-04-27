
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTA = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-polyspark-600 to-polyspark-800">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-polyspark-600 bg-opacity-90"></div>
            <div className="absolute inset-0 opacity-20">
              {/* Background pattern */}
              <svg className="h-full w-full" viewBox="0 0 800 800">
                <defs>
                  <pattern id="small-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#small-grid)" />
              </svg>
            </div>
          </div>
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-white">
                マーケティング素材の多言語化を加速させましょう
              </h2>
              <p className="text-xl text-white/80 mb-8">
                PolySpark AIで、グローバル展開のスピードを上げ、コンテンツ制作コストを削減。
                わずか数クリックで15言語のコンテンツを生成し、世界中に配信できます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/signup')} 
                  className="bg-white text-polyspark-600 hover:bg-gray-100"
                >
                  無料で始める
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => navigate('/demo')} 
                  className="border-white text-white hover:bg-white/10"
                >
                  詳しく見る
                </Button>
              </div>
              <p className="mt-4 text-sm text-white/60">
                クレジットカード不要・いつでもキャンセル可能
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
