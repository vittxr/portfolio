export type TimelineItemType = {
    year: number;
    items: string[];
}

export type ExperienceItemType = {
    role: string, 
    company: string,
    start_date: string,
    end_date: string,
    description: string,
    technologies: string,
    responsibilities: string[]
}

export type ProjectItemType = {
    name: string,
    description: string,
    tools: string[],
    github_repo?: string
    live_demo?: string
}