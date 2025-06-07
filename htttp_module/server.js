const http=require("http");

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("I am Vindo Bahadur Thapa aka Thapa Technical")
        res.end();
    }


    if(req.url==="/contact"){
        res.write("9856341287")
        res.end();
    }

    if(req.url==="/about"){
        res.write("I am a Full Stack developer")
        res.end();
    }

});

const PORT=4000;
server.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
    
})