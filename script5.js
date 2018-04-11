var heightDebbie = 170;
var heightNatan = 195;
var ageDebbie = 36;
var agesNatan = 25;
var ageMerry = 25;
var heightMerry = 165;
function hitungskor(tinggibadan,umur)
{
    var winner = tinggibadan + 5 * umur;
    return winner;
}
var nilaiDebbie=hitungskor(heightDebbie,ageDebbie);
var nilaiNatan=hitungskor(heightNatan,agesNatan);
var nilaiMerry=hitungskor(heightMerry,ageMerry);
console.log(nilaiDebbie);
console.log(nilaiNatan);
console.log(nilaiMerry);
if(nilaiNatan>nilaiDebbie && nilaiNatan>nilaiMerry)
    console.log('Natan Menang Dengan Skor'+nilaiNatan);
else if(nilaiMerry>nilaiNatan && nilaiMerry>nilaiDebbie)
    console.log('Merry Menang Dengan Skor'+nilaiMerry);
else
{
    console.log('Debbie Menang Dengan Skor'+nilaiDebbie);
}