//
const express = require('express');
const multer = require('multer');
// const upload = multer({ dest: __dirname + '/uploads/images' });

const app = express();
const PORT = 3010;

app.use(express.static('public'));

const dest = __dirname + '/public/uploads/images';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now());
    //originalname
    cb(null, prefix(file.originalname));
  },
});

function prefix(fname) {
  const sdate = new Date().toISOString().replace(/:/g, '-');
  return sdate + '-' + fname;
}

const upload = multer({ storage }).array('photo');

app.post('/upload', upload, (req, res) => {
  console.log('req.file', req.file);
  console.log('req.files', req.files);
  console.log('req.body', req.body);
  const files = req.files || [req.file];
  if (files) {
    res.json(files);
  } else {
    throw 'error';
  }
});

// app.post('/upload', upload.array('photo'), (req, res) => {
//   console.log('req.file', req.file);
//   console.log('req.files', req.files);
//   const files = req.files || [req.file];
//   if (files) {
//     res.json(files);
//   } else {
//     throw 'error';
//   }
// });

// app.post('/upload', (req, res) => {
//   upload(req, res, function (err) {
//     if (err instanceof multer.MulterError) {
//       // A Multer error occurred when uploading.
//     } else if (err) {
//       // An unknown error occurred when uploading.
//     }
//     // Everything went fine.
//   });
//   console.log('req.file', req.file);
//   console.log('req.files', req.files);
//   const files = req.files || [req.file];
//   if (files) {
//     res.json(files);
//   } else {
//     throw 'error';
//   }
// });

app.listen(PORT, () => {
  console.log('Listening at ' + PORT);
});
