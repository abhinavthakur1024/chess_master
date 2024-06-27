import { globalState, keySquareMapper } from "../index.js";

class HypotheticalBoard {
    constructor(data){
        if(!data){
            throw new Error('Please Provide Some Data');
        }
        this.state = JSON.parse(JSON.stringify(data));
       
    }

    move(){
        
    }
}

export default HypotheticalBoard;