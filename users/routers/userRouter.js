const router = require("express").Router()

router.get("/", async (req,res) =>{
    
    const users = [{
        Name: "Veljko",
        LastName: "Skrbic",
        PhoneNr: "0623687594",
        Mail: "veljko@gmail.com",
        Role: "Customer"
    },
    {
        Name: "Vuk",
        LastName: "Skrbic",
        PhoneNr: "132156449874",
        Mail: "vuk@gmail.com",
        Role: "Barber"
    },
    {
        Name: "Una",
        LastName: "Skrbic",
        PhoneNr: "966232365",
        mail: "una@gmail.com",
        Role: "Barber"
    }
]

    // const appointmentTime = appointment.Time

    return res.json(users)
})

module.exports = router