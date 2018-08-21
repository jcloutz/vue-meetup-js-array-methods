const tasks = require('./todos.json')

// Use array.map() to muliply each array element by 2
const numbers = [1, 2, 3, 4, 5]
let multiplied = []
for (let i = 0; i < numbers.length; i++) {
    multiplied.push(numbers[i] * 2)
}

console.log(multiplied)

// Use array.map() to return an array containing only task titles
const taskTitles = []
for (let i = 0; i < tasks.length; i++) {
    taskTitles.push(tasks[i].title)
}

console.log(taskTitles)
