
const cs = console.log

let nn
function setup(){

    nn = new NeuralNetwork(2, 2, 1)

    let inputs = [1, 0]
    let output = nn.feed_forward(inputs)

    cs(output)
}


// function draw(){}