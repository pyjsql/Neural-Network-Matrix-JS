class Matrix{
    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;
        this.matrix = new Array(rows);
        for(let i=0; i < rows;i++){
            this.matrix[i] = new Array(cols);
        }
    }
}