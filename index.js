var express = require('express');
var path = require('path');
var app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const session = require('express-session')
var con = require('./db/config');
var md5 = require('md5');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

// view engine setup
app.use(express.static(path.join(__dirname, 'asset')));
app.use(express.static(path.join(__dirname, '')));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Session Setup
app.use(session({
   secret: 'e6e061838856bf47e1de730719f65545b2609',
   resave: true,
   saveUninitialized: true
}))


clientimg = () =>{
   return new Promise((resolve, reject)=>{
       con.query('SELECT * FROM client_imag',  (error, elements)=>{
           if(error){
               return reject(error);
           }
           return resolve(elements);
       });
   });
};

portfolio = () =>{
   return new Promise((resolve, reject)=>{
       con.query('SELECT * FROM portfolio',  (error, elements)=>{
           if(error){
               return reject(error);
           }
           return resolve(elements);
       });
   });
};

portfolio_cat = () =>{
   return new Promise((resolve, reject)=>{
       con.query('SELECT * FROM protflio_cat',  (error, elements)=>{
           if(error){
               return reject(error);
           }
           return resolve(elements);
       });
   });
};

testimonials = () =>{
   return new Promise((resolve, reject)=>{
       con.query('SELECT * FROM testimonial',  (error, elements)=>{
           if(error){
               return reject(error);
           }
           return resolve(elements);
       });
   });
};

var obj = {};
app.get('/', async (req,res)=>{
   try {
      const clientimgs = await clientimg();
      const portfolios = await portfolio();
      const p_cat = await portfolio_cat();
      const testimonial = await testimonials();
      
      c_img = { clientimgs: clientimgs, portfolios: portfolios, category: p_cat, testimonial : testimonial};
  } catch(e) {
      console.log(e); // console log the error so we can see it in the console
      res.sendStatus(500);
  }   
   res.locals.title = "Home";
   res.render('home', c_img);
});

app.get('/web-applications', async (req,res)=>{
   try {
      const portfolios = await portfolio();      
      c_img = { portfolios: portfolios};
  } catch(e) {
      console.log(e); // console log the error so we can see it in the console
      res.sendStatus(500);
  }   
   res.locals.title = "Web Applications"
   res.render('web-applications', c_img);
});
app.get('/hybrid-apps', async (req,res)=>{
   try {
      const portfolios = await portfolio();      
      c_img = { portfolios: portfolios};
   } catch(e) {
         console.log(e); // console log the error so we can see it in the console
         res.sendStatus(500);
   }
   res.locals.title = "Hybrid Apps"
   res.render('hybrid-apps',c_img);
});
app.get('/crm-and-erp-systems', async (req,res)=>{
   try {
      const portfolios = await portfolio();      
      c_img = { portfolios: portfolios};
   } catch(e) {
         console.log(e); // console log the error so we can see it in the console
         res.sendStatus(500);
   }
   res.locals.title = "Crm And Erp Systems"
   res.render('crm-and-erp-systems',c_img);
});
app.get('/cms-systems', async (req,res)=>{
   try {
      const portfolios = await portfolio();      
      c_img = { portfolios: portfolios};
   } catch(e) {
         console.log(e); // console log the error so we can see it in the console
         res.sendStatus(500);
   }
   res.locals.title = "CMS Systems"
   res.render('cms-systems',c_img);
});
app.get('/about-us', (req,res)=>{
   res.locals.title = "About Us"
   res.render('about-us');
});
app.get('/contacts', (req,res)=>{
   res.locals.title = "Contacts"
   res.render('contacts');
});
app.get('/services', (req,res)=>{
   res.locals.title = "Services"
   res.render('services');
});
app.get('/portfolio', async (req,res)=>{
   try {
      const portfolios = await portfolio();
      const p_cat = await portfolio_cat();      
      c_img = { portfolios: portfolios, category: p_cat};
  } catch(e) {
      console.log(e); // console log the error so we can see it in the console
      res.sendStatus(500);
  }  
   res.locals.title = "Portfolio"
   res.render('portfolio', c_img);
});

app.post('/admin/login_now',(req,res)=>{
   uname = req.body.user_name;
   upass = md5(req.body.user_pass);
   con.query('SELECT * FROM user_list WHERE username ="'+uname+'" AND password ="'+upass+'"', function (err, result, fields) {
   if (err) throw err;
   console.log(result);
      if(result.length !== 0){
         req.session.id = result[0].id;
         res.locals.title = "Dashboard"
         res.redirect('dashboard');
      } else {
         res.redirect('login');
      }
   });
});

