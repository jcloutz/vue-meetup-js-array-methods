const user = {
    id: 30,
    name: 'Wilder Gibson',
    gender: 'male',
    eyeColor: 'hazel',
    email: 'wildergibson@cujo.com',
    age: 79,
    favoriteFruit: 'apple'
}

// create a copy of the user using the spread operator and change the users
// eye color to blue without modifying the original
const userCopy = Object.assign({}, user, { eyeColor: 'blue' })

console.log('User: ', user)
console.log('User copy: ', userCopy)

// Use object destructuring to access the users age and eye color
const u = user
console.log(u.age, u.eyeColor)

// Access object values using destructuring in function args
const getContactInfo = (user) => {
    console.log(`${user.name}: ${user.email}`)
}
getContactInfo(user)
