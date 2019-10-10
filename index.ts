import { backends, proxy, middleware, pipeline } from "@fly/cdn";

const mw = pipeline(
  middleware.httpsUpgrader,
  middleware.httpCache
)

const app = mw(
  proxy("https://miyako-it.netlify.com")
);

fly.http.respondWith(app);
