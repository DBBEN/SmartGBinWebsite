// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let progressBar = document.querySelector(".cp-1");
let valueContainer = document.querySelector(".cpText-1");
let progressBar2 = document.querySelector(".cp-2");
let valueContainer2 = document.querySelector(".cpText-2");
let progressBar3 = document.querySelector(".cp-3");
let valueContainer3 = document.querySelector(".cpText-3");
let progressBar4 = document.querySelector(".cp-4");
let valueContainer4 = document.querySelector(".cpText-4");

let progressValue = 0;
let progressEndValue = 100;
let speed = 50;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMONX2MdE8Il11d_Ee00E4kpuYxsAwfeQ",
    authDomain: "smart-gbin.firebaseapp.com",
    databaseURL: "https://smart-gbin-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-gbin",
    storageBucket: "smart-gbin.appspot.com",
    messagingSenderId: "767454820018",
    appId: "1:767454820018:web:a79e7238252dbaeb543bab"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const reference = ref(db, 'gbin-1/binStatus');
onValue(reference, (snapshot) => {
    const data = JSON.stringify(snapshot.val());
    console.log(data);
    var obj = JSON.parse(data);
    var bin1Percent = parseInt((obj.bin1 / (300 - obj.binThreshold.bin1_thresh)) * 100);
    var bin2Percent = parseInt((obj.bin2 / (300 - obj.binThreshold.bin2_thresh)) * 100);
    var bin3Percent = parseInt((obj.bin3 / (300 - obj.binThreshold.bin3_thresh)) * 100);
    var bin4Percent = parseInt((obj.bin4 / (300 - obj.binThreshold.bin4_thresh)) * 100);
    
    valueContainer.textContent = `${bin1Percent}%`;
    valueContainer2.textContent = `${bin2Percent}%`;
    valueContainer3.textContent = `${bin3Percent}%`;
    valueContainer4.textContent = `${bin4Percent}%`;

    progressBar.style.background = `conic-gradient(
      #77dd66 ${bin1Percent * 3.6}deg,
      #cadcff ${bin1Percent * 3.6}deg
    )`;

    progressBar2.style.background = `conic-gradient(
      #77dd66 ${bin2Percent * 3.6}deg,
      #cadcff ${bin2Percent * 3.6}deg
    )`;

    progressBar3.style.background = `conic-gradient(
      #77dd66 ${bin3Percent * 3.6}deg,
      #cadcff ${bin3Percent * 3.6}deg
    )`;

    progressBar4.style.background = `conic-gradient(
      #77dd66 ${bin4Percent * 3.6}deg,
      #cadcff ${bin4Percent * 3.6}deg
    )`;

    if (bin1Percent >= 100) {
      valueContainer.textContent = "FULL";
      progressBar.style.background = "#c23b22";
    }

    if (bin2Percent >= 100) {
      valueContainer2.textContent = "FULL";
      progressBar2.style.background = "#c23b22";
    }

    if (bin3Percent >= 100) {
      valueContainer3.textContent = "FULL";
      progressBar3.style.background = "#c23b22";
    }

    if (bin4Percent >= 100) {
      valueContainer4.textContent = "FULL";
      progressBar4.style.background = "#c23b22";
    }
})


// let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar.style.background = `conic-gradient(
//       #4d5bf9 ${progressValue * 3.6}deg,
//       #cadcff ${progressValue * 3.6}deg
//   )`;
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

