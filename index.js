const express = require("express");
const mongoose = require("mongoose");

// [SECTION] Routes
const userRoutes = require("./routes/user");

// Environment Setup
require('dotenv').config();

// Server setup
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Customizing cors options to meet specific requirments
const corsOptions = {
	origin: ['http://localhost:8000'], 
	credentials: true, 
	optionsSuccessStatus: 200 
}

//app.use(cors(corsOptions));

// Database Connection
mongoose.connect(process.env.MONGODB_STRING,{
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas'));

// [SECTION] Backend Routes
app.use("/users", userRoutes);

// Server Gateway Response
if(require.main === module){
	app.listen(process.env.PORT || 3000, () => {
		console.log(API is now online on port ${process.env.PORT || 3000});
	})
}

module.export = app;