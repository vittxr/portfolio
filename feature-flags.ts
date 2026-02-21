type ResumeAccessType = "external_link" | "download"

interface FeatureFlags {
  resume_access_type: ResumeAccessType
  show_experience_component: boolean
  show_timeline_component: boolean
}

const flags: FeatureFlags = {
  resume_access_type: "external_link",
  show_experience_component: false,
  show_timeline_component: false
}

export default flags