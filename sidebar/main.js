let whatsappButton = document.getElementById("whatsappButton")
let telegramButton = document.getElementById("telegramButton")
let instagramButton = document.getElementById("instagramButton")
let githubButton = document.getElementById("githubButton")


function handleButtonClick(link) {
    browser.tabs.query({url: `*://${link}/*`}).then( tabs => {
        if (!tabs[0]) {
            browser.tabs.create({url: `http://${link}`, pinned: true})
        } else {
            browser.tabs.update(tabs[0].id , {active: true})
        }
    })
}

whatsappButton.onclick = () => handleButtonClick("web.whatsapp.com")

telegramButton.onclick = () => handleButtonClick("web.telegram.org")

instagramButton.onclick = () => handleButtonClick("www.instagram.com")

githubButton.onclick = () => handleButtonClick("github.com")
