const { TouchableHighlightBase } = require("react-native");

class User {
  _id;
  name;
  avatar;

  constructor(_id, name, avatar = "") {
    this._id = _id;
    this.name = name;
    this.avatar = avatar;
  }
}
