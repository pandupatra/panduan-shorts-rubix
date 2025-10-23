import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Pengantar",
    href: "/pengantar"
  },
  {
    title: "Apa itu Shorts?",
    href: "/bab-1",
    items: [
      {
        title: "Definisi dan Karakteristik Utama dari Shorts",
        href: "/definisi-dan-karakteristik-utama-shorts"
      },
      {
        title: "Psikologi di Balik Dominasi Video Pendek",
        href: "/psikologi-dibalik-dominasi-video-pendek"
      }
    ]
  },
  {
    title: "Peran Video Pendek",
    href: "/bab-2",
    items: [
      {
        title: "Definisi dan Karakteristik utama dari Shorts",
        href: ""
      }
    ]
  },
  {spacer: true},
  {
    title: "Tahap Pra-Produksi",
    heading: "Produksi Video Pendek",
    href: "/bab-3/tahap-pra-produksi"
  },
  {
    title: "Tahap Produksi",
    href: "/bab-3/tahap-produksi"
  },
  {
    title: "Tahap Pasca-Produksi (Editing)",
    href: "/bab-3/tahap-pasca-produksi"
  },
  {spacer: true},
  {
    title: "Galeri Inspirasi",
    href: ""
  },
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Changelog",
        href: "/changelog",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Navigation",
    href: "/navigation",
    heading: "Documents",
  },
  {
    title: "Structure",
    href: "/structure",
    items: [
      {
        title: "Deep",
        href: "/deep",
        items: [
          {
            title: "Deeper",
            href: "/deeper",
            items: [
              {
                title: "Even deeper",
                href: "/even-deeper",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Markdown",
    href: "/markdown",
    heading: "Components",
    items: [
      {
        title: "Cards",
        href: "/cards",
      },
      {
        title: "Diagrams",
        href: "/diagrams",
      },
      {
        title: "Filetree",
        href: "/filetree",
      },
      {
        title: "Lists",
        href: "/lists",
      },
      {
        title: "Maths",
        href: "/maths",
      },
      {
        title: "Notes",
        href: "/notes",
      },
      {
        title: "Steps",
        href: "/steps",
      },
      {
        title: "Table",
        href: "/table",
      },
      {
        title: "Tabs",
        href: "/tabs",
      },
    ],
  },
]
