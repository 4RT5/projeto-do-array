nomeDosEstudantesArray = [];
function submit()
{

    
var MostrarEstudantes = [];
for (var j = 1; j <=4;j++)

{
var nome = document.getElementById("nameOfTheStudent"+j).value
nomeDosEstudantesArray.push(nome);
}
var comprimentoDoArray = nomeDosEstudantesArray.lenght;

for (var k = 0; k < comprimentoDoArray; k++){
    MostrarEstudantes.push("NAME- "+ nomeDosEstudantesArray[k] + "</h4>");


}

document.getElementById("displayNameWithCommas").innerHTML = MostrarEstudantes;
}
 