export default function (req, res) {

    require('dotenv').config()
    
    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'iestpfm2021@gmail.com',
        pass: process.env.password,
      },
      secure: true,
    })

    const mailData = {
      from: `${req.body.email}`,
      to: 'iestpfm2021@gmail.com',
      subject: `Reclamo - Libro de reclamaciones`,
      text: req.body.reclamo + " | Sent from: " + req.body.email,
      html: `
      <h4>Datos del reclamante</h4>
      <p>Nro. documento: ${req.body.dni}</p>
      <p>Nombre: ${req.body.nombre}</p>
      <p>Celular: ${req.body.celular}</p>
      <p>Email remitente: ${req.body.email}</p> <br/>

      <h4>Reclamo</h4> 
      <div>${req.body.reclamo}</div> 

      <hr/>
            
        `
    }

    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
    })
    res.status(200)

  }