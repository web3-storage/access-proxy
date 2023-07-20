export default {
	async fetch(request, env, ctx) {
		const proxyUrl = env.PROXY_URL

		if (!proxyUrl) {
			return new Response('Bad request: Missing `PROXY_URL` environment variable', { status: 400 });
		}

		return await fetch(proxyUrl, request);
	},
};
