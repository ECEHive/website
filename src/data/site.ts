/**
 * Site-wide constants: metadata, contact info, and external URLs.
 * Single source of truth — update here, reflected everywhere.
 */
export const SITE = {
  name: "The Hive Makerspace",
  shortName: "The Hive",
  tagline: "Creating communities, building dreams.",
  description:
    "The Interdisciplinary Design Commons — Georgia Tech's makerspace providing accessible engineering space and resources for the entire GT community.",

  email: "hive@ece.gatech.edu",

  address: {
    building: "Van Leer Building, Room C144",
    street: "777 Atlantic Drive NW",
    city: "Atlanta",
    state: "GA",
    zip: "30332-0250",
    /** Full single-line address for display */
    full: "777 Atlantic Drive NW, Atlanta, GA 30332",
    mapsUrl: "https://maps.google.com/?q=777+Atlantic+Dr+NW+Atlanta+GA+30332",
    mapsEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.392!2d-84.396!3d33.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50479a25b0c39%3A0x0!2s777+Atlantic+Dr+NW%2C+Atlanta%2C+GA+30332!5e0!3m2!1sen!2sus!4v1",
  },

  /** External service URLs */
  liveDashboard: "https://hums.hivemakerspace.com/overview/",
  mailingList: "https://newsletter.hivemakerspace.com/",
  wiki: "https://wiki.hivemakerspace.com/",
  calendarEmbed:
    "https://outlook.office365.com/calendar/published/ba5da3d6d9f74a1eb6e3955cd10c2186@ece.gatech.edu/8aa6352871ff4e648ada00d1a273797312192055347853153433/calendar.html",

  ece: {
    name: "Georgia Tech School of ECE",
    url: "https://ece.gatech.edu",
  },
} as const;
