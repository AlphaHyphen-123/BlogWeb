require('dotenv').config();
const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const userRoutes = require("./routes/User");          
const blogRoutes = require("./routes/blogRoutes");    

const app = express();
connectDB(); 

app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use("/api", userRoutes);          
app.use("/api/blog", blogRoutes);     


const PORT = process.env.PORT || 4020;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
