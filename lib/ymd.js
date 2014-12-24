var DATEPATTERN = /(\d{4})\-(\d{1,2})\-(\d{1,2})/

module.exports = function ymd (date) {
  return date.getFullYear() + '-' + ('0' + (1 + date.getMonth())).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
}

module.exports.utc = function utc (date) {
  return date.getUTCFullYear() + '-' + ('0' + (1 + date.getUTCMonth())).slice(-2) + '-' + ('0' + date.getUTCDate()).slice(-2)
}

module.exports.parse = parse.bind(null, function(y,m,d){ return new Date(y,m,d); }); 

module.exports.parse.utc = parse.bind(null, Date.UTC);

function parse( constructor, date ){
  var parts = DATEPATTERN.exec(date);
  if (parts === null) throw new TypeError('Unrecognized date format: ' + date);
  return constructor( +parts[1], (+parts[2]) - 1, +parts[3] );
}
