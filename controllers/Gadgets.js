var Gadgets = require('../models/Gadgets');
// List of all Gadgets
// List of all Gadgets
exports.Gadgets_list = async function(req, res) {
    try{
    theGadgets = await Gadgets.find();
    res.send(theGadgets);
    }
    catch(err){
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
exports.Gadgets_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gadgets();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Gadgets_type":"goat", "cost":12, "size":"large"}
    document.Gadgets_type = req.body.Gadgets_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// Handle Gadgets delete from on DELETE.
exports.Gadgets_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Gadgets delete DELETE ' + req.params.id);
};
// Handle Gadgets update form on PUT.
exports.Gadgets_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
   ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Gadgets.findById( req.params.id)
    // Do updates of properties
    if(req.body.gadget_name)
    toUpdate.gadget_name = req.body.gadget_name;
    if(req.body.brand) toUpdate.cost = req.body.brand;
    if(req.body.battery_life) toUpdate.battery_life = req.body.battery_life;
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
exports.Gadgets_view_all_Page = async function(req, res) {
    try{
    theGadgets = await Gadgets.find();
    res.render('Gadgets', { title: 'Gadgets Search Results', results: theGadgets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };

   // for a specific Gadgets.
exports.Gadgets_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Gadgets.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   }

