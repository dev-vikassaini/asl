
export const loginValidation = values => {
    const error = {};
    error.email = '';
    error.password = '';
    var ema = values.email;
    var nm = values.password;
    if (values.email === undefined) {
        ema = '';
    }
    if (values.password === undefined) {
        nm = '';
    }
    if (ema.length < 8 && ema !== '') {
        error.email = 'too short';
    }
    if (!ema.includes('@') && ema !== '') {
        error.email = '@ not included';
    }

    if (nm.length > 8) {
        error.password = 'max 8 characters';
    }
    return error;
};