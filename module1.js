function myFunc(){
    console.log('This is a function that I types in the module1.');
}

var string = 'This is a sunny day and we are happy:)';

module.exports.myFunc = myFunc;
module.exports.string = string;