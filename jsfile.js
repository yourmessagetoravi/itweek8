window.onload = function(){
    let fres = document.getElementById("result");

    let allbtns = document.getElementById("calc").getElementsByClassName("cdiv");

    for(let i = 0; i<allbtns.length;i++){
        allbtns[i].addEventListener("click",function(){
            console.log(this.innerHTML);

            if(this.innerHTML == "="){
                fres.value = eval(fres.value);  
            }
            else if(this.innerHTML == "C"){
                fres.value="";
            }
            else{
            fres.value += this.innerHTML;
            }
        })
    }

}