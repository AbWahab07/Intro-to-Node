var fs = require('fs');

if(fs.existsSync('src/fs/temp')){
  console.log('Directory exists, removing it');
  if(fs.existsSync('src/fs/temp/new.txt')){
    fs.unlinkSync('src/fs/temp/new.txt');
  }
  fs.rmdirSync('src/fs/temp');
}


// This could result in Christmas tree problem
// So you should use named functions instead. But this code is just for demo purpose
fs.mkdir('src/fs/temp', (err) => {
  fs.exists('src/fs/temp', (exists) => {
    if (exists) {
      process.chdir('src/fs/temp');
      fs.writeFile('test.txt', 'Async This is some test text for the file', (err) => {
        fs.rename('test.txt', 'new.txt', (err) => {
          fs.stat('new.txt', (err, stats) => {
            console.log('Files has size: ' + stats.size + ' bytes');
            fs.readFile('new.txt', (err, data) => {
              console.log('Contents of the file: ' + data.toString());
            });
          });
        });
      });
    }
  });
});

