/**
 * Маппинг Material Symbols на Heroicons (kebab-case имена для файлов)
 * Используется для обратной совместимости с существующими компонентами
 */
export const iconMap: Record<string, string> = {
  design_services: "paint-brush",
  bolt: "bolt",
  architecture: "building-office-2",
  smart_toy: "cpu-chip",
  code: "code-bracket",
  done: "check-circle",
  view_kanban: "squares-2x2",
  arrow_outward: "arrow-top-right-on-square",
  precision_manufacturing: "cog-6-tooth",
  arrow_forward: "arrow-right",
  mail: "envelope",
  send: "paper-airplane",
  link: "link",
  keyboard_arrow_down: "chevron-down",
  person: "user",
  sort: "bars-arrow-up",
  notifications: "bell",
  card_giftcard: "gift",
  calendar_month: "calendar-days",
  lock: "lock-closed",
  arrow_back: "arrow-left",
  home: "home",
};

/**
 * Преобразует kebab-case имя иконки в PascalCase для Heroicons React
 * @param name - kebab-case имя иконки (например, "paint-brush")
 * @returns PascalCase имя компонента (например, "PaintBrushIcon")
 */
export function getIconComponentName(name: string): string {
  return `${name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("")}Icon`;
}
