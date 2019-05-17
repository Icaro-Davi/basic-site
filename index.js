const trigger = {
    server: require('./config/server')
}

async function server(){
    await trigger.server();
}

server();