//calculator functions
//addition
{function add(a, b) {
  return a + b;
}};
//corrected addition
{function add (a, b) {
  return a + b;
}
let result = add(5, 3);
console.log(result);
};


//subtraction
{function subtract(a, b) { 
return a - b; 
}};
//corrected subtraction
{
function subtract(a, b) {
	return a - b;
}
let result = subtract(10, 4);
console.log(result);
};


//multiplication
function multiply(a, b) { 
return a * b; 
};
//corrected multiplication
{function multiply(a, b) {
	return a * b;
}
let result = multiply(7, 6);
console.log(result);
};

//division by zero
{function divide(a, b) { 
	if (b === 0) { 
        return "Error: Division by zero"; // Incorrect handling for division by zero 
    } 
    return a / b; //should be stated below function first line
}};
//corrected division by zero
function divide(a, b) {
	result = a/b;

	if (b === 0) {
		console.log('Infinity');
		return 'Infinity.';
	} else if (a === 0 && b === 0) 
		console.log('NaN')
		return 'NaN';
	}
divide(12, 0); //Infinity
divide(12, 2); //6
divide(0, 0); //NaN



// Part 2: test cases
console.log("Addition Test 1:", add(5, 3) === 8 ? "Pass" : "Fail"); 
//cases
describe('Addition Test 1', () => {
	it('return expected result', () => {
		expect(add(5, 3).toBe(8)); //expected "Pass"
		expect(add(6, 12).toBe(21)); //expected "Fail"
	})
})


console.log("Subtraction Test 1:", subtract(10, 4) === 5 ? "Pass" : "Fail"); 
//cases
describe('Subtraction Test 1', () => {
	it('return expected result', () => {
		expect(subtract(10,4).toBe(6)); //expected "Pass"
		expect(subtract(17,5).toBe(12)); //expected "Pass"
		expect(subtract(22,6).toBe(19)); //expected "Fail"
	})
});


//Incorrect expected value 
console.log("Multiplication Test 1:", multiply(7, 6) === 42 ? "Pass" : "Fail");
//corrected
describe('Multiplication Test 1', () => {
    it("check corrected expected value"), () => {
}
});


//Incorrect expected value
console.log("Division Test 1:", divide(12, 4) === 3 ? "Pass" : "Fail"); 
//corrected
describe("Division Test 1"), () => { //added missing end parenthesis
	it("check correct expected value", () => { //added missing end parenthesis
		expect(divide(12, 4)).toBe(3); //expected "pass"
		expect(divide(15, 3)).toBe(5); //expected "pass"
        expect(divide(14, 2)).toBe(3); //expected "fail"
    })};


// Incomplete Test Cases - tests for edge cases (e.g., div by zero, negative nums, large nums) 

//negative numbers

	let num = 7;

	if(num > 0){
		console.log(num + ` is positive number`)
	}
	else if(num < 0){
		console.log(num - ` is negative number`)
    }
    else{
	console.log(num + `is Zero`)
    }
	function isStrictlyNegative(num) {
		return num <0 || (object.is(num, -0));
	console.log(isStrictlyNegative(-3)); //expected “true”
	console.log(isStrictlyNegative(-11)); //expected “true”
	console.log(isStrictlyNegative(4)); //expected “false”

//divide by 0
function divide(a, b) {
	const result = a/b;
	if (a > 0 || b === 0);
		return Infinity;
        };
//(below) using math.js/Jest
const divide = require('./math');
test('Check the divide function', () => {
	expect(divide(5,0)).toBe(Infinity);
	expect(divide(0,0)).toBe(NaN);
	expect(divide(Infinity, Infinity)).toBe(NaN);
	expect(divide(5, Infinity)).toBe(0);
	expect(divide(5, -Infinity)).toBe(0);
	});

//large numbers
describe('test large numbers', () => {
    it("check large number"), () => {
        expect
    }
});

//0 divided by 0
function divide(a, b) {
	if (a === 0 && b === 0) {
		return NaN;
	}
}
expect(divide(0,0)).toBe(NaN);


// No test non-integer inputs
describe("test if value integer", () => {
	it('Check integer', () => {
	Number.isInteger(0); //true
	Number.isInteger(7); //true
	Number.isInteger(0.6); //false
	Number.isInteger(NaN); //false
});
});
//or
let num = 40;
if (num % 2 === 0) {
	console.log("Is Integer")
} else {
	console.log("Is not integer")
}
console.log(5); // "Is integer"
console.log(-7); // "Is integer"
console.log(0.4); // "Is not integer"
console.log(-0.6); // "Is not integer"
console.log(1.6); // "Is not integer"




const inputValue = document.getElementById('myNumberInput').value;
    const num = Number(inputValue);

    if (Number.isInteger(num)) {
        console.log("Input is a valid integer.");
    } else {
        console.log("Input is not an integer.");
	}};