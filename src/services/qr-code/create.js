import prompt from "prompt";
import promptQrCode from "../../prompt/prompt-qrcode.js";
import handle from "./handle.js";

async function createQRCode(data) {
    prompt.get(promptQrCode, handle );

    prompt.start();
}

export default createQRCode;