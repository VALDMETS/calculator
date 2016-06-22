// // console.log('text');
// // console.dir(document.body);
//
// document.body.bgColor = "red";
// console.log(document.body.children[0].children[0].value);
// // console.log(document.querySelector('.first').value);
// console.log(document.querySelector('div'));
// // console.log(document.getElementById('.first').value);


// x = document.getElementById("first").value;
// y = document.getElementById("second").value;

// console.log(document.getElementById('sum').value);

function addition (x,y) {

  x = Number(x);
  y = Number(y);

  var sum = x+y;
  var sumval = isNaN(sum);
  if (sumval) {
    document.getElementById('sum').value = "Try Again!";
    console.log(document.getElementById('sum').value);
  }
  else {
    document.getElementById('sum').value = sum;
    console.log(document.getElementById('sum').value);
  }
}

function subtraction (x,y) {

  x = Number(x);
  y = Number(y);

  var sum = x-y;
  var sumval = isNaN(sum);
  if (sumval) {
    document.getElementById('sum').value = "Try Again!";
    console.log(document.getElementById('sum').value);
  }
  else {
    document.getElementById('sum').value = sum;
    console.log(document.getElementById('sum').value);
  }
}

function multiply (x,y) {

  x = Number(x);
  y = Number(y);

  var sum = x*y;
  var sumval = isNaN(sum);
  if (sumval) {
    document.getElementById('sum').value = "Try Again!";
    console.log(document.getElementById('sum').value);
  }
  else {
    document.getElementById('sum').value = sum;
    console.log(document.getElementById('sum').value);
  }
}

function divide (x,y) {

  x = Number(x);
  y = Number(y);

  var sum = x/y;
  var sumval = isNaN(sum);
  if (sumval) {
    document.getElementById('sum').value = "Try Again!";
    console.log(document.getElementById('sum').value);
  }
  else {
    document.getElementById('sum').value = sum;
    console.log(document.getElementById('sum').value);
  }
}
