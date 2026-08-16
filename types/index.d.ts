export interface ContactLink {
  key: "email" | "linkedin" | "github" | "portfolio";
  href: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface ExperienceJob {
  role: string;
  companyName: string;
  startDate: string;
  endDate: string | null;
  dateLabel: string;
  context: string;
  highlights: string[];
  stack: string;
  /** Matches the schema.org OrganizationRole itemprop used on <body itemscope itemtype="Person"> */
  relation: "worksFor" | "alumniOf";
}

export interface Credential {
  category: string;
  name: string;
}

export interface ProjectItem {
  label: string;
  href: string;
  isWorkExample: boolean;
}
