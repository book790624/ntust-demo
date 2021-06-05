import "./styles.css";

let boxes = document.getElementsByClassName("box");

let boxesArray = [...boxes];

for (let i = 0; i < boxesArray.length; i++) {
  let box = boxesArray[i];
  box.onclick = (e) => {
    for (let j = 0; j < boxesArray.length; j++) {
      let box_else = boxesArray[j];
      if (box_else.classList.contains("active")) {
        box_else.classList.remove("active");
      }
    }

    e.target.classList.add("active");
  };
}
// https://codesandbox.io/s/zdvnn?file=/src/index.js
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let box3 = document.getElementById("box3");
// let box4 = document.getElementById("box4");
// let box5 = document.getElementById("box5");

// box1.onclick = () => {
//   // console.log("box1");
//   if (box1.classList.length === 3) {
//     box1.classList.remove("active");
//   } else {
//     box1.classList.add("active");
//   }
//   box2.classList.remove("active");
//   box3.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box2.onclick = () => {
//   box2.classList.add("active");

//   box1.classList.remove("active");
//   box3.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box3.onclick = () => {
//   box3.classList.add("active");

//   box1.classList.remove("active");
//   box2.classList.remove("active");
//   box4.classList.remove("active");
//   box5.classList.remove("active");
// };

// box4.onclick = () => {
//   fn_remove();
//   box4.classList.add("active");

//   // box1.classList.remove("active");
//   // box2.classList.remove("active");
//   // box3.classList.remove("active");
//   // box5.classList.remove("active");
// };

// box5.onclick = () => {
//   fn_remove();
//   box5.classList.add("active");

//   // box1.classList.remove("active");
//   // box2.classList.remove("active");
//   // box3.classList.remove("active");
//   // box4.classList.remove("active");
// };

// function fn_remove() {
//   if (box1.classList.contains("active")) {
//     box1.classList.remove("active");
//   }

//   if (box2.classList.contains("active")) {
//     box2.classList.remove("active");
//   }

//   if (box3.classList.contains("active")) {
//     box3.classList.remove("active");
//   }

//   if (box4.classList.contains("active")) {
//     box4.classList.remove("active");
//   }

//   if (box5.classList.contains("active")) {
//     box5.classList.remove("active");
//   }
// }
