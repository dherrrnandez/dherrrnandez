const clock = () => {
    const clock = document.getElementById("clock")
    const today = document.getElementById("date")
    const date = new Date()

    let todayDate = date.toLocaleString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    })

    let time = date.toLocaleString("en-GB", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    })
    time = time.toUpperCase()
    time = time.replace(":", ".")
    todayDate = todayDate.toUpperCase()
    clock.innerText = `${time} ARGENTINA`
    today.innerText = todayDate
}

clock()
setInterval(clock, 20000)