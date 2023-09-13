var n1=window.prompt("Entrez le premier nombre à calculer: ");
var n2=window.prompt("Entrez le second nombre: ");
var signe=window.prompt("Entrez l'opérateur à exécuter(+,-,*,/): ");
if (signe='+')
{
    var resultat=(n1+n2);
    console.log(resultat);
    window.alert(resultat);
}
if (signe='-')
{
    var resultat1=n1-n2;
    console.log(resultat1);
    window.alert(resultat1);
}
if (signe="*")
{
    var resultat2=n1*n2;
    console.log(resultat2);
    window.alert(resultat2);
}
if (signe="/")
{
    var resultat3=n1/n2;
    console.log(resultat3);
    window.alert(resultat3);
}
else
{
    console.log("erreur d'opérateur");
    window.alert("erreur d'opérateur");
}