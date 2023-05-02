// keyof
interface UserCard {
  name: string
  age: number
  cardTitle: string
  cardDesc: string
}

type T4 = keyof UserCard

// 'name' | 'age' | 'cardTitle' | 'cardDesc'
const w: T4 = 'name'
// const r: T4 = 'address'. // Type '"address"' is not assignable to type 'keyof 


// 泛型
function getValue<T, K extends keyof T> (obj: T, key: K): T[K] {
  return obj[key]
}
