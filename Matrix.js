class Matrix{
    constructor(rows,cols){
        //Create matrix
        this.rows = rows;
        this.cols = cols;
        this.matrix = new Array(rows);
        for(let i=0; i < rows;i++){
            this.matrix[i] = new Array(cols);
            for(let j=0; j < this.cols; j++){
                this.matrix[i][j] = Math.random();
            }
        }
    }
    //Returns copy of matrix
    copy(){
        let n = new Matrix(this.rows, this.cols);
        for(let i=0; i < this.rows; i++){
            for(let j=0; j < this.cols; j++){
                n.matrix[i][j] = this.matrix[i][j];
            }
        }
        return n;
    }
    //prints table of matrix in js console
    print(){
        console.table(this.matrix);
    }
    // add a number or another matrix
    add(m){
        if(m instanceof Matrix){
            if(this.cols === m.cols && this.rows === m.rows){
                for(let i=0; i < this.rows; i++){
                    for(let j=0; j < this.cols; j++){
                        this.matrix[i][j] += m.matrix[i][j];
                    }
                }
            }else{
                throw "Matrix col and row numbers not equal!";
            }
        }else{
            for(let i=0; i < this.rows; i++){
                for(let j=0; j < this.cols; j++){
                    this.matrix[i][j] += m;
                }
            }
        }
    }
    // returns new matrix
    static add(m1,m2){
        if(m1 instanceof Matrix && m2 instanceof Matrix){
            let n = m1.copy();
            n.add(m2);
            return n;
        }else{
            throw "Variable must be Matrix!";
        }
    }
}

let a = new Matrix(3,2);
let b = new Matrix(3,2);
let c = Matrix.add(a,b);
a.print();
b.print();
c.print();

