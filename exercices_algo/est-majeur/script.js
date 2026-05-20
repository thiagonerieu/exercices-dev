let monAge = 16;

function estMajeur(age){
    if(age >= 18){
        return true
    }else{
        return false
    }
}

if(estMajeur(monAge)){
    console.log("Accès Autorisé !");
}else{
    console.log("Accès Refusé !");
}