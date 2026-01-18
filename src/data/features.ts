export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    title: "Personal Profiles",
    description: "Create beautiful profiles for everyone you care about. Store photos, birthdays, anniversaries, and personal notes about their interests — all in one organized place.",
    icon: "person",
  },
  {
    title: "Smart Prioritization",
    description: "Never wonder who to celebrate next. The app automatically sorts and highlights upcoming dates, so you always know who needs your attention.",
    icon: "sort",
  },
  {
    title: "Custom Reminders",
    description: "Set reminders that work for you. Get notified a week ahead, a day before, or both — choose the timing that fits your schedule.",
    icon: "notifications",
  },
  {
    title: "Gift Ideas & History",
    description: "Build wish lists for future gifts and track what you've already given. Never repeat a gift or struggle to find the perfect present again.",
    icon: "card_giftcard",
  },
  {
    title: "Visual Calendar & Search",
    description: "See your entire year at a glance with an intuitive event grid. Or find anything instantly with powerful search — people, dates, or gift ideas.",
    icon: "calendar_month",
  },
  {
    title: "Complete Privacy",
    description: "Your data stays on your device, period. No cloud sync, no servers, no tracking. What you store is yours alone.",
    icon: "lock",
  },
];
