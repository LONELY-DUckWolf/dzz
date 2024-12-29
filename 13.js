//1
const user = {
    hobby: 'ff',
    premium: true
};

user.mood = 'sad';
user.hobby = 'ff';
user.premium = false;

const { hobby, premium, mood } = user;

for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}

//2

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = null;

    for (const [employee, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return  bestEmployee
}

const employees = {
    rdd: 1111,
    rfff: 2222,
    wwwwww: 344
}

console.log(findBestEmployee(employees));

//3
