export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUser();
  if (!user.isLoggedIn) {
    console.log("Navigation aborted");
    // return abortNavigation("You're not allowed to access this page.");
    return navigateTo({ name: "login" });
  }
});
