import { createClient } from 'microcms-js-sdk';

if (!process.env.MICRO_CMS_SERVICE_DOMAIN) {
  throw new Error('MICRO_CMS_SERVICE_DOMAIN is required');
}
if (!process.env.MICRO_CMS_API_KEY) {
  throw new Error('MICRO_CMS_API_KEY is required');
}
export const client = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN,
  apiKey: process.env.MICRO_CMS_API_KEY,
});
