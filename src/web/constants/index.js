export const footerData = {
  description: "Securely Connecting The World's Devices.",
  linkSections: [
    {
      title: "GET STARTED",
      links: [
        { text: "Download", url: "/" },
        { text: "GitHub", url: "/" },
        { text: "SDK", url: "/" },
        { text: "Partners", url: "/" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { text: "Documentation", url: "/" },
        { text: "Knowledge Base", url: "/" },
        { text: "Community", url: "/" },
        { text: "Getting Started", url: "/" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { text: "Contact", url: "/" },
        { text: "About Us", url: "/" },
        { text: "Careers", url: "/" },
        { text: "Blog", url: "/" },
        { text: "Media Kit", url: "/" },
      ],
    },
  ],
  socialIcons: [
    { src: "./github.svg", alt: "github", url: "/" },
    { src: "./linkedin.svg", alt: "linkedin", url: "/" },
    { src: "./youtube.svg", alt: "youtube", url: "/" },
    { src: "./facebook.svg", alt: "facebook", url: "/" },
    { src: "./twitter.svg", alt: "twitter", url: "/" },
    { src: "./mastodon.svg", alt: "mastodon", url: "/" },
  ],
  bottomLinks: [
    { text: "Terms", url: "/" },
    { text: "Privacy Policy", url: "/" },
  ],
  copyRightText: "© 2023 ZeroTier, Inc. All rights reserved.",
};

export const testimonial = [
  {
    imgPath:
      "https://images.ctfassets.net/upz5g6ntpb42/52S7Xto1wDBF6S1tIuNtPN/032877cb3e351b4ed9dcda47eea933fc/user-icon.png?w=256&h=256&q=80&fm=webp",
    content:
      "In early product development, we needed a way to easily connect our growing IoT product-base to our systems. ZeroTier provided an easy, and reliable way to achieve that, and has been growing with us.",
    name: "Peter Boin, Principal Software Engineer, Allume Energy",
  },
  {
    imgPath:
      "https://images.ctfassets.net/upz5g6ntpb42/52S7Xto1wDBF6S1tIuNtPN/032877cb3e351b4ed9dcda47eea933fc/user-icon.png?w=256&h=256&q=80&fm=webp",
    content:
      "ZeroTier provides a robust and essential backbone for our communications stack.",
    name: "Andrew Lipscomb, Mechatronics Engineer, SwarmFarm Robotics",
  },
  {
    imgPath:
      "https://images.ctfassets.net/upz5g6ntpb42/52S7Xto1wDBF6S1tIuNtPN/032877cb3e351b4ed9dcda47eea933fc/user-icon.png?w=256&h=256&q=80&fm=webp",
    content:
      "Loft Orbital uses ZeroTier to improve interoperability between its offices in the United States and France. It connects our engineers to key resources quickly and easily, which allows our team to focus on making space simple.",
    name: "Peter Boin, Principal Software Engineer, Allume Energy",
  },
];

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
      "ZeroTier's zero-trust networking solution provides scalable security with 256-bit end-to-end encryption.",
    ],
    buttonText: "Get Zero Tier",
    link: "/",
    reverse: false,
    screen: false,
  },
];

export const featuresData = [
  {
    src: "./cloud-icon.webp",
    title: "Individuals",
    data: [
      "Access your computers, NAS, home automation, IP cameras, ham radios or other devices from anywhere",
      "Conveniently share files and data, or even play LAN games with others",
      "Manage secure network access to users of choice",
    ],
  },
  {
    src: "./devops-icon.webp",
    title: "IT Teams",
    data: [
      "Simplify your network stack by unifying VPNs, VLANs, and SD-WANs with one solution",
      "Build, manage, and observe any number of remote, on premise, or cloud networks with one management interfac",
      "Easily provision remote access for all of your users",
    ],
  },
  {
    src: "./game-icon.webp",
    title: "DevOps",
    data: [
      "Quickly build backplane networks spanning multiple cloud providers",
      "Save on performance, storage, and bandwidth",
      "Administrate and debug from anywhere",
      "Secure corporate network overlay and failover layer",
    ],
  },
  {
    src: "./global-network.webp",
    title: "Embedded",
    data: [
      "Enjoy vastly superior network control and functionality",
      "Develop and manage products or services running on their own decentralized networks",
      "Create 4G/5G-capable secure networks for any IoT, edge or embedded device that can operate on 64MB of RAM",
    ],
  },
];

export const servicesData = [
  {
    imageUrl: "./images/img4.webp",
    title: "ZeroTier Enterprise",
    content: 
      "For high-volume VPN, IoT, edge, embedded networking, multi & hybrid cloud, Infrastructure as Code (IaC), and Commercial Use.",
    buttonText: "Contact Sales",
    link: "/",
    reverse: false,
    screen: true,
  },
  {
    imageUrl: "./images/img3.webp",
    title: "Service Providers",
    content: 
      "For hardware and software companies interested in embedding or integrating the ZeroTier platform within their service offering, as well as enterprise-facing channels including Managed Service Providers (MSPs), Resellers, and Systems Integrators.",
    buttonText: "Contact SP Sales",
    link: "/",
    reverse: true,
    screen: false,
  },
];
