import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route(":country/:entity/:instance", "routes/entity-instance.tsx")
] satisfies RouteConfig;
