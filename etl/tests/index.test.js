const Transform = require("../src/dataMap/csvTransform");

describe('transformer', ()=>{
    const fakeData = [
        {
          0: "2015-01-12 05:08:05",
          1: "Mildred",
          2: "Frazier",
          3: "mfrazierpw@arstechnica.com",
          4: "14.61667",
          5: "-89.61667",
          6: "67.251.81.141"
        },
        {
          0: "2015-01-12 05:08:05",
          1: "Mildred",
          2: "Frazier",
          3: "mfrazierpw@arstechnica.com",
          4: "14.61667",
          5: "-89.61667",
          6: "67.251.81.141"
        }
      ];

    it("should return a string from arrays", () => {
        
      const tester = new Transform(fakeData);
      const result = [
        "(2015-01-12 05:08:05, Mildred, Frazier, mfrazierpw@arstechnica.com, 14.61667, -89.61667, 67.251.81.141)",
        "(2015-01-12 05:08:05, Mildred, Frazier, mfrazierpw@arstechnica.com, 14.61667, -89.61667, 67.251.81.141)"
      ];
      expect(tester.query).toEqual(expect.arrayContaining(result));
    });

    it("should write values for query", ()=>{
        const tester = new Transform(fakeData, true)
        const result = `(2015-01-12 05:08:05, Mildred, Frazier, mfrazierpw@arstechnica.com, 14.61667, -89.61667, 67.251.81.141), \n(2015-01-12 05:08:05, Mildred, Frazier, mfrazierpw@arstechnica.com, 14.61667, -89.61667, 67.251.81.141)`;
        expect(tester.query).toEqual(result);

    })
})

