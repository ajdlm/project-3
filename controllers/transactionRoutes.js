const transactions = require("../data/transactions.js");

module.exports = {
  getTransactions: (req, res) => {
    return res.json(transactions);
  },

  postTransaction: (req, res) => {
    transactions.push(req.body);

    res.json(req.body);
  }
};
