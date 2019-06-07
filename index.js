const Realm = require('realm');
const { resolve } = require('path');

const TestSchema = {
  name: 'Test',
  properties: {
    testProp: 'string',
  },
};

const path = resolve(__dirname, 'testRealm.realm');

const encryptionKey = Int8Array.from([
  92,
  -60,
  -57,
  24,
  81,
  -18,
  -51,
  -127,
  104,
  96,
  -111,
  120,
  111,
  -117,
  80,
  -25,
  94,
  -93,
  -76,
  -111,
  109,
  125,
  69,
  103,
  -92,
  -115,
  -86,
  104,
  -113,
  47,
  -70,
  -74,
  -121,
  118,
  -53,
  -80,
  106,
  104,
  -94,
  -80,
  -99,
  -3,
  -49,
  25,
  -62,
  99,
  88,
  17,
  -74,
  87,
  -40,
  -26,
  47,
  56,
  -112,
  1,
  43,
  -5,
  17,
  37,
  9,
  -96,
  -32,
  126]);

const realmConfig = {
  schema: [TestSchema],
  path,
  encryptionKey,
}

console.log('Creating Realm at ' + path);

const realm = new Realm(realmConfig);

realm.write(() => {
  realm.create('Test', { testProp: 'Test' });
});

const version = Realm.schemaVersion(path, encryptionKey);

console.log('Realm schema version: ' + version);

//Realm.deleteFile(realmConfig);

//console.log('Deleted Realm at ' + path);

process.exit(0);
