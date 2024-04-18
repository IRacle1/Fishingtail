import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IRacle",
  description: "Записки сумашедшего 25/8.",
  cleanUrls: true,
  head: [["link", { rel: "icon", href: "/logo.webp" }]],
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Главная страница", link: "/" },
      { text: "Статьи", link: "/docs/" },
    ],

    sidebar: {
      "/docs": [
        {
          text: "Гайды по нотации",
          items: [
            // базово про слоты(без сторон и фаланг), ориентацию руки
            // Basic slot letters usage
            { text: "База. Основы записи слота", link: "/docs/notation/basicSlot" },
            // * - air
            { text: "База. Анстейбл слоты", link: "/docs/notation/unstableSlot" },
            // 1b2bsp
            { text: "Продвинутый. Нотация фаланг и сторон пальцев", link: "/docs/notation/phalanx" },
            // [in;out  = !=]
            { text: "База. Уточнение позиций пальцев", link: "/docs/notation/specialPos" },
            // .
            { text: "Продвинутый. Dot нотация", link: "/docs/notation/dotNotation" },
            // Hand orientation; Prefix; Nam/docs/notatione; Suffix; num of spins; Slots
            // промежуточные слоты too
            { text: "Нотация одного элемента", link: "/docs/notation/modifiers" },
            { text: "База. Модификаторы - префиксы", link: "/docs/notation/prefixes" },
            { text: "База. Модификаторы - суффиксы", link: "/docs/notation/suffixes" },

            // > ~> >~ ~ pass 12-23>34>23>12
            { text: "База. Соеденение трюков, гибриды", link: "/docs/notation/connecting" },

            // nerd stupd
            { text: "Продвинутый. Алгебра модификаторов", link: "/docs/notation/algebra" },

            // not O type💀
            { text: "База. Фингеркроссы", link: "/docs/notation/fc" },

            { text: "Продвинутый. PushSpinCatch", link: "/docs/notation/pscNotation" },
            { text: "Продвинутый???. Wiper in/out", link: "/docs/notation/wiper_in_out" },


          ],
        },
        {
          text: "Семейства трюков",
          items: [
            { text: "Фишинги/Фиштейлы", link: "/docs/tricks/fishingtail/index"}
          ]
        }
      ],
      "a": [

      ]
    },
    logo: "/logo.webp",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/IRacle1",
      },
      { icon: "discord", link: "https://discord.com/users/532151807019843594" },
    ],
    footer: {
      message: 'Долистал так низко? Харош. Может лучше долистаешь до момента когда твоя жизнь пошла по накатаной?',
    },
    outline: { label: 'Содержание' },

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    lastUpdated: {
      text: 'Обновлено'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
  },
});
