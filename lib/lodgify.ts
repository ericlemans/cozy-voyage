const BASE = 'https://cozy-voyage.lodgify.com';

export const LODGIFY = {
  all: (locale: string) =>
    `${BASE}/${locale}/4578016/alle-objekte`,

  city: (locale: string, city: string) =>
    `${BASE}/${locale}/4578016/alle-objekte?adults=1&sort=price&city=${city}`,

  berlin: (locale: string) =>
    `${BASE}/${locale}/4578017/cozy-voyage-stylish-135sqm-at-kudamm`,

  dresdenfk1: (locale: string) =>
    `${BASE}/${locale}/4588121/cozy-voyage-frauenkirche-1-ruhig-und-zentral`,

  dresdenfk2: (locale: string) =>
    `${BASE}/${locale}/4588223/cozy-voyage-frauenkirche-2-ruhig-und-zentral`,

  dresdenaltstadt: (locale: string) =>
    `${BASE}/${locale}/4693618/zentrum-der-altstadt-fur-8-personen-cozy-voyage`,
} as const;
