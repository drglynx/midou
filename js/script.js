//
function equals(a,b,c){
    if(a== b && b== c)
    return true;
    else return false;

}
console.log(equals("a","b","c"));
//convert minutes to secondsf
function minutes(minutes){
    return minutes *60
}
console.log(minutes (5))
//e	Area	of	a	rectangle
function aria(height,width){
    return height * width
}
console.log (aria(12,7))
//The	next	number
function nextnumber(number ){
    return (number + 1)
}
console.log (nextnumber(7))
//foot
function score(win , defeat,draws){
    return (win*3+draws+defeat*0)
}
console.log (score(4,2,1))
//betwin
function between (a){
    return a>100 && a<200
}
console.log(between (150))
//Hours	and	minutes	to	seconds
function convertHourMin (a,b){
    return a*3600 + b*60
}
console.log(convertHourMin (1,5))
//Equality	check
function equals(a,b) {  
    if(a== b )
    return true;
    else return false;
}
console.log(equals("1","1"));
console.log(equals("1","2"));
//Compare	Strings	by	 Count	of	Characters
function strings(a,b){
    console.log("a.length"+a.length);
    console.log("b.length"+b.length);
    if(a.length <b.length)
    return "The	first	string	is	taller";
    else return "The	second	string	is	taller";

}
console.log(strings("im the one","chikour"));
//Unique	Chars	count

