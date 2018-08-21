const users = require('./users.json')

// Use array.sort() to sort this array of numbers is ascending order
const numbers = [5, 2, 6, 3, 4, 1]
const ascArr = numbers.sort()
console.log(ascArr)

// now sort it in descending order
const descArr = numbers.sort((a, b) => b - a)
console.log(descArr)

// Use array.sort() to sort all users by age in ascending order.
const ageSort = users.sort((a, b) => a.age - b.age)
console.log(ageSort)

// Use array.sort() to sort all users by eye color in ascending order
const eyeColorSort = users.sort((a, b) => {
    if (a.eyeColor < b.eyeColor) {
        return -1
    } else if (a.eyeColor > b.eyeColor) {
        return
    }
    return 0
})
console.log(eyeColorSort)