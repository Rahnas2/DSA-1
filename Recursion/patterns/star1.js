

//reverse trinagle

function trinagleRev(r, c){
    if(r === 1) return process.stdout.write('x')
    
    if(c < r){
        trinagleRev(r, c+1)
        process.stdout.write('* ')
    }else{
        trinagleRev(r-1, 0)
        process.stdout.write('\n')
    }
}

trinagleRev(4,0)