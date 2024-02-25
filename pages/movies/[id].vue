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
    pick: ["Plot", "Title", "Error"],
    key: `/movies/${route.params.id}`,
  }
);
if (data.value.Error) {
  showError({ statusCode: 404, message: "Movie not found" });
}
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
