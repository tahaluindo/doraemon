let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
┌〔 List Berlangganan 〕
├ 2 Bulan
├ 1 Bulan
├ 1 Minggu
├ Trial 3 Hari
└────
Silahkan klik pada "List Harga" untuk melihat list.

information:
Jika anda suka dengan bot ini
Jangan lupa untuk berterimaksi 
Attau support dengan donasi hubungi
Owner saya ㋛

`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: '2 Bulan', description: "Rp200.000\nBeli bot tanpa batasan waktu.", rowId:".masuk"},
        {title: '1 Bulan', description: "Rp10.000\nSewa bot selama 1 Minggu.", rowId:".masuk"},
        {title: '1 Minggu', description: "Rp15.000\nJadi bot selama 1 minggu.", rowId:".masuk"},
        {title: 'Trial', description: "GRATIS\nBot gratis 1 Hari.", rowId:".join"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Kebijakan Privasi, Syarat Ketentuan dan Peraturan.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//Haruno Bot
