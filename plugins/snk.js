let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
    let teks = `
PEMBAYARAN VIA :
Dana : 62895369318181
Pulsa: 0895369318181
Ovo : -
BRI : Tanya Owner Dulu
BCA : Tanya Owner Dulu
MANDIRI : Tanya Owner Dulu
Perfect Money : 0895369318181
Sweria : anonsecteaminc
Paypal: -

Selain Pembayaraan Di Atas Berarti Scan..!!

-THCABOT
-And You Beb :D

Peraturan: 2022 LulzGhost-Team
`.trim()
    conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), teks, watermark, 'Menu', '.menu', 'Owner', '.owner', m)
}
handler.help = ['peraturan']
handler.command = /^(snk|syarat|peraturan|rules)$/i
handler.tags = ['main']
module.exports = handler
