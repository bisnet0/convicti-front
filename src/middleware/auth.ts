import type { NavigationGuardNext, RouteLocationNormalized, Router } from "vue-router";

export default function auth(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const token = localStorage.getItem("access_token");
    if (!token) {
        next({ path: "/signin" }); // Redireciona para login se não houver token
    } else {
        next();
    }
}
