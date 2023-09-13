var n1=parseInt(window.prompt("Entrez le premier nombre à calculer: "));
var n2=parseInt(window.prompt("Entrez le second nombre: "));

// alert(typeof(n1));
// alert(typeof(n2));

var signe=window.prompt("Entrez l'opérateur à exécuter(+,-,*,/): ");
if(signe=='+')
{
    var addi=(n1+n2);
    console.log(addi);
    window.alert(addi);
}
else if (signe=='-')
{
    var sous=n1-n2;
    console.log(sous);
    window.alert(sous);
}
else if (signe=="*")
{
    var multi=n1*n2;
    console.log(multi);
    window.alert(multi);
}
else if (signe=="/")
{
    var div=n1/n2;
    console.log(div);
    window.alert(div);
}
else
{
    console.log("erreur d'opérateur");
    window.alert("erreur d'opérateur");
}