var Gadgets = require('../models/Gadgets');
// List of all Gadgets
// List of all Gadgets
exports.Gadgets_list = async function (req, res) {
    try {
        theGadgets = await Gadgets.find();
        res.send(theGadgets);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Gadgets.
exports.Gadgets_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Gadgets detail: ' + req.params.id);
};
// Handle Gadgets create on POST.
//exports.Gadgets_create_post = function (req, res) {
//res.send('NOT IMPLEMENTED: Gadgets create POST');
//};
// Handle Gadgets create on POST.
exports.Gadgets_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Gadgets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"gadget_name":"goat", "brand":12, "battery_life":"large"}
    document.gadget_name = req.body.gadget_name;
    document.brand = req.body.brand;
    document.battery_life = req.body.battery_life;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Gadgets delete from on DELETE.
//exports.Gadgets_delete = function (req, res) {
//res.send('NOT IMPLEMENTED: Gadgets delete DELETE ' + req.params.id);
//};
// Handle Gadgets update form on PUT.
exports.Gadgets_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Gadgets.findById(req.params.id)
        // Do updates of properties
        if (req.body.gadget_name)
            toUpdate.gadget_name = req.body.gadget_name;
        if (req.body.brand) toUpdate.cost = req.body.brand;
        if (req.body.battery_life) toUpdate.battery_life = req.body.battery_life;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
   failed`);
    }
};


// VIEWS
// Handle a show all view
exports.Gadgets_view_all_Page = async function (req, res) {
    try {
        theGadgets = await Gadgets.find();
        res.render('Gadgets', { title: 'Gadgets Search Results', results: theGadgets });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Gadgets.
exports.Gadgets_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Gadgets.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
}

// Handle Gadgets delete on DELETE.
exports.Gadgets_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Gadgets.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.Gadgets_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Gadgets.findById(req.query.id)
        res.render('Gadgetsdetail',
            { title: 'Gadgets Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a Gadgets.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Gadgets_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Gadgetscreate', { title: 'Gadgets Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a Gadgets.
// query provides the id
exports.Gadgets_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Gadgets.findById(req.query.id)
        res.render('Gadgetsupdate', { title: 'Gadgets Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.Gadgets_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Gadgets.findById(req.query.id)
        res.render('Gadgetsdelete', {
            title: 'Gadgets Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
