<script lang="ts">
  let { cookieCount }: { cookieCount: number } = $props()
</script>

<div>
  <div class="progress-bar">
    <div class="progress-bar__fill" style="width: {cookieCount}%"></div>
  </div>
  <div class="progress-bar__label">{cookieCount}%</div>
</div>