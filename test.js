// // const element = require('./globalObj') ;

// console.log(element);

const fs = require('fs');

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// fs.writeFile('./docs/blog1.txt' , 'e=hello' , ()=>{
//     console.log('file was written');
// })
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

if (fs.existsSync('./docs/delet.txt')) {
    fs.unlink('./docs/delet.txt', (err) => {
        if (err){
            console.log(err);
        }
        console.log('file deleted');
    })
}