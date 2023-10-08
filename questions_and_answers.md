<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ReferenceError: greetign is not defined

<i>the variable greeting is declared but uninitialized, so its value is undefined. greetign = {};: This line attempts to assign an empty object {} to a variable named greetign. 
console.log(greetign);: Here, you are trying to log the value of the variable greetign. However, since greetign was never declared or defined, you will encounter a ReferenceError. JavaScript will not be able to find the variable greetign in the scope, leading to the error.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>A: `NaN`</b></summary>
<p>

#### Answer: ?

<i>We have a sum function that takes two parameters, a and b.In  function call sum(1, "2"), you're passing 1 which is a number and "2" which is a string.
So String + number not possible because JavaScript cannot perform mathematical operations on a string that doesn't represent a valid number.If 1 is String so our output
is "12"Finally attempting to use it in mathematical operations would result in NaN.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>A: `['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>First we are check the array food with four elements: ["🍕", "🍫", "🥑", "🍔"]. Then we are  create an object info with a property favoriteFood set to the first element of the food array, which is "🍕".then, we are reassign the info. favoriteFood to "🍝". So, this change doesn't any affect the food array; it only modifies the info object only.
So Finally, when we are console.log(food), it Send to the terminal the original food array, which remains unchanged, resulting in A: `['🍕', '🍫', '🥑', '🍔']`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>sayHi function is defined to take one parameter name and returns string with name.so, we are call sayHi() in the console.log statement, we are not sending any name parameter in sayHi function. we ar know that JavaScript, when a function is called and not sending any parameter so the JavaScript send undefined .So, in this case, name inside the sayHi function becomes undefined, Finally sayHi function return String Hi there , undefined </i>
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C: 3</b></summary>
<p>

#### Answer: ?

<i>First we are see the the count variable is set to 0, and you have an array nums containing [0, 1, 2, 3]. The forEach method iterates over each element of the nums array , and for each num, Finally forEach loop completes, the value of counts  becomes 3 because there are three truthy elements (1, 2, 3) in the nums array.when you console log count to the console, it will display 3.</i>

</p>
</details>
