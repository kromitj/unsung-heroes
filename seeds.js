var MeanSeed = require('meanSeed');
var schemas = require('require-all')(__dirname + '/schemas');

var userSchemas = schemas.user_schemas;
var user = MeanSeed.init("heroes", "user");

user.defineSchema(userSchemas.schema);
user.defineFakerSchema(userSchemas.fakerSchema);
user.generateSeeds(50);
user.exportToDBTerminal();

