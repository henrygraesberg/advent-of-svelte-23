<script lang="ts">
  let { childName, childTally } = $props()

  const isNaugty = childTally < 0
  const bgColor = isNaugty ? 'bg-red-600 col-start-1' : 'bg-green-500 col-start-2'
</script>

<div class={`${bgColor} border border-black rounded-md`}>
  <h1>{childName}</h1>
  <p>Tally: {childTally}</p>
</div>