const beep = (times)=>{
    if(times.length === 0){
        return;
    }else{
        const arr = times.filter(ele=>ele>0);
        
        arr.forEach(ele=>{
            console.log(ele);
            setTimeout(()=>{
                process.stdout.write('\x07');
            }, +ele*1000);
        })
    }
}

const args = process.argv;
beep(args.slice(2));