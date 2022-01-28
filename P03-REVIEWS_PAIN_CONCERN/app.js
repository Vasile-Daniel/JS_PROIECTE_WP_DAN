// local reviews data
const reviews = [
  {
    id: 1,
    name: "Isabelle",
    job: "Online community volunteer ",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I volunteer because I am looking to build a career in psychology, and Pain Concern offer a lot of support and training for their volunteers. They also have a lot of resources and provide great help for people living with chronic pain, and I enjoy being able to help others.",
  },
  {
    id: 2,
    name: "Vicki",
    job: "Listener & Readers Panel volunteer ",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "I love being a Listener and Reader panel volunteer for Pain Concern. As well as helping others, reviewing their podcasts and literature means I often come across ideas I can try for my own pain management.",
  },
  {
    id: 3,
    name: "Sara",
    job: "HR volunteer ",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Volunteering for Pain Concern is very rewarding as it gives me a unique experience in my field of studies and makes me proud to be part of an organisation that makes a real impact on people's lives.",
  },
  {
    id: 4,
    name: "Glen",
    job: "Helpline & Online community volunteer ",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "I volunteer because it gives me a sense of purpose and allows me to help other people in chronic pain.",
  },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
