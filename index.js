function generate() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
  const passwordLength = document.getElementById("passwordLength").value;
  const password1Input = document.getElementById("password1");
  const password2Input = document.getElementById("password2");

  let password1 = generatePassword(passwordLength, characters);
  let password2 = generatePassword(passwordLength, characters);

  password1Input.value = password1;
  password2Input.value = password2;
}

function generatePassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
  }
  return password;
}

document.addEventListener("DOMContentLoaded", function() {
  const password1Input = document.getElementById("password1");
  const password2Input = document.getElementById("password2");

  password1Input.addEventListener("click", function() {
      copyToClipboard(password1Input);
  });

  password2Input.addEventListener("click", function() {
      copyToClipboard(password2Input);
  });
});

function copyToClipboard(inputElement) {
  inputElement.select();
  navigator.clipboard.writeText(inputElement.value)
      .then(() => {
          const copiedMessage = document.createElement("div");
          copiedMessage.classList.add("copied-message");
          copiedMessage.textContent = "Copied!";

          inputElement.parentNode.insertBefore(copiedMessage, inputElement);

          setTimeout(function() {
              copiedMessage.remove();
          }, 1000);
      })
      .catch(err => {
          console.error('Failed to copy: ', err);
      });
}
