const { response } = require("express");
const { disconnect } = require("mongoose");
const dbModel = require("../model/dbModel");
const bcrypt = require("bcrypt");
const dbcon = require("../controller/dbcon");

exports.userSave = async (req, res) => {
  console.log(req.body.password);
  try {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(req.body.password, salt);
  } catch {
    return res.json({
      error: "Hashing the password failed. Please Try again!",
    });
  }
  const users = new dbModel.userModel({
    Fname: req.body.Fname,
    Lname: req.body.Lname,
    email: req.body.email,
    role: req.body.role,
    password: password,
  });

  try {
    await dbcon.connect();
    const user = await users.save();
    console.log("user saving success!");
    session = req.session;
    session.userName = req.body.Fname + " " + req.body.Lname;
    session._id = user._id;

    res.json({
      status: "Success logging in",
      username: session.userName,
      id: session.id,
    });
  } catch (err) {
    console.log("eror adding: " + err);
    res.json({
      error: "Errors have been occuring since the development, just ignore",
    });
  }
};

exports.categorySave = async (req, res) => {
  dbcon.connect();
  const categories = new dbModel.categoryModel({
    name: req.body.name,
    status: req.body.status,
  });

  try {
    const category = await categories.save();
    console.log("category saving success!");
  } catch (err) {
    console.log("eror adding: " + err);
    res.json({
      error: "error has be occuring since the development, just ignore",
    });
  }
  mongoose.connection.close();
};

exports.productSave = async (req, res) => {
  dbcon.connect();
  const products = new dbModel.productModel({
    name: req.body.name,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    discount: req.body.discount,
    caegory: req.body.categry,
    shopId: req.body.shopId,
  });

  try {
    const product = await products.save();
    console.log("product saving success!");
    disconnect.connection.close();
  } catch (err) {
    console.log("eror adding: " + err);
    res.json({
      error: "error has be occuring since the development, just ignore",
    });
  }
};

exports.shopSave = async (req, res) => {
  dbcon.connect();
  const shops = new dbModel.shopModel({
    name: req.body.name,
    address: req.body.name,
    owner: req.body.userId,
  });

  try {
    const shop = await shops.save();
    console.log("Shop saving success!");
  } catch (err) {
    console.log("eror adding: " + err);
    res.json({
      error: "error has be occuring since the development, just ignore",
    });
  }

  mongoose.connection.close();
};
