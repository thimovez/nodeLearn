module.exports = (req, res) => {
  res.writeHead(200, {
    'Conten-type': 'application/json'
  });
  res.send = (data) => {
    res.end(JSON.stringify(data));
  }
}