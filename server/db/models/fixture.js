const { Schema, model } = require('mongoose');

const fixtureSchema = new Schema({
  hostTeamId: String,
  awayTeamId: String,
  matchDate: Date,
  isCompleted: Boolean
});

module.exports = model('Fixture', fixtureSchema);
