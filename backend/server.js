require('dotenv').config();
const express = require("express");
const connectDB = require("./db");
const cors = require('cors');
const userRoutes = require("./routes/user");
const blogRoutes = require("./routes/blogRoutes");
const path = require('path');


const app = express();
connectDB();

app.use(express.json());
// app.use(cors());

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use("/api", userRoutes);
app.use("/api/blog", blogRoutes);

// deployment

// deployment - USE THIS
// if (process.env.NODE_ENV === "production") {
//   try {
//     console.log("🚀 Production mode activated");
//     const dirPath = path.resolve();
    
//     // Serve static files
//     app.use(express.static(path.join(dirPath, "frontend/dist")));
    
//     // ✅ FIXED: Regex-based catch-all route
//     app.get(/\/(.*)/, (req, res) => {
//       res.sendFile(path.join(dirPath, "frontend/dist/index.html"));
//     });
    
//     console.log("✅ SPA routing configured");
//   } catch (error) {
//     console.error("❌ Production setup failed:", error.message);
//   }
// }
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
