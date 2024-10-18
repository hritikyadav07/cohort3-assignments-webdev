const fs = require('fs');


const cleanFile = (filePath) => {

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }

        let cleanedContent = data.split(" ").filter(item => item !== "").join("");// done some changes

        // console.log(cleanedContent);
        // cleanedContent = cleanedContent.join(" ");
        fs.writeFile(filePath, cleanedContent, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
};


const filePath = 'example.txt'; 
cleanFile(filePath);
