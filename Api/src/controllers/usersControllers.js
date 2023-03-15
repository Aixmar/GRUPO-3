const { User } = require('../db');


const getAllUsers = async () => {
    return await User.findAll();
};

const createUser = async (name, lastName, email, password) => {
    return await User.create({ name, lastName, email, password });
};

const userById = async (id) => {
    return await User.findByPk(id);
};


module.exports = {
    getAllUsers,
    createUser,
    
};

