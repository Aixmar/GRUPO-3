const regExNames = /^(?![_.])(?!.*[_.]{2})[A-Za-z\s_]+(?<![_.])$/;
// const regExNames = /^[a-zA-Z]{2,}$/;
const regExEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;



const validate = ({ name, lastName, email, password }) => {

    const errors = {}

        if (name && !/^[A-Za-z0-9\s_]{2,}$/.test(name)) errors.name = 'The name must have at least 2 characters';
        if (name && !/^[A-Z]/.test(name)) errors.name = 'The name must begin with a capital letter';
        if (name && !regExNames.test(name)) errors.name = "The name can't contain symbols";

        if (lastName && !/^[A-Za-z0-9\s_]{2,}$/.test(lastName)) errors.lastName = 'The name must have at least 2 characters';
        if (lastName && !/^[A-Z]/.test(lastName)) errors.lastName = 'The last name must begin with a capital letter';
        if (lastName && !regExNames.test(lastName)) errors.lastName = "The last name can't contain symbols";

        if (email && !regExEmail.test(email)) errors.email = 'Invalid email';
        if (password && !regExPassword.test(password)) errors.password = 'Invalid password';

    return errors;
};



export default validate;