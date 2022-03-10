export default function authHeader() {
    const emailStr = localStorage.getItem('email');
    let email = null;
    if (emailStr) {
        email = JSON.parse(emailStr)
    }
    if (email && email.token) {
        return {'x-access-token': email.token}
    } else {
        return {}
    }
}