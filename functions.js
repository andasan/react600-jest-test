const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    // add: (num1, num2) => {
    //     return num1+ num2;
    // }
    checkValue: x => x,
    isNull: () => null,
    createUser: () => {
        const user = { firstName: 'Maki', lastName: 'Zushi'}
        return user;
    },
    fetchUser: () => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(resp => resp.data)
            .catch(err => console.log(err))
    }
}

module.exports = functions;