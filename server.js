const express = require('express')
const dotenv = require('dotenv')

//load our dotenv files
dotenv.config({path: './config/config.env'})

const app = express()