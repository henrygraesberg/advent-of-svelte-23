<script lang="ts">
  let { childName, childTally, isNaughty } = $props()

  const bgColor = isNaughty ? 'bg-red-600' : 'bg-green-500'
</script>

<div class={`${bgColor} border border-black rounded-md flex flex-col`}>
  <h1>{childName}</h1>
  <p>Tally: {childTally}</p>
</div>