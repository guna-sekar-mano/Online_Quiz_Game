import { Gamehistory } from '../../models/history.model.js'
export const storeGamehistory = async (data) => {
  const result = await new Gamehistory(data).save()
  return result
}