app.get('/admin/login', (req,res)=>{   
   res.locals.title = "Login"
   res.render('admin/login');
});
app.get('/admin/dashboard', (req,res)=>{   
   if(req.session.id){
      res.locals.title = "Dashboard"
      res.render('admin/dashboard');
   } else {
      res.render('admin/login');
   }
});
app.get('/admin/portfolio', async (req,res)=>{
   try {
      const portfolios = await portfolio();      
      admin_portfo = {portfolio : portfolios};
   } catch(e) {
         console.log(e); // console log the error so we can see it in the console
         res.sendStatus(500);
   }  
   res.locals.title = "Portfolio"
   res.render('admin/portfolio', admin_portfo);



});
app.get('/admin/testimonial', async (req,res)=>{
   try {
      const testimonial = await testimonials();      
      admin_testi = {testimonial : testimonial};
   } catch(e) {
         console.log(e); // console log the error so we can see it in the console
         res.sendStatus(500);
   }  
   res.locals.title = "Testimonial"
   res.render('admin/testimonial', admin_testi);
});
app.get('/admin/client', (req,res)=>{
   res.locals.title = "Client"
   res.render('admin/client');
});
app.get('/admin/client', (req,res)=>{
   res.locals.title = "Client"
   res.render('admin/client');
});

const imageStorage = multer.diskStorage({
   // Destination to store image     
   destination: 'uploads', 
     filename: (req, file, cb) => {
         cb(null, file.fieldname + '_' + Date.now() 
            + path.extname(file.originalname))
   }
});

const imageUpload = multer({
   storage: imageStorage,
   limits: {
     fileSize: 1000000 // 1000000 Bytes = 1 MB
   },
   fileFilter(req, file, cb) {
     if (!file.originalname.match(/\.(png|jpg)$/)) { 
        // upload only png and jpg format
        return cb(new Error('Please upload a Image'))
      }
    cb(undefined, true)
 }
}) 

app.post('/admin/add_portfolio', imageUpload.single('p_image'), function (req, res, next) {
   if (!req.file) {
      console.log("No file upload");
  } else {
   var images = '/uploads/'+req.file.filename;
      var sql = 'INSERT INTO 	portfolio (name, link, img, cat) VALUES ("'+req.body.p_title+'", "'+req.body.p_link+'", "'+images+'", "'+req.body.p_cat+'")';
      con.query(sql, function (err, result) {
         if (err) throw err;
         console.log(result);
      });
  }
});

app.get('/admin/delete_portfolio', async (req,res)=>{
   con.query('DELETE FROM portfolio WHERE id = "'+req.query.id+'"', function (err, result, fields) {
      if (err) throw err;
      return res.redirect('/admin/portfolio');
   });
});

app.post('/admin/update_portfolio', imageUpload.single('p_image_edit'), function (req, res, next) {
   id = req.body.id;
   pname = req.body.p_title_edit;
   plink = req.body.p_link_edit;
   pcat = req.body.p_cat_edit;
   if (!req.file) {
      con.query('UPDATE portfolio SET name = "'+pname+'", link = "'+plink+'", cat = "'+pcat+'" WHERE id = "'+id+'"', function (err, result, fields) {      
      if (err) throw err;
         return res.redirect('/admin/portfolio');
      });
   } else {
      var images = '/uploads/'+req.file.filename;
      con.query('UPDATE portfolio SET name = "'+pname+'", link = "'+plink+'", img = "'+images+'", cat = "'+pcat+'" WHERE id = "'+id+'"', function (err, result, fields) {      
         if (err) throw err;
            return res.redirect('/admin/portfolio');
      });
   }
});

app.post('/admin/add_category', async (req,res)=>{
   var sql = 'INSERT INTO 	protflio_cat (cate_name) VALUES ("'+req.body.add_cat_title+'")';
   con.query(sql, function (err, result) {
      if (err) throw err;
      return res.redirect('/admin/portfolio');
   });
});

app.post('/admin/add_testimonial', async (req,res)=>{
   var sql = 'INSERT INTO 	testimonial (name, text) VALUES ("'+req.body.t_title+'", "'+req.body.t_text+'")';
   con.query(sql, function (err, result) {
      if (err) throw err;
      return res.redirect('/admin/testimonial');
   });
});















app.listen('http://0.0.0.0:8080/');


