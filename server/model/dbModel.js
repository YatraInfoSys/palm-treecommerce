const { default: mongoose, Schema } = require("mongoose");


const user = new mongoose.Schema({
    Fname: {
        type:  String,
        required: true
    },
    Lname:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true

    },
    role:{
        type: String,
        required: true

    },
    password:{
        type: String,
        required: true

    },
    status:{
        type: String,
        required: true,
        default: "inactive"
    }
})

const category = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "active"
    },
})

const shop = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

const product =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    oldPrice:{
        type: String,
        required: false
    },
    discount:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    shopId:{
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
})

module.exports.userModel = mongoose.model('User', user);
module.exports.categoryModel = mongoose.model('Categories', category);
module.exports.shopModel = mongoose.model('Shops', shop);
module.exports.productModel = mongoose.model('Products', product);

