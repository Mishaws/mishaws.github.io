import {
  createRootRoute,
  createRoute,
  createRouter,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { ModeProvider } from "./context/ModeContext";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { CvPage } from "./pages/CvPage";
import { HomePage } from "./pages/HomePage";
import { WorkPage, type WorkFilter } from "./pages/WorkPage";

const VALID_FILTERS = new Set<WorkFilter>(["all", "research", "industry", "both"]);

function NotFoundView() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
      <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">404</p>
      <h1 className="mt-2 font-serif text-5xl italic">Page not found.</h1>
      <Link
        to="/"
        className="sticker mt-6 rounded-full bg-[var(--color-pop)] px-6 py-3 text-sm font-medium text-[var(--color-background)]"
      >
        Go home ↗
      </Link>
    </div>
  );
}

const rootRoute = createRootRoute({
  component: () => (
    <ModeProvider>
      <Outlet />
    </ModeProvider>
  ),
  notFoundComponent: NotFoundView,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const workRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/work",
  validateSearch: (search: Record<string, unknown>): { filter: WorkFilter } => {
    const raw = typeof search.filter === "string" ? (search.filter as WorkFilter) : "all";
    return { filter: VALID_FILTERS.has(raw) ? raw : "all" };
  },
  component: WorkPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const cvRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cv",
  component: CvPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  workRoute,
  aboutRoute,
  cvRoute,
  contactRoute,
]);

export const router = createRouter({
  routeTree,
  scrollRestoration: true,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
