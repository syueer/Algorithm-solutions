const setZeros = (matrix:number[][]) : void => {
  let array = [...matrix]
  for(let i = 0 ; i < array.length; i++) {
    for (let j = 0; i < array[0].length; j++) {
      if(array[i][j] === 0) {
        for(let x = 0 ; x < matrix.length; x++) {
          matrix[x][j] = 0
        }
        for(let y = 0 ; y < matrix[0].length; y++){
          matrix[i][y] = 0
        }
      }
    }
  }
}