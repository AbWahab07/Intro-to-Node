var fs = require('fs');

if(fs.existsSync('src/fs/temp')){
  console.log('Directory exists, removing it');
  if(fs.existsSync('src/fs/temp/new.txt')){
    fs.unlinkSync('src/fs/temp/new.txt');
  }
  fs.rmdirSync('src/fs/temp');
}

fs.mkdirSync('src/fs/temp');

if(fs.existsSync('src/fs/temp')){
  process.chdir('src/fs/temp');
  fs.writeFileSync('test.txt', 'This is some test text for the file');
  fs.renameSync('test.txt', 'new.txt');
  console.log('Files has size: ' + fs.statSync('new.txt').size + ' bytes');
  console.log('Contents of the file: ' + fs.readFileSync('new.txt').toString());
}

