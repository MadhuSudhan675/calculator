document.addEventListener("DOMContentLoaded", function () {
  const display = document.forms["calculator"]["display"];
  const buttons = document.querySelectorAll(".btn");
  const clearButton = document.getElementById("clear");
  const backspaceButton = document.getElementById("backspace");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.value === "=") {
        try {
          display.value = eval(display.value);
        } catch (e) {
          display.value = "Error";
        }
        return;
      }

      display.value += this.value;
    });
  });

  clearButton.addEventListener("click", function () {
    display.value = "";
  });

  backspaceButton.addEventListener("click", function () {
    display.value = display.value.slice(0, -1);
  });
});
