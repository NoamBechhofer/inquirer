import { input } from "@inquirer/prompts";
import { image } from "qr-image";
import { writeFile } from "fs/promises";
/*
 1. Use the inquirer npm package to get user input.
 */
const url = await input({
	message: "Enter a string to generate a QR code"
});
/*
 2. Use the qr-image npm package to turn the user entered URL into a QR code
image.
*/
const qr = image(url);
/*
 3. Create a txt file to save the user input using the native fs node module.
 */
await writeFile("qr.txt", url);
/*
 4. Create a png file to save the QR code image using the native fs node module.
 */
await writeFile("qr.png", qr);
