var db = require("../models/index");
var config = require('../config/index');

const Invoice = db.sequelize.define("", {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: db.Sequelize.UUID,
        unique: true,
        defaultValue: db.Sequelize.UUIDV4
    },
   orderUUID: {
        type: db.Sequelize.UUID,
        unique: true,
        defaultValue: db.Sequelize.UUIDV4  
   }
});


module.exports = {
  Invoice: Invoice
 }

