const inputs = document.querySelectorAll(".angle-input");
const output = document.querySelector(".output_area");
const checkBtn = document.querySelector("#check_btn");


const calculateAngleSum = () => {
  let sum = 0;
  const angles = inputs;
  for (let i = 0; i < angles.length; i++) {
    sum += Number(angles[i].value);
    // console.log(sum);
  }
  return sum;
}
const clickHandler = () => {

  const angleSum = calculateAngleSum();
  const angles = inputs;
  if (Number(angles[0].value) > 0 && Number(angles[1].value) > 0 &&Number(angles[2].value) > 0) {
    output.style.display="block";
    if (angleSum === 180) {
      output.innerText = "Yay! These angles can form a triangle";
    } else {
      output.innerText = "Oops! These angles cannot form a triangle.";
    }
  } else {
    output.innerText = "Angles should be greater than zero";
  }
};

checkBtn.addEventListener("click", clickHandler);
