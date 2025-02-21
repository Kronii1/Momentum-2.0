const input = document.querySelector("#main__content input");

function handleMouseOver(event) {
  input.style.Border = "1px solid black";
}

input.addEventListener("mouseover", handleMouseOver);
