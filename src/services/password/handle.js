
import permittedCharacters from './utils/permitted-characters.js';

async function handle() {
    let characters = [];
    let password = "";
    const passwordLength = parseInt(process.env.PASSWORD_LENGTH || 8);

    characters = await permittedCharacters();

    for (let contador = 0; contador < passwordLength; contador++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;

}

export default handle;