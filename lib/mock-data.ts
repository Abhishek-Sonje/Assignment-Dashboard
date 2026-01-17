import { LucideIcon, LayoutGrid, Users, Settings, FileText, Home, PieChart, Star, RotateCcw } from 'lucide-react';

export interface NavItem {
  label: string;
  icon?: any; // Using any for icon components to avoid complex type juggling in mock
  href: string;
  active?: boolean;
  subItems?: { label: string, href: string, active?: boolean }[];
  badge?: number;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Starred', icon: Star, href: '#' },
  { label: 'Recent', icon: RotateCcw, href: '#' },
  { label: 'Sales list', icon: null, href: '#' },
  { label: 'Goals', icon: null, href: '#' },
  { label: 'Dashboard', icon: null, href: '#', active: false },
  { 
    label: 'Codename', 
    href: '#',
    icon: null,
    subItems: [
        { label: 'Shared with me', href: '#' },
        { label: 'Cargo2go', href: '#' },
        { label: 'Cloudz3r', href: '#', active: true }, // The active one in the image
        { label: 'Idioma', href: '#' },
        { label: 'Syllables', href: '#' },
        { label: 'x-Ob', href: '#' },
    ]
  },
  { 
    label: 'Reports', 
    href: '#',
    icon: null,
    subItems: [
        { label: 'Share with me', href: '#' },
        { label: 'Deals by user', href: '#' },
        { label: 'Deal duration', href: '#' },
        { label: 'My reports', href: '#' },
        { label: 'Emails received', href: '#' },
        { label: 'Deal duration', href: '#' },
        { label: 'New report', href: '#', active: true }, // Pink active state
        { label: 'Analytics', href: '#' },
    ]
  },
  { label: 'Manage folders', icon: null, href: '#' },
];

export const SALES_TEAM = [
  { name: 'Armin A.', role: 'Sales', revenue: '$209,633', leads: 41, deals: 118, kpi: 0.84, win: '31%', loss: '12%', total: 29 },
  { name: 'Mikasa A.', role: 'Sales', revenue: '$156,841', leads: 54, deals: 103, kpi: 0.89, win: '39%', loss: '21%', total: 33 },
  { name: 'Eren Y.', role: 'Sales', revenue: '$117,115', leads: 22, deals: 84, kpi: 0.79, win: '32%', loss: '7%', total: 15 },
];

export const TOP_SALES = {
  count: 72,
  topPerformer: 'Mikasa',
};

export const BEST_DEAL = {
  value: '$42,300',
  client: 'Rolf Inc.',
};

export const REVENUE_STATS = {
  total: '$528,976.82',
  change: '+7.9%',
  amount: '$27,335.09',
  period: 'Jun 1 - Aug 31, 2023',
  comparison: 'vs prev. $501,641.73',
};

export const PLATFORM_STATS = [
  { name: 'Dribbble', value: '$227,459', percent: '43%', color: 'text-pink-500' },
  { name: 'Instagram', value: '$142,823', percent: '27%', color: 'text-orange-500' },
  { name: 'Behance', value: '$88,935', percent: '11%', color: 'text-blue-500' },
  { name: 'Google', value: '$37,028', percent: '7%', color: 'text-green-500' },
];

export const REVENUE_MONTHLY = {
  revenue: '$18,552',
  leads: '373',
  winLose: '16% 51/318',
  chartData: [11035, 8901, 14500, 9288, 11000, 7500, 4000] // Mock data points
};

export const QUICK_LIST_ITEMS = [
    {
      id: 1,
      avatar: "https://i.pravatar.cc/150?u=5",
      amount: "$209,633",
      percentage: 39.63,
    },
    {
      id: 2,
      avatar: "https://i.pravatar.cc/150?u=2",
      amount: "$156,841",
      percentage: 29.65,
    },
    {
      id: 3,
      avatar: "https://i.pravatar.cc/150?u=1",
      amount: "$117,115",
      percentage: 22.14,
    },
    {
      id: 4,
      avatar: null,
      amount: "$45,386",
      percentage: 8.58,
      initial: "C",
    },
  ];