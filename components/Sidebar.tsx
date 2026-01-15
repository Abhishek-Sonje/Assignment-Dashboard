"use client";

import { NAV_ITEMS } from "@/lib/mock-data";
import Link from "next/link";
import { clsx } from "clsx";
import {
  ChevronDown,
  ChevronRight,
  Command,
  Settings,
  LifeBuoy,
  Search,
  Plus,
  Waypoints,
  SquareStack,
  FileText,
  VectorSquare,
  Blend,
  User,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  // In a real app, this would be determined by the router, but we'll mock it for now based on data
  // Using open states for sections
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Codename: true,
    Reports: true,
  });

  const toggleSection = (label: string) => {
    setOpenSections((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-64 h-screen bg-[#f2eeed]  overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex fixed left-0 top-0 overflow-y-auto z-10 font-sans text-sm pb-8">
      <div className="flex flex-col items-center pt-6 p-1 pl-4 space-y-4">
        <div className="flex flex-col items-center justify-between gap-6 h-full">
          <div className="flex flex-col justify-around flex-1">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
              <span className="font-medium text-xl">C</span>
            </div>
            <div className="space-y-  ">
              <div className="w-10 h-10 bg-[#fafafa] rounded-4xl flex items-center justify-center">
                <Waypoints className="w-5 h-5" />
              </div>

              <div className="w-10 h-10 bg-[#fafafa] rounded-4xl flex items-center justify-center">
                <SquareStack className="w-5 h-5" />
              </div>

              <div className="w-10 h-10 bg-[#fafafa] rounded-4xl flex items-center justify-center">
                <VectorSquare className="w-5 h-5" />
              </div>

              <div className="w-10 h-10 bg-[#fafafa] rounded-4xl flex items-center justify-center">
                <Blend className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end gap-6">
            <User className="w-10 h-10 bg-[#fafafa] rounded-4xl flex items-center justify-center p-2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full">
        {/* Brand / Header */}
        <div className="p-6 justify-center pb-0">
          <div className="flex items-center gap-2 font-bold text-gray-900 text-lg mb-2">
            <span className="flex items-center gap-1 justify-center text-sm font-semibold">
              Codename.com
              <ChevronDown className="w-3 h-3 text-gray-500" />
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 ">
          {NAV_ITEMS.map((item, idx) => (
            <div key={idx} className="mb-1">
              {!item.subItems ? (
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center px-3 py-2 rounded-lg transition-colors",
                    item.active
                      ? "bg-white text-gray-900 font-medium shadow-sm"
                      : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  {/* Icons would go here if defined in data, limiting for now to text match */}
                  {item.label === "Dashboard" && (
                    <span className="mr-2">📊</span>
                  )}
                  {item.label}
                  {item.label === "Dashboard" && (
                    <Plus className="w-4 h-4 ml-auto text-gray-400" />
                  )}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => toggleSection(item.label)}
                    className="w-full flex items-center justify-between px-3 py-2 text-gray-500 hover:text-gray-900 transition-colors group"
                  >
                    <span className="font-medium text-xs uppercase tracking-wider text-gray-400 group-hover:text-gray-600">
                      {item.label}
                    </span>
                    {openSections[item.label] ? (
                      <ChevronDown className="w-3 h-3" />
                    ) : (
                      <ChevronRight className="w-3 h-3" />
                    )}
                    {item.label === "Dashboard" && (
                      <Plus className="w-4 h-4 ml-auto" />
                    )}
                  </button>

                  {openSections[item.label] && (
                    <div className="ml-2 pl-2 space-y-0.5 border-l border-gray-200 my-1">
                      {item.subItems.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          href={sub.href}
                          className={clsx(
                            "flex items-center justify-between px-3 py-1.5 rounded-md text-sm transition-colors relative",
                            sub.active
                              ? "text-[#e11d48] font-medium bg-red-50/50"
                              : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                          )}
                        >
                          <span className="relative z-10">{sub.label}</span>
                          {/* Badge simulation */}
                          {sub.label === "Cloudz3r" && (
                            <span className="bg-[#e11d48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10">
                              2
                            </span>
                          )}
                          {sub.label === "Analytics" && (
                            <span className="bg-[#e11d48] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full z-10">
                              7
                            </span>
                          )}
                          {/* Pink indicator pill for active report item */}
                          {sub.active && sub.label === "New report" && (
                            <span className="absolute left-0 w-0.5 h-full bg-[#e11d48] rounded-r-full -ml-[9px]"></span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="pt-6 mt-6 border-t border-gray-100">
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-900 rounded-lg"
            >
              <LifeBuoy className="w-4 h-4 mr-3" />
              <span>Help & Support</span>
            </Link>
            <Link
              href="#"
              className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-900 rounded-lg"
            >
              <Settings className="w-4 h-4 mr-3" />
              <span>Settings</span>
            </Link>
          </div>
        </nav>

        {/* Bottom User Profile mockup */}
        <div className="p-4 mt-auto">
          {/* Could put a user card here if needed, design shows icons at bottom left */}
          <div className="flex flex-col gap-4 pl-3">
            <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-xs ring-4 ring-pink-100">
              TB
            </div>
            <Settings className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </aside>
  );
}
