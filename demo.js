const num1=10
const num2=20
const num3=30
let bigValue;
if (num1>=num2 && num1>=num3)
{
    bigValue=num1;
}
else if (num2>=num1 && num2>=num3)
{
    bigValue=num2;
}
else 
{
    bigValue=num3;
}
console.log("The largest number is"+bigValue)