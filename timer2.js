const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
    console.log(key);
    if (key === '\u0003') {
        process.stdout.write('Thanks for using me, ciao!\n');
        process.exit();
      }


      if(typeof(+key) === 'number'){
        setTimeout(()=>{
            process.stdout.write('\x07');
        }, +key*1000);
      }

      if(key === 'b'){
        process.stdout.write('\x07');
      }
      
    
  });
  