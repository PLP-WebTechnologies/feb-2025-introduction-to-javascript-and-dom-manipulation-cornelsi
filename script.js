const heading = document.getElementById("main-heading");
const description = document.getElementById("description");
const button = document.getElementById("action-btn");

let elementExists = false;

button.addEventListener("click", () => {
  heading.textContent = "Universal Health Coverage in Kenya";
  description.textContent = "Kenya is working towards achieving universal health coverage (UHC) to ensure all citizens can access quality healthcare services.";

  heading.style.color = "#2E8B57";
  heading.style.fontWeight = "bold";
  heading.style.fontSize = "2.3rem";
  document.body.style.backgroundColor = "#eefdf2";

  if (!elementExists) {
    const newPara = document.createElement("p");
    newPara.id = "new-element";
    newPara.textContent = "The government has launched initiatives like Linda Mama and NHIF to promote accessible healthcare.";
    document.body.appendChild(newPara);
    elementExists = true;
  } else {
    const existingPara = document.getElementById("new-element");
    if (existingPara) {
      existingPara.remove();
    }
    elementExists = false;
  }
});
