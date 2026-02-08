import pg from 'pg';
const { Client } = pg;
const client = new Client({
    connectionstring: 'postgresql:// neondb_owner:npg'
});

async function getData () {
    await client.connect();
    
    const {rows } = await client. qi
    console.log (rows);
    await client. end()
}

getData ()
