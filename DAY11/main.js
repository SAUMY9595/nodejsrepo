const http = require("http");
const fsPromises = require("fs/promises");
const fs = require("fs");
const url = require("url");
const path = require("path"); // Import the path module

// Corrected the path and syntax for reading data.json
const dataText = fs.readFileSync(path.join(__dirname, "./data.json"), "utf-8");
const data = JSON.parse(dataText);

console.log(__dirname);

const app = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-type": "text/html",
  });
  const { query, pathname } = url.parse(req.url, true);
  switch (pathname) {
    case "/": {
      // Corrected the path for reading homepage.html
      const bf = await fsPromises.readFile(path.join(__dirname, "./pages/homepage.html"));
      res.end(bf);
      break;
    }
    case "/product": {
      // Corrected the path for reading productsPage.html
      const bf = await fsPromises.readFile(path.join(__dirname, "./pages/productsPage.html"));
      let text = bf.toString();
      let ProductsText = "";
      for (let i = 0; i < data.length; i++) {
        ProductsText += `<div class="product">
                <h2>${data[i].title}</h2>
                     <img src="${data[i].thumbnail}" alt="">
               <div style="text-align: center;">
                     <p>${data[i].price}</p>
                        </div>
           <p>${data[i].description}</p>
                  <a href="/view?id=${data[i].id}" target="_blank">View Product</a>
                </div>`;
      }
      text = text.replace("$TITLES$", ProductsText);
      res.end(text);
      break;
    }
    case "/view": {
        const product = data.find(elem => elem.id == query.id);
        if (product) {
          res.end(`<div class="details">
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="">
            <p>${product.price}</p>
            <p>${product.description}</p>
            </div>`);
        } else {
          res.writeHead(404);
          res.end("<h2>Product not found</h2>");
        }
        // It seems you're not using the loaded 'view.html' content. If you intend to use it, ensure it's correctly implemented.
        break;
      }
    default: {
      res.end("<h2>Oops page not Found</h2>");
    }
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));