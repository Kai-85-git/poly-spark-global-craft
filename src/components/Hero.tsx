
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { Globe, Layers, Clock, Users } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-full bg-polyspark-100 px-3 py-1 text-sm font-medium text-polyspark-800 mb-4">
            マーケティングを世界へ
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl mb-4">
            多言語マーケティング素材を
            <span className="gradient-text"> AI で自動生成</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px] mb-8">
            海外展開するD2C企業向けに、コピーや画像を最大15言語で数クリックで生成、
            SNSへ直接配信。コンテンツ制作コストを70%削減します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => navigate('/signup')} 
              className="bg-polyspark-600 hover:bg-polyspark-700 text-white"
            >
              無料で始める
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => navigate('/demo')} 
              className="border-polyspark-200 text-polyspark-700 hover:bg-polyspark-50"
            >
              デモを見る
            </Button>
          </div>
        </div>

        {/* Features overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-xl border shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-polyspark-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-polyspark-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">多言語コピー生成</h3>
            <p className="text-muted-foreground">最大15言語対応、ブランドトーンを維持したコピー生成</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-polyspark-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Layers className="h-6 w-6 text-polyspark-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">画像ローカライズ</h3>
            <p className="text-muted-foreground">テキスト自動検出・置換、SNS最適化サイズ変換</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-polyspark-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-polyspark-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">SNS予約投稿</h3>
            <p className="text-muted-foreground">X/Instagram/LinkedIn対応、タイムゾーン最適化配信</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl border shadow-sm transition-all hover:shadow-md">
            <div className="rounded-full bg-polyspark-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-polyspark-600" />
            </div>
            <h3 className="font-semibold text-lg mb-2">チーム機能</h3>
            <p className="text-muted-foreground">複数メンバーで共同作業、権限管理、操作履歴</p>
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">利用企業</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            <div className="h-8">
              <span className="text-xl font-bold text-gray-400">COMPANY A</span>
            </div>
            <div className="h-8">
              <span className="text-xl font-bold text-gray-400">BRAND B</span>
            </div>
            <div className="h-8">
              <span className="text-xl font-bold text-gray-400">STARTUP C</span>
            </div>
            <div className="h-8">
              <span className="text-xl font-bold text-gray-400">TECH D</span>
            </div>
            <div className="h-8">
              <span className="text-xl font-bold text-gray-400">GROUP E</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
