const app = require('./app');
const connectDatabase = require(`./config/database`)
const cloudinary = require(`cloudinary`);
const dotenv = require('dotenv');



//Setting up confit file
dotenv.config({path: 'backend/config/config.env'})


//Connecting to database
connectDatabase();

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT}`);

})

