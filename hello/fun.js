var calculateMyAge = function (birthYear) {
    return new Date(Date.now()).getFullYear()
        - birthYear; // the age according to the birthYear
};
var myAge = calculateMyAge(1995);
console.log(myAge);
function greetMe(userInfor) {
    return (userInfor.name +
        ". It's nice to know that you are  " +
        userInfor.age +
        " years old.");
}
console.log(greetMe({ name: "Sophia Serenity", age: myAge }));
