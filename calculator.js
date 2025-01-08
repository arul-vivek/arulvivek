function addTwoNumbers(a, b) {
    const calc = new calculator();
    return calc.add(a, b);
}
addTwoNumbers(5,7); // 3
addTwoNumbers(10,5); // 15
function deleteTwoNumbers(a, b) {
    const calc = new calculator();
    return calc.delete(a, b);
}   
deleteTwoNumbers(10,2)// 8
