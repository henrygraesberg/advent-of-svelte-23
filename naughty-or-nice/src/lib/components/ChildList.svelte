<script lang="ts">
  import Icon from "@iconify/svelte"

  import ChildCard from './ChildCard.svelte'

  let { childList } = $props()

  let sortedChildList: {name: string, tally: number}[][] = [[], []] // index 0 is for naughty children, index 1 is for nice children

  for (let child of childList) {
    child.tally < 0 ? sortedChildList[0].push(child) : sortedChildList[1].push(child)
  }

  let hideNaughty = $state(false)
  let hideNice = $state(false)
</script>



<div class="flex max-md:flex-col">
  <div class="flex flex-col flex-1">
    <h1>Naughty</h1>
    <button onclick={() => hideNaughty = !hideNaughty}>
      <Icon icon={hideNaughty ? "mdi:show-outline" : "mdi:hide-outline"} class="text-2xl" />
    </button>
    
    <div class={`flex flex-col ${hideNaughty && "hidden"}`}>
      {#each sortedChildList[0] as child}
        <ChildCard childName={child.name} childTally={child.tally} isNaughty={true} />
      {/each}
    </div>
  </div>

  <div class="flex flex-col flex-1">
    <h1>Nice</h1>
    <button onclick={() => hideNice = !hideNice}>
      <Icon icon={hideNice ? "mdi:show-outline" : "mdi:hide-outline"} class="text-2xl" />
    </button>

    <div class={`flex flex-col ${hideNice && "hidden"}`}>
      {#each sortedChildList[1] as child}
        <ChildCard childName={child.name} childTally={child.tally} isNaughty={false} />
      {/each}
    </div>
  </div>
</div>
