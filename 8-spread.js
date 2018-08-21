const roles = ['user', 'manager']

// create a copy of the original array and add roles to it
const adminRoles = [...roles, 'admin', 'super admin']

console.log('Roles: ', roles)
console.log('Admin roles: ', adminRoles)

// use array destructuring to get values from the array
// const role1 = adminRoles[0]
// const role2 = adminRoles[1]
// const remaining = adminRoles.slice(2)
const [role1, role2, ...remaining] = adminRoles
console.log('Extracted data: ', role1, role2, remaining)

// use spread operator in function args
const addRoles = (username, ...roles) => {
    console.log(`Modifying user: ${username}`)
    roles.forEach(r => console.log(`Adding role: ${r}`))
}

addRoles('Jeremy', 'admin', 'super admin')