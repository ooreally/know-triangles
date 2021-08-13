const side1 = document.querySelector("#side1");
const side2 = document.querySelector("#side2");
const output = document.querySelector(".output_area");
const checkBtn = document.querySelector("#check_btn");
const errorDiv = document.querySelector(".error_area");

const calculateHypo = (a, b) => {
  let hypo = 0;

  hypo = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

  return hypo.toPrecision(4);
};

const clickHandler = () => {
  const a = Number(side1.value);
  const b = Number(side2.value);
  errorDiv.style.display="none";
  const hypo = calculateHypo(a, b);
  
  if (a > 0 && b > 0) {
        output.style.display = "block";
      output.innerText = hypo;
    
    }
  else {
    msg="P.S.- Inputs should be greater than zero";
    errorDiv.style.display="block";
    errorDiv.innerText=msg;
    output.innerText = 0;
  }
};

checkBtn.addEventListener("click", clickHandler);
