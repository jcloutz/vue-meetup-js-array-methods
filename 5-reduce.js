const todos = require('./todos.json')

// Use array.reduce() to sum the array
const numbers = [1, 2, 3, 4, 5]
var sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum)

// Use array.reduce() to cound the number of complete and incomplete todos
const todosAggregate = {
    complete: 0,
    incomplete: 0
}
for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) {
        todosAggregate.complete++
    } else {
        todosAggregate.incomplete++
    }
}

console.log(todosAggregate)
