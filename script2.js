//contains logical errors and lacks test coverage

// Login Validation Function 
function validateLogin(username, password) { 
    if (!username || !password) { 
        return false; // Missing input check is correct 
    } 
    if (username === "admin" && password === "1234") { 
        return true; // Only valid login credentials are hardcoded 
    } 
    return false; 
} 
console.log("Login Test 1:", validateLogin("admin", "1234") === true ? "Pass" : "Fail"); 
console.log("Login Test 2:", validateLogin("", "1234") === false ? "Pass" : "Fail"); 
console.log("Login Test 3:", validateLogin("admin", "") === true ? "Pass" : "Fail"); // Incorrect expected value 

// Missing Tests 
// - Invalid username/password combinations 
let validUsername = "chloederba"
let validPassword = "snowwhite"
function validateLogin(username, password) {
    if (validUsername && validPassword) {
        console.log("Access granted") 
    } else if (validUsername && !validPassword) {
        console.log("No access")
    } else if (!validUsername) {
        console.log("Username not found");
    }
        }
// - Edge cases like long strings or special characters
//long strings


//special characters
let password = []
function containsSpecialChars(str) {
    const specialCharsRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharsRegex.test(str);
}
console.log(containsSpecialChars("my!password")); //true
console.log(containsSpecialChars("mypassword")); false
