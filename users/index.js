const express = require('express')

const app = express()

app.use(express.json())


const userRouter = require("./routers/userRouter")

app.use("/users", userRouter)

// app.get('/', (req, res) => {
//   res.send('Hello, Wodasdrld!');
// });

app.listen(5001, () => {
  console.log('Server started on port 5001');
});
