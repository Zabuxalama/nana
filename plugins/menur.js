let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/2e2eb7d093fec08fd00d4.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let aine = '628565337357@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `*_WELCOME TO RIFQII STOREð²ð¨_*

*ð°MIAW STORE MELAYANIð°*

*-JASA SEWA BOT*
*-JUAL ALL NOKOS*
*-JASA POST AKUN (FREE)*
*-JASA JADI BOT + OWNER*
*-JASA BUKA WA KENON/TERBLOKIR*

*NOTE: LIST NYA DI BAWAH*

*ð¸PAYMENTð¸*
*â¢GOPAY*
*â¢DANA*
*â¢QRIS*

*BOT ON 24 JAM & BISA BUAT PRICELIST*
â­ââã *_SEWA BOT_* ã
ââÂ  1 MINGGU : IDR 3.000 (3K)
ââÂ  1 BULAN : IDR 6.000 (6K)
ââÂ  PERMANEN : IDR 10.000 (10K)
â°ââââ
â­â [ KELEBIHAN BOT ]
ââÂ  ï¼¯ï¼® 24 ï¼ªï¼¡ï¼­
ââÂ  BISA BUAT PRICELIST
ââÂ  FITUR BANYAK
â°ââââ
â­â[ KEUNTUNGAN ]
ââÂ  ANTI LINK ( AUTO KICK )
ââÂ  WELCOME ( OTOMATIS )
ââÂ  DAN RATUSAN FITUR LAINYA
â°ââââ
â­â[ *TES BOT? MASUK GRUB DI BAWAH* ]
ââ https://chat.whatsapp.com/IYa9dkJTtltDRPdXC8JaQt
â°ââââ
â­â[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
ââ wa.me/628565337357?text=sewa+bot
â°ââââ
â­â[ *PAYMENT* ]
ââÂ  GOPAY
ââÂ  DANA
ââÂ  PULSA +5k
ââÂ  QRIS ALL PAYMENT
â°ââââ
*_BOT INI MEMAKAI VPS BUKAN TERMUX_*
*_/HEROKU/WIBUSOFT_*
*_DI JAMIN ANTI DELAY & ON 24 JAM!_*

â­ââã *_JADI BOT + OWNER_* ã
ââÂ Â  RP : IDR 15.000 (15K)
â°ââââ
â­â [ FASILITAS ]
ââÂ  CUMA SCAN QR DOANG JADIÂ Â Â Â Â Â Â Â Â Â Â Â Â Â Â  
âÂ Â Â Â  BOT + OWNER
ââÂ  FITUR BOT NYA BANYAK
ââÂ  BANYAK FITUR LANGKA
ââÂ  BUKAN BOT WIBUSOFT
ââÂ  DI SETTING IN SELLER
â°ââââ
â­â[ KEUNTUNGAN ]
ââÂ  BISA OPEN SEWA BOT
ââÂ  NAMA BOT, NAMA OWNER, NOMOR.OWNER,
âÂ Â Â Â  DLL DI GANTI JADI TERSERAH LU
â°ââââ
â­â[ *MINAT? HUBUNGI NOMOR DI BAWAH* ]
ââ wa.me/628565337357?text=jadi+bot
â°ââââ


JUAL ALL NOKOS MURAH BY MIAW STORE

LIST NOKOS:
-NOKOS WA:3K
-NOKOS TELE:6K
-NOKOS GOPAY/OVO/DANA:2K
-NOKOS SHOPEE/LAZADA/TOKPED:3K

*NOKOS APK LAIN? SILAHKAN TANYAKAN SAJA KE NO DI BAWAH*

ORDER?Wa.me/628565337357?text=buy+nokos



JASA BUKA WA KENON BY MIAW STORE:3K
SISTEM: SEND WA YG KENON-PROSES-SELESAI-TF

*NOTE: BAGI YG KENON WA NYA PERMANEN TIDAK BISA*

ORDER? wa.me/628565337357?text=buka+wa+kenon`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5070871692948121'}]}],
  headerImage: { productId: '5070871692948121',
  jpegThumbnail: baper },
  businessOwnerJid: `628565337357@s.whatsapp.net`
  },
  footerText: '*_Awy_*',
  }},{})
conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
}
handler.help = ['menur']
handler.tags = ['info']
handler.command = /^(menur)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
