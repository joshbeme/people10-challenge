const fs = require('fs');
const parser = require("csv-parser");

class Extractor {
    constructor(filePath, buffer){
        this.buffer = buffer;
        this.parseCsv(filePath);
        this._count = 0;
        this._results = [];
    }
 
    parseCsv(filePath) {
        const self = this
        console.log(this)
        fs.createReadStream(filePath, callback)
          .pipe(parser({headers: false}))
          .on("data", data => {
            self._count++
            if(self._count % self.buffer === 0){
                callback(self._results)
                self._results = [];
            }
            self._results.push(data);
          }).on('end', ()=>{
            callback(self._results)
          })
          .on("error", err => {
            reject(new Error(`You messed up ${err}`));
          });
      };
};
new Extractor('../data/data1.csv', 100);
module.exports = Extractor;