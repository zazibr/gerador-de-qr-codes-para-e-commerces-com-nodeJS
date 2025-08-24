async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE_LETTERS === 'true') {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if (process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(... "abcdefghijklmnopqrstuvwxyz");
    }

    if (process.env.NUMBERS === 'true') {
        permitted.push(... "0123456789");
    }

    if (process.env.SPECIAL_CHARACTERS === 'true') {
        permitted.push(... "!@#$%^&*()_+~`|}{[]:;?><,./-=");
    }

    return permitted;

}


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