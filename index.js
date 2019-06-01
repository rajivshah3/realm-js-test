const Realm = require('realm');
const { resolve } = require('path');

const TestSchema = {
  name: 'Test',
  properties: {
    testProp: 'string',
  },
};

const path = resolve(__dirname, 'testRealm.realm');

const realmConfig = {
  schema: [TestSchema],
  path,
}

console.log('Creating Realm at ' + path);

const realm = new Realm(realmConfig);

realm.write(() => {
  realm.create('Test', { testProp: 'Test' });
});

const version = Realm.schemaVersion(path);

console.log('Realm schema version: ' + version);

//Realm.deleteFile(realmConfig);

//console.log('Deleted Realm at ' + path);

process.exit(0);
