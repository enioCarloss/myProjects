import { app } from "./app";
const portServer = 3000
app.listen(portServer, () => {
    console.log(`Server is running on port ${portServer}`)
})