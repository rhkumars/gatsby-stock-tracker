var faunadb = require('faunadb'), q = faunadb.query
exports.handler = async function (event, context) {

    //fauna code 
    var client = new faunadb.Client({ secret: 'fnAEl0j-irAAR6IX8lj9-7TNb7xdkczzIvAjaTsK', domain: "db.us.fauna.com" })
    const id = getId(event.path)
    console.log(`Function 'todo-delete' invoked. delete id: ${id}`)
    return client.query(q.Delete(q.Ref(`classes/todos/${id}`)))
        .then((response) => {
            console.log("success", response)
            return ({
                statusCode: 200,
                body: JSON.stringify(response)
            })
        }).catch((error) => {
            console.log("error", error)
            return ({
                statusCode: 400,
                body: JSON.stringify(error)
            })
        })
}