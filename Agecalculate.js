var dob=document.querySelector("#dob")
dob.max=new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthdate=new Date(dob.value)
    let today=new Date()
    
    let y1,m1,d1;
    y1=today.getFullYear()
    m1=today.getMonth()+1
    d1=today.getDate()

    let y2,m2,d2;
    y2=birthdate.getFullYear()
    m2=birthdate.getMonth()+1
    d2=birthdate.getDate()

    let y3,m3,d3
    y3=y1-y2
    if(m1>=m2){
        m3=m1-m2
    }
    else{
        y3--;
        m3=12+(m1-m2)
    }
    if(d1>=d2){
        d3=d1-d2
    }
    else{
        m3--
        d3=getDaysFromMonth(y3,m3)+(d1-d2)
    }

    result=document.querySelectorAll(".action h2")
    result[0].innerText=y3+ " year";
    result[1].innerText=m3+ " months";
    result[2].innerText=d3+ " days";

}
function getDaysFromMonth(year,month){
    return new Date(year,month,0).getDate()

}