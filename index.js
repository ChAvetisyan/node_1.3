const http = require('http');
const { getUsers } = require("./controlers/UserController")
const {  
    HOSTNAME, 
    PORT 
} = require("./constants")


const server = http.createServer((req, res) => {
    const url = req.url;
    // const {url} = req; 2nd version to write the same as above

    // if (url === "/users") {
    //    getUsers(req, res);
    // } else {
    //     res.end("Not found")
    // };

    //the same with switch case
    switch (url) {
        case "/users":
            getUsers(req, res);
            break;
        default:
            res.end("Not found");
            break;
    };
});




// const first = "abaacltccaxy";
// const second = "";

// for (let i = 0; i > first.length+1; i++) {
//     const f = first.split(" ")
//     if (f[i] !== f[i+1]) {
//         second.push([i]);
//         second.join("");
//     }
// }

// for (let i = 0; i > first.length + 1; i + 2) {
//     const f = first.split("")
//     f[i].toUpperCase;
//     i += 2;
//     f.join("")
// }

// console.log(first);
// console.log(second);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});