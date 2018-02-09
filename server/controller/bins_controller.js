let test = "working";

module.exports = {
  //methods here

  test: (req, res, next) => {
    res.status(200).send(test);
  }
};
