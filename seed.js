
const Admin = require('./models/adminSeed')
const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

const seedAdminData = [
    {
        email: 'admin@gmail.com',
        password: '12324#',
        name: 'admin'
    },
    {
        email: 'superadmin@gmail.com',
        password: '12324#',
        name: 'super admin'
    },
    {
        email: 'billingadmin@gmail.com',
        password: '12324#',
        name: 'billing admin'
    }
]


const seedingAdmin=async()=> {
       await Admin.insertMany(seedAdminData)
       await Admin.deleteMany({})
    };
    seedingAdmin().then(()=>{
        mongoose.connection.close();
    });

module.exports = {
    seedingAdmin
}
