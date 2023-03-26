const validate = (form) => {
    const errors = {};

    if (!form.name) errors.name = "Name required";
    if (!form.image) errors.image = "Image required";
    if (!form.price) errors.price = "Price required";
    if (!form.detail.subcategory) errors.subcategory = "Type required";
    if (!form.detail.description) errors.description = "Description required";

    return errors;
};


export default validate;