export default defineNuxtRouteMiddleware((to, from) => {
  const userIsLoggedIn = false;
  if (!userIsLoggedIn) {
    console.log("Navigation aborted");
    // return abortNavigation("You're not allowed to access this page.");
    return navigateTo({ name: "login" });
  }
});
