import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio-data');
    const collection = db.collection('portfolio'); 
    
    const portfolios = await collection.find({}).toArray();
    
    res.status(200).json(portfolios);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
