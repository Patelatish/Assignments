import * as fs from 'fs';

//For Read .json file. 
function loadJSON(fileName = ''){return JSON.parse(fs.existsSync(fileName)?fs.readFileSync(fileName).toString():'null')}

//For Write into .json file.
function saveJSON(fileName = '', json='""'){return fs.writeFileSync(fileName,JSON.stringify(json, null, 2))}

//Add User to the user.json file
export const createUser = (req,res) => {
    const newUser = req.body;
    const data = loadJSON('user.json');
    data.push(newUser);
    saveJSON('user.json',data);
    res.send("User Added Successfully");
}

//Get all Users from the user.json file
export const getUsers = (req,res) => {
    const data = loadJSON('user.json');  
    res.send(data);    
}

//Get User by id from the user.json file.
export const getUserById = (req,res) => {
    //console.log(req.params);
    const { id } = req.params;
    const data = loadJSON('user.json');
    const foundUser = data.find((user) => user.id == id);
    res.send(foundUser);
}

//Delete user by id from the user.json file.
export const deleteUser = (req,res) => {
    const { id } = req.params;
    let data = loadJSON('user.json');
    data = data.filter((user) => user.id != id);
    saveJSON('user.json',data);
    res.send("User deleted");
}

//Update user by id into the user.json file.
export const updateUser = (req,res) => {
    const { id } = req.params;
    const { name , password , gender , birthdate , age , country , phone} = req.body;
    let data = loadJSON('user.json');
    const user = data.find((user) => user.id == id);
    user.name = name;
    user.password = password;
    user.gender = gender;
    user.birthdate = birthdate;
    user.age = age;
    user.country = country;
    user.phone = phone;
    saveJSON('user.json',data);
    res.send("User has been updated");
}