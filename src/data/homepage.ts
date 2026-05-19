/**
 * Homepage-specific content data.
 * Keeps index.astro focused on layout rather than embedded content.
 */

export interface Stat {
	value: string;
	label: string;
	icon: string;
}

export interface EquipmentHighlight {
	icon: string;
	title: string;
	description: string;
	href: string;
}

export const stats: Stat[] = [
	{ value: "6+", label: "Equipment Categories", icon: "🛠️" },
	{ value: "Free", label: "For GT Students, Faculty, and Staff", icon: "🎓" },
	{ value: "200+", label: "Volunteer Peer Instructors", icon: "👩‍🏫" },
	{ value: "25+", label: "Workshops per Semester", icon: "🎉" },
];

export const equipmentHighlights: EquipmentHighlight[] = [
	{
		icon: "🖨️",
		title: "3D Printing",
		description:
			"FDM and resin printers for rapid prototyping, models, and mechanical parts.",
		href: "/explore#3d-printing",
	},
	{
		icon: "🔆",
		title: "Laser Cutting",
		description:
			'Two CO₂ laser cutters (32"×18" bed) plus a Fablight 4500 fiber laser for cutting metals.',
		href: "/explore#laser-cutting",
	},
	{
		icon: "⚡",
		title: "Electronics Benchtop",
		description:
			"24 individual benchtops with soldering, oscilloscopes, function generators, power supplies, and more.",
		href: "/explore#electronics",
	},
	{
		icon: "🟢",
		title: "PCB Fabrication",
		description: "In-house PCB milling and laser etching with LPKF tools.",
		href: "/explore#pcb-fabrication",
	},
	{
		icon: "✂️",
		title: "Crafts Area",
		description:
			"Silhouette Cameo vinyl cutters, dye sublimation, sewing, and a button press.",
		href: "/explore#crafts--textiles",
	},
	{
		icon: "🪚",
		title: "Machine Shop",
		description:
			"Miter saw, drill press, band saw, scroll saw, belt sanders, and a sandblasting booth.",
		href: "/explore#machine-shop",
	},
];
