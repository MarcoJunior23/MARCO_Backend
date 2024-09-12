let n1 = 20, n2=50; // declaração de constantes
let res1,res2; // declaração de variaveis
// função 1
function soma(){
 res1 = n1+n2;
 console.log(res1);
 n1 = 15;
 n2 = 40;
 res1 = n1+n2;
 console.log(res1);
}
// função 2
function mult(){
    res2 = n1*n2;
    console.log(res2);

}
soma();
mult();