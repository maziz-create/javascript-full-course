// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

/**
 * Türkçe:
 * ekle(), çıkart(), böl() ve çarp() adında fonksiyonlar üret.
 * Kullanıcı aynı isimli butonlara tıkladığında ilgili fonksiyonu çağır ve 
 * sonucu 'sum-el' id'sine sahip span etiketinde göster.
 */

let num1El = document.getElementById('num1-el');
let num2El = document.getElementById('num2-el');
let sumEl = document.getElementById('sum-el');

num1El.textContent = 60;
num2El.textContent = 12;

// console.log(parseInt(num1El.textContent));

const add = () => {
    sumEl.textContent = parseInt(num1El.textContent) + parseInt(num2El.textContent);
}

const subtract = () => {
    sumEl.textContent = parseInt(num1El.textContent) - parseInt(num2El.textContent);
}

const divide = () => {
    sumEl.textContent = parseFloat(num1El.textContent) / parseFloat(num2El.textContent);
}

const multipy = () => {
    sumEl.textContent = parseInt(num1El.textContent) * parseInt(num2El.textContent);
}

