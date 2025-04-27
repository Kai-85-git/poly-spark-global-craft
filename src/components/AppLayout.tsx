
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  LayoutGrid, 
  FileText, 
  Image as ImageIcon, 
  Share2, 
  Users, 
  Settings, 
  BellRing, 
  HelpCircle, 
  User, 
  LogOut, 
  ChevronLeft,
  Menu
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface AppLayoutProps {
  children: React.ReactNode;
  title?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, title = "Dashboard" }) => {
  const navigate = useNavigate();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  
  const sidebarItems = [
    { icon: <LayoutGrid size={20} />, label: "ダッシュボード", path: "/dashboard" },
    { icon: <FileText size={20} />, label: "コピー生成", path: "/copy-generator" },
    { icon: <ImageIcon size={20} />, label: "画像変換", path: "/image-localization" },
    { icon: <Share2 size={20} />, label: "SNS配信", path: "/sns-scheduler" },
    { icon: <Users size={20} />, label: "ワークスペース", path: "/workspaces" },
    { icon: <Settings size={20} />, label: "設定", path: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between h-16 px-4 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center">
          <Sheet open={isMobileSidebarOpen} onOpenChange={setMobileSidebarOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-0">
              <div className="h-full flex flex-col">
                <div className="p-4 border-b flex items-center">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-polyspark-500 to-polyspark-700 flex items-center justify-center text-white font-bold text-xl mr-2">P</div>
                  <span className="text-xl font-bold">PolySpark<span className="text-polyspark-600">AI</span></span>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  {sidebarItems.map((item) => (
                    <Button
                      key={item.label}
                      variant="ghost"
                      className={`w-full justify-start ${
                        location.pathname === item.path ? 'bg-accent text-accent-foreground' : ''
                      }`}
                      onClick={() => {
                        navigate(item.path);
                        setMobileSidebarOpen(false);
                      }}
                    >
                      <span className="mr-2">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-lg font-medium ml-4">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => navigate('/notifications')}>
            <BellRing size={18} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Open user menu">
                <div className="h-8 w-8 rounded-full bg-polyspark-200 flex items-center justify-center text-polyspark-700 font-medium">
                  TA
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>田中 明</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/profile')}>
                <User className="mr-2" size={16} />
                <span>プロフィール</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/settings')}>
                <Settings className="mr-2" size={16} />
                <span>設定</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/help')}>
                <HelpCircle className="mr-2" size={16} />
                <span>ヘルプ</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/logout')}>
                <LogOut className="mr-2" size={16} />
                <span>ログアウト</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      <div className="flex flex-grow">
        {/* Desktop Sidebar */}
        <aside 
          className={`hidden md:flex flex-col border-r bg-background transition-all ${
            isSidebarCollapsed ? 'w-[60px]' : 'w-[220px]'
          }`}
        >
          <div className={`h-16 border-b flex items-center ${isSidebarCollapsed ? 'justify-center' : 'px-3'}`}>
            {isSidebarCollapsed ? (
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-polyspark-500 to-polyspark-700 flex items-center justify-center text-white font-bold text-xl">P</div>
            ) : (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-polyspark-500 to-polyspark-700 flex items-center justify-center text-white font-bold text-xl mr-2">P</div>
                <span className="text-xl font-bold">PolySpark<span className="text-polyspark-600">AI</span></span>
              </div>
            )}
          </div>
          
          <nav className="flex-1 flex flex-col gap-1 p-2">
            {sidebarItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className={`justify-start ${
                  location.pathname === item.path ? 'bg-accent text-accent-foreground' : ''
                } ${isSidebarCollapsed ? 'px-2' : ''}`}
                onClick={() => navigate(item.path)}
              >
                <span className={isSidebarCollapsed ? '' : 'mr-2'}>{item.icon}</span>
                {!isSidebarCollapsed && <span>{item.label}</span>}
              </Button>
            ))}
          </nav>
          
          <div className="p-2 mt-auto">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
              className="w-full flex justify-center"
            >
              <ChevronLeft className={`h-5 w-5 transition-transform ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
            </Button>
          </div>
        </aside>
        
        {/* Main content */}
        <div className="flex-1 flex flex-col">
          {/* Desktop top bar */}
          <div className="hidden md:flex items-center justify-between h-16 px-6 border-b bg-background/80 backdrop-blur-sm">
            <h1 className="text-xl font-medium">{title}</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/help')}>
                <HelpCircle size={18} />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/notifications')}>
                <BellRing size={18} />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2" aria-label="Open user menu">
                    <div className="h-8 w-8 rounded-full bg-polyspark-200 flex items-center justify-center text-polyspark-700 font-medium">
                      TA
                    </div>
                    <span className="font-medium">田中 明</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => navigate('/profile')}>
                    <User className="mr-2" size={16} />
                    <span>プロフィール</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/settings')}>
                    <Settings className="mr-2" size={16} />
                    <span>設定</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate('/logout')}>
                    <LogOut className="mr-2" size={16} />
                    <span>ログアウト</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Page content */}
          <div className="flex-grow p-4 md:p-6 overflow-y-auto bg-background">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
