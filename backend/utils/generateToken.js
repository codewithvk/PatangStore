// var jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken'
// export default generateWebToken(id) {
//     return (jwt.sign({ id }, 'shhhhh'));
// }
const generateWebToken = (id) => {
    return jwt.sign({ id },process.env.JWT_SECRET,{
        expiresIn : '30d'
    })
}
export default generateWebToken