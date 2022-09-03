document.getElementById("Find").onclick=function(){
    var a=document.getElementById("NB1").value*1;
    var b=document.getElementById("NB2").value*1;
    var c=document.getElementById("NB3").value*1;
    var kq;
    if (a<=b && a<=c){
        kq=a;
        if(b<=c){
            kq=kq + " " + b + " " + c;
        }else if(b>c){
            kq=kq+ " " + c + " " +b;
        }
    }

    if (b<=b && b<=c){
        kq=b;
        if(a<=c){
            kq=kq + " " + a + " " + c;
        }else if(a>c){
            kq=kq+ " " + c + " " +a;
        }
    }

    if (c<=b && c<=a){
        kq=c;
        if(a<=b){
            kq=kq + " " + a + " " + b;
        }else if(b>c){
            kq=kq+ " " + b + " " +a;
        }
    }
    document.getElementById("Xapxep").innerHTML=kq;
}

//Bài 2
function chuyen(a){
    switch(a){
        case "B":
            return "Bố";
            break;
        case "M":
            return "Mẹ";
            break;
        case "A":
            return "Anh trai";
            break;
        case "E":
            return "Em gái";
            break;
    }
}
document.getElementById("Read").onclick=function(){
    var a =document.getElementById("Who").value;
    var kq="Chào " + chuyen(a);
    document.getElementById("Human").innerHTML=kq;
}

//Bài 3
document.getElementById("ReadNumber").onclick=function(){
    var a=document.getElementById("Number1").value*1;
    var b=document.getElementById("Number2").value*1;
    var c=document.getElementById("Number3").value*1;
    var chan=0;
    var le=0;
    if (a%2 == 0){
        chan++;
    }else{
        le++;
    }
    if (b%2 == 0){
        chan++;
    }else{
        le++;
    }
    if (c%2 == 0){
        chan++;
    }else{
        le++;
    }

    var kq="Có " + chan + " số chẵn, có " + le + " số lẻ";
    document.getElementById("NumberAbc").innerHTML=kq;

}

//Bài 4
document.getElementById("HowFar").onclick=function(){
    var a=document.getElementById("a").value*1;
    var b=document.getElementById("b").value*1;
    var c=document.getElementById("c").value*1;
    var kq;
    if (a==b || a==c || b==c){
           kq="Đây là tam giác cân"; 
    }
    if (a==b && a==c){
            kq="Đây là tam giác đều";     
    }
    if (a*a + b*b == c*c || a*a + c*c == b*b || b*b + c*c == a*a){
        kq="Đây là tam giác vuông";
    }
    document.getElementById("Location").innerHTML=kq;
}