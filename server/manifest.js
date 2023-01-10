const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-4e1ff50e.js","imports":["_app/immutable/start-4e1ff50e.js","_app/immutable/chunks/index-4bb46944.js","_app/immutable/chunks/singletons-d936f639.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-fd811458.js'),
			() => import('./chunks/1-4d1d755d.js')
		],
		routes: [
			{
				id: "/api/chat/get-history",
				pattern: /^\/api\/chat\/get-history\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-52b5c994.js')
			},
			{
				id: "/api/chat/send-message",
				pattern: /^\/api\/chat\/send-message\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-e8497b59.js')
			},
			{
				id: "/api/events",
				pattern: /^\/api\/events\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-389738d6.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
