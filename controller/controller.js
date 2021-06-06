const people = require('../people.json');

module.exports.home = function(req,res){
    res.render('index',{users:people,slider_value: 1000 });
}
module.exports.homeafterupdate = function(req,res){
    console.log(req.query.slidervalue);
    res.render('index',{users:people,slider_value: parseInt(req.query.slidervalue) });
}
module.exports.secondpage = function(req,res){
    res.render('index2',{users:people});
    
}