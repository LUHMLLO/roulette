export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.45dd446b.js","imports":["_app/immutable/entry/start.45dd446b.js","_app/immutable/chunks/index.b427a141.js","_app/immutable/chunks/singletons.085c47c7.js","_app/immutable/chunks/index.b8e72a41.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.3310d988.js","imports":["_app/immutable/entry/app.3310d988.js","_app/immutable/chunks/index.b427a141.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
