<script lang="ts">
  import type { PageData } from "./$types"

  import { ChildCard } from "$lib/components";

  let { data }: { data: PageData } = $props()
</script>

<h1>Naughty or nice?</h1>
<div class="grid grid-cols-2 gap-3">
  {#each data.childList as { name, tally }}
    <ChildCard childName={name} childTally={tally} />
  {/each}
</div>
