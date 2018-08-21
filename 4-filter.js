const tasks = require('./todos.json')

// use array.filter() to return all array elements divisible by 2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filtered = []
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        filtered.push(numbers[i])
    }
}

console.log(filtered)

// Use array.filter to return the count of only tasks that are complete
const completedTasks = []

for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
        completedTasks.push(tasks[i])
    }
}

console.log(completedTasks.length)
