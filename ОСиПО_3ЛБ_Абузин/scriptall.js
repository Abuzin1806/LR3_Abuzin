function Age(){
    do {
        var age = prompt('Сколько годиков?','Сюда пиши');
    } while(!confirm("Точно "+ age +"?"))
}
function Rename(){
    var input = document.getElementById('text').value;
    document.getElementById('secondname').innerHTML=input;
}
function Show(){
    alert( "Братиславский треугольник" );
}
function Check()
{
    d=document
    var admin, name;
    name = "Здарова бандиты";
    admin = name;
    alert( admin );
}
