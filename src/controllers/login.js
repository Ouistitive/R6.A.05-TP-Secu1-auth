import {createHash} from "node:crypto"

const users = []    // Simule BDD pour le stockage des utilisateurs
const role = ['admin', 'utilisateur']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export const addUser = async (req, res) => {
    const {email, password} = req.body
    const hashedPassword = createHash("sha256").update(password).digest().toString("hex")

    let user = users.find((u) => u.email === email && u.password === hashedPassword)
    if (user) {
        res.status(401).send({
            message: "Utilisateur déjà enregistré",
            user
        })
    }


}

export const loginUser = async function (req, res) {

    // A compléter

}