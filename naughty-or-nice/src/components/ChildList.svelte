<script lang="ts">
  import Icon from "@iconify/svelte"

  import ChildCard from './ChildCard.svelte'

  let { childList } = $props()

  let hideNaughty = $state(false)
  let hideNice = $state(false)

  let sortedChildList: {name: string, tally: number}[][] = [[], []] // index 0 is for naughty children, index 1 is for nice children

  for (let child of childList) {
    child.tally < 0 ? sortedChildList[0].push(child) : sortedChildList[1].push(child)
  }
</script>



<div class="flex max-md:flex-col gap-10 mx-10">
  <div class="flex flex-col flex-1">
    <div class="flex justify-between">
      <h1 class="text-xl">Naughty</h1>
      <button onclick={() => hideNaughty = !hideNaughty}>
        <Icon icon={hideNaughty ? "mdi:show-outline" : "mdi:hide-outline"} class="text-3xl" />
      </button>
    </div>
    
    <div class={`flex flex-col gap-2 ${hideNaughty && "hidden"}`}>
      {#each sortedChildList[0] as child}
        <ChildCard childName={child.name} childTally={child.tally} isNaughty={true} />
      {/each}
    </div>
  </div>

  <div class="flex flex-col flex-1">
    <div class="flex justify-between">
      <h1 class="text-xl">Nice</h1>
      <button onclick={() => hideNice = !hideNice}>
        <Icon icon={hideNice ? "mdi:show-outline" : "mdi:hide-outline"} class="text-3xl" />
      </button>
    </div>

    <div class={`flex flex-col gap-2 ${hideNice && "hidden"}`}>
      {#each sortedChildList[1] as child}
        <ChildCard childName={child.name} childTally={child.tally} isNaughty={false} />
      {/each}
    </div>
  </div>
</div>
