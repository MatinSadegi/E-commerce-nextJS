import User from '../../models/User';
import connect from '../../utils/db';
import data from '../../utils/data'

const handler = async (req,res) => {
    await connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    res.send({message:"seeded successfully"})
}

export default handler
