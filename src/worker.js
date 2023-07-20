/**
 * This is a worker to proxy traffic from Cloudflare to AWS. 
 * 
 * We created it to maintain backwards compatiblity with our two-service infrastructure
 * now that we've consolidated into a single service in AWS.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import handleProxy from './proxy';

export default {
	async fetch(request, env, ctx) {
  	return handleProxy.fetch(request, env, ctx);
	},
};
