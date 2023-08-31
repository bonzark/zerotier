export const navbarData = [
  {
    name: "Features",
    link: "/",
    dropdown: false,
  },
  {
    name: "Pricing",
    link: "/",
    dropdown: false,
  },
  {
    name: "Download",
    link: "/",
    dropdown: false,
  },
  {
    name: "Company",
    dropdown: true,
  },
  {
    name: "Support",
    dropdown: true,
  },
];

export const whyUsData = [
  {
    imageUrl: "./images/img1.webp",
    title: "It just works",
    content: [
      "ZeroTier combines the capabilities of <strong>VPN</strong> and <strong>SD-WAN</strong>, simplifying network management. Enjoy flexibility while avoiding costly hardware vendor lock in.",
    ],
    buttonText: "Learn More >",
    link: "/",
    reverse: true,
    screen: true,
  },
  {
    imageUrl: "./images/img2.webp",
    title: "Speed, flexibility, and security",
    content: [
      "Set up ZeroTier in minutes with remote, automated deployment.", 
      "Emulates Layer 2 Ethernet with multipath, multicast, and bridging capabilities.", 
      "ZeroTier's zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.</p>",
    ],
    buttonText: "Get Zero Tier",
    link: "/",
    reverse: false,
    screen: false,
  },
];
