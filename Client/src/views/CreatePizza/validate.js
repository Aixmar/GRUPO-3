const validate = (form) => {
    const newErrors = {};

    if (!form.detail.dough) newErrors.dough = "Dough required";
    if (!form.detail.type) newErrors.type = "Type of pizza required";
    if (!form.detail.base) newErrors.base = "Type of base required";
    if (!form.detail.mozzarella) newErrors.mozzarella = "Mozzarella type required";

    return newErrors;
};


export default validate;