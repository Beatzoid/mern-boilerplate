export const isEmpty = (string: string) => {
    return string.trim().length === 0;
};

export const isEmail = (email: string) => {
    const regex =
        // eslint-disable-next-line no-useless-escape
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return email.match(regex);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateRegisterFields = (data: Record<string, string>) => {
    const errors: Record<string, string> = {};

    if (isEmpty(data.name)) errors.name = "Name is required";

    if (isEmpty(data.email)) errors.email = "Email is required";
    else if (!isEmail(data.email)) errors.email = "Email must be a valid email";

    if (isEmpty(data.password)) errors.password = "Password is required";
    else if (data.password.length < 5)
        errors.password = "Password must be at least 5 characters long";

    if (data.password !== data.confirmPassword)
        errors.confirmPassword = "Passwords must match";

    return errors;
};
