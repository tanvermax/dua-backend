import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/api';


const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);


app.get('/', (req, res) => {
  res.send('🚀 Backend is up and running!');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
