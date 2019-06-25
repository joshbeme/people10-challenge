class Transform {
  constructor(dataArray, isData) {
    if(isData){
      this.isData = isData
    }
    this._dataArray = dataArray;
    this.query = this.transformData(this._dataArray);
    this.convertObjectToArray = this.convertObjectToArray.bind(this);
  
  }
  convertObjectToArray(element, index) {
    const elementKeys = Object.keys(element);
    const objectMapping = elementKeys.map((key, i) => {
      return element[key];
    });
    const query = this.createValueQuery(objectMapping);
    return query
  }
  transformData(data) {
    const dataArray = data;
    const arrayMapping = dataArray.map((element, i)=>this.convertObjectToArray(element, i));
    if(this.isData)return arrayMapping.join(', \n');
    return arrayMapping;
  }
  createValueQuery(array){
    let query = '('
    query += array.join(', ');
    query +=')'
    return query
  }
}

module.exports = Transform;
