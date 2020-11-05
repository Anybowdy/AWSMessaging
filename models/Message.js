class Message {
  _id;
  text;
  user;

  constructor(_id, text, user) {
    this._id = _id;
    this.text = text;
    this.user = user;
  }
}

export default Message;
