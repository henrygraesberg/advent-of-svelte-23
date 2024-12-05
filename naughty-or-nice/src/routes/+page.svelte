<script lang="ts">
  import type { PageData } from "./$types"

  import { ChildList } from "$components";

  let { data }: { data: PageData } = $props()
</script>

<h1>Naughty or nice?</h1>
<div>
  <ChildList childList={data.childList} />
</div>
