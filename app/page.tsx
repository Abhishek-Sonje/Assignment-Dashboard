import TopControls from "@/components/dashboard/TopControls";
import RevenueCard from "@/components/dashboard/RevenueCard";
import MiniStats from "@/components/dashboard/MiniStats";
import SocialStatsCard from "@/components/dashboard/SocialStatsCard";
import ReferrerChartCard from "@/components/dashboard/ReferrerChartCard";
import SalesTeamCard from "@/components/dashboard/SalesTeamCard";
import PlatformValueCard from "@/components/dashboard/PlatformValueCard";
import SalesDynamicCard from "@/components/dashboard/SalesDynamicCard";
import Header from "@/components/Header";
import Avatar from "@/components/ui/Avatar"; // Ensure used if needed
import QuickItem from "@/components/dashboard/QuickItem";

export default function DashboardPage() {
  return (
    <main className="flex-1 overflow-y-auto px-3 pb-3 bg-[#f2eeed] relative h-full">
      <Header />
      <div className="px-8 pb-12 pt-6  bg-[#Fafafa] rounded-4xl mx-auto">
        <TopControls />

        {/* Main Grid */}
        <div className="flex flex-col gap-6">
          {/* Top Row */}
          <div>
            <div className="grid grid-cols-12 gap-6 ">
              <RevenueCard />
              <MiniStats />
            </div>
            <QuickItem />
          </div>
          {/* Middle Row */}
          <div className="grid grid-cols-12 gap-6 h-[280px]">
            <div className="col-span-12 md:col-span-3">
              <SocialStatsCard />
            </div>
            <div className="col-span-12 md:col-span-3">
              <ReferrerChartCard />
            </div>
            <div className="col-span-12 md:col-span-6">
              <SalesTeamCard />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-12 gap-6 h-[320px]">
            <div className="col-span-12 md:col-span-4">
              <PlatformValueCard />
            </div>
            <div className="col-span-12 md:col-span-8">
              <SalesDynamicCard />
            </div>
          </div>

          {/* Bottom Footer User Row (from design, bottom left) */}
          <div className="flex items-center gap-4 mt-2 mb-8">
            <Avatar src="https://i.pravatar.cc/150?u=50" size="sm" />
            <div className="flex items-center gap-12 text-sm font-semibold text-gray-700 bg-white px-6 py-3 rounded-full shadow-sm">
              <span>Eren Y.</span>
              <span className="font-normal text-gray-500">$117,115</span>

              <div className="flex items-center gap-6">
                <span className="bg-black text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-lg">
                  22
                </span>
                <span className="text-gray-400">84</span>
                <span className="text-gray-400">0.79</span>
                <div className="flex items-center gap-2">
                  <span>32%</span>
                  <span className="bg-gray-800 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                    ?
                  </span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-500 text-xs">
                    15
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
