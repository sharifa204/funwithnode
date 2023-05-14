// const number = 55;
// if (number > 50) {
//   console.log("Large number");
// } else {
//   console.log("small number");
// }
// console.log(--dirname);
// console.log(__filename);

// setInterval(() => {
//   console.log("This os 1 sec interval");
// }, 1000);

// const names = require("./nameData");
// console.log(names);
// const detail = require("./detailFunc");

// detail(names.harry);
// detail(names.jim);
// detail(names.tom);

//Built in module
//1.os:operating system
// if it's built in module you write
//name of module inside ""
const os = require("os");

// info about user info
// console.log(os.userInfo());

// //info about system uptime(the time my system runing)
// console.log(os.uptime());

// practical use of os

// const myOInfo = {
//   type: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// };

// console.log(myOInfo);

//path
// const path = require("path");
// console.log(path.sep);

// const filepath = path.join("/content", "subcontent", "test.txt");
// console.log(filepath);

// const base = path.basename(filepath);
// console.log(base);

// const absolutepath = path.resolve(
//   __dirname,
//   "content",
//   "subcontent",
//   "test.txt"
// );
// console.log(absolutepath);

//fs module
// reading data from aparticular file
// creating and writing data from afile

// const { readFileSync, writeFileSync } = require("fs");
// const first = readFileSync("./content/firstFile.txt", "utf8");
// // console.log(first);

// const second = readFileSync("./content/secondFile.txt", "utf8");
// // console.log(second);
// writeFileSync("./content/newfile.txt", "this file is created new");
// const newfile = readFileSync("./content/newfile.txt", "utf8");
// console.log(newfile);

// writeFileSync(
//   "./content/combineddatafile.txt",
//   `combined file is:${first}, ${second}`
// );

//==============================================
//http
const http = require("http");
// to set a web server

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`<h1>Welcome to my home page</h1>
  <p>This my first web page wow this is so exellent This my first web page wow this is so exellent
   This my first web page wow this is so exellent
   This my first web page wow this is so exellent</p>`);
    res.end();
  }
  if (req.url === "/feature") {
    res.write(`
   <h1>feature1</h1>
       <h1>feature2</h1>
          <h1>feature3</h1>
    
          <a href='/pricing'>back to home page</a>
    `);

    res.end();
  }
  if (req.url === "/pricing") {
    res.write(`<h1>The montly subscription cost 
    250 Dollar</h1>
    `);
    res.end();
  }
  res.end(`<h1>404:page not found</h1>`);
});
server.listen(4000);
