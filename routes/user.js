
const express = require("express");
const {execQuery} = require("../db/connection");
const router = express.Router();


router.post('/login', async (req,res)=>{

    try {
        const {email, password, isAdmin} = req.body;
        const query = getLoginQuery(email, password, isAdmin);
        console.log(query);
        const dbRes = await execQuery(query);
        res.send(dbRes)
    }catch(err){
        res.send("something went wrong")
    }

})

router.post('/signup', async(req,res)=>{
    const {email, password, name} = req.body;
    const query = getSignupQuery(email, password,name);
    console.log(query);
    const dbRes = await execQuery(query);
    res.send(dbRes);
});

router.get('/', async(req,res)=>{
    const getUsersQuery = `
    SELECT * from Users
    `
    const dbRes = await execQuery(getUsersQuery);
    res.render('users', {
        users:dbRes
    })
})


//ADD CAR
router.post('/addCar', async(req,res)=>{
    const {driver, LicenseNo, Model, Capacity} = req.body;
    const query = AddCabQuery(driver, LicenseNo, Model, Capacity);
    console.log(query);
    const dbRes = await execQuery(query);
    res.send(dbRes);
})
// REMOVE CAR
router.post('/removeCar', async(req,res)=>{
    const {LicenseNo} = req.body;
    const query = RemoveCabQuery(LicenseNo);
    console.log(query);
    const dbRes = await execQuery(query);
    res.send(dbRes);
})

module.exports = router;




const getSignupQuery = (email, pass, name)=>{
    return `
    INSERT INTO USERS(email, password, name, role) VALUES ('${email}', '${pass}', '${name}', 'customer')
    `
}

// ADD/REMOVE CAB QUERY 
const AddCabQuery = (driver, LicenseNo, Model, Capacity)=>{
    return `
    INSERT INTO CABS  VALUES ('${driver}', '${LiceneNo}', '${Model}', '${Capacity}')
    `
}

const RemoveCabQuery = (LicenseNo)=>{
    return `
    DELETE FROM Cabs WHERE license_plate = '${LicenseNo}'
    `
}
// UP TILL HERE

const getLoginQuery = (email,password,isAdmin)=>{
    return `SELECT * from Users where email = '${email}' AND password='${password}  ${isAdmin ? `AND role='admin'` : ''} '
    `
}