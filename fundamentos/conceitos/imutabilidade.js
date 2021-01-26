const user = {
    name: 'Hugo',
    lastname: 'Tomaz dos Santos Andrade'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);