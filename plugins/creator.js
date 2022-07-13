function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  let town = await this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m, {quoted: fkontak})
  this.reply(m.chat, "My Owner", m, {quoted: town})
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler
