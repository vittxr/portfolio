export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","logos/pdf/logo-black.pdf","logos/pdf/logo-color.pdf","logos/pdf/logo-no-background.pdf","logos/pdf/logo-white.pdf","logos/png/logo-black.png","logos/png/logo-color.png","logos/png/logo-no-background.png","logos/png/logo-white.png","logos/svg/logo-black.svg","logos/svg/logo-color.svg","logos/svg/logo-no-background.svg","logos/svg/logo-white.svg"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.BTiQPTpA.js","app":"_app/immutable/entry/app.Ln0LwtEp.js","imports":["_app/immutable/entry/start.BTiQPTpA.js","_app/immutable/chunks/entry.D6Hcx8Dg.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.Cxq2KWkB.js","_app/immutable/entry/app.Ln0LwtEp.js","_app/immutable/chunks/preload-helper.BQ24v_F8.js","_app/immutable/chunks/scheduler.CbAa4uEG.js","_app/immutable/chunks/index.C91xCVjf.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
