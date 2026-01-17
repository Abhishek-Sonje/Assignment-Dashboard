"use client";

import {
  ChevronDown,
  ChevronUp,
  Plus,
  Waypoints,
  SquareStack,
  FileText,
  VectorSquare,
  Blend,
  MessageCircle,
  SettingsIcon,
  Star,
  Clock,
  FolderOpen,
  BringToFront,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Dashboard: true,
    Reports: true,
    SharedWithMe: true,
    MyReports: true,
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-65 h-screen bg-[#f2eeed] fixed left-0 top-0 z-10 font-sans text-sm text-[#4a4a4a] flex flex-col">
      {/* HEADER - Fixed height */}
      <div className="flex justify-left items-center px-4 shrink-0">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shrink-0 shadow-md hover:scale-105 transition-transform cursor-pointer">
          <span className="font-bold text-xl">C</span>
        </div>
        <div className="pt-6 px-6 pb-4">
          <button className="flex items-center gap-1 font-bold text-gray-800 hover:opacity-70 transition-all group">
            Codename.com
            <ChevronDown className="w-4 h-4 mt-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT - Flex grow to fill remaining space */}
      <div className="flex flex-1 min-h-0">
        {/* LEFT ICON STRIP */}
        <div className="flex flex-col pt-5 px-3 border-r justify-between border-gray-200/50 pb-6">
          <div className="flex flex-col gap-3">
            <NavIcon Icon={Waypoints} tooltip="Connections" />
            <NavIcon Icon={SquareStack} active tooltip="Dashboard" />
            <NavIcon Icon={FileText} tooltip="Documents" />
            <NavIcon Icon={VectorSquare} tooltip="Design" />
            <NavIcon Icon={Blend} badge={2} tooltip="Blend" />
          </div>

          <div className="flex flex-col gap-3">
            <NavIcon Icon={MessageCircle} tooltip="Messages" />
            <NavIcon Icon={SettingsIcon} tooltip="Settings" />
          </div>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="flex-1 flex flex-col pt-5 px-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Top Links */}
          <div className="px-3 space-y-2 mb-4">
            <SidebarLink icon={Star} label="Starred" />
            <SidebarLink icon={Clock} label="Recent" />
          </div>

          <nav className="px-3 flex-1">
            <div className="space-y-3">
              <SidebarNavItem label="Sales list" />
              <SidebarNavItem label="Goals" />

              {/* DASHBOARD SECTION */}
              <div>
                <div
                  className="flex items-center justify-between group cursor-pointer py-0.5"
                  onClick={() => toggleSection("Dashboard")}
                >
                  <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Dashboard
                  </span>
                  <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <Plus className={`w-3.5 h-3.5 text-gray-400 group-hover:text-pink-600 transition-all ${openSections.Dashboard ? 'rotate-45' : ''}`} />
                  </div>
                </div>

                {/* Animated collapsible content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openSections.Dashboard ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-2 ml-1 border-l border-gray-300/70 relative">
                      <TreeItem label="Codename" />

                      {/* Nested "Shared with me" */}
                      <div className="relative">
                        <TreeItem
                          label="Shared with me"
                          isParent
                          isOpen={openSections.SharedWithMe}
                          onClick={() => toggleSection("SharedWithMe")}
                        />
                        
                        {/* Nested animated section */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            openSections.SharedWithMe ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-4 border-l border-gray-300/70">
                              <TreeItem label="Cargo2go" />
                              <TreeItem label="Cloudz3r" badge={2} />
                              <TreeItem label="Idioma" />
                              <TreeItem label="Syllables" />
                              <TreeItem label="x-0b" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* REPORTS SECTION */}
              <div>
                <div
                  className="flex items-center justify-between group cursor-pointer py-0.5"
                  onClick={() => toggleSection("Reports")}
                >
                  <span className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Reports
                  </span>
                  <div className="w-5 h-5 bg-white rounded-md flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <Plus className={`w-3.5 h-3.5 text-gray-400 group-hover:text-pink-600 transition-all ${openSections.Reports ? 'rotate-45' : ''}`} />
                  </div>
                </div>

                {/* Animated collapsible content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openSections.Reports ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mt-2 ml-1 border-l border-gray-300/70">
                      {/* Share with me */}
                      <TreeItem
                        label="Share with me"
                        isParent
                        isOpen={openSections.SharedWithMe}
                        onClick={() => toggleSection("SharedWithMe")}
                      />
                      
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          openSections.SharedWithMe ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-4 border-l border-gray-300/70">
                            <TreeItem label="Deals by user" />
                            <TreeItem label="Deal duration" />
                          </div>
                        </div>
                      </div>

                      {/* My reports */}
                      <TreeItem
                        label="My reports"
                        isParent
                        isOpen={openSections.MyReports}
                        onClick={() => toggleSection("MyReports")}
                      />
                      
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          openSections.MyReports ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="ml-4 border-l border-gray-300/70">
                            <TreeItem label="Emails received" />
                            <TreeItem label="Deal duration" />
                            <TreeItem label="New report" isHighlight />
                            <TreeItem label="Analytics" badge={7} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 shrink-0 mt-auto">
            <button className="flex items-center gap-2 text-gray-500 hover:text-pink-600 text-sm transition-colors group">
              <FolderOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Manage folders</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

// Simple sidebar link component
function SidebarLink({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <button className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors group w-full">
      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
      <span className="text-[13px]">{label}</span>
    </button>
  );
}

// Simple nav item without collapsible
function SidebarNavItem({ label }: { label: string }) {
  return (
    <p className="font-semibold text-gray-800 hover:text-pink-600 cursor-pointer transition-colors py-0.5">
      {label}
    </p>
  );
}

function NavIcon({ 
  Icon, 
  active = false, 
  badge,
  tooltip 
}: { 
  Icon: any; 
  active?: boolean;
  badge?: number;
  tooltip?: string;
}) {
  return (
    <div className="relative group">
      <div
        className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
          active
            ? "bg-pink-600 text-white shadow-lg shadow-pink-600/30"
            : "bg-white text-gray-500 hover:bg-gray-100 hover:scale-105 shadow-sm"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      
      {/* Badge */}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
          {badge}
        </span>
      )}
      
      {/* Tooltip */}
      {tooltip && (
        <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50 shadow-lg">
          {tooltip}
          <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
        </div>
      )}
    </div>
  );
}

function TreeItem({
  label,
  badge,
  isParent,
  isOpen,
  onClick,
  isHighlight,
}: {
  label: string;
  badge?: number;
  isParent?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  isHighlight?: boolean;
}) {
  return (
    <div 
      className="relative flex items-center group py-1.5" 
      onClick={onClick}
    >
      {/* The Horizontal Line Connector */}
      <div className="absolute left-0 top-1/2 w-3 border-t border-gray-300/70"></div>

      <div
        className={`ml-4 flex items-center justify-between w-full cursor-pointer hover:translate-x-0.5 transition-all duration-200`}
      >
        <span
          className={`text-[13px] font-medium transition-colors ${
            isHighlight ? "text-pink-600 font-semibold" : "text-gray-700 hover:text-gray-900"
          } ${isParent ? "font-semibold text-gray-800" : ""}`}
        >
          {label}
        </span>

        <div className="flex items-center gap-2">
          {badge && (
            <span className="bg-pink-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md min-w-[18px] text-center shadow-sm">
              {badge}
            </span>
          )}
          {isParent && (
            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-pink-600 transition-colors" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
