import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async () => {
  const childList = await (await fetch("https://advent.sveltesociety.dev/data/2023/day-one.json")).json()

  return {
    childList: childList
  }
}