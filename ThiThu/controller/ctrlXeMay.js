const myMD = require('../model/XeMay')
exports.DanhSach = async (req, res, next)=>{
  
   try {
      let list = await myMD.XeMay.find().sort({ten_xe:1});
      res.render('product/danh-sach', { listSP : list  });
   } catch (error) {
      console.log(error);
      return res.status(400).send(error)
   }
}
