const users = require('./users.json')

// Use array to filter to only collect data from users betwen the
// ages of 35 and 45
const initValue = {}
const results = users
    .filter(u => u.age > 27 && u.age < 43)
    .reduce((agg, user) => {
        // check for existing key
        if (Object.keys(agg).indexOf(user.eyeColor) < 0) {
            agg[user.eyeColor] = 0
        }

        // increment index
        agg[user.eyeColor] += 1

        return agg
    }, initValue)

console.log(results)