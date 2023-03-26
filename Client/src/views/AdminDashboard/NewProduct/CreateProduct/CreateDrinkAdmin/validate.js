const validate = (form) => {
    const errors = {};

    if (!form.name) errors.name = "Name required";
    if (!form.image) errors.image = "Image required";
    if (!form.price) errors.price = "Price required";
    if (!form.detail.onSugar) errors.onSugar = "Type required";
    if (!form.detail.volumen) errors.volumen = "Volume type required";
    if (!form.detail.description) errors.description = "Description required";

    return errors;
};


export default validate;