const func = () => {
    return

};
const calculateMyAge = (birthYear:number): 
number => {
    return new Date(Date.now()).getFullYear()
    - birthYear// the age according to the birthYear
}

const myAge: number = calculateMyAge(1995)

console.log(myAge)

function greetMe(userInfor: {name: string; age: number}):
string{
    return (
        userInfor.name +
        ". It's nice to know that you are  " +
        userInfor.age + 
        " years old."
    );
}

console.log(greetMe({name: "Sophia Serenity", age: myAge}))