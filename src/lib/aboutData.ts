// Type definitions for About page data
export interface NarrativeBeat {
  id: string;
  title: string;
  content: string;
  visual_mood: string;
  background_emotion: string;
}

export interface Credential {
  intro: string;
  list: string[];
}

export interface WhyDifferentPoint {
  title: string;
  description: string;
}

export interface Offering {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface PhilosophySection {
  headline: string;
  sub_headline: string;
  intro_text: string;
  key_points: string[];
  closing_statement: string;
}

export interface CallToAction {
  text: string;
  closing: string;
  button_label: string;
  button_href: string;
}

export interface HeroSection {
  tagline: string;
  headline: string;
  sub_headline: string;
  description: string;
  image_alt: string;
}

export interface PageMeta {
  title: string;
  theme: string;
  primary_color: string;
  background_color: string;
}

export interface AboutPageData {
  page_meta: PageMeta;
  hero_section: HeroSection;
  narrative_arc: NarrativeBeat[];
  philosophy_section: PhilosophySection;
  credentials: Credential;
  why_different: {
    headline: string;
    points: WhyDifferentPoint[];
  };
  offerings: Offering[];
  call_to_action: CallToAction;
}

// Fetch and parse the JSON data
export async function loadAboutData(): Promise<AboutPageData> {
  const response = await fetch('/rupi_about_data.json');
  
  if (!response.ok) {
    throw new Error(`Failed to load about data: ${response.statusText}`);
  }
  
  const data = await response.json() as AboutPageData;
  return data;
}

// Cache the loaded data
let cachedData: AboutPageData | null = null;

export async function getAboutData(): Promise<AboutPageData> {
  if (!cachedData) {
    cachedData = await loadAboutData();
  }
  return cachedData;
}
