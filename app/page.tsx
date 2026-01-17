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
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <SocialStatsCard />
            </div>

            <div className="col-span-12 md:col-span-3">
              <ReferrerChartCard />
            </div>

            <div className="col-span-12 md:col-span-6 md:row-span-2 h-[580px]">
              <SalesTeamCard />
            </div>

            <div className="col-span-12 md:col-span-6">
              <PlatformValueCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
