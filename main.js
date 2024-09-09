alert("oi")

function reverso()
{
    let palavra = document.getElementById("pala").value;
    let invert =palavra.split("").reverse().join("");
    alert(invert);
}


document.write('<h1> Ex.2: </h1></br>')



function mudaFrase(frase)
{
    vetAux = [];
    vetR=[];
    vetAux = frase.split(" ");
    for(let i=vetAux.length, j=0; i > -1;i--,j++)
        vetR[j]=vetAux[i];

    document.write(vetR.join(" "));
}

var fra= prompt("Digite uma frase: ");

mudaFrase(fra);  

function buscar(vet,palavra)
{
    for(i=0; i< vet.length; i++ )
    {
        if(vet[i]==palavra)
        {
            return true
        }
        else
        {
            return false;
        }

    }
}

function addPalavra()
{
    var vet=[];
    let op;
    var ler;
    do
    {
        ler = prompt("palavra: ");
        if(buscar(vet,ler) == false)
        {
            ver=ler;
        }
        else
        {
            document.write('palavra ja add');
        }
    }while()   
}

addPalavra();
