console.log("Grace's Calculator is connected, yasss!");
const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");



let userClicks = "";
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    if(button.id === "clear"){
        const result = document.querySelector("#result");
        userClicks = "";
        result.textContent = "Clear";
        console.log("Clear");
    } 
    else if (button.id === "equals"){
        const finalResult = eval(userClicks);
        result.textContent = finalResult;
    } else if (button.id === "negative") {
        result.textContent = "-";
        userClicks+=result.textContent;
    }
    else if (button.id === "multiply")  {
        button.textContent = "*";
        userClicks+= button.textContent;
         result.textContent = userClicks;
         console.log(userClicks);

    } else if (button.id === "divide"){
        button.textContent = "/";
        userClicks+= button.textContent;
         result.textContent = userClicks;
        console.log(userClicks);
    } else {
        userClicks += button.textContent;
        result.textContent = userClicks;
    }

  });
  
});

