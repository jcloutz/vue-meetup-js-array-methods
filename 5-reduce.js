const todos = require('./todos.json')

// Use array.reduce() to sum the array
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, n) => acc + n, 0)

console.log(sum)

// Use array.reduce() to cound the number of complete and incomplete todos
const todosAggregate = {
    complete: 0,
    incomplete: 0
}
const result = todos.reduce((agg, t) => {
    if (t.completed) {
        agg.complete++
    } else {
        agg.incomplete++
    }

    return agg
}, todosAggregate)

console.log(result)