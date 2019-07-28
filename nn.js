class NeuralNetwork{
    constructor(inputNodes, hiddenNodes, outputNodes, hiddenLayersCount){
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;
        this.hiddenLayersCount = hiddenLayersCount;

        this.weighths = new Array(hiddenLayersCount + 1);
        this.weighths[0] = new Matrix(hiddenNodes, inputNodes + 1);
        for(let i = 1; i< hiddenLayersCount;i++){
            this.weighths[i] = new Matrix(hiddenNodes, hiddenNodes+1);
        }
        this.weighths[this.weighths.length-1] = new Matrix(outputNodes,hiddenNodes+1);
    }
}