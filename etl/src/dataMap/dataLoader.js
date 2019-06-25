const events = require('events');

class LoadData{
    constructor(){
        events.addListener('data', this.data)
        events.addListener('map', this.map)
    }
    mapLoad(map){
        this.map = map
    }
    dataLoad(data){
        this.data = data
    }
    load(){
        if(this.data && this.map){

        }
    }
}

module.exports = LoadData;