import connectDB from '../../../utils/connectDB'
import Orders from '../../../models/orderModel'
import auth from '../../../middleware/auth'
import Products from '../../../models/productModel'

connectDB() 

//create a Order collection
export default async (req, res) => {
    switch(req.method){
        case "POST":
            await createOrder(req, res)
            break;
    }
}

const createOrder = async (req,res) => {
    try{
        //get user auth
        const result = await auth(req, res)
        //order variable
        const { address, mobile, cart, total } = req.body
        //create a order to get all the variabe create above
        const newOrder = new Orders({
            user: result.id, address, mobile, cart, total
        })
        //make the remaining inStock 
        cart.filter(item => {
            return sold(item._id, item.quantity, item.inStock, item.sold)
        })
        //save the new order
        await newOrder.save()
        //get the notify
        res.json({
            msg: 'Payment success! We will contact you to confirm the order.',
            newOrder
        })

    } catch (err){
        //return error
        return res.status(500).json({err: err.message})
    }
}
//create a sold method 
const sold = async (id, quantity, oldInStock, oldSold) => {
    await Products.findOneAndUpdate({_id: id}, {
        inStock: oldInStock - quantity,
        sold: quantity + oldSold
    })
}