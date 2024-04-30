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
    nav: [
      { text: "Главная страница", link: "/" },
      { text: "Статьи", link: "/docs/" },
      { text: "Нотация", link: "/notation/" },
    ],

    sidebar: {
      "/docs": [
        {
          text: "Общее",
          items: [
            
          ],
        },
        {
          text: "Семейства трюков",
          items: [
            { text: "Фишинги/Фиштейлы", link: "/docs/tricks/fishingtail/index"}
          ],
        },
        {
          text: "Статьи на пару минут",
          items: [
            
          ],
        }
      ],
      "/notation": [
        {
          text: "Базовый уровень",
          items: [
            // базово про слоты(без сторон и фаланг), ориентацию руки
            // Basic slot letters usage
            { text: "Основы записи слота", link: "/notation/basic/basicSlot" },
            // * - air
            { text: "Анстейбл слоты", link: "/notation/basic/unstableSlot" },
            
            // [in;out  = !=]
            { text: "Уточнение позиций пальцев", link: "/notation/basic/specialPos" },

            // Hand orientation; Prefix; Name; Suffix; num of spins; Slots
            // промежуточные слоты too
            { text: "Нотация одного элемента", link: "/notation/basic/modifiers" },

            { text: "Модификаторы - префиксы", link: "/notation/basic/prefixes" },
            { text: "Модификаторы - суффиксы", link: "/notation/basic/suffixes" },

            // > ~> >~ ~ pass 12-23>34>23>12
            { text: "Соеденение трюков, гибриды", link: "/notation/basic/connecting" },

            // not O type💀
            { text: "Фингеркроссы", link: "/notation/basic/fc" },
          ],
        },
        {
          text: "Продвинутый уровень",
          items: [
            // 1b2bsp
            { text: "Нотация фаланг и сторон пальцев", link: "/notation/advanced/phalanx" },
            
            // .
            { text: "Dot нотация", link: "/notation/advanced/dotNotation" },

            // nerd stupd
            { text: "Алгебра модификаторов", link: "/notation/advanced/algebra" },

            { text: "PushSpinCatch", link: "/notation/advanced/pscNotation" },

            { text: "Wiper in/out", link: "/docs/notation/advanced/wiperInOut" },
          ],
        },
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
