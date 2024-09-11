
/*
{
  "ID": "number",
  "Name": "string",
  "Rating": "number",
  "Description": "string",
  "Genre": "string",
  "Cast": "array of strings"
}

*/
module.exports = (req, res, next) => {
  console.log("Checking schema type...");
  let {ID, Name, Rating, Description, Genre, Cast} = req.body;
  if(!ID || !Name || !Rating || !Description || !Genre || !Cast) {
    return res.status(400).json({message: 'All fields are mandatory'});
  }
  if(typeof ID !== 'number' && typeof Name !== 'string' && typeof Rating !== 'number' && typeof Description !== 'string' && typeof Genre !== 'string' && !Array.isArray(Cast) && !checkArrString(Cast)) {
    return res.status(400).json({message: 'Invalid request body'});
  }
  next();
};
  
function checkArrString(arr){
  return arr.every(element => typeof element === 'string');
}