function transporMatriz(A){
    let mOriginal ="";
    for(let i = 0; i < A.length; i++){
        for(let j = 0; j < A[0].length; j++){
            mOriginal += A[i][j] + ' ';
        }
        mOriginal += '\n';
    }
    console.log(mOriginal);

    let mTransposta = "";
    for(let j = 0; j < A[0].length; j++){
        for(let i = 0; i < A.length; i++){
            mTransposta += A[i][j] + ' ';
        }
        mTransposta += "\n";
    }
    console.log(mTransposta);

}

const A = [
            [1, 2], 
            [3, 4], 
            [5, 6]
        ];

transporMatriz(A);