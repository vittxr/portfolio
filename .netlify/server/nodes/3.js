

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Cb03wu9X.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.C91xCVjf.js"];
export const stylesheets = [];
export const fonts = [];
