
function sigmoid(x){
    return 1 / (1 + Math.exp(-x))
}

class NeuralNetwork {

    constructor(
        num_input,
        num_hidden,
        num_output
    ){
        this.num_input  = num_input
        this.num_hidden = num_hidden
        this.num_output = num_output    

        this.weights_ih = new Matrix(this.num_input, this.num_hidden)
        this.weights_ih.randomize()
        this.bias_h = new Matrix(this.num_hidden, 1)
        this.bias_h.randomize()

        this.weights_ho = new Matrix(this.num_output, this.num_hidden)
        this.weights_ho.randomize()
        this.bias_o = new Matrix(this.num_output, 1)
        this.bias_o.randomize()
    }


    feed_forward(input_array){

        // generating the hidden outputs
        let inputs = Matrix.fromArray(input_array)

        let hidden = Matrix.multiply(this.weights_ih, inputs)
        hidden.add(this.bias_h)
        hidden.map(sigmoid)

        let output = Matrix.multiply(this.weights_ho, hidden)

        output.add(this.bias_o)
        output.map(sigmoid)
        
        return output.toArray();
    }
    

}

