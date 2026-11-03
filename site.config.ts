import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "January's Cakes",
  tagline: "3D custom cakes and in person cake decorating workshops in Oakville.",
  category: "3D custom cakes",
  schemaType: "Bakery",
  area: "Oakville, ON",
  siteUrl: "https://januarys-cakes.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#6e3d46" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Custom cakes in Oakville",
    headline: "Cake is art. Let's make yours.",
    subhead: "Sneakers, soccer balls, roller skates, characters, or your pet hamster in cake form. Send a DM with your date and idea and I will turn it into a 3D cake that is totally you.",
    images: [
      { src: "/images/cake-2.jpg", alt: "3D bear cake in a red Mountie uniform" },
      { src: "/images/cake-11.jpg", alt: "Turquoise roller skate cake with a rainbow" },
      { src: "/images/cake-12.jpg", alt: "Scottish football kit cake with a soccer ball" },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: ["3D custom cakes", "Made to order", "1:1 cake workshops", "Oakville and Mississauga"],

  about: {
    title: "Forget basic, go 3D",
    body: [
      "January's Cakes is a home cake studio in Oakville making custom 3D and themed cakes: sneakers, soccer balls, roller skates, football kits, kawaii birthday cakes, and characters of every kind.",
      "I also teach in person cake decorating workshops, one on one or in a small group, so you can learn the tips and tricks yourself.",
    ],
    image: { src: "/images/cake-1.jpg", alt: "3D fawn cake sitting on a cake board" },
  },

  menu: {
    title: "What I make",
    variant: "list",
    showPrices: false,
    priceNote: "Message me for a quote on your date, servings, and design.",
    groups: [
      {
        title: "Custom cakes",
        note: "Quoted by DM",
        items: [
          { name: "3D custom cakes", description: "Sneakers, soccer balls, roller skates, helmets, characters, and more." },
          { name: "Kawaii and themed birthday cakes" },
          { name: "Custom football kit cakes", description: "Your team's colours, with a matching soccer ball." },
          { name: "Buttercream cakes with cupcakes and cake pops" },
        ],
      },
      {
        title: "Workshops",
        items: [
          { name: "In person cake decorating workshop", description: "One on one or as a group. Learn fondant and decorating techniques hands on." },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      { src: "/images/cake-2.jpg", width: 512, height: 640, alt: "Bear cake in a Mountie uniform", caption: "Edible masterpiece", href: "https://www.instagram.com/p/C9lQlucPSXX/" },
      { src: "/images/cake-11.jpg", width: 482, height: 640, alt: "Roller skate cake", caption: "Roller skates cake", href: "https://www.instagram.com/p/DdSloHynCvz/" },
      { src: "/images/cake-12.jpg", width: 480, height: 640, alt: "Scottish football kit cake", caption: "Scottish football kit", href: "https://www.instagram.com/p/DdKbBI-HD7t/" },
      { src: "/images/cake-7.jpg", width: 496, height: 640, alt: "Pink kawaii birthday cake with a smiling face", caption: "Kawaii cake", href: "https://www.instagram.com/p/DeXrxdBS_Tj/" },
      { src: "/images/cake-1.jpg", width: 513, height: 640, alt: "3D fawn cake", caption: "Cake is art", href: "https://www.instagram.com/p/DM5OiL7MqNm/" },
      { src: "/images/cake-10.jpg", width: 480, height: 640, alt: "Football helmet birthday cake", caption: "Football helmet cake", href: "https://www.instagram.com/p/DdU42KgIIuX/" },
      { src: "/images/cake-9.jpg", width: 360, height: 640, alt: "Polka dot cake with black bows", caption: "Cake Picnic, Toronto", href: "https://www.instagram.com/reel/Dd2tmmiS_Xi/" },
      { src: "/images/cake-6.jpg", width: 361, height: 640, alt: "Polka dot cake at the Cake Picnic", caption: "Cake Picnic 2026", href: "https://www.instagram.com/reel/DeaUZM3ycjp/" },
    ],
  },

  instagram: {
    handle: "januarys_cakes",
    embeds: ["https://www.instagram.com/p/DdKbBI-HD7t/"],
    embedsTitle: "Fresh from the studio",
  },

  order: {
    title: "Order your cake in a quick DM",
    intro: "Cake orders and workshop bookings are by Instagram DM. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi January! I would love to order a 3D custom cake.\nOccasion:\nDate needed:\nServings or size:\nFlavour:\nDesign idea (I can send an inspo photo):\nPickup or delivery:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order a custom cake?", a: "Send a DM on Instagram with your date, servings, flavour, and design idea. I will reply with a quote in the chat." },
    { q: "Do you teach cake decorating?", a: "Yes. I offer in person cake decorating workshops, one on one or for a group. Send a DM to ask about dates." },
    { q: "Where are you located?", a: "January's Cakes is a home cake studio in Oakville, Ontario, also making cakes for Mississauga." },
  ],

  contact: {
    area: "Oakville, Ontario",
    socials: [],
  },

  seo: {
    title: "January's Cakes | 3D custom cakes in Oakville",
    description: "3D custom cakes and in person cake decorating workshops in Oakville, Ontario. Sneakers, characters, football kits and more. Order by Instagram DM.",
    keywords: ["3D cakes Oakville", "custom cakes Oakville", "custom cakes Mississauga", "cake decorating workshop Oakville"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
