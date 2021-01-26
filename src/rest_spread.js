const jobs = ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻"];

const currentJobs = [
  ...jobs,
  "actor 🎥",
  "social media influencer 📴",
  "musician 🎻",
];

console.log(currentJobs); //output => ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻", "actor 🎥", "social media influencer 📴", "musician 🎻"]

//In objects
const currentJob = {
  name: "Jane",
  job: "developer 👩‍💻",
};

console.log(currentJob);

const funJob = {
  ...currentJob,
  name: "Tracy",
  PartTimejob: "musician 🎻",
};

console.log(funJob);//output => {name: "Tracy", job: "developer 👩‍💻", PartTimejob: "musician 🎻"}

const myFruits = ["🍎", "🥝", "🍌", "🍍", "🍉", "🍏"];
const [myFavorite, , , listFavorite] = myFruits;
console.log(myFavorite, listFavorite);//output 🍎 🍍
