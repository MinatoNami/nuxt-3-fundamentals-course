<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=211b9a48&i=${route.params.id}`,
  {
    pick: ["Plot", "Title", "Error", "Poster"],
    key: `/movies/${route.params.id}`,
    onResponse({ request, response }) {
      if (response._data.Error === "Movie not found!") {
        showError({ statusCode: 404, message: "Movie not found" });
      }
    },
  }
);

useHead({
  title: data.value.Title,
  meta: [
    { name: "description", content: data.value.Plot },
    { property: "og:description", content: data.value.Plot },
    { property: "og:image", content: data.value.Poster },
    { name: "twitter:card", content: `summary_large_image` },
  ],
});
// const { data: res } = useAsyncData(
//   `/movies/${route.params.id}`,
//   async () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=211b9a48&i=${route.params.id}`
//     );
//   },
//   {
//     pick: ["Plot", "Title"],
//     // transform: (data) => {
//     //   return {
//     //     Plot: data.Plot,
//     //     Title: data.Title,
//     //   };
//     //   return data.Title;
//     // },
//   }
// );
console.log("res".res);
</script>

<style></style>
