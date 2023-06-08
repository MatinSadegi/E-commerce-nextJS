import Product from "../../../models/Product";
import db from "../../../utils/db";

const productHandler = async(req,res) =>{
    await db.connect();
    const product = await Product.findById(req.query.id);
    db.disconnect();
    res.status(200).send(product)
}

export default productHandler