
export const getSignupPayload = (data) => {

    return {
        email: data.email,
        displayName: data.displayName,
        firstName: data.firstName,
        lastName: data.lastName,
        mobile: data.mobile,
        username: data.username,
        company: data.company,
        password: data.password,
    }
}