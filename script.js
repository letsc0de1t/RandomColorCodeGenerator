
var box = document.getElementById("Box")
var colorText = document.getElementById("colorCode")


const ColorCodeGenerator = () =>{

    var options ="0123456789abcdef"
    
    var colorCode = "#"
    
    for (var i=0 ;i<6;i++)
    {
    var randomIndex = Math.floor(Math.random()*15+1)
        var character = options[randomIndex]
        colorCode += character
    }

    box.style.background = colorCode
    colorText.innerText = colorCode

}











