

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.C3c8Uza9.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.C91xCVjf.js","_app/immutable/chunks/runtime.BhJ8i6SX.js","_app/immutable/chunks/index.Cxq2KWkB.js"];
export const stylesheets = [];
export const fonts = [];
