<script lang="ts">
  import type { Writable } from "svelte/store"

  let { cookieCount }: { cookieCount: Writable<number> } = $props()
</script>

<div>
  <div class="progress-bar">
    <div class="progress-bar__fill" style="width: {$cookieCount}%"></div>
  </div>
  <div class="progress-bar__label">{$cookieCount}%</div>
</div>