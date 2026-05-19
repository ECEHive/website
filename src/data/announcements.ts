/**
 * Site-wide announcement banner — single source of truth.
 *
 * To update the announcement:
 *  1. Change `message` (and optionally `href` / `linkText`).
 *  2. Bump `id` — this invalidates every user's dismissal so the new
 *     message is shown again to everyone.
 *  3. Set `active: false` to hide the banner globally without removing it.
 *  4. Use `showAfter` / `hideAfter` (ISO date strings, YYYY-MM-DD) for
 *     automatic date-based visibility — evaluated client-side on each load.
 *
 * The strip is rendered hidden in the HTML and revealed by JS only when all
 * conditions pass (active, within date range, not dismissed by user). This
 * prevents any flash of a banner the user already dismissed.
 */
export interface Announcement {
	/** Unique ID — stored in localStorage to track dismissal.
	 *  Bump this whenever you want the new message shown to all users again. */
	id: string;
	/** Master switch. false = never shown, regardless of other fields. */
	active: boolean;
	/** The text displayed in the banner. */
	message: string;
	/** Optional URL the "linkText" CTA points to. */
	href?: string;
	/** Label for the CTA link (defaults to "Learn more →"). */
	linkText?: string;
	/** ISO date string (YYYY-MM-DD). Don't show before this date. */
	showAfter?: string;
	/** ISO date string (YYYY-MM-DD). Don't show on or after this date. */
	hideAfter?: string;
}

/** ── Current announcement ─────────────────────────────────────────────────
 * Set active: false or remove href/linkText as needed.
 * Bump `id` to re-show for all users after updating the message.
 */
export const announcement: Announcement = {
	id: "summer-2026-hours",
	active: true,
	message: "Summer 2026 Hours: Mon–Thu 10am–4pm (May 27 – July 23)",
	href: "/contact#hours",
	linkText: "View full schedule →",
	showAfter: "2026-05-01",
	hideAfter: "2026-07-24",
};
