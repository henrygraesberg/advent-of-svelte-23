<script lang="ts">
  const createArray = (length: number) => Array.from({ length }, (_, i) => i)

  import Icon from "@iconify/svelte"

  import { writable, type Writable } from "svelte/store";

  let { cookieCount }: { cookieCount: Writable<number> } = $props()

  let cookieList = writable(createArray($cookieCount))

  cookieCount.subscribe((value) => {
    $cookieList = createArray(value)
    console.log($cookieList)
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