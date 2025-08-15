// lib/i18n.ts
export type Lang = "en" | "ru";

// Глубокий словарь: на любом уровне либо строка, либо следующий слой словаря
type DeepDict = { [key: string]: string | DeepDict };

const dict: Record<Lang, DeepDict> = {
  en: {
    nav: {
      solution: "Solution",
      methodology: "Methodology",
      templates: "Templates",
      legal: "Legal-first",
      pricing: "Pricing",
      studio: "Studio",
      about: "About",
    },
    hero: {
      title: "Launch Telegram Mini Apps in 14 Days",
      subtitle:
        "UI/logic/monetization templates, AI tools, legal-first and CI/CD — from idea to publish.",
    },
    cta: {
      requestTemplate: "Request a Template",
      getConsulting: "Get Consulting",
      becomePublisher: "Become a Publisher",
      openInStudio: "Open in Studio",
    },
    faqTitle: "FAQ",
  },
  ru: {
    nav: {
      solution: "Решение",
      methodology: "Методология",
      templates: "Шаблоны",
      legal: "Legal-first",
      pricing: "Цены",
      studio: "Студия",
      about: "О нас",
    },
    hero: {
      title: "Платформа запуска Mini Apps за 14 дней",
      subtitle:
        "Шаблоны, AI, legal-first и CI/CD — от идеи до релиза.",
    },
    cta: {
      requestTemplate: "Запросить шаблон",
      getConsulting: "Получить консультацию",
      becomePublisher: "Стать паблишером",
      openInStudio: "Открыть в Студии",
    },
    faqTitle: "Частые вопросы",
  },
};

export const t = (lang: Lang, key: string): string => {
  const parts = key.split(".");
  let cur: string | DeepDict | undefined = dict[lang];

  for (const p of parts) {
    if (cur && typeof cur === "object" && p in cur) {
      cur = (cur as DeepDict)[p];
    } else {
      return key; // ключ не найден — вернуть исходный
    }
  }
  return typeof cur === "string" ? cur : key;
};
