// checking username

export function validateUsername(username) {
    const pattern = /^[\w]+$/;
    const patternMatches = pattern.test(username.trim());
    return patternMatches
}

// Checking email validation by using regEx

export function emailValidation (email) {
    const regEx = /^[\w\-.]+@stud.?noroff.no$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

// Checking password validation. Must be longer than 8 characters

export function passwordValidation (password) {
    return password.trim().length >= 8;
}