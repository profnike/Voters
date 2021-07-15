function vote(){
    let age= prompt("Type your date of birth in this format (dd/mm/yy)")
    let seperate= age.split("/")
    let birthdate=seperate[0]
    let birthmonth=seperate[1]
    let birthyear=seperate[2]
    let today= new Date()
    let currdate=today.getDate()
    let currmonth= today.getMonth()+1
    let curryear=today.getFullYear()
    let currage;
    if(curryear==birthyear && birthmonth>currmonth){return "Invalid info"}
    if(age.length==0){return "Type in a valid date of birth"}
    if(age.length!=10){return "Incomplete info"}
    if(age.length>10){return "Incorrect info"}
    if(currdate>=birthdate && currmonth==birthmonth ){
        currage=parseInt(curryear-birthyear)
        console.log(currage)
    if(currage>=18){alert("Hurray!! You are eligible to vote")}
else{alert("Oops!! You are not eligible to vote")}}
    if(currmonth==birthmonth && currdate<birthdate){
        currage=parseInt((curryear-birthyear)-1)
        console.log(currage)
        if(currage>=18){alert("Hurray!! You are eligible to vote")}
        else{alert("Oops!! You are not eligible to vote")}}
    if(currmonth>birthmonth){
        currage=parseInt(curryear-birthyear)
        console.log(currage)
        if(currage>=18){alert("Hurray!! You are eligible to vote")}
        else{alert("Oops!! You are not eligible to vote")}}
    if(currmonth<birthmonth){
        currage=parseInt((curryear-birthyear)-1)
        console.log(currage)
        if(currage>=18){alert("Hurray!! You are eligible to vote")}
        else{alert("Oops!! You are not eligible to vote")}}
    
    }