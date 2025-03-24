const express=require("express")
const path =require('path')
const app = express();

app.use(express.json());

let data = [];

app.get("/read", (req, res) => {
    res.send(data);
});

app.post("/addUser", (req, res) => {
    const user = {
        id: data.length + 1,
        ...req.body
    };
    data.push(user);
    res.send("User added successfully");
});

app.put("/update", (req, res) => {
    const { id } = req.query;
    const { name, clg_name } = req.body;

    if (!id || (!name && !clg_name)) {
        return res.status(400).send("ID and at least one field (name or clg_name) are required");
    }

    const index = data.findIndex(user => user.id == id);

    if (index !== -1) {
        if (name) data[index].name = name;
        if (clg_name) data[index].clg_name = clg_name;

        res.send("User details updated successfully");
    } else {
        res.status(404).send("User not found");
    }
});

app.delete("/delete", (req, res) => {
    const { id } = req.query;

    if (!id) {
        return res.status(400).send("ID is required");
    }

    const index = data.findIndex(user => user.id == id);

    if (index !== -1) {
        data.splice(index, 1);
        res.send("User deleted successfully");
    } else {
        res.status(404).send("User not found");
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
