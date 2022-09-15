const school = require("../models/schoolSchema")

const createSchool =(req, res) => {
    const newSchool = new school({
        schoolnew:req.body.schoolnew,
        location:require.body.location,
        category:req.body.category,
        facilities:req.body.facilities,
        numOfstudents:req.body.numOfstudents,
        address:req.body.address,
        contact:req.body.contact
    })
    newSchool.save();
    res.status(200).json(newSchool)

}
module.exports={createSchool}