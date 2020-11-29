const express=require('express');
const connectDB=require('./config/db');
const path=require('path');

const app = express();

//Connect database
connectDB();

//Init middleware
app.use(express.json({extend: false}));

const PORT=process.env.PORT || 5000;


// app.use(express.static(path.join(__dirname, '/client/build')));
// app.get('/', (req, res) => {
//     res.render('index');
// });

app.use('/api/users',require('./routes/api/users'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/profile',require('./routes/api/profile'));


//Serve Static assets in production
if (process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolved(__dirname, 'client', 'build', 'index.html')
      )
    );
  }

  
app.listen(PORT,()=>console.log(`Server started on ${PORT}`));