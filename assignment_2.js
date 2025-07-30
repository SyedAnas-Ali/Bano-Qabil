// Question 1.
const text = "JavaScript is great and JavaScript is powerful";
function countUniqueWords(str) {
  const words = str.toLowerCase().split(" ");
  const counts = {};
  for (let word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }
  return counts;
}
console.log(countUniqueWords(text));

// Question 2.
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" },
];
function groupByClass(arr) {
  return arr.reduce((acc, curr) => {
    acc[curr.class] = acc[curr.class] || [];
    acc[curr.class].push(curr.name);
    return acc;
  }, {});
}
console.log(groupByClass(students));

// Question 3.
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];
function filterByPriceRange(min, max) {
  return products.filter((p) => p.price >= min && p.price <= max);
}
console.log(filterByPriceRange(100, 600));

// Question 4.
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Question 5.
const nestedArray = [1, [2, [3, 4]], 5];
function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray(nestedArray));

// Question 6.
const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];
const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// Question 10.
const data = [1, 2, [4, 5, [6, 8]], 10];
function sumEvenNumbers(arr) {
  return arr
    .flat(Infinity)
    .filter((n) => n % 2 === 0)
    .reduce((a, b) => a + b, 0);
}
console.log(sumEvenNumbers(data));

// Question 11.
function average(...nums) {
  if (nums.length === 0) return 0;
  const sum = nums.reduce((a, b) => a + b, 0);
  return sum / nums.length;
}
console.log(average(2, 4, 6, 8));

// Question 12.
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency = [...arr].reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(frequency);

// Question 13.
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];
function toggleStatusById(id) {
  return tasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
}
console.log(toggleStatusById(1));

// Question 14.
const names = ["Ali", "Zara", "Ahmed", "Usman"];
const sortedNames = [...names].sort((a, b) => a.length - b.length);
console.log(sortedNames);
