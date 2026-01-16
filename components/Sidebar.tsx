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
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white shrink-0">
          <span className="font-bold text-xl">C</span>
        </div>
        <div className="pt-6 px-6 pb-4">
          <button className="flex items-center gap-1 font-bold text-gray-800 hover:opacity-70 transition-opacity">
            Codename.com
            <ChevronDown className="w-4 h-4 mt-0.5" />
          </button>
        </div>
      </div>

      {/* MAIN CONTENT - Flex grow to fill remaining space */}
      <div className="flex flex-1 min-h-0">
        {/* LEFT ICON STRIP */}
        <div className="flex flex-col pt-5 px-3 border-r justify-between border-gray-200/50 pb-6">
          <div className="flex flex-col gap-4">
            <NavIcon Icon={Waypoints} />
            <NavIcon Icon={SquareStack} active />
            <NavIcon Icon={FileText} />
            <NavIcon Icon={VectorSquare} />
            <NavIcon Icon={Blend} />
          </div>

          <div className="flex flex-col gap-4">
            <NavIcon Icon={MessageCircle} />
            <NavIcon Icon={SettingsIcon} />
          </div>
        </div>

        {/* RIGHT CONTENT PANEL */}
        <div className="flex-1 flex flex-col pt-5 px-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Top Links */}
          <div className="px-3 space-y-2.5 mb-2">
            <button className="flex items-center gap-2 text-gray-500 hover:text-black">
              <Star className="w-4 h-4" />
              <span className="text-[13px]">Starred</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-black">
              <Clock className="w-4 h-4" />
              <span className="text-[13px]">Recent</span>
            </button>
          </div>

          <nav className="px-3 flex-1">
            <div className="space-y-2">
              <p className="font-semibold text-gray-800">Sales list</p>
              <p className="font-semibold text-gray-800">Goals</p>

              {/* DASHBOARD SECTION */}
              <div>
                <div
                  className="flex items-center justify-between group cursor-pointer"
                  onClick={() => toggleSection("Dashboard")}
                >
                  <span className="font-bold text-gray-800">Dashboard</span>
                  <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600 bg-white rounded-xl p-0.5" />
                </div>

                {openSections.Dashboard && (
                  <div className="mt-2 ml-1 border-l border-gray-300 relative">
                    <TreeItem label="Codename" />

                    {/* Nested "Shared with me" */}
                    <div className="relative">
                      <TreeItem
                        label="Shared with me"
                        isParent
                        isOpen={openSections.SharedWithMe}
                        onClick={() => toggleSection("SharedWithMe")}
                      />
                      {openSections.SharedWithMe && (
                        <div className="ml-4 border-l border-gray-300">
                          <TreeItem label="Cargo2go" />
                          <TreeItem label="Cloudz3r" badge={2} />
                          <TreeItem label="Idioma" />
                          <TreeItem label="Syllables" />
                          <TreeItem label="x-0b" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* REPORTS SECTION */}
              <div>
                <div
                  className="flex items-center justify-between group cursor-pointer"
                  onClick={() => toggleSection("Reports")}
                >
                  <span className="font-bold text-gray-800">Reports</span>
                  <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                </div>

                {openSections.Reports && (
                  <div className="mt-2 ml-1 border-l border-gray-300">
                    {/* Share with me */}
                    <TreeItem
                      label="Share with me"
                      isParent
                      isOpen={openSections.SharedWithMe}
                      onClick={() => toggleSection("SharedWithMe")}
                    />
                    {openSections.SharedWithMe && (
                      <div className="ml-4 border-l border-gray-300">
                        <TreeItem label="Deals by user" />
                        <TreeItem label="Deal duration" />
                      </div>
                    )}

                    {/* My reports */}
                    <TreeItem
                      label="My reports"
                      isParent
                      isOpen={openSections.MyReports}
                      onClick={() => toggleSection("MyReports")}
                    />
                    {openSections.MyReports && (
                      <div className="ml-4 border-l border-gray-300">
                        <TreeItem label="Emails received" />
                        <TreeItem label="Deal duration" />
                        <TreeItem label="New report" isHighlight />
                        <TreeItem label="Analytics" badge={7} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 shrink-0 flex-1">
            <button className="flex items-center gap-2 text-gray-500 hover:text-black text-sm">
              <BringToFront className="w-4 h-4" />
              Manage folders
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavIcon({ Icon, active = false }: { Icon: any; active?: boolean }) {
  return (
    <div
      className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors cursor-pointer ${
        active
          ? "bg-pink-600 text-white"
          : "bg-white text-gray-500 hover:bg-gray-100"
      }`}
    >
      <Icon className="w-5 h-5" />
    </div>
  );
}

function    TreeItem({
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
    <div className="relative flex items-center group py-1" onClick={onClick}>
      {/* The Horizontal Line Connector */}
      <div className="absolute left-0 top-1/2 w-3 border-t border-gray-300"></div>

      <div
        className={`ml-4 flex items-center justify-between w-full cursor-pointer hover:translate-x-0.5 transition-transform`}
      >
        <span
          className={`text-[13px] font-medium ${
            isHighlight ? "text-pink-600 font-medium" : "text-gray-800"
          } ${isParent ? "font-semibold text-gray-800" : ""}`}
        >
          {label}
        </span>

        <div className="flex items-center gap-2">
          {badge && (
            <span className="bg-pink-600 text-white text-[10px] font-bold px-0.5 py-0.5 rounded-md min-w-[18px] text-center">
              {badge}
            </span>
          )}
          {isParent &&
            (isOpen ? (
              <ChevronUp className="w-3 h-3 text-gray-400" />
            ) : (
              <ChevronDown className="w-3 h-3 text-gray-400" />
            ))}
        </div>
      </div>
    </div>
  );
}
