const display = document.getElementById("mean");
const onOffText = document.getElementById("onOff");

display.addEventListener("dblclick", handleScreenFlash);

function handleScreenFlash() {
  display.classList.toggle("flashOff");

  if (onOffText.innerText == "ON") {
    onOffText.innerText = "OFF";
  } else {
    onOffText.innerText = "ON";
  }
}
