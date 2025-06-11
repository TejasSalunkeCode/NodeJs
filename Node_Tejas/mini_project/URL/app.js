
// import { readFile } from "fs/promises";
// import { createServer } from "http";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const PORT = 3002;

// // Fix for __dirname in ES Module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const server = createServer(async (req, res) => {
//     console.log("Request URL:", req.url);

//     const serveFile = async (filepath, contentType) => {
//         try {
//             const data = await readFile(filepath);
//             res.writeHead(200, { "Content-Type": contentType });
//             res.end(data);
//         } catch (error) {
//             console.error("Error loading file:", filepath);
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end("404 Page not found");
//         }
//     };

//     if (req.method === "GET") {
//         if (req.url === "/") {
//             return serveFile(path.join(__dirname, "index.html"), "text/html");
//         } else if (req.url === "/style.css") {
//             return serveFile(path.join(__dirname, "style.css"), "text/css");
//         }
//     }

//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("404 Page not found");
// });

// server.listen(PORT, () => {
//     console.log(`✅ Server running at http://localhost:${PORT}`);
// });






// import { writeFile } from "fs";
// import { readFile } from "fs/promises";
import { writeFile, readFile } from "fs/promises"; // ✅ Correct

import { createServer } from "http";
import path from "path";
import { json } from "stream/consumers";

const PORT = 3002;
const Data_file = path.join("data", "links.json");

const serveFile = async (res, filepath, contentType) => {
    try {
        const data = await readFile(filepath);
        res.writeHead(200, { "Content-Type": contentType })
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("404 Page not found")
        // console.log(error);
    }
}

const loadLinks = async () => {
    try {
        const data = await readFile(Data_file, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === "ENOENT") {
            await writeFile(Data_file, JSON.stringify({}));
            return {};
        }
        throw error;
    }
}

const saveLinks = async (links) => {
    console.log("saving links: ",links);
    
    await writeFile(Data_file, JSON.stringify(links))
}


const server = createServer(async (req, res) => {
    console.log(req.url);


    if (req.method === "GET") {
        if (req.url === "/") {
            return serveFile(res, path.join("public", "index.html"), "text/html")
        }
        else if (req.url === "/style.css") {
            return serveFile(res, path.join("public", "style.css"), "text/css")
        }
    }

    if (req.method === "POST" && req.url === "/shorten") {

        const links = await loadLinks();

        let body = ""
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on('end', async () => {
            console.log(body);
            const { url, shortcode }=JSON.parse(body);

            if (!url) {
                res.writeHead(400, { "content-Type": "text/plain" });
                return res.end("URL is required");
            }
            const finalshortCode = shortcode || crypto.randomBytes(4).toString("hex");

            if (links[finalshortCode]) {
                res.writeHead(400, { "Content-Type": "text/plain" });


                return res.end("Short code alreday exist , Please choose another");
            }
            links[finalshortCode] = url;
            await saveLinks(links);


            res.writeHead(200, { "content-type": "application/json" })
            res.end(JSON.stringify({ success: true, shortcode: finalshortCode }));
        })
    }
})


server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})

