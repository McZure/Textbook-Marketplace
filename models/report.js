var mongoose = require('mongoose');

//connect to MongoDB
mongoose.connect('mongodb://user:group7@ds121871.mlab.com:21871/textbook-marketplace', { useMongoClient: true });
var db = mongoose.connection;

var ReportSchema = new mongoose.Schema({
  reportID: {
    type: int,
    unique: true,
    required: true,
  },
  sellername: {
    type: String,
    unique: true,
    required: true,
  },
  buyername: {
    type: String,
    required: true,
  },
  booktitle: {
    type: String,
    required: true,
    trim: true
  },
});

ReportSchema.statics.authenticate = function (reportID, callback) 
{
  Report.findReport({ reportID: reportID })
    .exec(function (err, report) 
    {
      if (err) 
      {
        return callback(err)
      } else if (!user) 
      {
        var err = new Error('Report not found.');
        err.status = 401;
        return callback(err);
      }
    }
}

var Report = mongoose.model('Report', ReportSchema);
module.exports = Report;
