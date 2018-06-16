const Model = require('../models/model');
var PromiseRequest = require('../services/external_services_ssl');

Invoice.prototype.generateInvoice = function() {
	var self = this
  PromiseRequest({
    host: config.order_post_processing_service.host,
    port: config.order_post_processing_service.port,
    path: "/internal/invoices",
    method: "POST",
    headers: {'Content-Type' : 'application/json'}
  }, {"orderUUID": self.orderUUID}).then((response) => {
      if(response.httpStatusCode == 200){
        // console.log(response.body);
        response = JSON.parse(response.body);

      }
      else{

      }
  }).catch((error) => {

  })
}
module.exports = Model.Invoice;