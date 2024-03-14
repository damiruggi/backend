class UserManager {
    static #users = [];
    create(data) {
        const user = {
            id: UserManager.#users.length === 0 ? 1 : UserManager.#users[UserManager.#users.length -1].id +1,
            foto: data.foto,
            email: data.email,
            password: data.password,
            role: 0
        };
        UserManager.#users.push(user);
        console.log("usuariocreado");
    }
    read(){
        return UserManager.#users
    }
}

const gestorDeUsuarios = new UserManager()

//Usuario 1
gestorDeUsuarios.create({
    foto: "dami.jpg",
    email: "damiruggi@gmail.com",
    password: "1234"
})

//Usuario 2
gestorDeUsuarios.create({
    foto: "antu.jpg",
    email: "antumoles@gmail.com",
    password: "5678"
})

console.log(gestorDeUsuarios.read())