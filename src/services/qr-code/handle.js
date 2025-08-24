import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(error, result) {
    if (error) {
        console.error("Error on application");
        return;
    }

    const isSmall = result.type == 2;

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code generado com sucesso:\n"));
        console.log(qrcode);
    });
}

export default handle;