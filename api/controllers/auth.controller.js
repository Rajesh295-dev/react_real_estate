import bcrypt from "bcrypt";
export const register = async (req, res) => {
    const { username, password, email, } = (req.body);
    console.log(req.body)
    //db operations

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword)
    //create a new user 

}
export const login = (req, res) => {
    //db operations
}
export const logout = (req, res) => {
    //db operations
}