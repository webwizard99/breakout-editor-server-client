const mongoose = require('mongoose');
const { Schema } = mongoose;

const levelListSchema = new Schema ({
  title: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('levelLists', levelListSchema);