let handler = async (m, { conn, args, groupMetadata }) => {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(conn.chats.get(id).presences), conn.user.jid]
  conn.reply(m.chat, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, m, {
    contextInfo: { mentionedJid: online }
  })
}
handler.help = ['here', 'online']
handler.tags = ['group']
handler.command = /^(here|(list)?online)$/i
handler.owner = true
handler.group = false
module.exports = handler

