npm init -y
npm install express

mongooes.connect("mongodb+srv://mishakmanuel:ROcA1kUfF4w9pwbs@cluster0.zcwmmue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connectido successfully!");
}).catch(()=>{
    console.log("Failed to connect");
});