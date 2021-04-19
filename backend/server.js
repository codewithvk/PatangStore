import express from "express";
import dotenv from "dotenv";
// import products from './data/products.js'
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();
const app = express();

// In letest version of node not need to body parser seprate.
// It has been combine with express middleware.
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SERVER IS RUNNING!!!!!");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
