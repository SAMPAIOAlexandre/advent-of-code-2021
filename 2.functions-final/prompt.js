import readlineSync from 'readline-sync';
// 🦁 Nos fonctions vont utiliser la méthode `prompt`
// J'utilise une librairie afin que `prompt` soit synchrone pour éviter que tu aies besoin
// De gérer l’asynchrone dans tes fonctions

function askPasswordLength() {
  // longueur du mot de passe 
  let number = parseInt(readlineSync.question("Combien de caractères souhaitez vous? (8-36) "), 10);
  while (number > 36 || number < 8) { 
    throw new Error("Choisissez un mot de passe qui contient entre 8 et 36 caractères.");
    number = parseInt(readlineSync.question("Combien de caractères ? (8-36) "), 10);
  }

  return number;
}

function askSpecialChars() {
  // caracteres spéciaux ou pas 
  let specialChars = readlineSync.question("Voulez vous inclure des caractères spéciaux à votre mot de passe  y ou n : ").toLowerCase()

  while (specialChars !== "y" && specialChars !== "n" ) {
    throw new Error("Veuillez choisire y ou n ")
    specialChars = readlineSync.question("Voulez-vous inclure des caractères spéciaux à votre mot de passe ? (y ou n) : ").toLowerCase();
  }

  return specialChars
}

function askNumbers() {
  // inclure des nombres
  let number = readlineSync.question("Voulez vous inclure des chiffres dans votre mot de passe (y ou n) : ").toLowerCase()

  while (number !== "y" && number !== "n") {
    throw new Error("Veuillez choisire y ou n ")
    number = readlineSync.question("Voulez vous inclure des chiffres dans votre mot de passe ? ").toLowerCase()
  }

  return number
}

function askUppercase(){
  // inclure des majuscules
  let upperCase = readlineSync.question("Voulez vous inclure des majuscules (y ou n) : ").toLowerCase()

  while (upperCase !== "y" && upperCase !== "n") {
    throw new Error("Veuillez choisire y ou n ")
    upperCase = readlineSync.question("Voulez vous inclure des majuscules (y ou n) : ").toLowerCase()
  }
return upperCase
}

function main () {

  let length = null; 
  let specials = null;
  let number = null;
  let upperCase = null;

  while (length === null || specials === null || number === null || upperCase === null) {
    try {
      if (length === null) length === askPasswordLength();
      if (specials === null ) specials === askSpecialChars();
      if (number === null) number === askNumbers();
      if (upperCase === null) upperCase = askUppercase();
    } catch (err) {
      console.error("Erreur : ", err.message)
    }
  }

  const password = generatePassword(length,specials,number,upperCase);
  console.log("Mot de passe :", password)
  
}

function generatePassword(length, specials,number,upperCase) {
// on va recceuillir toutes les infos saisie par le user

// variable vide qui va recevoir le mdp généré 
let password = ''

// on définit les caracteres utilisable
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPECIALS = '!@#$%^&*()';
const NUMBERS = '0123456789';
}



export function prompt(question) {

  // readlineSync.question returns the user's input once they hit enter
  const answer = readlineSync.question(question);
  

  return answer;
}

prompt()

