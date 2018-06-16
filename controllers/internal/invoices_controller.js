var InternalController = require('../internal_controller')
var uuidv4 = require('uuid/v4');
var Invoice = require('../../models/invoices');
var config = require('../config/index');

class InvoiceController extends ApiController {
	constructor(req, res, next){
		super(req, res, next);
		this.validate();
	}

	validate(){
		console.log("check");
	}

	index(next){

	}

    create() {
        console.log("Invoice request created")
        self.res.json({status: true})
        Invoice.create(getInvoiceParams(self.req.body)).then((invoice)=> {
            invoice.generateInvoice();
        })
    }

    getInvoiceParams(params) {
        var keys = ["orderUUID", "orderId"];
        return _.pick(params, keys);
    }


}

module.exports = InvoiceController;