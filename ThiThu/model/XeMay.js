const db = require("./db")
const scheme = new db.mongoose.Schema(
    {
        // trường dữ liệu
        ten_xe:{type:String,required:true},
        mau_sac:{type:String,required:true},
        gia_ban:{type:Number,required:true},
        mo_ta:{type:String,required:true}
    },
    {
        //tên của bảng
        collection:"XeMay"
    }
)
let XeMay = db.mongoose.model("XeMay",scheme);
module.exports = {XeMay}