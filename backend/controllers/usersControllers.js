const usersModels = require("../models/usersModels");


module.exports = {
    getAllUsuarios: async function (req, res) {
        //obtener usuarios

        const usersList = await usersModels.getAllUsuarios();

        res.json(usersList);
    },

    getUsuario: async function (req, res) {
        //obtener un usuario
        const userId = req.params.id;
        const queryResult = await usersModels.getUsuario(userId)

        res.status(200).json(queryResult[0]);
    },

    addUser: async function (req, res) {
        //añadir usuario

        const usuario = req.body;
        const queryResult = await usersModels.addUser(usuario);

        res.status(200).json({
            message: 'Usuario añadido correctamente,yepaaaa!',
            userId: queryResult.insertId
        });
    },

    updateUser: async function (req, res) {
        //actualizar usuario
        const usuario = req.body;
        const userId = req.params.id;
        const queryResult = await usersModels.updateUser(userId, usuario);

        res.status(200).json({
            message: 'Usuario actualizado correctamente,tururu!',
            userId: queryResult.insertId
        });
    },

    deleteUser: async function (req, res) {
        //borrar usuario

        const userId = req.params.id;
        const queryResult = await usersModels.deleteUser(userId);

        res.status(200).json({
            message: 'Usuario borrado,ups!',

        });
    },
};