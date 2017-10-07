const configureStripe = require('stripe');
require('dotenv').config();
require('dotenv').load();

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;