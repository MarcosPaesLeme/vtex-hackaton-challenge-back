global.SALT_KEY = 'f58877-ji839-12jidh-iej982uji08';
let port = process.env.MONGO_PORT || 27017;
let connection = 'mongodb://megahack:megahack2020@ds159033.mlab.com:59033/vtex'

const options = {
    "useNewUrlParser": true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = () => ({
    connection,
    options
});
