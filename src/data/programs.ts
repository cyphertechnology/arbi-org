import {
  Heart,
  Users,
  HandHeart,
  Leaf,
  Shield,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

import imgHealing from "@/assets/17.jpg";
import imgLeadership from "@/assets/20.jpg";
import imgCommunity from "@/assets/2.jpg";
import imgResilience from "@/assets/6.jpg";
import imgStewardship from "@/assets/5.jpg";
import imgApda from "@/assets/19.jpg";

export type ProgramColor =
  | "primary"
  | "teal"
  | "gold"
  | "destructive"
  | "coral"
  | "accent";

export interface Program {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  description: string;
  color: ProgramColor;
  image: string;
  projects: string[];
  /** Route for "Read more" — defaults to /programs#id */
  readMorePath?: string;
  isSpecialPage?: boolean;
}

export const programs: Program[] = [
  {
    id: "healing-peace",
    icon: Heart,
    title: "Healing, Peace-Building and Reconciliation",
    shortTitle: "Healing & Peace",
    tagline: "Program 1",
    summary:
      "Facilitating genuine healing and reconciliation through community-based psychosocial support, ethnic conflict healing, and early warning systems.",
    description:
      "ARBI facilitates genuine healing and reconciliation by empowering influential leaders and community members through mental health and psychosocial support initiatives that restore dignity, trust, and social cohesion in conflict-affected communities.",
    color: "primary",
    image: imgHealing,
    projects: [
      "Community Based Socio-therapy( CBS)-Mvura Nkuvure",
      "Healing Hearts Transforming Nations(HHTN)/Healing the Wounds of Ethnic Conflicts(HWEC)",
      "Early warning and genocide ideology prevention and fighting",
      "Marriage and Family therapy",
      "Self-Care and Debriefing",
    ],
  },
  {
    id: "abcd",
    icon: Users,
    title: "Asset Based Community Development(ABCD)",
    shortTitle: "ABCD",
    tagline: "Program 2",
    summary:
      "Empowering communities to identify and mobilize their own assets, gifts, and resources for sustainable, locally-driven development.",
    description:
      "ARBI empowers community members as the assets, resources, and strengths of their own communities — enabling them to take ownership of their development through asset-based approaches that unlock local potential and foster self-reliance.",
    color: "gold",
    image: imgCommunity,
    projects: [
      "Ibiraro by'Ubukire (Bridges to Wealth)",
      "The gift that releases(GTR)",
      "Socio-Cultural Community Based Tourism(SCCBT)",
    ],
  },
  {
    id: "baho",
    icon: HandHeart,
    title: "Bridges for Amazing Hope(BAHO)",
    shortTitle: "BAHO",
    tagline: "Program 3",
    summary:
      "Building bridges of hope through education, rights protection, youth resilience, and integral rehabilitation for vulnerable populations.",
    description:
      "BAHO creates pathways of hope for communities affected by conflict and poverty by promoting education, protecting the rights of women and children, strengthening youth resilience, and supporting integral rehabilitation and reintegration.",
    color: "teal",
    image: imgResilience,
    projects: [
      "Promoting Education",
      "Protection of women and children's rights",
      "Promoting Resilience Among Youth",
      "Integral Rehabilitation and Reintegration",
    ],
  },
  {
    id: "creation-stewardship",
    icon: Leaf,
    title: "Creation Stewardship Program",
    shortTitle: "Creation Stewardship",
    tagline: "Program 4",
    summary:
      "Promoting responsible stewardship of creation through environmental conservation, sustainable practices, and community-based initiatives.",
    description:
      "ARBI promotes responsible stewardship of creation through environmental conservation, sustainable practices, and community-based initiatives that protect and preserve natural resources for future generations. In this regard, ARBI advocates for maintaining a sustainable and balanced ecosystem where life in all its diversity can flourish. In response, ARBI supports the following activities:",
    color: "destructive",
    image: imgStewardship,
    projects: [
      "Community Reforestation and Tree-Planting Campaigns – Restoring degraded environments and improving biodiversity through large-scale tree planting and community forest protection initiatives.",
      "Water Source Protection and Conservation Programs – Safeguarding rivers, wetlands, springs, and other water resources through conservation, restoration, and sustainable usage practices.",
      "Environmental Education and Stewardship Training – Equipping communities, schools, churches, and local leaders with knowledge and practical skills for sustainable environmental management.",
      "Climate Resilience and Sustainable Livelihood Projects – Promoting climate-smart agriculture, water conservation, and eco-friendly income-generating activities that strengthen community resilience.",
      "Waste Management and Community Clean-Up Initiatives – Encouraging proper waste disposal, recycling, sanitation, and pollution reduction to create healthier and cleaner communities.",
      "Advocacy Against Environmental Degradation and Exploitation – Monitoring and raising awareness on activities such as illegal deforestation, pollution, and destructive land use practices that threaten ecosystems and community well-being",
    ],
  },
  {
    id: "leadership",
    icon: Shield,
    title: "Abundant Leadership Development",
    shortTitle: "Leadership Development",
    tagline: "Program 5",
    summary:
      "Developing local servant leaders who transform communities through ethical, sustainable, and people-centered solutions.",
    description:
      "ARBI recognizes both the harm caused by toxic leadership—including exploitation, corruption, and violence—and the positive impact of visionary servant leadership in promoting reconciliation, expanding economic opportunities, and uplifting underprivileged and marginalized communities. ARBI therefore promotes and develops local servant leaders who can transform their communities through ethical, sustainable, and people-centered solutions.",
    color: "coral",
    image: imgLeadership,
    projects: [
      "Servant Leadership — ARBI promotes values-based servant leadership that encourages leaders and public officials to prioritize ethical service, humility, accountability, and the well-being of communities above personal or political interests.",
      "Active Bystandership Development (SINDEBERA) — ARBI promotes a culture of courage, compassion, and active bystandership rooted in the Good Samaritan attitude, encouraging individuals to support others, respond to those in need, and take responsible action against harm and injustice.",
      "Transparency and Human Rights Watching — ARBI promotes transparency and the protection of human rights by monitoring, documenting, and reporting human rights violations and corruption with integrity, justice, and accountability.",
      "Africa Peace and Development Academy (APDA) — A proposed multidisciplinary institution dedicated to advancing peacebuilding, ethical leadership, education, and sustainable development in North Kivu, DRC. See dedicated APDA page for full details.",
    ],
  },
  {
    id: "apda",
    icon: GraduationCap,
    title: "Africa Peace and Development Academy (APDA)",
    shortTitle: "APDA",
    tagline: "Program 6",
    summary:
      "A proposed multidisciplinary institution advancing peacebuilding, ethical leadership, education, and sustainable development in North Kivu, DRC.",
    description:
      "The Africa Peace and Development Academy (APDA) is a proposed multidisciplinary institution dedicated to advancing peacebuilding, ethical leadership, education, economic empowerment, and sustainable development in North Kivu Province, Democratic Republic of Congo. APDA envisions transforming a region affected by conflict and instability into a center for learning, innovation, entrepreneurship, reconciliation, and regional cooperation.\n\nRooted in the principle of integral development, APDA seeks to promote the holistic growth of individuals and communities by strengthening education, livelihoods, social cohesion, health, environmental stewardship, and civic responsibility. The academy aims to equip young people, women, community leaders, and vulnerable populations with the skills, knowledge, and opportunities needed to build resilient and self-sustaining communities.\n\nSupported by modern infrastructure including research facilities, student housing, renewable energy systems, clean water services, and innovation hubs, APDA aims to serve as a model for community transformation and sustainable development across the region.",
    color: "accent",
    image: imgApda,
    readMorePath: "/programs/apda",
    isSpecialPage: true,
    projects: [
      "A School of Peace, Governance and Leadership — focused on peacebuilding, mediation, human rights, and accountable governance.",
      "A Technical and Vocational Training Center — providing practical skills for employment and entrepreneurship.",
      "An Agricultural Innovation and Food Security Institute — promoting sustainable agriculture and rural development.",
      "A Women and Youth Empowerment Center — supporting entrepreneurship, leadership, and social inclusion.",
      "A Health and Trauma Healing Center — addressing physical and psychological recovery from conflict.",
      "A Center for Science, Technology and Innovation — preparing youth for the digital economy.",
      "An Environmental and Natural Resource Institute — advancing conservation and sustainable resource management.",
      "A Cultural and Arts Center — promoting identity, unity, creativity, and healing through culture.",
    ],
  },
];

export const programNavItems = programs.map((program) => ({
  name: program.title,
  shortName: program.shortTitle,
  path: program.readMorePath ?? `/programs#${program.id}`,
}));

export const getProgramColorClasses = (color: ProgramColor) => {
  const map: Record<ProgramColor, { bg: string; text: string }> = {
    primary: { bg: "bg-primary/10", text: "text-primary" },
    teal: { bg: "bg-teal/10", text: "text-teal" },
    gold: { bg: "bg-gold/10", text: "text-gold" },
    destructive: { bg: "bg-destructive/10", text: "text-destructive" },
    coral: { bg: "bg-coral/10", text: "text-coral" },
    accent: { bg: "bg-accent/10", text: "text-accent" },
  };
  return map[color];
};

export const getProgramReadMorePath = (program: Program) =>
  program.readMorePath ?? `/programs#${program.id}`;
