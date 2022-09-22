const userGet = (req, res) => {
    const query = req.query
    res.json({
        "msj": "get - api",
        query
    });
}

const userPost = (req, res) => {
    const body = req.body
    res.json({
        "msj": "post",
        body
    });
}

const userPut = (req, res) => {
    const id = req.params
    res.json({
        "msj": "put - api",
        id
    });
}

const userDelete = (req, res) => {
    res.json({
        "msj": "delete - api"
    });
}

module.exports = {
    userGet, userPost, userPut, userDelete
}
