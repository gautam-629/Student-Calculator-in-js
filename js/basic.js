 let show=document.getElementById('btn')
 show.addEventListener('click',function(){
    let ma= document.getElementById('ma').value;
    let st= document.getElementById('st').value;
    let di= document.getElementById('di').value;
    let cf= document.getElementById('cf').value;
    let en= document.getElementById('en').value;
    let total=parseFloat(ma)+parseFloat(st)+parseFloat(di)+parseFloat(cf)+parseFloat(en);
    let per=total/500*100;
    let greade="";
    if(per<100 && per>91){
        greade="A+";
    }
    else if(per<90 && per>80){
        greade="A";
    }
    else if(per<80 && per>70){
        greade="B+";
    }
    else if(per<70 && per>60){
        greade="B";
    }
    else if(per<60 && per>50){
        greade="C+";
    }
    else if(per<50 && per>40){
        greade="c";
    }
    else if(per<40 && per>30){
        greade="D";
    }
    else{   
        greade="E";
    }
    if(per>=35){
        document.getElementById("show").innerHTML=` Out of 500 you get ${total} marks,${per}% and ${greade} greade you are pass` 
    }
    else{
        document.getElementById("show").innerHTML=` Out of 500 you get ${total} marks,${per}% and ${greade} greade you are fail`
    }
   
 })
   
 
