import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config'

async function connect(){
    const uri = 'mongodb+srv://<user>:<password>@<cluster>.nriew.mongodb.net/?retryWrites=true&w=majority';
    const client = new MongoClient(uri);
    
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

connect().catch(console.error);
