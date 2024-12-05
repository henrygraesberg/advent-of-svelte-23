<script lang="ts">
  import { writable } from "svelte/store"

  import { MunchProgressBar, CookieButton } from "$components"

  const cookieCount = writable(0)

</script>

<MunchProgressBar cookieCount={cookieCount} />

<CookieButton cookieCount={cookieCount} />