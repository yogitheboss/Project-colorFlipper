function changeColor() {
  let colorCode1 = Math.ceil(Math.random() * 256);
  let colorCode2 = Math.ceil(Math.random() * 256);
  let colorCode3 = Math.ceil(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${colorCode1}, ${colorCode2}, ${colorCode3})`;
  document.querySelector(".color_name>h1").innerHTML=`Background Color is = rgb(${colorCode1}, ${colorCode2}, ${colorCode3})`
}
// document.querySelector('.Button>button').style.backgroundColor="green"
// document.addEventListener("click",changeColor);