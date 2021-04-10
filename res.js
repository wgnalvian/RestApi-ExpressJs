

const ok = function(values, res) {
  const data = {
      'status': 200,
      'values': values
  };
  res.json(data)
  res.end()
};

const error = (error, res) =>  {
    const data = {
        status : 404,
        values : error

    }
    res.json(data)
   
    res.end()
}
const created = (values, res) => {
    const data = {
        'status' : 201,
        'values' : values
    }  
    res.json(data)
    res.end()
}

module.exports = {ok, error, created}