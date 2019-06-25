const fs = require("fs");

//Api works with streams for maximum output
const parser = require("csv-parser");

/**
 * Parses csv based
 *
 * @param {string} directory
 * @param {function} callBack
 *
 * @returns {Array}
 */

class DataMap {
  constructor(config) {
    const { mapDirectory, dataDirectory, tableName } = config;
    this.parse()
  }
  state = {};

  parseCsv(directory, callBack) {
    fs.createReadStream(directory)
      .pipe(parser())
      .on("data", data => {
        results.push(data);
      })
      .on("end", callBack)
      .on("error", err => {
        reject(new Error(`You messed up ${err}`));
      });
  };
}
function stuff() {
  parseCsv("./data/map1.csv").then(data => {
    console.log(data);
  });
}
const stff = stuff();
/**
 * Maps csv map file to data file
 * @param {object} mapObj
 * @param {string} mapObj.mapDirectory
 * @param {string} mapObj.dataDirectory
 * @param {string} mapObj.tableName
 * @param {string} mapObj.config Add custom options
 *
 *  @returns {Promise}
 */
async function mapDataToTable({
  mapDirectory,
  dataDirectory,
  tableName,
  config
}) {
  let query = ``;
  const mapping = await parseCsv(mapDirectory);
  const dataSet = await parseCsv(dataDirectory);
  //If the first row is correct I length can assume they all are.
  if (map[0].length !== data[0].length) {
    throw new Error("Cannot map inequal sized key value pairs.");
  }

  let table = "";
  const tableCollumns = Object.keys(mapping);
  const tableRows = tableCollumns.reduce((acc, ele) => {
    acc += "`" + ele + "`, ";
  }, "");
  query += "INSERT INTO `" + tableName + "(" + tableRows + ")\n";
  query += "VALUES\n";
  return {
    query,
    ...config
  };
}
module.exports = mapDataToTable;
