// A function that takes a User and returns a greeting message
function greetUser(user) {
    if (user.isMember) {
        return "Welcome back, ".concat(user.name, "!");
    }
    else {
        return "Hello, ".concat(user.name, ". Join us to enjoy more features!");
    }
}
// Example usage
var user1 = {
    name: "Alice",
    age: 30,
    isMember: true
};
console.log(greetUser(user1)); // Output: Welcome back, Alice!
