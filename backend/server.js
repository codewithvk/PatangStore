import express from 'express'
import dotenv from 'dotenv'
// import products from './data/products.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
dotenv.config()
connectDB()
const app = express()

app.get('/', (req, res) => {
  res.send('SERVER IS RUNNING!!!!!')
})










app.use('/api/products', productRoutes)




app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)