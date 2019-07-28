class Matrix{
    constructor(rows,cols){
        //Create matrix
        this.rows = rows;
        this.cols = cols;
        this.matrix = new Array(rows);
        for(let i = 0;i<this.rows;i++){
            this.matrix[i] = new Array(cols);
            for(let j = 0; j< this.cols; j++){
                this.matrix[i][j] = Math.random();
            }
        }
        this.math = new MatrixMath(this);
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

    static sub(a,b){
        let result = new Matrix(a.rows,a.cols);
        for(var i=0; i< a.cols;i++){
            for(var j=0; j<a.rows;j++){
                result.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
            }
        }
        return result;
    }
    //transpose of matrix self
    transpose() {
        let a = this.matrix;
        let c = this.cols;
        this.cols = this.rows;
        this.rows = c;
        this.matrix = a[0].map(function(x,i) {//for i cols
            return a.map(function(y,k) {//for j rows
                return y[i];
            })
        });
    }
    //returns new matrix
    static transpose(m){
        let n = m.copy();
        n.transpose();
        return n;
    }
    //Matrix multiply
    multiply(m){
        if(m instanceof Matrix){
            let n = new Matrix(this.rows, m.cols);
            n.matrix = n.matrix.map((row, i) => {
                return row.map((val, j) => {
                    return this.matrix[i].reduce((sum, elm, k) => sum + (elm * m.matrix[k][j]), 0)
                })
            });
            return n;
        }else{
            for(let i=0; i < this.rows; i++){
                for(let j=0; j < this.cols; j++){
                    this.matrix[i][j] *= m;
                }
            }
        }
    }

    static multiply(m1,m2){
        return m1.multiply(m2);
    }

    static fromArray(arr){
        let m = new Matrix(arr.length,1);
        for(var i = 0; i< m.rows;i++){
            m.matrix[i][0] = arr[i];
        }
        return m;
    }

    toArray(){
        let arr = [];
        for(let i = 0; i < this.rows; i++){
            for(let j = 0; j < this.cols; j++){
                arr.push(this.matrix[i][j]);
            }
        }
        return arr;
    }

    static map(matrix,func){
        let m = matrix.copy();
        m.map(func);
        return m;
    }

    map(func){
        this.matrix = this.math.maph(func);
    }
    
}

class MatrixMath{
    constructor(parent){
        this.parent = parent;
    }
    maph(func){
        let a = this.parent.matrix;
        return a.map((y,i)=>{
            return a[i].map(func);
        });
    }
}

/*
a = new Matrix(3,2);
a.matrix = [[8, 3], [2, 4], [3, 6]];
b = new Matrix(2,3);
b.matrix = [[1, 2, 3], [4, 6, 8]];
c = a.multiply(b);
a.print();
b.print();
c.print();
*/