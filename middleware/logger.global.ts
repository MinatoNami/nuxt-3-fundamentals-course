export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Middleware", to, from, "From the named middleware");
});
