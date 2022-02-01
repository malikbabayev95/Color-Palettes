
window.onload = function () {
    console.log("Welcome to the app!");

    changeColor();

    const inputs = document.querySelectorAll('.color');
    inputs.forEach(input => input.addEventListener('change', changeColor));

    document.getElementById("span").addEventListener("click", copyToClipboard)
    function changeColor() {
        const colorBtn = document.querySelectorAll('.color');
        const main = document.getElementById("Main");
        const mini = document.querySelector(".centerArea");
        const code = document.getElementById("span");
        let colorNames = []
        colorBtn.forEach(function (btn) {
            const color = btn.value;
            colorNames.push(color);
        })
        main.style.background = makeGradient(colorNames);
        mini.style.background = makeGradient(colorNames);
        makeCode()
    }
    function makeGradient(colors){
        let string = "linear-gradient(to right";
        for(let i = 0; i<colors.length; i++){
            const color = colors[i];
            string += `, ${color}`;
            if(i == colors.length-1){
                string += `)`;
            }
        }
        return string;
    }
    function makeCode(){
        const colorBtn = document.querySelectorAll('.color');
        const code = document.querySelectorAll(".colour");
        let colorNames = []
        colorBtn.forEach(function (btn) {
            const color = btn.value;
            colorNames.push(color);
        })
        code[0].innerHTML = colorNames[0];
        code[1].innerHTML = colorNames[1];
        if (colorNames[0] == colorNames[1]){
            document.getElementById("span").style.border = "3px solid #fff"
        }else{
            document.getElementById("span").style.border = "none"
        }
    }
    function copyToClipboard() {
        var text = document.getElementById("span");
        navigator.clipboard.writeText(text.innerText);
        
        let p = document.createElement("p");
        p.innerHTML = "Copied to clipboard!";
        p.classList.add("alert");
        document.getElementsByTagName("body")[0].appendChild(p);
        setTimeout(function(){
            p.classList.add("alert-fade");
        }, 1000);
      }

}