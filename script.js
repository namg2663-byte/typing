const sentences = [
`print("Hello, World!")`,
`print("Python is fun!")`,
`name = input("Enter your name: ")
print(name)`,
`age = 20
print(age)`,
`x = 10
y = 5
print(x + y)`,
`x = 10
y = 5
print(x - y)`,
`x = 10
y = 5
print(x * y)`,
`x = 10
y = 5
print(x / y)`,
`for i in range(5):
    print(i)`,
`for i in range(1, 11):
    print(i)`,
`for i in range(10, 0, -1):
    print(i)`,
`count = 0
while count < 5:
    print(count)
    count += 1`,
`while True:
    break`,
`if x > y:
    print("x is bigger")`,
`if x == y:
    print("Equal")
else:
    print("Not Equal")`,
`def hello():
    print("Hello")`,
`hello()`,
`def add(a, b):
    return a + b`,
`print(add(3, 5))`,
`def square(n):
    return n * n`,
`numbers = [1,2,3]
print(numbers)`,
`numbers.append(4)
print(numbers)`,
`numbers.pop()
print(numbers)`,
`for n in numbers:
    print(n)`,
`text = "Python"
print(text.upper())`,
`print(text.lower())`,
`print(len(text))`,
`print(text[::-1])`,
`my_tuple = (1,2,3)
print(my_tuple)`,
`my_set = {1,2,3}
print(my_set)`,
`person = {
    "name":"Tom",
    "age":18
}
print(person)`,
`print(person["name"])`,
`person["age"] = 20
print(person)`,
`import math
print(math.sqrt(25))`,
`import random
print(random.randint(1,100))`,
`import datetime
print(datetime.datetime.now())`,
`try:
    x = 10 / 0
except ZeroDivisionError:
    print("Error")`,
`with open("file.txt","w") as f:
    f.write("Hello")`,
`class Dog:
    def bark(self):
        print("Woof")`,
`dog = Dog()
dog.bark()`,
`class Person:
    def __init__(self,name):
        self.name = name`,
`p = Person("Alice")
print(p.name)`,
`def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n-1)`,
`nums = [5,3,8,1]
nums.sort()
print(nums)`,
`nums.reverse()
print(nums)`,
`total = sum(nums)
print(total)`,
`maximum = max(nums)
print(maximum)`,
`minimum = min(nums)
print(minimum)`,
`values = [x * 2 for x in range(10)]
print(values)`,
`even = [x for x in range(20) if x % 2 == 0]
print(even)`
];

let current = "";
let time = 300; // 5분
let timer = null;

const text = document.getElementById("text");
const input = document.getElementById("input");
const timeView = document.getElementById("time");
const accuracyView = document.getElementById("accuracy");

function randomSentence() {
    current = sentences[Math.floor(Math.random() * sentences.length)];
    text.textContent = current;
}

function startGame() {
    clearInterval(timer);

    randomSentence();

    input.value = "";
    input.disabled = false;
    input.focus();

    time = 300; // 5분으로 초기화
    timeView.textContent = time;
    accuracyView.textContent = "100";

    timer = setInterval(() => {
        time--;
        timeView.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            input.disabled = true;
            alert("Time's up!");
        }
    }, 1000);
}

input.addEventListener("input", () => {
    const value = input.value;
    let correct = 0;

    for (let i = 0; i < value.length; i++) {
        if (value[i] === current[i]) {
            correct++;
        }
    }

    const accuracy = Math.round((correct / current.length) * 100);
    accuracyView.textContent = isNaN(accuracy) ? 100 : accuracy;

    if (value === current) {
        alert("Correct!");
        input.value = "";
        randomSentence();
    }
});

startGame();
