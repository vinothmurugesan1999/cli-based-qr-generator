import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs'

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Enter your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream("qr-image.png"));
    fs.writeFile('url.txt', URL, (error) =>{
        if(error) throw error;
        console.log("your file created sucessfuly")

    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
