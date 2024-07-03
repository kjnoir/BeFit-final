<script lang="ts">
  import { createMeal } from "./store/create";

  import Meal from "./pages/Meal.svelte";
  import Ingredients from "./pages/Ingredients.svelte";
  import About from "./pages/About.svelte";
  import Home from "./lib/Home.svelte";
</script>

<main class="text-center">
  {#if $createMeal.create == 1}
    <Home />
  {:else if $createMeal.create == 2}
    <Meal />
  {:else if $createMeal.create == 3}
    <Ingredients />
  {:else}
    <About />
  {/if}
</main>

<svelte:head>
  <!-- Fonts -->
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
  />

  <!-- Material Typography -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/@material/typography@14.0.0/dist/mdc.typography.css"
  />

  <!-- SMUI -->
  <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>

<style>
  /* Hide scrollbar by default */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #F5F5F5;
  }

  /* Show scrollbar when hovered */
  ::-webkit-scrollbar-thumb:hover {
    background-color: #CCC;
  }

  /* Show scrollbar when scrolling */
  ::-webkit-scrollbar-thumb:active {
    background-color: #999;
  }

  /* Customize scrollbar thumb and track styles */
  ::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 3px;
  }
</style>
