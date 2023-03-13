"use strict";

let fullName = document.getElementById("name");
let mobileNum = document.getElementById("mobile-number");
let emailAdd = document.getElementById("email-address");
let studentId = document.getElementById("student-id");
const submit = document.getElementById("button");

const form = document.getElementById("form");
const checkBox = document.getElementById("checkbox");

function validation() {
  // for name
  if (fullName.value === "" || fullName.value == null) {
    document.getElementById("full-name").innerHTML =
      "Please write the full name";
    return false;
  }
  if (fullName.value.length > 1) {
    document.getElementById("full-name").innerHTML = "";
  }

  //   for mobile number
  if (mobileNum.value.length !== 11) {
    document.getElementById("mobile").innerHTML =
      "Please enter correct mobile number";
    return false;
  }
  if (mobileNum.value.length === 11) {
    document.getElementById("mobile").innerHTML = "";
  }

  //   for email
  if (emailAdd.value === "" || emailAdd.value === null) {
    document.getElementById("email").innerHTML =
      "Please write the correct email";
    return false;
  }
  if (emailAdd.value.length >= 7) {
    document.getElementById("email").innerHTML = "";
  }

  //   for student id

  if (studentId.value === null || studentId.value === "") {
    document.getElementById("student").innerHTML =
      "Please enter 4 digit student id";
    return false;
  }

  if (studentId.value.length !== 4) {
    document.getElementById("student").innerHTML =
      "Please enter 4 digit student id";
    return false;
  }

  if (studentId.value.length === 4) {
    document.getElementById("student").innerHTML = "";
  }

  if (checkBox.checked) {
    document.getElementById("check").innerHTML = "";
  } else {
    document.getElementById("check").innerHTML =
      "Please agree to terms and conditions";
    return false;
  }
}

// const hundredSbj = document.querySelectorAll(".hundred").value;

// const subjectsHund = [sbj0, sbj1, sbj2, sbj3, sbj4, sbj5];

// subjectsHund.forEach(function (subjectsHund) {
//   let i = 0;
//   i++;
//   console.log(subjectsHund[i]);
// });

// console.log(subjectsHund);

// const maths = Number(document.querySelector(".maths").value);
// function validResult() {
//   // const comp = Number(document.querySelector(".computer").value);
//   // const stats = Number(document.querySelector(".stats").value);
//   // const english = Number(document.querySelector(".english").value);
//   // const urdu = Number(document.querySelector(".urdu").value);
//   // const study = Number(document.querySelector(".study").value);

//   if (maths < 0 || maths > 100 || maths === null || maths === "") {
//     alert("Please write b/w 1-100");
//     return false;
//   }
// }

const result = document.getElementById("result");
const hundPass = 34;
const fiftyPass = 20;

const sbjStatus0 = document.getElementById("mathstatus");
const sbjStatus1 = document.getElementById("compstatus");
const sbjStatus2 = document.getElementById("engstatus");
const sbjStatus3 = document.getElementById("urdustatus");
const sbjStatus4 = document.getElementById("statstatus");
const sbjStatus5 = document.getElementById("studystatus");

const check = function () {
  const maths = Number(document.querySelector(".maths").value);
  const comp = Number(document.querySelector(".computer").value);
  const stats = Number(document.querySelector(".stats").value);
  const english = Number(document.querySelector(".english").value);
  const urdu = Number(document.querySelector(".urdu").value);
  const study = Number(document.querySelector(".study").value);
  const status = document.getElementById("status");

  const hundredsbj = [maths, comp, english, urdu];
  const fiftysbj = [stats, study];

  const sbjStatus100 = [sbjStatus0, sbjStatus1, sbjStatus2, sbjStatus3];
  const sbjStatus50 = [sbjStatus4, sbjStatus5];

  const array100 = [];
  const array50 = [];
  const fail100 = [];
  const fail50 = [];

  // for 100 marks subjects
  for (let i = 0; i < hundredsbj.length; i++) {
    if (
      hundredsbj[i] == null ||
      hundredsbj[i] <= 0 ||
      hundredsbj[i] > 100 ||
      hundredsbj[i] == ""
    ) {
      sbjStatus100[i].innerHTML = "INVALID";
      sbjStatus100[i].style.backgroundColor = "#ff8787";
      return false;
    } else {
      sbjStatus100[i].style.backgroundColor = "";
    }

    const gotMarks = hundredsbj[i];
    if (gotMarks < hundPass) {
      sbjStatus100[i].innerHTML = "Fail";
      fail100.push(sbjStatus100[i].innerHTML);
    } else {
      sbjStatus100[i].innerHTML = "pass";
    }
    array100.push(sbjStatus100[i].innerHTML);
  }

  // for 50 marks subjects
  for (let i = 0; i < fiftysbj.length; i++) {
    if (
      fiftysbj[i] == null ||
      fiftysbj[i] <= 0 ||
      fiftysbj[i] > 50 ||
      fiftysbj[i] == ""
    ) {
      sbjStatus50[i].innerHTML = "INVALID";
      sbjStatus50[i].style.backgroundColor = "#ff8787";
      return false;
    } else {
      sbjStatus50[i].style.backgroundColor = "";
    }

    const gotMarks = fiftysbj[i];
    if (gotMarks < fiftyPass) {
      sbjStatus50[i].innerHTML = "Fail";
      fail50.push(sbjStatus50[i].innerHTML);
    } else {
      sbjStatus50[i].innerHTML = "pass";
    }
    array50.push(sbjStatus50[i].innerHTML);
  }

  const totalStatus = array100.concat(array50);
  console.log(totalStatus);

  const totalFail = fail100.concat(fail50);
  console.log(totalFail);

  let supply = totalFail.length;
  console.log(supply);

  // LOOP METHOD . FAILED
  // let supply = 0;

  // for (let i = 0; i < totalStatus.length; i++) {
  //   console.log(totalStatus[i]);
  //   let x = 0;
  //   if ((totalStatus[i] = "fail")) {
  //     x = x + 1;
  //     supply = supply + x;
  //   } else if ((totalStatus[i] = "pass")) {
  //     x = x - 1;
  //     supply = supply + x;
  //   }
  //   console.log(supply);
  // }

  const marks = maths + comp + stats + english + urdu + study;
  document.getElementById("obtainedMarks").innerHTML = marks;

  const percent = (marks * 100) / 500;
  const finalPercent = percent.toFixed(2);
  document.getElementById("percent").innerHTML = finalPercent;

  if (marks < 165 || supply >= 3) {
    status.innerHTML = "Fail";
    // document.body.style.backgroundColor = "#ffc9c9";
    return false;
  } else {
    status.innerHTML = "Pass";
  }
};

function reset() {
  document.querySelectorAll("body").reset();
}
