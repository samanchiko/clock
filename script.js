let data = new Date();

// // Global obj new date vaqtni olish uchun ishlatiladi 

// console.log(data.getHours());
// console.log(data.getSeconds());
// console.log(data.getFullYear());
// console.log(data.getMinutes());



// REKURSYA FUNCTION BU OZINI OZI CHAQIRTIRB BERADIGAN FUNCTION


// let count = 1;

// function rec() {

//   if (count < 10) {
//     console.log(count++);

//     setTimeout(function () {
//       rec()
//     }, 1000)
//   }

// }

// rec()



let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes")

function clock() {

  let data = new Date()
  let second = data.getSeconds()
  let minut = data.getMinutes()
  let hour = data.getHours()


  if (minut < 10) {
    minutes.innerHTML = "0" + minut
  } else {
    minutes.innerHTML = minut
  }

  if (hour < 10) {
    hours.innerHTML = "0" + hour
  } else {
    hours.innerHTML = hour
  }

  setTimeout(function () {
    clock()
  }, 1000)

}


clock()