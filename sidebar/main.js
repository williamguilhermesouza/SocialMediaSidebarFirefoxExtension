let whatsappButton = document.getElementById("whatsappButton")
let telegramButton = document.getElementById("telegramButton")
let instagramButton = document.getElementById("instagramButton")


whatsappButton.onclick = () => {
    browser.tabs.query({url: "*://web.whatsapp.com/*"}).then( tabs => {
        if (!tabs[0]) {
            browser.tabs.create({url: "http://web.whatsapp.com/", pinned: true})
        } else {
            browser.tabs.update(tabs[0].id , {active: true})
        }
    })
    
}

telegramButton.onclick = () => {
    browser.tabs.query({url: "*://web.telegram.org/*"}).then( tabs => {
        if (!tabs[0]) {
            browser.tabs.create({url: "https://web.telegram.org/", pinned: true})
        } else {
            browser.tabs.update(tabs[0].id , {active: true})
        }
    })
    
}

instagramButton.onclick = () => {
    browser.tabs.query({url: "*://www.instagram.com/*"}).then( tabs => {
        if (!tabs[0]) {
            browser.tabs.create({url: "http://www.instagram.com/", pinned: true})
        } else {
            browser.tabs.update(tabs[0].id , {active: true})
        }
    })

}
    
