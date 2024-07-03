<script lang="ts">
 function scroll(){

window.scrollTo({
  top: 900,
  behavior: "smooth"
})
  } 
</script>

<div class="flex mt-20 justify-between">
  <div class="w-2/3 text-left font-poppin mt-20">
    <h3 class="text-7xl font-bold pr-10">Eat Well,<br> Stay Healthy</h3>
    <h5 class="text-4xl text-black font-light mt-4">
      With Our Tailored Diet Plans
    </h5>
    <button
    on:click={scroll}
      class="mt-7 px-10 py-5 bg-primary rounded-lg text-xl font-bold text-white"
    >
      Create Now!
    </button>
  </div>
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="max-w-2xl h-4/5 "
    src="assets/IMG7.PNG"
    alt="image of people in store"
  />
</div>
