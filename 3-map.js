const tasks = require('./todos.json')

// Use array.map() to muliply each array element by 2
const numbers = [1, 2, 3, 4, 5]
const multiplied = numbers.map(x => x * 2)
console.log(multiplied)

// Use array.map() to return an array containing only task titles
const taskTitles = tasks.map(t => t.title)

console.log(taskTitles)