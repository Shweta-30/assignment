// pages/api/signup.ts
export default async function handler(req:any, res:any) {
  if (req.method === 'POST') {
    try {
      // Simulate saving user data to your dummy API
      const userData = JSON.parse(req.body);
      // You can modify this to store data in your "data.json" file or a database.

      res.status(201).json({ message: 'Signup successful' });
    } catch (error) {
      res.status(500).json({ message: 'Signup failed' });
    }
  } else {
    res.status(405).end();
  }
}
