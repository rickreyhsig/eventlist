var mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/eventlist');

var userSchema = new mongoose.Schema({
    firstname:String,
    email:String,
    role:String,
    hashedpw:String,
    created:{type:Date, default:Date.now}
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User:User
};
