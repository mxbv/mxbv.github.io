export interface Contact {
  type: string;
  label: string;
  value: string;
  href: string;
  icon: string;
}

export const contacts: Contact[] = [
  {
    type: "email",
    label: "Email",
    value: "max.qb@icloud.com",
    href: "mailto:max.qb@icloud.com",
    icon: "mail",
  },
  {
    type: "github",
    label: "GitHub",
    value: "@mxbv",
    href: "https://github.com/mxbv",
    icon: "code",
  },
  {
    type: "telegram",
    label: "Telegram",
    value: "t.me/siliconred",
    href: "https://t.me/siliconred",
    icon: "send",
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "@maximdev",
    href: "http://linkedin.com/in/maximdev",
    icon: "link",
  },
];
