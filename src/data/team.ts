/**
 * Team data — IDC staff, exec board, and MPI groups.
 * Update each semester. Consumed by the Contact page team section.
 */

export interface StaffMember {
	name: string;
	role: string;
	/** GT account username (e.g. "kpham30") — used to resolve a profile photo if one exists */
	username?: string;
}

export interface MpiGroup {
	area: string;
	mpis: string[];
	/** Optional dedicated email alias for this area */
	contact?: string;
}

export const idcStaff: StaffMember[] = [
	{ name: "Kevin Pham", role: "IDC Director", username: "kpham30" },
	{ name: "Stevie Limon", role: "Assistant Director", username: "elimon3" },
	{ name: "Amanda Wang", role: "UTA", username: "awang409" },
	{ name: "Andrew Lemons", role: "UTA", username: "alemons8" },
	{ name: "Nem Rentz", role: "UTA", username: "erentz3" },
	{ name: "William Castro", role: "UTA", username: "wcastro8" },
	{ name: "Eleanor Tracy", role: "UTA", username: "etracy8" },
];

export const execBoard: StaffMember[] = [
	{
		name: "Alexey Tatarinov",
		role: "Director of Strategy",
		username: "atatarinov3",
	},
	{ name: "Amulya Jain", role: "Director of Technology", username: "ajain842" },
	{ name: "Femke Kovoor", role: "Director of Community", username: "fkovoor3" },
	{
		name: "Sameer Godbole",
		role: "Director of Human Resources",
		username: "sgodbole9",
	},
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
