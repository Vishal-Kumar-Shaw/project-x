// Require the framework and instantiate it
const mysql = require('mysql');
const fastify = require('fastify')({ logger: true })


// create connection with mysql database

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '' ,
    database: 'nodemysql'
});

// connect to mysql
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Mysql Connected')
});




// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})




fastify.post("/add", (request, reply)=>{
    console.log(request.params);
    return {status : 200}
})




// Run the server!
const start = async () => {
  try {
    await fastify.listen(8000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()