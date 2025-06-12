import express from "express";

const app = express();

app.get("/about", (req, res) => {
    res.send("Now You are in about Page")
})

app.get("/", (req, res) => {
    res.send("Hello World..!")
})

app.get("/contact", (req, res) => {
   return res.send(` <div class="container">
    <h1>URL Shortener</h1>
    <form id="shorten-form">
      <div>
        <label for="url">Enter URL:</label>
        <input type="url" name="url" id="url" required />
      </div>
      <div>
        <label for="shortcode">Enter ShortCode:</label>
        <input type="text" name="shortcode" id="shortcode" required />
      </div>
      <button type="submit">Shorten</button>
    </form>

    <h2>Shortened URLs</h2>
    <!-- <ul id="Shortened-urls"></ul> -->
     <ul id="shortened-urls"></ul>
  </div>`)
})


    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running at PORT : ${PORT}`);
        console.log();


    })