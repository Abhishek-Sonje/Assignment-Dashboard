"use client"
import { useState } from "react";
import { SALES_TEAM } from "@/lib/mock-data";
import Avatar from "@/components/ui/Avatar";
import { ChevronUp, ChevronDown, TrendingUp, Instagram, Dribbble } from "lucide-react";

export default function SalesTeamCard() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number | null) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm h-full">
      <div className="grid grid-cols-12 text-xs text-gray-400 font-medium mb-4 px-2">
        <div className="col-span-3">Sales</div>
        <div className="col-span-3">Revenue</div>
        <div className="col-span-2 text-center">Leads</div>
        <div className="col-span-2 text-center">KPI</div>
        <div className="col-span-2 text-center">W/L</div>
      </div>

      <div className="space-y-4">
        {SALES_TEAM.map((member, idx) => (
          <div key={member.name}>
            {/* Main Row */}
            <div className="grid grid-cols-12 items-center px-2 py-2 hover:bg-gray-50 shadow-md rounded-xl transition-colors group">
              <div className="col-span-3 flex items-center gap-3">
                <Avatar
                  src={`https://i.pravatar.cc/150?u=${idx + 10}`}
                  size="sm"
                />
                <span className="text-sm font-semibold text-gray-700">
                  {member.name}
                </span>
              </div>
              <div className="col-span-3 text-sm font-bold text-gray-800">
                {member.revenue}
              </div>
              <div className="col-span-2 flex justify-center">
                <div className="bg-black text-white text-xs font-bold w-8 h-6 rounded-lg flex items-center justify-center">
                  {member.leads}
                </div>
                <span className="text-xs text-gray-400 ml-2 py-1">
                  {member.deals}
                </span>
              </div>
              <div className="col-span-2 text-center text-sm text-gray-600 font-medium">
                {member.kpi}
              </div>
              <div className="col-span-2 flex items-center justify-between pl-2">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-700">
                  <span>{member.win}</span>
                  <span className="font-normal text-gray-400">
                    {member.total}
                  </span>
                </div>
                {/* Expand/Collapse button */}
                <button
                  onClick={() => toggleExpand(idx)}
                  className="w-6 h-6 bg-[#E11D48] text-white rounded-full flex items-center justify-center shadow-md -mr-2 hover:bg-[#BE123C] transition-colors"
                >
                  {expandedIndex === idx ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Drawer */}
            {expandedIndex === idx && (
              <div className="mt-3 bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 animate-in slide-in-from-top duration-300">
                {/* Badges */}
                <div className="flex gap-3 mb-6">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                    <span>Top sales</span>
                    <span>💪</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                    <span>Sales streak</span>
                    <span>🔥</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-gray-700">
                    <span>Top review</span>
                    <span>👍</span>
                  </div>
                </div>

                {/* Work with platforms */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-800 mb-4">
                    Work with platforms
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {/* Dribbble */}
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-500 font-bold text-xs">
                            <Dribbble/>
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Dribbble
                        </span>
                      </div>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center justify-between p-3 bg-white rounded-xl">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            <Instagram className="w-5 h-5" />
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          Instagram
                        </span>
                      </div>
                    </div>

                    {/* Google */}
                    <div className="p-3 bg-white rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-lg">G</span>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            Google
                          </span>
                        </div>
                        <div className="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          $156,841
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-800">
                          14.1%
                        </span>
                        <span className="text-gray-400">$22,116</span>
                      </div>
                    </div>

                    {/* Medium/Other platform */}
                    <div className="p-3 bg-white rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">
                              ●●
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            Other
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-800">
                          28.1%
                        </span>
                        <span className="text-gray-400">$44,072</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-800">
                          5.4%
                        </span>
                        <span className="text-gray-400">$8,468</span>
                      </div>
                    </div>

                    <div className="p-3 bg-white rounded-xl">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-gray-800">
                          7.1%
                        </span>
                        <span className="text-gray-400">$11,135</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Summary */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-gray-800">
                      45.3%
                    </span>
                    <span className="text-xl text-gray-300">$71,048</span>
                  </div>
                </div>

                {/* Sales Dynamic Chart */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-bold text-gray-800">
                      Sales dynamic
                    </h4>
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                  </div>

                  {/* Simple chart representation */}
                  <div className="relative h-24 bg-white rounded-xl p-4">
                    {/* Week labels */}
                    <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                      <span>W 1</span>
                      <span>W 3</span>
                      <span>W 5</span>
                      <span>W 7</span>
                      <span>W 9</span>
                      <span>W 11</span>
                    </div>

                    {/* Chart lines (simplified) */}
                    <div className="relative h-12">
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 50"
                        preserveAspectRatio="none"
                      >
                        {/* Line 1 - Pink */}
                        <path
                          d="M 0 35 Q 50 30, 100 32 T 200 28 T 300 25 T 400 20"
                          fill="none"
                          stroke="#E11D48"
                          strokeWidth="2"
                        />
                        {/* Line 2 - Orange */}
                        <path
                          d="M 0 40 L 400 40"
                          fill="none"
                          stroke="#FB923C"
                          strokeWidth="2"
                        />
                        {/* Line 3 - Light Pink */}
                        <path
                          d="M 0 38 Q 50 36, 100 37 T 200 35 T 300 33 T 400 30"
                          fill="none"
                          stroke="#FCA5A5"
                          strokeWidth="2"
                          opacity="0.5"
                        />
                      </svg>

                      {/* Data points */}
                      <div className="absolute inset-0">
                        <div className="absolute left-[30%] top-[40%] w-2 h-2 bg-blue-500 rounded-full border-2 border-white"></div>
                        <div className="absolute left-[60%] top-[50%] w-2 h-2 bg-pink-500 rounded-full border-2 border-white"></div>
                        <div className="absolute right-[10%] top-[30%] w-2 h-2 bg-blue-400 rounded-full border-2 border-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
