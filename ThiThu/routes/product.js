var express = require('express');
var router = express.Router();
var ctrl = require("../controller/ctrlXeMay")
// khu vực viết code định nghia các link ở đây

router.get("/",ctrl.DanhSach)




// chú ý: không được thiếu export
module.exports = router;
