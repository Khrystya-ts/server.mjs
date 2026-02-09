import pg from 'pg';
const { Client } = pg;
const client = new Client({
    connectionstring: `postgresql://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}?sslmode=require&channel_binding=require&uselibpqcompat=true`
});

async function getData () {
    await client.connect();
    
    const {rows } = await client. qi
    console.log (rows);
    await client. end()
}

getData ()
