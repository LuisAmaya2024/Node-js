const express = require('express')
const app = express()


//setings
app.set('port',3000)

//Middlewares



app.use(express.static())

//route 
app.get('/',(require,res)=>{

    res.send('Bienvenidos al sitio Web desde node js')


})

app.listen(app.get('port'), ()=>{
    console.log(`Aplicacion corriendo en el puerto ${app.get('port')}`)
})
