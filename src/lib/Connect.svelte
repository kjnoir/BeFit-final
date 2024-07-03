<script>
  import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandTwitter,
  } from "@tabler/icons-svelte";
</script>

<div class="mb-5">
  <hr class=" border-2 border-zinc-950 mt-20">
  <p class="font-poppins text-2xl font-normal mt-4 mb-6">Connect With Us</p>
  <ul class="flex justify-center space-x-10">
    <a target="_" href="https://twitter.com/">
      <IconBrandTwitter
        size={36}
        class="text-primary"
        fill="gray-900"
        color="gray-900"
      />
    </a>
    <a target="_" href="https://www.instagram.com/"
      ><IconBrandInstagram size={36} class="text-gray-900" /></a
    >
    <a target="_" href="https://www.facebook.com/"
      ><IconBrandFacebook size={36} class="text-gray-900" /></a
    >
  </ul>
</div>
