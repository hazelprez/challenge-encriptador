const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";

function validarTexto() {
  let texto = textArea.value;
  for (let i = 0; i < texto.length; i++) {
    if (!(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122)) {
      alert("Solo son permitidas letras minúsculas y sin acentos");
      location.reload();
      return true;
    }
  }
}

function encriptarTexto() {
  if (!validarTexto()) {
    let texto = textArea.value;
    var map = {
      a: "ai",
      e: "enter",
      i: "imes",
      o: "ober",
      u: "ufat",
    };
    texto = texto.replace(/a|e|i|o|u/g, function (char) {
      return map[char];
    });
    mensaje.value = texto;
  }
}

function desencriptarTexto() {
  let texto = textArea.value;
  var map = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };
  texto = texto.replace(/ai|enter|imes|ober|ufat/g, function (matched) {
    return map[matched];
  });
  mensaje.value = texto;
}

function copiarTexto() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  textArea.value = "";
  alert("Texto Copiado");
}
