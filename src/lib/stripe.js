import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1Th7qCECbPeLAQ2XTCMTb0PO",
  seeker_premium: "price_1ThKeUECbPeLAQ2XvN2yP7UG",
  recruiter_growth: "price_1ThKgMECbPeLAQ2XxQCmpMUK",
  recruiter_enterprise: "price_1ThKhlECbPeLAQ2Xtxd5pVXt",
};
