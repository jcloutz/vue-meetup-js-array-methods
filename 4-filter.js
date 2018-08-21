const tasks = require('./todos.json')

// use array.filter() to return all array elements divisible by 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filtered = numbers.filter(x => x % 2 === 0)

console.log(filtered)

// Use array.filter to return the count of only tasks that are complete
const completedTasks = tasks.filter(t => t.completed)

console.log(completedTasks.length)