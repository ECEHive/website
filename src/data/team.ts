/**
 * Team data — IDC staff, exec board, and MPI groups.
 * Update each semester. Consumed by the Contact page team section.
 */

export interface StaffMember {
	name: string;
	role: string;
}

export interface MpiGroup {
	area: string;
	mpis: string[];
	/** Optional dedicated email alias for this area */
	contact?: string;
}

export const idcStaff: StaffMember[] = [
	{ name: "Kevin Pham", role: "IDC Director" },
	{ name: "Stevie Limon", role: "Assistant Director" },
	{ name: "Jacob Dudik", role: "GTA" },
	{ name: "Amanda Wang", role: "UTA" },
	{ name: "Andrew Lemons", role: "UTA" },
	{ name: "Nem Rentz", role: "UTA" },
	{ name: "William Castro", role: "UTA" },
	{ name: "Eleanor Tracy", role: "UTA" },
];

export const execBoard: StaffMember[] = [
	{ name: "Anupama Bagade", role: "Strategy" },
	{ name: "Colin Hartigan", role: "Operations" },
	{ name: "Veronica Mok", role: "Operations" },
	{ name: "Amanda Tang", role: "Events" },
	{ name: "Laura Huff", role: "Outreach" },
];

export const mpiGroups: MpiGroup[] = [
	{
		area: "Benchtop Electronics",
		mpis: ["Timothy Weigman", "Seongjin Kim", "Barnabe Marty", "Madhav Gulati"],
	},
	{
		area: "Laser Cutting",
		mpis: [
			"Jorge Aguilar",
			"Rudra Goel",
			"Abigail Martin",
			"Hannah Hsiao",
			"Pace Gustinella",
			"AB Alsaeed",
		],
	},
	{
		area: "3D Printing",
		mpis: [
			"Marcy Bibidakis",
			"Ray Toma",
			"Matthew Lyon",
			"Jeet Ajmani",
			"Catherine Hare",
		],
	},
	{
		area: "PCB Fabrication",
		mpis: ["Aiden Lee", "Katie Schoeppel"],
		contact: "hive-pcb@ece.gatech.edu",
	},
	{
		area: "Crafts",
		mpis: [
			"Alexsandra Casanova Chavez",
			"Arkin Worlikar",
			"Max Zhu",
			"Audrey Vu",
			"Peter Chen",
			"Yasmine Green",
		],
	},
	{
		area: "Machine Shop",
		mpis: [
			"Luke Griffin",
			"Mit Patel",
			"Matthew Alexander",
			"Alexander Graham",
			"Jessica Liu",
		],
	},
	{
		area: "Embedded Systems",
		mpis: ["Chase Sun", "Robin Liu"],
		contact: "hiveembeddedsystems@groups.gatech.edu",
	},
];
