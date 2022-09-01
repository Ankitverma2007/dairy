var express = require('express');
var router = express.Router();
const dairyModel = require('../database/dairy');
const customerModel = require('../database/add-customer');
const companyModel = require('../database/comany-profile');
const expenceModel = require('../database/expence');
const emailvalidator = require("email-validator");


router.get('/', function (req, res, next) {
  res.render('index');
});


//////////////////////////////////////////////  Add Customers  ////////////////////////////////////////////////////

router.get('/customer', function (req, res, next) {
  res.render('customer-profile');
});

router.post('/add-customers', function (req, res) {
  if (emailvalidator.validate(req.body.email)) {
    // Your call to model here
    customerModel.create(req.body)
      .then(function (user) {
        res.send(user)
      })
      .catch(err => {
        res.send(err)
      })
  } else {
    res.status(400).send('Invalid Email');
  }
})

router.get('/customer/view_customer/:_id', (req, res) => {
  customerModel.findById({ _id: req.params._id })
    .then((profile) => {
      res.send(profile)
    })
    .catch(err => {
      res.send(err)
    })
})


router.get('/customer/allview_customer', (req, res) => {
  customerModel.find()
    .then((profile) => {
      res.send(profile)
    })
    .catch(err => {
      res.send(err)
    })
})

router.get('/customer/terminate/:id', (req, res) => {
  customerModel.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      res.send("profile deleted")
    })
    .catch(err => {
      res.send(err)
    })
})


router.get('/updateprofile', (req, res) => {
  res.render('update-cust-profile')
})


router.post('/customer/updateProfile/:id', (req, res) => {

  customerModel.findOneAndUpdate({ _id: req.params.id }, (req.body))
    .then((data) => {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })

})






/////////////////////////////////////////////////////  add expences   ///////////////////////////////////////////

router.post('/expence-head', function (req, res) {
  expenceModel.create(req.body)

    .then(function (data) {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
})


router.get('/expence-head/allexpences/:expences', (req, res) => {
  expenceModel.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
})


router.post('/expence-head/update-expences/:_id', (req, res) => {
  expenceModel.findByIdAndUpdate({ _id: req.params._id }, { expence_head: req.body.expence_head }).then(
    (data) => {
      res.status(200).json({
        message: 'updated!'
      });
    }
  ).catch((error) => {
    res.status(400).json({
      error: error
    });
  })
})


router.get('/expence-head/delete/:id', (req, res, next) => {
  expenceModel.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});




router.post('/expence-subhead/add-subcategory/:id', function (req, res, next) {
  expenceModel.findById({ _id: req.params.id })
    .then(function (data) {
      data.add_subcategory.push({
        subHead: req.body.subHead
      })
      data.save()
        .then(function () {
          res.send(data)
        })
    })
    .catch(err => {
      res.send(err)
    })
});


router.post('/expence_subhead/edit_subcategory/:subid/:id', async (req, res) => {
  try {
    const expenseHead = await expenceModel.findOne({ _id: req.params.id })
    // const subdata = await expenseHead.add_subcategory.findOne({ _id: req.params.subid })
    const expenseSubHead = expenseHead.add_subcategory.filter(subdata => {
      if (req.params.subid === subdata._id.toString()) {
        return subdata
      }
    })
    expenseSubHead[0].date = req.body.date
    expenseSubHead[0].expeaceAmount = req.body.expeaceAmount
    if (req.body.note) {
      expenseSubHead[0].note = req.body.note
    }
    await expenseSubHead[0].save()
    res.status(200).json(expenseHead);
  }
  catch (error) {
    res.status(400).json({ error: error })
  }
})


router.get('/expence_subhead/delete_subcategory/:id', (req, res, next) => {
  expenceModel.deleteOne({ _id: req.params.id }).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

router.post('/expence/add-expence', function (req, res) {
  expenceModel.create(req.body)

    .then(function (data) {
      res.send(data)
    })
    .catch(err => {
      res.send(err)
    })
})




/////////////////////////////////////////////////////////  E Product  //////////////////////////////////////////// 


router.get('/category/add_category',(req,res)=>{
  
})





/////////////////////////////////////////////////////////////  Add Company  ///////////////////////////////////////


router.get('/company', function (req, res, next) {
  res.render('company-profile');
});

router.post('/company-profile', function (req, res) {
  if (emailvalidator.validate(req.body.email)) {
    companyModel.create(req.body)
      .then(function (company) {
        res.send(company)
      })
      .catch(err => {
        res.send(err)
      })
  } else {
    res.status(400).send('Invalid Email')
  }
})
module.exports = router;
