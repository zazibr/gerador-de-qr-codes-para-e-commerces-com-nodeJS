import chalk from 'chalk';

const mainPrompt = [{
    name: "select",
    description: chalk.yellow.bold("Escolhe a ferramenta (1/QrCode, 2/Password Generator)"),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Selecione uma opção válida (1 ou 2):"),
    required: true,
    },
];

export default mainPrompt;