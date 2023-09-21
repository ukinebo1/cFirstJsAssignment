


let myName =prompt("Enter your name", '');
let myWeight =prompt(parseFloat("Enter your weight"));

function myBodyWeight(name, weight){
    
     if(isNaN(weight)){
         alert('Invalid input');
     }
    let newWeight =Number(weight * 2.20462);
    //console.log(newWeight)
    
    let result = `My Name is ${name} and I weigh ${newWeight}Pounds`;
    alert(result);

}myBodyWeight(myName, myWeight)






