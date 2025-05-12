import http from "http";

const port = 3000;

const server = http.createServer((request, response) => {
    //função do backend
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})