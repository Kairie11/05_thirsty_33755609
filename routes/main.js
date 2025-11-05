// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Bitters & Spirits", 
                productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
                shopLocations:[
                    {
                        name: "Downtown Branch",
                        manager: "Maame Ama Ansah",
                        address: "53 High Street, London, SW3 4AE"
                    },
                    {
                        name: "Westside Branch",
                        manager: "Michael Hayes",
                        address: "15 Oxford Road, London, NW7 6SB"
                    },
                    {
                        name: "Riverside Branch",
                        manager: "Emma Reeves",
                        address: "22 Thames Avenue, London, SE1 9CC"
                    }
                ]
            };

// Handle our routes
router.get('/',function(req,res){
    res.render('index.ejs', shopData)
 }); 

 // About page route
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

// Search page route
router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
});

// Registration page route
router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
// Registration confrimation page route
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to: ' + req.body.email);   
});

// Search result page route
router.get('/search_result', function (req, res) {
    // TODO: search in the database
    res.send("You searched for " + req.query.name_text + " in " + req.query.catagory_text);
 });

 // Survey page route
router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData)
});

// Survey submission route
router.post("/survey_submit", (req, res) => {
    // Collect all the survey data
    const surveyData = {
        firstName: req.body.first_name,
        surname: req.body.surname,
        email: req.body.email,
        age: req.body.age,
        drinkCategory: req.body.drink_category,
        isStudent: req.body.is_student === 'on' ? 'Yes' : 'No',
        shopName: shopData.shopName,
        productCategories: shopData.productCategories
    };
    
    res.render("survey_results.ejs", surveyData);
});


// Export the router object so index.js can access it
module.exports = router;
