

// var m = new Matrix(3, 2)

class Matrix
{
    constructor(
        rows,
        cols
    ){
        this.rows = rows
        this.cols = cols 
        this.data = []

        this.randomize()


        
    }

    pp(){
        console.table(this.data)
    }


    init(){
        for(let i = 0; i < this.rows; i++){
            this.data[i] = []
            for(let j = 0; j < this.cols; j++){
                this.data[i][j] = 0
            }
        }
    }


    randomize(){
        for(let i = 0; i < this.rows; i++){
            this.data[i] = []
            for(let j = 0; j < this.cols; j++){
                this.data[i][j] = Math.floor(Math.random() * 10)
            }
        }
    }


    // ################ SCALAR #############

    multiply(n){
        if(n instanceof Matrix){
            if(this.rows != n.rows || this.cols != n.cols) return false
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] *= n.data[i][j]
                }
            }
        } else {
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] *= n
                }
            }   
        }
    }

    add(n){
        if(n instanceof Matrix){
            if(this.rows != n.rows || this.cols != n.cols) return false
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] += n.data[i][j]
                }
            }
        } else {
            for(let i = 0; i < this.rows; i++){
                for(let j = 0; j < this.cols; j++){
                    this.data[i][j] += n
                }
            }   
        }
    }

    // ################ ELEMENT-WISE #############



}

