// undefined: Bir değişkenin değerinin atanmamış olması durumunda kullanılır.
let undefVariable;
console.log(undefVariable);

//null değeri, bir değişkenin bilinçli olarak boş olarak atanması durumunda kullanılır.

let nullVariable = null;
console.log(nullVariable);

// sayı bölü 0 javascript de exception fırlatmaz. Infinity döndürür.

console.log(`number/0 : ${2/0}`);

// find metodu sadece ilk bulduğunu ekrana bastırır.

const hasNumberArray  = [2,3,4,5,2,2];
console.log(hasNumberArray.find((x) => x>2));