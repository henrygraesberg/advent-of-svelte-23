<script lang="ts">
  import Icon from "@iconify/svelte"

  import { writable, type Writable } from "svelte/store";

  let { cookieCount }: { cookieCount: Writable<number> } = $props()

  let cookieList = writable(Array.from({ length: $cookieCount }, (_, i) => i))

  cookieCount.subscribe((value) => {
    $cookieList = Array.from({ length: value }, (_, i) => i)
  })
</script>

<div>
  <p class="progress-bar__label">{$cookieCount}%</p>
  <div class="progress-bar">
    {#each $cookieList}
      <Icon icon="openmoji:cookie" />
    {/each}
  </div>
</div>

<style>

</style>