require("dotenv").config();

const app = require("./index");
const connect = require("./db/db");

const cors = require("cors");
app.use(cors());

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        };
      }),
      success_url: req.body.urls.success,
      cancel_url: req.body.urls.cancle,
    });
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const start = async () => {
  await connect();
  app.listen(process.env.PORT || 3005);
};

start();
