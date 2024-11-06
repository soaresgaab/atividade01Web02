export function media (vetor) {
    let i = 0;
    let res = 0;
    for(i=0;i<vetor.length;i++){
        res += (vetor[i]/vetor.length)
    }

    return res
}

export function menor (vetor){
    return Math.min(...vetor)
}

export function maior (vetor){
    return Math.max(...vetor)
}