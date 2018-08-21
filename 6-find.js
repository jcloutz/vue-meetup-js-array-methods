const users = require('./users.json')

// Use array.find() to find the user with the id of 21
let user = {}
let found = false
let idx = 0
while (found === false) {
    if (users[idx].id === 21) {
        user = users[idx]
        found = true
    }
    idx++
}
console.log('Found user: ', user)

// Use array.findIndex to find index of the first user with hazel eyes
let brownEyesFound = false
let brownEyesIdx = 0
while (brownEyesFound === false) {
    if (users[brownEyesIdx].eyeColor === 'hazel') {
        brownEyesFound = true
    } else {
        brownEyesIdx++
    }
}

console.log(`Found index: ${brownEyesIdx}`)
console.log('Find user by index: ', users[brownEyesIdx])
