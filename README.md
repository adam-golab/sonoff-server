# Private Sonoff server

The idea was to have a private, locally hosted server to manage all of your own Sonoff devices.

# Installation

1. Before running the server you have to provide certificate for HTTPS. It doesn't have to be a valid certificate, you can create your own self-signed and it would be good enough for Sonoff devices to connect. You can do it via following commands

```
openssl req -x509 -newkey rsa:2048 -keyout certs/keytmp.pem -out certs/cert.pem -days 365
openssl rsa -in certs/keytmp.pem -out certs/key.pem
```

2. Install all dependencies `npm i`

# Setup a new device

1. Put the SonOff/Wemos device in AP mode (press and hold button for 5s)
2. Find the device and connect to it (SSID: ITEAD-10000xxxxx Password: 12345678)
3. Add route if necessary `sudo route change 0.0.0.0 mask 0.0.0.0 10.10.7.1`
4. (optional) use [httpie](https://github.com/jakubroztocil/httpie) to read device info `http http://10.10.7.1/device`.
5. use [httpie](https://github.com/jakubroztocil/httpie) to send local WiFi settings to device `http POST http://10.10.7.1/ap version:=4 ssid=[YOUR NETWORK SSID] password=[YOUR NETWORK PASSWORD] serverName=[IP OF YOUR SERVER] port=8080`

The device will automatically drop out of AP mode and tries to connect to WiFi and server.

# Running the server

```
npm run start
```

* /devices => list off all devices that are currently known to the server.
* /devices/:deviceId => shows the status of the device
* /devices/:deviceId/on => turns the device "on"
* /devices/:deviceId/off => turns the device "off"

# Thanks

This project is based on information from following articles:

* https://blog.ipsumdomus.com/sonoff-switch-complete-hack-without-firmware-upgrade-1b2d6632c01
* https://wiki.almeroth.com/doku.php?id=projects:sonoff
