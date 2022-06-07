1.
// let randomValue = { name: "Lydia" }
//  randomValue = 23;
//  if (!typeof (randomValue) === "string") {
//      console.log("its not a string")
//  }
//  else {
//      console.log("yay its a string")
//  }      //!yay its a string

2.
// const createMember = ({email,address = {}})=>

// {
//     const validEmail = /.+\@.+\..+/.test(email)
//     if(!validEmail) throw new Error("valid email pls")
//     return{
//         email,
//         address:address ? address : null
//     }
// }

// const member = createMember({email:"my@email.com"})
// console.log(member);  //!{email: 'my@email.com', address: {…}}address: {}email: "my@email.com"[[Prototype]]: Object
 
3.

//  const  keys = ["name", "age"]
// const values = ["lydia", 22];

// const method = /*?? */
//     Object[method](keys.map((_, i) =>
//     {
//         return [keys[i],values[i]]
        
// }))     //!referenceerror


4.
// const promise1 = Promise.resolve("first")
// const promise2 = Promise.resolve("second")
// const promise3 = Promise.reject("third")
// const promise4 = Promise.resolve("fourth")

// const runPromises = async () =>
// {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2 = await Promise.all([promise3, promise4])
//     return [res1,res2]
// }

// runPromises()
//     .then(res => console.log(res))
//     .catch(err => console.log(err));    //!third




5.
// const user = {
//     email: "my@email.com",
//     updateEmail: email =>{
//         this.email = email
//     }
// }

// user.updateEmail("new@email.com")
// console.log(user.email);  //!my@email.com

6.
//  const fruits = ['banana', 'orange', 'apple']
// fruits.slice(0, 1)
// fruits.splice(0, 1)
// fruits.unshift('grapes')
// console.log(fruits)

// ![("grapes", "orange", "apple")];



7.

// const user = {
//     email: "e@mail.com",
//     password:"12345"
// }

// const updateuser = ({ email, password }) =>
// {
//     if (email)
//     {
//         Object.assign(user,{email})
//     }
//     if (password)
//     {
//         user.password = password
//     }
//     return user
// }
// const updateduser = updateuser({ email: "new@email.com" })
    // console.log(updateduser===user)      //!true

8.
// class Calc {
//     constructor(){
//         this.count = 0
//     }

//     increase() {
//         this.count ++
//     }
// }

// const calc = new Calc()
// new Calc().increase()
// console.log(calc.count);  //!0

9a.
// let count = 0;

// const nums = [0,1,2,3]
// nums.forEach(num => {
//     if(num) count += 1
// })
// console.log(nums); //![0,1,2,3]


9b.

// class Bird{
//     constructor()
//     {
//         console.log("I'm a bird");
//     }
// }

// class Flamingo extends Bird{
//     constructor(){
//         console.log("I'm pink");
//         super();

//     }
//    }  

// const pet = new Flamingo();   //!  I'm pink
                              //!  I'm a bird



10.


// const person = {
//     name: "lydia hallie",
//     hobbies:["coding"],
// }
    
// function addHobby(hobby, hobbies = person.hobbies)
// {
//     hobbies.push(hobby);
//     return hobbies;
// }
// addHobby("running", []);
// addHobby("dancing");
// addHobby("baking", person.hobbies);

// console.log(person.hobbies);   //!['coding', 'dancing', 'baking']


11.
// const teams = [
//     {name : 'Team 1',members:['paul','lisa']},
//     {name : 'Team 2',members:['laura','tim']},
// ];

// function * getMembers(members){
//   for (let i=0;i<members.length;i++){
//       yield members[i];
//   }
// }

// function * getTeams(teams){
//     for(let i=0;i<teams.length;i++){

//     }
// }

// const obj = getTeams(teams);
// obj.next();
// obj.next();   //!



12.

// class Counter{
//     #number = 10
    

//     increment() {
//         this.#number++
//     }
//     getNum() {
//         return this.#number
//     }
// }
// const counter = new Counter()
// counter.increment()
// console.log(counter.#number)

//! SyntaxError: Private field '#number' must be declared in
// an enclosing class




13.

// const myPromise = Promise.resolve(Promise.resolve("promise"));
// function fncone()
// {
//     setTimeout(() => console.log("timeout 1!"), 0);
//     myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//     console.log("last line 1!");

// }

// async function funtwo()
// {
//     const res = await myPromise;
//     console.log(`${res} 2!`)
//     setTimeout(() => console.log("timeout 2!"), 0);
//     console.log("last line 2!");


// }

//!fncone();
//! funtwo();
//!  last line 1!
//!  promise 2!
//! last line 2!
//! promise 1!
//!  timeout 1!
//! timeout 2!


14a.
// const name = 'Lydia Hallie'

// console.log(!typeof name === 'object');
// console.log(!typeof name === 'string');  //!false  false

14b.
// const myMap = new Map();
// const myFunc = () => 'greeting';


// myMap.set(myFunc,'hello world');

// myMap.get('greeting');

// myMap.get(myFunc);

// myMap.get(()=>'greeting');  //!error




15.

// const emojis=['star','butterfruit','smile']
// console.log(emojis.map(x => x + "star"));
// //![ 'startstar', 'butterfruitstar', 'smilestar' ]

// console.log(emojis.filter(x => x !== "butterfruit"));

// //![ 'start', 'smile' ]

// console.log(emojis.find(x => x !== "butterfruit"));
// //!start

// console.log(emojis.reduce((acc, cur) => acc + "star"));
// //!startstarstar

// console.log(emojis.slice(1, 2, "star"));
// //![ 'butterfruit' ]

// console.log(emojis.splice(1, 2, "star"));
// //![ 'butterfruit', 'smile' ]


16

// const set = new Set();
// set.add(1);
// set.add("lydia");
// set.add({ name: "lydia" });
// for (let item of set)
// {
//     console.log(item + 2);
// }                           //3,  lydia2, [Object Object]2

17.
// function getItems(fruitList, ...args, favoriteFruit) {
//     return [...fruitList, ...args, favoriteFruit]
//   }
  
//   getItems(["banana", "apple"], "pear", "orange") //!error
 


18.



19.

//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then(res => res.json())
//     .then(res => console.log(res));   
//!   {userId: 1, id: 1, title: 'delectus aut autem', completed: false}


20a.
// const box = { x: 10, y: 20 };
// Object.freeze(box);
// const shape = {...box}  //! 100 , 20
// shape.x = 100;          
// console.log(shape)     //!10 ,20


20b.
console.log(Number(2)=== Number(2));   //!true
console.log(Boolean(false) === Boolean(false));  //!true
console.log(Symbol(a) === Symbol(a)); //!false