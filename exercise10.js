function function1(name){
    let ele="";
    if(name==="game"){
        ele="gaming";
        document.querySelector(".tech").classList.remove("technologist");
        document.querySelector(".music").classList.remove("musician");
    } 
    else if(name==="music"){
        ele="musician";
        document.querySelector(".tech").classList.remove("technologist");
        document.querySelector(".game").classList.remove("gaming");
    } 
    else {
        ele="technologist";
        document.querySelector(".game").classList.remove("gaming");
        document.querySelector(".music").classList.remove("musician");
    }
    document.querySelector("."+name).classList.contains(ele)?document.querySelector("."+name).classList.remove(ele):document.querySelector("."+name).classList.add(ele);
}