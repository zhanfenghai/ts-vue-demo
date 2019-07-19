interface Person {
  name: string
  age: number
}
export const test = function(name:string = 'a', age:number = 12):Person {
  return {
    name,
    age
  }
}

