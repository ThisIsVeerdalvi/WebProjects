const getColor = () =>{
    // hex code

    const randomNum = Math.floor(Math.random() * 16777215);   //multiplied by this number to get hex value
    const randomCode="#"+randomNum.toString(16);  //16 stands for hex

    document.body.style.backgroundColor = randomCode;

    document.getElementById('colorcode').innerHTML = randomCode;

    // navigator.clipboard.writeText(randomCode);   // code to allow clipboard save
}

document.getElementById("btn").addEventListener('click', getColor);

getColor();