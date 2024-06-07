//  EJERCICIO 1

document.addEventListener("DOMContentLoaded", function() {
    image = document.getElementById("myImage")

    // Función para agregar/quitar el borde al hacer clic en la imagen
    function toggleBorder() {
        image.classList.toggle("active")
    }

    // Agregar el evento click a la imagen
    image.addEventListener("click", toggleBorder)
});



//  EJERCICIO 2


document.addEventListener("DOMContentLoaded", function() {
    sticker1Input = document.getElementById("sticker1Quantity");
    sticker2Input = document.getElementById("sticker2Quantity");
    sticker3Input = document.getElementById("sticker3Quantity");
    orderStatusParagraph = document.getElementById("orderStatus");

    // Función para verificar la cantidad de stickers seleccionados y mostrar el estado del pedido
    function checkOrderStatus() {
        totalStickers = parseInt(sticker1Input.value) + parseInt(sticker2Input.value) + parseInt(sticker3Input.value);
        
        if (totalStickers <= 10) {
            orderStatusParagraph.textContent = "Llevas " + totalStickers + " stickers";
        } else {
            orderStatusParagraph.textContent = "Llevas demasiados stickers";
        }
    }

    // Agregar eventos de cambio a los inputs de stickers
    sticker1Input.addEventListener("change", checkOrderStatus);
    sticker2Input.addEventListener("change", checkOrderStatus);
    sticker3Input.addEventListener("change", checkOrderStatus);
});



//      EJERCICIO 3

document.addEventListener("DOMContentLoaded", function() {
    digit1Select = document.getElementById("digit1");
    digit2Select = document.getElementById("digit2");
    digit3Select = document.getElementById("digit3");
    checkPasswordButton = document.getElementById("checkPassword");
    passwordStatusParagraph = document.getElementById("passwordStatus");

    // Función para verificar el password al hacer clic en el botón "Ingresar"
    checkPasswordButton.addEventListener("click", function() {
        password = digit1Select.value + digit2Select.value + digit3Select.value;

        if (password === "911") {
            passwordStatusParagraph.textContent = "Password 1 correcto";
        } else if (password === "714") {
            passwordStatusParagraph.textContent = "Password 2 es correcto";
        } else {
            passwordStatusParagraph.textContent = "Password incorrecto";
        }
    });
});
