const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLang = users.filter(user => user.languages.length > 2);

let emails = users.map(user => user.email);

let avrYears = users.reduce((total, user, index, array) => {
    // return total + user.yearsOfExperience;
    return total + user.yearsOfExperience / array.length;
}, 0);

let longestEmail = users.reduce((emailAcc, email, index, array) => {
    if (index === array.length - 1) {
        emailAcc.push(email.email);
        emailAcc.sort((a, b) => b.length - a.length);
        return emailAcc[0];
    } else {
        emailAcc.push(email.email);
        return emailAcc;
    }
}, []);

let allNames = users.reduce((current, user) => {
    return current + user.name + ', '
}, '');