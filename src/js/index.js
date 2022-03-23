function mudarTema(){
    document.body.classList.toggle("dark");

    if(document.body.classList == "dark"){
        var elemento = document.getElementById('buttonMode');
        elemento.value = "Light Mode";
   
    }else{
        var elemento = document.getElementById('buttonMode');
        elemento.value = "Dark Mode";
    }
}

