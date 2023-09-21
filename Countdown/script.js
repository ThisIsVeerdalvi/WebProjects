// const endDate = "20 March 2050 10:00 PM";

const endDate = document.getElementById("end-date").innerText ;
const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date(endDate);
    const now = new Date();

    const dif = (end - now) /1000;

    if(dif<0){
        return;
    }
    inputs[0].value = Math.floor(dif/3600/24);
    inputs[1].value = Math.floor(dif/3600 ) % 24;
    inputs[2].value = Math.floor(dif/60) %60;
    inputs[3].value = Math.floor(dif%60);


}

clock()

setInterval(

    ()=>{
        clock()
    },
    1000

) 

/*

 1 day = 24 hr
 1 hr = 60 min
 60 min =3600 sec
*/