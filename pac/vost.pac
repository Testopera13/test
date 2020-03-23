
sock = "SOCKS5 5.9.108.57:5555";
function FindProxyForURL(url, host) {
    
    if (host == "animevost1.org") {
        return sock;
    } 
    else if (host == "animevost.org") {
        return sock;
    } 
    else if (host.match(/aniland\.org/)) {
        return sock;
    }
    else if (host == "www.animevost.org") {
        return sock;
    }

    else if (host == "www2.animevost.org") {
        return sock;
    }
    else if (host == "www2.animevost.org") {
        return sock;
    }
    else if (host == "animevost3.org") {
        return sock;
    }
    else if (host.match(/agorov\.org/)) {
        return sock;
    }
    else if (host.match(/hiveos/)) {
        return sock;
    }
    else if (host == "animerost.org") {
        return sock;
    }
    else if (host.match(/avost\.org/)) {
        return sock;
    }
    else if (host.match(/animevost\.site/)) {
        return sock;
    }
    else if (host == "anidub.com") {
        return sock;
    }
    else if (host == "anidub.tv") {
        return sock;
    }
    else {
        return "DIRECT";
    }
}
