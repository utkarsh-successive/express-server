function validateEmail(email: string): boolean {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@successive.tech$/;
    return re.test(email);
}

export { validateEmail };