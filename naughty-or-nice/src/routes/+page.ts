import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
  const childList = await (await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")).json()

  return {
    childList: childList
  }
}