
var mongoose = require('mongoose');
var cp = require('../models/cpmodel');

exports.CityInq = function (req, res) {
  cp.distinct("Ciudad",function (err, doc) {
    res.send(doc.sort());
    console.log("Ciudades encontrados...");
  })
};

exports.MunInq = function (req, res) {
      cp.distinct("Municipio",function (err, doc) {
        res.send(doc.sort());
        console.log("Municipios encontrados...");
      })
  };

exports.CPInq = function (req, res) {
    cp.distinct("CP",function (err, doc) {
      res.send(doc.sort());
      console.log("CP encontrados...");
    })
};

exports.ColInqByMunName = function (req, res) {
    var regex = new RegExp(req.params.name, "i")
    cp.find({Municipio:regex},{_id:0},function (err, doc) {
    res.send(doc.sort());
    console.log("Colonias encontradas por " + req.params.municipio);
    });
};

exports.ColInqByMun = function (req, res) {
  cp.find({Municipio:req.params.municipio},{Colonia:1,_id:0},function (err, doc) {
  res.send(doc.sort());
  });
};

exports.ColInqByName = function (req, res) {
  var regex = new RegExp(req.params.name, "i")
  cp.find({Colonia:regex},{_id:0},function (err, doc) {
  res.send(doc.sort());
  });
};

exports.ColInqByCP = function (req, res) {
  cp.find({CP:req.params.cp},{_id:0},function (err, doc) {
  res.send(doc.sort());
  console.log("Colonias encontradas por cp: " + req.params.cp);
  });
};


