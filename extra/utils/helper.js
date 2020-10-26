function validateEmail(email)
{
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@successive.tech$/
    return re.test(email);
}

export {validateEmail}