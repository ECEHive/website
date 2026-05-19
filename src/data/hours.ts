/**
 * Operating hours — single source of truth.
 * Update this file at the start of each semester.
 */

export interface HoursRow {
	days: string;
	time: string;
}

export interface SemesterHours {
	semester: string;
	/** Date range for display, e.g. "May 27 – July 23" */
	period: string;
	hours: HoursRow[];
	note?: string;
}

/**
 * Condensed hours — grouped rows for the homepage HoursDisplay card.
 * Prefer ranges like "Monday – Thursday" where hours are identical.
 */
export const currentHours: SemesterHours = {
	semester: "Summer 2026",
	period: "May 27 – July 23",
	hours: [
		{ days: "Monday – Thursday", time: "10am – 4pm" },
		{ days: "Friday", time: "Closed" },
		{ days: "Saturday – Sunday", time: "Closed" },
	],
	note: "Closed on all Georgia Tech Institute Holidays",
};

/**
 * Day-by-day hours — shown on the Contact/Hours page for clarity.
 */
export const detailedCurrentHours: SemesterHours = {
	semester: currentHours.semester,
	period: "May 27 – July 23, 2026",
	hours: [
		{ days: "Monday", time: "10am – 4pm" },
		{ days: "Tuesday", time: "10am – 4pm" },
		{ days: "Wednesday", time: "10am – 4pm" },
		{ days: "Thursday", time: "10am – 4pm" },
		{ days: "Friday", time: "Closed" },
		{ days: "Saturday", time: "Closed" },
		{ days: "Sunday", time: "Closed" },
	],
	note: currentHours.note,
};
