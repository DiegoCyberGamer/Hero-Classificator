let hero = [nome = "Diego", exp = 0]
let lastLvl;
let rank;

           

for(exp = 0 ; exp < 10002 ; exp++ ){

    if(exp < 1001){
        rank = "ferro"
    } 
    else if(exp > 1000 && exp <= 2000){
        rank = "Bronze"
    } else if(exp > 2000 && exp <= 5000){
        rank = "Prata"
    } else if(exp > 5000 && exp <= 7000){
        rank = "Ouro"
    } else if(exp > 7000 && exp <= 8000){
        rank = "Platina"
    } else if(exp > 8000 && exp <= 9000){
        rank = "Ascendente"
    } else if(exp > 9000 && exp <= 10000){
        rank = "Imortal"
    } else if(exp >= 10001){
        rank = "Radiante"
    }
    if(rank == lastLvl){
        console.log();
    } else
    console.log("----------------------------------------------------------");
    console.log("O herói de nome: " + nome + " está no nivel " + rank)
    lastLvl = rank


} 
