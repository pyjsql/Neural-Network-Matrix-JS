class NeuralNetwork{
    constructor(inputNodes, hiddenNodes, outputNodes, hiddenLayersCount){
        let complate = true;
        if(inputNodes <= 0){
            complate = false;
            throw "Error: Input nodes must be greater than zero!";
        }
        if(hiddenNodes <= 0){
            complate = false;
            throw "Error: Hidden nodes must be greater than zero!";
        }
        if(outputNodes <= 0){
            complate = false;
            throw "Error: Output nodes must be greater than zero!";
        }
        if(hiddenLayersCount <= 0){
            complate = false;
            throw "Error: Hidden layers count must be greater than zero!";
        }
        if(complate){
            this.inputNodes = inputNodes;
            this.hiddenNodes = hiddenNodes;
            this.outputNodes = outputNodes;
            this.hiddenLayersCount = hiddenLayersCount;

            // Routes weight matrixes and bias matrixes
            // Sample math NeuralNetwork(5,3,2,2) 5 input, 3 hiden nodes, 2 output, 2 hidden nodes layer
            // H[0] = W[0] x Input + Bias[0]
            // H[1] = W[1] x H[0] + Bias[1]
            // Output =  W[2] x H[1] + Bias[2]
            this.weighths = new Array(hiddenLayersCount + 1);
            this.biases = new Array(hiddenLayersCount + 1);
            this.weighths[0] = new Matrix(hiddenNodes, inputNodes);
            this.biases[0] = new Matrix(hiddenNodes, 1);
            for(let i = 1; i< hiddenLayersCount;i++){
                this.weighths[i] = new Matrix(hiddenNodes, hiddenNodes);
                this.biases[i] = new Matrix(hiddenNodes, 1);
            }
            this.weighths[this.weighths.length-1] = new Matrix(outputNodes,hiddenNodes);
            this.biases[this.biases.length-1] = new Matrix(outputNodes,1);
        }

    }

    feedforward(input){
        let hiddens = new Array(this.hiddenLayersCount);
        if(input instanceof Matrix){
            hiddens[0] = Matrix.multiply(this.weighths[0],input);
        }else{
            let inMatrix = Matrix.fromArray(input);
            hiddens[0] = Matrix.multiply(this.weighths[0],inMatrix);
        }
        hiddens[0].add(this.biases[0]);
        hiddens[0].map(sigmoid);

        for(let i = 1; i< this.hiddenLayersCount;i++){
            hiddens[i] = Matrix.multiply(this.weighths[i],hiddens[i-1]);
            hiddens[i].add(this.biases[i]);
            hiddens[i].map(sigmoid);
        }

        let output = Matrix.multiply(this.weighths[this.weighths.length-1],hiddens[hiddens.length-1]);
        output.add(this.biases[this.biases.length-1]);
        output.map(sigmoid);
        return output;
    }
}

function sigmoid(x){
    return 1/(1+Math.exp(x));
}