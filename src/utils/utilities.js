export function writecookie(key, value, days) {
    
    let expiryDate = new Date();

    days = days || 7;

    expiryDate.setDate(expiryDate.getDate() + days);

    let displayCookie = document.cookie = key + "=" + value + ";" + " expires=" + expiryDate.toGMTString() + ";" + "path=/"
    console.log(displayCookie);

};

export function readCookie(key) {
    const re = new RegExp(`(?<=${key}=)[^;]*`)
    try {
        let cookie = document.cookie.match(re)[0];
        console.log(cookie);
        return cookie;
    } catch (error) {
        return false;
    }

};