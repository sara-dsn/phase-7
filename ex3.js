var n1=window.prompt("Entrez le premier nombre à calculer: ");
var n2=window.prompt("Entrez le second nombre: ");
var signe=window.prompt("Entrez l'opérateur à exécuter(+,-,*,/): ");
if (signe="+")
{
    resultat=(n1+n2);
    console.log(resultat);
    window.alert(resultat);
}
if (signe="-")
{
    resultat=n1-n2;
    console.log(resultat);
    window.alert(resultat);
}
if (signe="*")
{
    resultat=n1*n2;
    console.log(resultat);
    window.alert(resultat);
}
if (signe="/")
{
    resultat=n1/n2;
    console.log(resultat);
    window.alert(resultat);
}
else
{
    console.log("erreur d'opérateur");
    window.alert("erreur d'opérateur");
}