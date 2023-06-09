//  ************************************ importing ************************************
const express = require("express");
const session = require("express-session");
const { Schema, startSession } = require("mongoose");
const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");
//  ************************************ importing ************************************

//*************************************************** USERS  ***************************************************/
// exports.fetchAllUsers = async(req,res)=>{
//     const users= await model.userModel.find({}).populate();
//         res.json({"all user data": users});
// }

//fetches all user data except password
exports.fetchUsers = async (req, res) => {
  const users = await model.userModel
    .find({}, "Fname Lname email role status")
    .populate();
  res.json({ data: users });
};

//only gets name and id of user-----------> ME FUNCTION
exports.fetchUsersName = async (req, res) => {
  if (req.session.userName) {
    return res.json({
      id: req.session.userId,
      userName: req.session.userName,
      email: req.session.email,
    });
  } else {
    return res.json({ error: "Not Logged In" });
  }
};

//*************************************************** USERS END ***************************************************/

exports.fetchShops = async (req, res) => {
  const shops = await model.shopModel.find({}).populate();
  res.json({ "all shops data": shops });
};

exports.fetchCategory = async (req, res) => {
  const categories = await model.categoryModel.find({}).populate();
  res.json({ categories: categories });
};

exports.fetchPoducts = async (req, res) => {
  const products = await model.productModel.find({}).populate();
  res.json({ "all product data": products });
};
