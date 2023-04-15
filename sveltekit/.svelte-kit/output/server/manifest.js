export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","favicon.png"]),
	mimeTypes: {".css":"text/css",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.6b0e4801.js","imports":["_app/immutable/entry/start.6b0e4801.js","_app/immutable/chunks/index.b427a141.js","_app/immutable/chunks/singletons.64cf3d1a.js","_app/immutable/chunks/index.b8e72a41.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.f840dabf.js","imports":["_app/immutable/entry/app.f840dabf.js","_app/immutable/chunks/index.b427a141.js"],"stylesheets":[],"fonts":[]}},
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
