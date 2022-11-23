
import items from "../components/ categories.json"

export const getAll = () => {

  return {
    data: items,
    courseMAp: items.reduce((acumulated, item, index) => {
        acumulated[item.id] = item
        acumulated[item.id] = index

        return acumulated
    }, {})
  }
}
