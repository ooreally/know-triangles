const base = document.querySelector("#base");
const height = document.querySelector("#height");
const output = document.querySelector(".output_area");
const checkBtn = document.querySelector("#check_btn");
const errorDiv = document.querySelector(".error_area");

const calculateArea = (b, h) => {
  let area = 0;

  area = 0.5 * b * h;

  return area;
};

const clickHandler = () => {
  const b = Number(base.value);
  const h = Number(height.value);
  errorDiv.style.display="none";
  const area = calculateArea(b, h);
    // console.log(area);
  if (b > 0 && h > 0) {
        output.style.display = "block";
      output.innerText = area;
    
    }
  else {
    msg="P.S.- Inputs should be greater than zero";
    errorDiv.style.display="block";
    errorDiv.innerText=msg;
    output.innerText = 0;
  }
};

checkBtn.addEventListener("click", clickHandler);
