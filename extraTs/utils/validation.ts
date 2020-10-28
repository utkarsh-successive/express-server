import { validateEmail } from './helper';
export  function validateUsers(users): void {
    console.log('User validation starts.......');
    let validUsers = 0;
    let invalidUsers = 0;
    const userValid = [];
    const userInvalid = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < users.length; i++) {
        if (validateEmail(users[i].traineeEmail) && validateEmail(users[i].reviewerEmail)) {
            userValid[validUsers] = users[i];
            validUsers++;
        }
        else {
            userInvalid[invalidUsers] = users[i];
            invalidUsers++;
        }
    }
    console.log('Valid users are');
    userValid . forEach ((item) => console.log(item) );

    console.log('Number of valid users are ' + validUsers);
    console.log('Invalid users are');
    userInvalid .forEach ((item) =>  console.log(item) );

    console.log('invalid users are ' + invalidUsers);
}