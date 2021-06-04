// module.exports and exports in this module refer to the same object to be exported, so changes will be reflected either way

exports.add = function(a,b){
    return a + b;
};

exports.multiply = function(a,b){
    return a * b;
};