const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

mongoose
  .connect("mongodb://127.0.0.1:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/register", (req, res) => res.sendFile(path.join(__dirname, "reg.html")));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "login.html")));
app.get("/home", (req, res) => res.sendFile(path.join(__dirname, "home.html"))); // Serve home.html

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address: String,
  gender: String,
  skills: [String],
});

const User = mongoose.model("Users", userSchema);

app.post("/submit", async (req, res) => {
  try {
    const { name, age, email, password, phone, address, gender, skills } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send("<h2>Email already registered!</h2><a href='/login'>Go to Login</a>");
    }

    const user = new User({ name, age, email, password, phone, address, gender, skills });
    await user.save();
    res.send("<h2>Registration Successful!</h2><a href='/login'>Go to Login</a>");
  } catch (err) {
    console.error("Error in registration:", err);
    res.status(500).send("Error: " + err.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name });
    if (!user) {
      return res.send("<h2>User not found! Please register.</h2><a href='/register'>Register</a>");
    }

    if (password !== user.password) {
      return res.send("<h2>Invalid Password!</h2><a href='/login'>Try Again</a>");
    }

    res.redirect(`/home?name=${user.name}`);
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).send("Error: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log("Server running at http://127.0.0.1:" + PORT);
});
