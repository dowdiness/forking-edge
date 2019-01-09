import { backends, middleware, pipeline } from "@fly/cdn";

const mw = pipeline(
  middleware.httpsUpgrader,
  middleware.httpCache
)

const app = mw(
  backends.origin("https://getting-started.edgeapp.net")
);

fly.http.respondWith(app);