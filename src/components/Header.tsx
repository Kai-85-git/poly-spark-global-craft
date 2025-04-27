
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: 'コピー生成', href: '/copy-generator' },
    { name: '画像変換', href: '/image-localization' },
    { name: 'SNS配信', href: '/sns-scheduler' },
    { name: '料金', href: '/pricing' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b w-full">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center" onClick={() => navigate('/')} role="button" tabIndex={0}>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-polyspark-500 to-polyspark-700 flex items-center justify-center text-white font-bold text-xl">P</div>
            <span className="text-xl font-bold">PolySpark<span className="text-polyspark-600">AI</span></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              onClick={() => navigate(item.href)}
              className="text-sm font-medium hover:text-polyspark-600 hover:bg-polyspark-50"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            onClick={() => navigate('/login')}
            className="border-polyspark-200 text-polyspark-700 hover:bg-polyspark-50"
          >
            ログイン
          </Button>
          <Button 
            onClick={() => navigate('/signup')}
            className="bg-polyspark-600 hover:bg-polyspark-700 text-white"
          >
            無料で始める
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden">
          <Sheet open={showMobileMenu} onOpenChange={setShowMobileMenu}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => {
                      navigate(item.href);
                      setShowMobileMenu(false);
                    }}
                    className="justify-start text-lg"
                  >
                    {item.name}
                  </Button>
                ))}
                <div className="h-px w-full bg-border my-4" />
                <Button 
                  variant="outline" 
                  onClick={() => {
                    navigate('/login');
                    setShowMobileMenu(false);
                  }}
                  className="border-polyspark-200 text-polyspark-700 hover:bg-polyspark-50 w-full"
                >
                  ログイン
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/signup');
                    setShowMobileMenu(false);
                  }}
                  className="bg-polyspark-600 hover:bg-polyspark-700 text-white w-full"
                >
                  無料で始める
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
