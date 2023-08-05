
/* 153  370  407 sayisi armstrong */

/* bir sayinin (153) her bir rakaminin (1-5-3) kuplerinin toplami kendisini veriyorsa
buna armstrong sayisi denir */

/* 

153 = 1*1*1  +  5*5*5  +  3*3*3  =  1  +  125  +  27  =153

*/

let sayi = prompt("Lutfen bir sayi giriniz: ");     /* numbera cevirmiyoruz cunku .charAt string icerisinde var*/

let toplam =0;

for(let i=0; i<sayi.length; i++){           /*i sayinin uzunlugu kadar calisacak  */
    let rakam = sayi.charAt(i);             /* charAt rakamlara ayirdi ve ornegin 2 oldugunde 153 un 3 degerinin getir diyoruz*/
    toplam+=rakam*rakam*rakam;              /* toplam = toplam +(rakam*rakam*rakam) */
}

if(sayi==toplam){      
    alert("Armstrong sayisidir");
}else{
    alert("Armstrong sayisi degildir");
}

/* 
!
.charAt bize girilen veriyi sembollere ayirir. ornegin 153 ise bunu 1-5-3 ve olarak dikkate alir ilk
karakter 0, ikincisi 1 diye ilerler
    1 5 3...
    0 1 2...
! 
.lenght ise girilen sayinin uzunlugunu vermektedir 
 */