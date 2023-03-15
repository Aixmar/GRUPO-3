const { getAllUsers, createUser, userById } = require('../controllers/usersControllers');



const getAllUsersHandler = async (req, res) => {
    try {
        const allUsers = await getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


const postUserHandler = async (req, res) => {

    const { name, lastName, email, password } = req.body;

    try {
        const newUser = await createUser(name, lastName, email, password);
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    };
  };

  
const userByIdHandler = async (req, res) => {

  const { id } = req.params;

  try {
      const user = await userById(id);
      res.status(200).json(user);
  } catch (error) {
      res.status(400).json({ error: error.message });
  };
};



module.exports = {
    getAllUsersHandler,
    postUserHandler,
    userByIdHandler,

};