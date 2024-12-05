<script lang="ts">
  import type { Writable } from "svelte/store"

  let { cookieCount }: { cookieCount: Writable<number> } = $props()
</script>

<button onclick={() => $cookieCount++}>Add</button>