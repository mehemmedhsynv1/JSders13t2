let arr = ["Michael","Trevor","Franklin","Lamar","Jimmy"];
function printWithDashes(a){
    a = "____" + "," + a + "," + "____";
    a = a.split(",");
    for(let i = 0; i < a.length; i++){
        console.log(a[i]);
    }
}
function printWithHearts(a){
    a = "<3<3<3<3" + " " + a + " " + "<3<3<3<3";
    console.log(a);
}
function printWithIndex(a,b){
    a = b + " " + "-" + " " + a;
    console.log(a);
}
arr.forEach(printWithDashes);