// Editado por Hatori, a base e do causs que era do dark que era dos gringo

const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { eu } = require('./Fxc7/eu')
const { help } = require('./src/help')
const {help1} = require('./src/help1')
const { modapk } = require('./src/modapk')
const { animes } = require('./animes')
const { pack } = require('./src/pack')
const { otros } = require('./src/otros')
const { vipmenu } = require('./src/vipmenu')
const { menu2 } = require('./src/menu2')
const { alist } = require('./src/alist')
const { gbin } = require('./src/gbin')
const { gpersona } = require('./src/gpersona')
const { chentai } = require('./src/chentai')
const { gcpf } = require('./src/gcpf')
const { addsay } = require('./src/addsay')
const { listsay } = require('./src/listsay')
const { addfoto } = require('./src/addfoto')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const antiracismo = JSON.parse(fs.readFileSync('./database/json/antiracismo.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const moment = require('moment-timezone')
const { exec } = require('child_process')
const kagApi = require('@kagchi/kag-api')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const { cekvip } = require('./src/cekvip')
const { TobzApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const { daftarvip } = require('./src/daftarvip')
const { iklan } = require('./src/iklan')
const { daftatvip } = require('./src/daftarvip')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const imgbb = require('imgbb-uploader')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const samih = JSON.parse(fs.readFileSync('./src/simi.json'))
/*const { xp } = require('./database/menu/xp')
const { limit } = require('./database/menu/limit*/
const apivhtear = 'apivhtear';
const apibarbar = 'apibarbar';
const tobzkey = 'apitobz';
const BotName = '⚡HH BOT⚡'; 
const instagram = 'http://www.instagram.com/'; 
const aktif = '08:00 - 22:00';
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:yulking95\n' // Seu nome
            + 'ORG:HH;\n' // Nome de bot
            + 'TEL;type=CELL;type=VOICE;waid=51928564603:+51 928 564 603\n' // Numero do Whatsapp
            + 'END:VCARD'
prefix = '*'
blocked = []
limitawal = '999999999'
cr = '*yulking95*'

/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
const event = JSON.parse(fs.readFileSync('./database/json/event.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/user/level.json', JSON.stringify(_level))
        }
        
                const getLimit = (sender) => {
                let position = false
              Object.keys(limit).forEach ((i) => {
                if (limit[position].id === sender) {
                   position = i
                  }
              })
             if (position !== false) {
                return limit[position].limit
            }
        }
        
                const bayarLimit = (sender, amount) => {
                let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        
                const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }


function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanee el codigo QR con el otro celular'))
	})

	fs.existsSync('./BarBar.json') && client.loadAuthInfo('./BarBar.json')
	client.on('connecting', () => {
		start('2', 'Esperando a ver...')
	})
	client.on('open', () => {
		success('2', 'Conectado. ')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./BarBar.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola mi estimad@ @${num.split('@')[0]}\nSea Bienvenido a  *${groupName}*\n\n lea las reglas en la descripción y evite ser baneado`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Nadie lo conocia xd@${num.split('@')[0]} `
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
                        if (!mek.hasNewMessage) return
                        mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const speed = require('performance-now');
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = 'Your-Api-Key'
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[nameReq] != undefined ? client.contacts[nameReq].vname || client.contacts[nameReq].notify : undefined

			mess = {
					wait: 'Espera prro, HH BOT esta trabajando ahora',
					success: 'Pronto',
					levelon: '*leveling* *activado*',
					leveloff: '*leveling* *desactivado*',
					levelnoton: ' *leveling no activado*',
					levelnol: '*ERROR* °-°',
					error: {
				stick: 'No se pudo convertir de foto/video a sticker, la vida es triste',
				Iv: 'Link invalido'
				},
				only: {
					group: 'Este comando solo puede ser usado en grupos prro',
					premium: `Eh {pushname2} Solo usuarios PREMIUMS pueden usar este comando*`,
					mod: 'ESTE PEDIDO ÉS ESPECÍFICO PARA LOS MODERADORES DE ⚡HH BOT⚡*',
					benned: 'Usted fue baneado, contacte con el dueño para desbanear',
					ownerG: 'Sólo Hatori puede usar este comando prro',
					ownerB: 'Sólo Hatori puede usar este comando prro',
					userB: `──「 LISTA 」──\nHolá ${pushname} !\nUsted no esta registrado como amigo de mi dueño, pulsa para que el te añada como amigo\n\n──「 ⚡HH BOT ⚡ 」──`,
					admin: 'Este comando soló puede ser usado por administradores de grupo!',
					Badmin: 'Este comando solo puede ser usado cuando el ⚡HH BOT⚡ se vuelve Admin del grupo',
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = ["51928564603@s.whatsapp.net","51928557626@s.whatsapp.net","51928564603@s.whatsapp.net"] // Recoloque o seu numero
			const mod = [ownerNumber,"51928564603@s.whatsapp.net","593960159468@s.whatsapp.net","50589261089@s.whatsapp.net"]// Moderador do bot
			const adminbotnumber = ["51928564603@s.whatsapp.net","593960159468@s.whatsapp.net","50589261089@s.whatsapp.net"]// admin bot numero
			const frendsowner = ["51928564603@s.whatsapp.net","593960159468@s.whatsapp.net","50589261089@s.whatsapp.net"]// amigo do criador 
			const premium = ["51928564603@s.whatsapp.net","593960159468@s.whatsapp.net","50589261089@s.whatsapp.net","558981246187@s.whatsapp.net","558981204807@s.whatsapp.net","558981213553@s.whatsapp.net","554999498331@s.whatsapp.net","558981309535@s.whatsapp.net","558981309535@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const groupId = isGroup ? groupMetadata.jid : ''
			const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : false
	    	const isAnime = isGroup ? anime.includes(from) : false
	    	const isAntiRacismo = isGroup ? antiracismo.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isPremium = premium.includes(sender)
			const ismod = mod.includes(sender)
			const errorurl2 = 'https://i.ibb.co/dttZM8b/591530180aad.png'
			const isadminbot = adminbotnumber.includes(sender)
			const isfrendsowner = frendsowner.includes(sender)
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
              //function leveling
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`*「 LEVEL UP 」*\n\n➸ *Nombre*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nFelicidades!!  🎉🎉`)
                }
            } catch (err) {
                console.error(err)
            }
        }
if (text.includes("ip"))
  { const aris = text.replace(/!ip /, "") 
  axios.get(`https://mnazria.herokuapp.com/api/check?ip=${aris}`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *CIUDAD:*  ${res.data.city}\n ➸ *Latitude* : ${res.data.latitude}\n ➸ *Longtitude* : ${res.data.longitude}\n ➸ *REGION* : ${res.data.region_name}\n ➸ *UF* : ${res.data.region_code}\n ➸ *IP* : ${res.data.ip}\n ➸ *TIPO* : ${res.data.type}\n ➸ *CEP* : ${res.data.zip}\n ➸ *LOCALIDADE* : ${res.data.location.geoname_id}\n ➸ *CAPITAL* : ${res.data.location.capital}\n ➸ *DDD* : ${res.data.location.calling_code}\n ➸ *PAÍS* : ${res.data.location.country_flag_emoji}\n *📌BY:Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }
	
if (text.includes('cry')){
  var teks = text.replace(/!randomcry /, '')
    axios.get(`https://tobz-api.herokuapp.com/api/cry`).then((res) => {
      imageToBase64(res.data.result)
        .then(
          (ress) => {
            var buf = Buffer.from(ress, 'base64')
            conn.sendMessage(id, buf, MessageType.image)
        })
    })
}	

if (text.includes("cnpj")){
const aris = text.replace(/!cnpj /, "")
axios.get(`https://www.receitaws.com.br/v1/cnpj/${aris}`).then((res) => {
	conn.sendMessage(id, '𝙿𝙴𝚁𝙰 𝙰𝙴 𝚂𝙰𝙻𝙰𝙵𝚁𝙰𝙸𝙾', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *ATIVIDADE PRINCIPAL:* ${res.data.atividade_principal[0].text} \n\n ➸ *DATA SITUAÇÃO:* ${res.data.data_situacao}\n\n ➸ *TIPO:* ${res.data.tipo} \n\n ➸ *NOME:* ${res.data.nome} \n\n ➸ *UF:* ${res.data.uf} \n\n ➸ *TELEFONE:* ${res.data.telefone}\n\n ➸ *SITUAÇÃO:* ${res.data.situacao} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *RUA:* ${res.data.logradouro} \n\n ➸ *NÚMERO :* ${res.data.numero} \n\n ➸ *CEP :* ${res.data.cep} \n\n ➸ *MUNICÍPIO:* ${res.data.municipio} \n\n ➸ *PORTE:* ${res.data.porte}\n\n ➸ *ABERTURA:* ${res.data.abertura}\n\n ➸ *NATUREZA JURÍDICA:* ${res.data.natureza_juridica} \n\n ➸ *FANTASIA:* ${res.data.fantasia}\n\n ➸ *CNPJ:* ${res.data.cnpj}\n\n ➸ *ÚLTIMA ATUALIZAÇÃO:* ${res.data.ultima_atualizacao}\n\n ➸ *STATUS:* ${res.data.status}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento}\n\n ➸ *EMAIL:* ${res.data.email}\n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}

if (text.includes("cpf")){
const aris = text.replace(/!cpf /, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=${aris}`).then((res) => {
	conn.sendMessage(id, '𝙿𝙴𝚁𝙰 𝙰𝙴 𝚂𝙰𝙻𝙰𝙵𝚁𝙰𝙸𝙾', MessageType.text)
         let ecpf = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CPF:* ${res.data.CPF} \n\n ➸ *NOME:* ${res.data.Nome}\n\n ➸ *MÃE:* ${res.data.NomeMae} \n\n ➸ *NASCIMENTO:* ${res.data.DataNascimento} \n\n ➸ *RUA:* ${res.data.Rua} \n\n ➸ *N°:* ${res.data.NumeroRua}\n\n ➸ *COMPLEMENTO:* ${res.data.Complemento}\n\n ➸ *BAIRRO:* ${res.data.Bairro}\n\n ➸ *CEP:* ${res.data.CEP}\n\n ➸ *UF:* ${res.data.EstadoSigla}\n\n ➸ *CIDADE:* ${res.data.Cidade}\n\n ➸ *ESTADO:* ${res.data.Estado}\n\n ➸ *PAIS:* ${res.data.Pais}  \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, ecpf ,MessageType.text);
}) 
}

if (text.includes("geradorcpf")){
const aris = text.replace(/!geradorcpf/, "")
axios.get(`http://geradorapp.com/api/v1/cpf/generate?token=40849779ec68f8351995def08ff1e2fa`).then((res) => {
	conn.sendMessage(id, '𝚃𝙾 𝙿𝚁𝙾𝙲𝙴𝚂𝚂𝙰𝙽𝙳𝙾 𝚅𝙴𝚈', MessageType.text)
         let cpf = `*🔍CPF GERADOS🔍* \n\n ➸ *CPF:* ${res.data.data.number}  \n\n *📌BY:May Bot*`;
    conn.sendMessage(id, cpf ,MessageType.text);
})
}	

if (text.includes("cep")){
const aris = text.replace(/!cep /, "")
axios.get(`https://viacep.com.br/ws/${aris}/json/`).then((res) => {
	conn.sendMessage(id, '𝙿𝙴𝚁𝙰 𝙰𝙴 𝚂𝙰𝙻𝙰𝙵𝚁𝙰𝙸𝙾', MessageType.text)
         let cep = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${res.data.cep} \n\n ➸ *ENDEREÇO:* ${res.data.logradouro}\n\n ➸ *COMPLEMENTO:* ${res.data.complemento} \n\n ➸ *BAIRRO:* ${res.data.bairro} \n\n ➸ *LOCALIDADE:* ${res.data.localidade} \n\n ➸ *UF:* ${res.data.uf}\n\n ➸ *DDD:* ${res.data.ddd} \n\n *📌BY:May Bot* `;
    conn.sendMessage(id, cep ,MessageType.text);
}) 
}


if (text.includes("placa"))
  { const aris = text.replace(/!placa /, "") 
  axios.get(`https://apicarros.com/v1/consulta/${aris}/json`).then((res) =>{ 
  let hasil = ` *🔍CONSULTA REALIZADA🔍* \n\n ➸ *ANO:*  ${res.data.ano}\n ➸ *ANO MODELO* : ${res.data.anoModelo}\n ➸ *CHASSI* : ${res.data.chassi}\n ➸ *CODIGO RETORNO* : ${res.data.codigoRetorno}\n ➸ *CODIGO SITUACAO* : ${res.data.codigoSituacao}\n ➸ *COR* : ${res.data.cor}\n ➸ *MARCA* : ${res.data.marca}\n ➸ *MUNICIPIO* : ${res.data.municipio}\n ➸ *SITUACAO* : ${res.data.situacao}\n ➸ *UF* : ${res.data.uf}\n *📌BY:May Bot*` 
  conn.sendMessage(id, hasil, MessageType.text); 
 })
 }		        
//comandos antiracismo
        if (messagesC.includes("prieto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('calla, no diga eso,esta mal , mas bien te podrian banear ')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} usted sera expulsado de este grupo en 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("En este grupo no nos gusta el racismo, que eso sirva de ejemplo 🚶")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundos, chau prro🤙")
		}, 0)
	}
	
	        if (messagesC.includes("seupreto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 🤙")
		}, 0)
	}
	
	        if (messagesC.includes("macaco")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 🤙")
		}, 0)
	}
	
	        if (messagesC.includes("pretoimundo")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 🤙")
		}, 0)
	}
	
	        if (messagesC.includes("pq vc e preto")){
		if (!isGroup) return
		if (!isAntiRacismo) return
		if (isGroupAdmins) return reply('cara, nao fale essas coisas, é errado, mas vc e admin n irei te banir')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`tchau racista ${sender.split("@")[0]} voce sera expulso deste grupo em 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundo KKKKKKKK tchau otário 🤙")
		}, 0)
	}
	
	        if (messagesC.includes("://chat.whatsapp.com/")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('usted es admin, entonces no te daran ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} Usted sera expulsado en 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundos chau prro🤙")
		}, 0)
	}
	
		        if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply('usted es admin del grupo, entonces no te daran ban por usar links, rlx 🙂')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`link detectado ${sender.split("@")[0]} Usted sera expulsado dentro de 5 segundos`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1 segundo")
		}, 4000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("5 segundos, chau prro 🤙")
		}, 0)
	} 
	
	if (messagesC.includes("hatori")){
			client.updatePresence(from, Presence.composing)
			reply("el mas penon👌")
	}
	
		if (messagesC.includes("brynz")){
			client.updatePresence(from, Presence.composing)
			reply("que rico la chupas brynz")
	}

		if (messagesC.includes("Lixo")){
			client.updatePresence(from, Presence.composing)
			reply("Teu pai")
	}

		if (messagesC.includes("krai")){
			client.updatePresence(from, Presence.composing)
			reply("hehehe")
	}
						
		if (messagesC.includes("pene")){
			client.updatePresence(from, Presence.composing)
			reply("quieres nepe?")
	}
	
		if (messagesC.includes("eae")){
			client.updatePresence(from, Presence.composing)
			reply("opa")
	}

		if (messagesC.includes("Hatori")){
			client.updatePresence(from, Presence.composing)
			reply("el mas Penon 👌")
	}
	
		if (messagesC.includes("que tal")){
			client.updatePresence(from, Presence.composing)
			reply("bien")
	}
			// comando para audios

		if (messagesC.includes("Brynz")){
			client.updatePresence(from, Presence.composing)
			reply("Que rico la chupa")
	}

			if (messagesC.includes("pasen porno")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/callacagada.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("yamete kudasai")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/yametekudasai.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		
			if (messagesC.includes("tmnc")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/belmiro.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("*menu")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bot.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("@558981246187")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/chapa.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("Hehehe")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/hehe.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

			if (messagesC.includes("bu")){
				client.sendMessage(from, Presence.composing)
				reply("e,..,e")
	}
	
			if (messagesC.includes("bot")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bot.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("Dbz")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Dbz.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
            if (messagesC.includes("vsfd")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/vsfd.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
            
            if (messagesC.includes("gay")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/gay.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
          if (messagesC.includes("jajaja")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/kkk.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
          if (messagesC.includes("gato")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/vida.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
          if (messagesC.includes("fino")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/gostoso.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }

          if (messagesC.includes("eita")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/eita.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
          
	        if (messagesC.includes("sexo")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/Sexo.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}

	if (messagesC.includes("xandao")){
			client.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./sticker/pqp.webp');
            client.sendMessage(from, d, sticker, {quoted: mek})
    }
	
				if (messagesC.includes("canta")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/canto.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
			
			if (messagesC.includes("risas")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/kiko.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("grita")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/a.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
			
			if (messagesC.includes("gemido")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/fodaze.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
			if (messagesC.includes("bv")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/bv.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
		
			if (messagesC.includes("fds")){
			client.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./assets/tmnc.mp3');
            client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
	
				if (messagesC.includes("mandememe")){
			client.updatePresence(from, Presence.composing)
			data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, 'meme')
	}
	
			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'do parsa', color(sender.split('@')[0]), 'Artigo :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Menssagem'), 'do parsa', color(sender.split('@')[0]), 'Artigo :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'do parsa', color(sender.split('@')[0]), 'No grupo', color(groupName), 'Artigo :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Menssagem'), 'do parsa', color(sender.split('@')[0]), 'No grupo', color(groupName), 'Artigo :', color(args.length))
			switch(command) {
	            case 'menu':
	            case 'help':
	            	uptime = process.uptime ()
                    putagg = await getBuffer(`https://i.ibb.co/Lpv80kh/Super-Xand-o.jpg`)
                    client.sendMessage(from, putagg, image, {quoted: mek, caption: help(prefix, sender, pushname, time)})
                    break
                case 'eu':
                putagg = await getBuffer(`https://i.ibb.co/TthtCSG/pakipariu-doido.jpg`)
                client.sendMessage(from, putagg, image, {quoted: mek, caption: eu()})
                break
                  if (messagesC.includes("eita")){
					 client.updatePresence(from, Presence.composing) 
	     			 const d = fs.readFileSync('./sticker/eita.webp');
           			 client.sendMessage(from, d, sticker, {quoted: mek})
    		}	
                case 'alist':
                    putagg = await getBuffer(`https://ibb.co/x2dmvP6`)
                    client.sendMessage(from, putagg, image, {quoted: mek, caption: animes(prefix, pushname)})
                    break
				case 'help1':
				case 'menu1':
					client.sendMessage(from, help1(prefix), text)
					break
				case 'pau':
				if (!isGroup) return reply(mess.only.group)
				membr = []
				const pauz1 = groupMembers
				const pauz2 = groupMembers
				const pauz3 = groupMembers
				const pauz4 = groupMembers
				const pauz5 = groupMembers
				const paus1 = pauz1[Math.floor(Math.random() * pauz1.length)]
				const paus2 = pauz2[Math.floor(Math.random() * pauz2.length)]
				const paus3 = pauz3[Math.floor(Math.random() * pauz3.length)]
				const paus4 = pauz4[Math.floor(Math.random() * pauz4.length)]
				const paus5 = pauz5[Math.floor(Math.random() * pauz5.length)]
				var pcpau1 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
				var pcpau2 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
				var pcpau3 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
				var pcpau4 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
				var pcpau5 = ["Minuscúlo", `Pequenino`, `Pequeno`, `Médio`, `Grandinho`, `Grande`, `Grandão`, `Gigante`, `Gigantesco`, `Enorme`, `BATENDO NA LUA`, `QUEIMADO, TÃO GRANDE QUE BATEU NO SOL E QUEIMOU ksksksk`]
				const pc1 = pcpau1[Math.floor(Math.random() * pcpau1.length)]
				const pc2 = pcpau2[Math.floor(Math.random() * pcpau2.length)]
				const pc3 = pcpau3[Math.floor(Math.random() * pcpau3.length)]
				const pc4 = pcpau4[Math.floor(Math.random() * pcpau4.length)]
				const pc5 = pcpau5[Math.floor(Math.random() * pcpau5.length)]
				teks = `Esses são os caras com o menor e maior pau do Grupo\n${groupName}\n\n@${paus1.jid.split('@')[0]}\n${pc1}\n@${paus2.jid.split('@')[0]}\n${pc2}\n@${paus3.jid.split('@')[0]}\n${pc3}\n@${paus4.jid.split('@')[0]}\n${pc4}\n@${paus5.jid.split('@')[0]}\n${pc5}\n\n⚡Super Xandão⚡`
				membr.push(paus1.jid)
				membr.push(paus2.jid)
				membr.push(paus3.jid)
				membr.push(paus4.jid)
				membr.push(paus5.jid)
				mentions(teks, membr, true)
					break
				case 'otakus':
					if (!isGroup) return reply(`Este comando solo puede ser utilizado en grupos pana`)
					membr = []
					const otaku1 = groupMembers
					const otaku2 = groupMembers
					const otaku3 = groupMembers
					const otaku4 = groupMembers
					const otaku5 = groupMembers
					const otaku6 = groupMembers
					const otaku7 = groupMembers
					const otaku8 = groupMembers
					const otaku9 = groupMembers
					const otaku10 = groupMembers
					const otakus1 = otaku1[Math.floor(Math.random() * otaku1.length)]
					const otakus2 = otaku2[Math.floor(Math.random() * otaku2.length)]
					const otakus3 = otaku3[Math.floor(Math.random() * otaku3.length)]
					const otakus4 = otaku4[Math.floor(Math.random() * otaku4.length)]
					const otakus5 = otaku5[Math.floor(Math.random() * otaku5.length)]
					const otakus6 = otaku6[Math.floor(Math.random() * otaku6.length)]
					const otakus7 = otaku7[Math.floor(Math.random() * otaku7.length)]
					const otakus8 = otaku8[Math.floor(Math.random() * otaku8.length)]
					const otakus9 = otaku9[Math.floor(Math.random() * otaku9.length)]
					const otakus10 = otaku10[Math.floor(Math.random() * otaku10.length)]
					teks = `${pushname} estos son los mas otakus del grupo\n@${otakus1.jid.split('@')[0]}\n@${otakus2.jid.split('@')[0]}\n@${otakus3.jid.split('@')[0]}\n@${otakus4.jid.split('@')[0]}\n@${otakus5.jid.split('@')[0]}\n@${otakus6.jid.split('@')[0]}\n@${otakus7.jid.split('@')[0]}\n@${otakus8.jid.split('@')[0]}\n@${otakus9.jid.split('@')[0]}\n@${otakus10.jid.split('@')[0]}\n\nSIN PRESION⚡ HH BOT ⚡`
					membr.push(otakus1.jid)
					membr.push(otakus2.jid)
					membr.push(otakus3.jid)
					membr.push(otakus4.jid)
					membr.push(otakus5.jid)
					membr.push(otakus6.jid)
					membr.push(otakus7.jid)
					membr.push(otakus8.jid)
					membr.push(otakus9.jid)
					membr.push(otakus10.jid)
					mentions(teks, membr, true)
						break
				case "ppt": //Feito por LUCAS
				msgFilter.isFiltered(from)
				if (args.length < 1) return reply(ptbr.tterro())
				ppt = ["pedra","papel","tesoura"]
				ppy = ppt[Math.floor(Math.random() * ppt.length)]
				ppg = Math.floor(Math.random() * 13) + 349
				pptb = ppy
				pph = `Você ganhou ${ppg} em xp`
				if ((pptb == "pedra" && args == "papel") || 
				(pptb == "papel" && args == "tesoura") || 
				(pptb == "tesoura" && args == "pedra")) {
				var vit = "vitoria"
				} else if ((pptb == "pedra" && args == "tesoura") || 
				(pptb == "papel" && args == "pedra") || 
				(pptb == "tesoura" && args == "papel")) {
				var vit = "derrota"
				} else if ((pptb == "pedra" && args == "pedra") ||
				(pptb == "papel" && args == "papel") ||
				(pptb == "tesoura" && args == "tesoura")) {
				var vit = "empate"
				} else if (vit = "undefined") {
				return reply(ptbr.tterro())
				}
				if (vit == "vitoria") {
				var tes = "Vitória do jogador"
				}
				if (vit == "derrota" ) {
				var tes = "A vitória é do Tiringa-BOT"
				}
				if (vit == "empate" ) {
				var tes = "O jogo terminou em empate"
				}
				reply(`Tiringa-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
				if (tes == "Vitória do jogador") {
				reply(pph)
				}
					break
				case 'github':
				reply(`https://github.com/yulking95/Bot-1`)
				setTimeout( () => {
				client.sendMessage(from, Presence.composing)
				reply(`${pushname} ese es el link del ⚡HH BOT⚡`)
				}, 1000)
					break
				case 'install':
			reply(`Aqui los comandos del ⚡HH BOT⚡ ${pushname}`)
			setTimeout( () => {
			client.sendMessage(from, Presence.composing)
			reply("Usted necesita instalar Termux y tener 2 celulares, cuando pida y/n digite Y y de enter, si pide Y/N/M/S o algo de ese tipo digite Y y de enter, solo debes hacer eso hasta que aparezca el codigo QR")
			}, 1000)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("termux-setup-storage")
			}, 2000)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("pkg install git && pkg install ffmpeg && pkg install wget && pkg install nodejs && git clone https://github.com/yulking95/Bot-1")
			}, 3000)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("cd Bot-1")
			}, 5000)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("bash install.sh")
			}, 6000)
			setTimeout( () => {
				client.updatePresence(from, Presence.composing)
				reply("npm start")
			}, 7000)
					break
					case 'kiss':
				    try {    
					
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
						bufferv = await getBuffer(res.result)
						client.sendMessage(from, bufferv, image, {quoted: mek, caption: 'ezzzz'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						sa = await getBuffer(`https://i.ibb.co/JcSjmNY/IMG-20210107-WA0052.jpg`)
						client.sendMessage(from, sa, image, {quoted: mek, caption: 'Erro como!!'})
						reply('EITA VEY DEU ERRO AQUI MN')
					}
					break
					case 'lista':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Usted quien es, el proprietario?')
					if (args.length < 1) return reply('Donde esta el texto, tío?')
					reply(mess.wait)
					client.sendMessage(from, 'mensaje añadido con éxito a la lista' , text, { quoted: mek })
					client.sendMessage(from, addsay(prefix), text, { quoted: mek })
					break
                    case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Eu Shipo eles 2💘💘*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
					case 'gays':
					if (!isGroup) return reply(`Esse comando so pode ser usadoem grupos parsa`)
					membr = []
					const gay1 = groupMembers
					const gay2 = groupMembers
					const gay3 = groupMembers
					const gay4 = groupMembers
					const gay5 = groupMembers
					const gays1 = gay1[Math.floor(Math.random() * gay1.length)]
					const gays2 = gay2[Math.floor(Math.random() * gay2.length)]
					const gays3 = gay3[Math.floor(Math.random() * gay3.length)]
					const gays4 = gay4[Math.floor(Math.random() * gay4.length)]
					const gays5 = gay5[Math.floor(Math.random() * gay5.length)]
					var porcentagemgay = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `100%`]
					const porcentagem = porcentagemgay[Math.floor(Math.random() * porcentagemgay.length)]
					teks = `${pushname} Esses são os mais SuperGays do grupo ${groupName}\n@${gays1.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagem}\n@${gays2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagem}\n@${gays3.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagem}\n@${gays4.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagem}\n@${gays5.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagem}\n\n Sem pressão Neném, ⚡Xandão⚡ ta aqui`
					membr.push(gays1.jid)
					membr.push(gays2.jid)
					membr.push(gays3.jid)
					membr.push(gays4.jid)
					membr.push(gays5.jid)
					mentions(teks, membr, true)
					break
					case 'cornos':
					if (!isGroup) return reply(`Esse comando so pode ser usadoem grupos parsa`)
					membr = []
					const corno1 = groupMembers
					const corno2 = groupMembers
					const corno3 = groupMembers
					const corno4 = groupMembers
					const corno5 = groupMembers
					const cornos1 = corno1[Math.floor(Math.random() * corno1.length)]
					const cornos2 = corno2[Math.floor(Math.random() * corno2.length)]
					const cornos3 = corno3[Math.floor(Math.random() * corno3.length)]
					const cornos4 = corno4[Math.floor(Math.random() * corno4.length)]
					const cornos5 = corno5[Math.floor(Math.random() * corno5.length)]
					var porcentagemcorno = ["1%", `2%`, `3%`, `4%`, `5%`, `6%`, `7`, `8%`, `9%`, `10`, `11%`, `12%`,`13%`, `14%`, `15%`, `16%`, `17%`, `18%`, `19%`, `20%`, `21%`, `22`, `23%`, `24%`, `25%`, `26%`, `27%`, `28%`, `27%`, `28%`, `29%`, `30%`, `31%`, `32%`, `33%`, `34%`, `35%`, `36%`, `37%`, `38%`, `39%`, `40%`, `41%`, `42%`, `43%`, `44%`, `45%`, `46%`, `47%`, `48%`, `49%`, `50%`, `51%`, `52%`, `53%`, `54%`, `55%`, `56%`, `57%`, `58%`, `59%`, `60%`, `61%`, `62%`, `63%`, `64%`, `65%`, `66%`, `67%`, `68%`, `69%`, `70%`, `71%`, `72%`, `73%`, `74%`, `75%`, `76%`, `77%`, `78%`, `79%`, `80%`, `81%`, `82%`, `85%`, `84%`, `85%`, `86%`, `87%`, `88%`, `89%`, `90%`, `91%`, `92%`, `93%`, `94%`, `95%`, `96%`, `97%`, `98%`, `99%`, `O chifre desse ai bate na lua ksksksk`]
					const porcentagemc = porcentagemcorno[Math.floor(Math.random() * porcentagemcorno.length)]
					teks = `${pushname} Esses são os cornos do grupo ${groupName}\n@${cornos1.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemc}\n@${cornos2.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemc}\n@${cornos3.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemc}\n@${cornos4.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemc}\n@${cornos5.jid.split('@')[0]}\nCom uma porcentagem de ${porcentagemc}\n\n Sem pressão Neném, ⚡Xandão⚡ ta aqui`
					membr.push(cornos1.jid)
					membr.push(cornos2.jid)
					membr.push(cornos3.jid)
					membr.push(cornos4.jid)
					membr.push(cornos5.jid)
					mentions(teks, membr, true)
					break
                    case 'gostosa':
                     if (!isGroup) return reply(mess.only.group)
                      membr = []
                      const gostosa12 = groupMembers
                      const gostosa11 = groupMembers
                      const gostoso12 = gostosa12[Math.floor(Math.random() * gostosa12.length)]
                      const gostoso11 = gostosa11[Math.floor(Math.random() * gostosa11.length)]
                      reply(`*ＤＥＴＥＣＴＯＲ   ＤＥ  ＧＯＳＴＯＳＡＳ👩‍⚕️*\n\n*pi pi pi pi*  \n*pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipipipi🚨🚨🚨pipi*\n\n@${gostoso11.jid.split('@')[0]} @${gostoso12.jid.split('@')[0]} *PARADA(O)S AÍ🖐*\n\n*VOCÊ ACABA DE RECEBER DUAS MULTAS*\n\n*1 por não dar bom dia,boa tarde,boa noite e outra por ser muito*\n\n*gostosa(o)*\n\n*valor da multa:*\n*FOTO DA TETINHA NO PV kkkkk*`)
                      membr.push(gostosa11.jid)
                      membr.push(gostosa12.jid)
                      mentions(teks, membr, true)
                       break
                    case 'lindos':
                     if (!isGroup) return reply(mess.only.group)
                      membr = []
                      const cu12 = groupMembers
                      const cu11 = groupMembers
                      const cuz13 = groupMembers
                      const cuz14 = groupMembers
                      const cuzao12 = cu12[Math.floor(Math.random() * cu12.length)]
                      const cuzao11 = cu11[Math.floor(Math.random() * cu11.length)]
                      const cuzin21 = cuz13[Math.floor(Math.random() * cuz13.length)]
                      const cuzin22 = cuz14[Math.floor(Math.random() * cuz14.length)]
                      reply(`*${pushname2} Ellos son los mas lindos del grupo\n${groupName}\n\n@51928564603\n@${cuzao11.jid.split('@')[0]} \n@${cuzao12.jid.split('@')[0]} \n@${cuzin21.jid.split('@')[0]} \n@${cuzin22.jid.split('@')[0]} \n\n Cortesia de HH BOT`)
                      membr.push(cu11.jid)
                      membr.push(cu12.jid)
                      membr.push(cuz13.jid)
                      membr.push(cuz14.jid)
                      mentions(teks, membr, true)
                       break
					case 'addsay':
				    hai = body.slice(8)
						sayrandom.push(hai)
						fs.writeFileSync('./src/say.json', JSON.stringify(sayrandom))
						reply(`Sucess ${hai} Adicionado a la lista de deseos`)
						break
                   case 'saylist':
					teks = 'Esta es la lista de deseos :\n'
					for (let awokwkwk of sayrandom) {
						teks += `╠➥ ${awokwkwk}\n`
					}
					teks += `Total : ${sayrandom.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": sayrandom}})
					break
				case 'ssweb':
				
					if (args.length < 1) return reply('Codigo url tio?')
					tekss = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/screenshotweb?url=${tekss}`)
					bufferz = await getBuffer(anu.gambar)
					client.sendMessage(from, bufferz, image, {quoted: mek})
					break
                case 'ytkomen':
					if (args.length < 1) return reply('falta el texto tio')
					gh = body.slice(9)
					usnm = gh.split("|")[0];
					cmn = gh.split("|")[1];
					var imgbb = require('imgbb-uploader')
					ghost = mek.participant
					try {
					pp = await client.getProfilePicture(ghost)
					} catch {
					pp = 'https://i.ibb.co/64dN6bQ/IMG-20201220-WA0024.jpg'
					}
					media = await getBuffer(pp)
					datae = await imageToBase64(JSON.stringify(pp).replace(/\"/gi, ''))
					fs.writeFileSync('getpp.jpeg', datae, 'base64')
					res = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", 'getpp.jpeg')
					buffer88 = await getBuffer(`https://some-random-api.ml/canvas/youtube-comment?avatar=${res.display_url}&comment=${cmn}&username=${usnm}`)
					client.sendMessage(from, buffer88, image, {quoted: mek, caption: `*${usnm}* : ${cmn}`})
					break
				case 'wallpaperhd':
				
					if (args.length < 1) return reply('Falta el texto tio')
					teksj = body.slice(7)
					reply(mess.wait)
					anwu = await fetchJson(`https://api.vhtear.com/walpaper?query=${teksj}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					bufferx = await getBuffer(anwu.result.LinkImg)
					client.sendMessage(from, bufferx, image, {quoted: mek})
					break
					case 'jadian':

                    if (!isGroup) return reply(from, 'este comando solo puede ser usado dentro del grupo', id)

                    const up = groupMembers

                    const aku = up[Math.floor(Math.random() * up.length)];

                    const kamu = up[Math.floor(Math.random() * up.length)];

                    const sapa = `Cieee... @${(/[@c.us]/g, '')} (💘) @${(/[@c.us]/g, '')} acabei de te inventar\nPor favor, compartilhe o pj`

                    client.sendMessage(from, sapa)

                    break
				case 'ramaljadian':
				
					var gh7 = body.slice(10)
					var gbl16 = gh7.split("|")[0];
					var gbl26 = gh7.split("|")[1];
					var gbl36 = gh7.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl16}&bln=${gbl26}&thn=${gbl36}&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					reply(anu.result.hasil)
					break
                   case 'modapk':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, modapk(prefix), text, { quoted: mek })
                    break
                   case 'gbin':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gbin(prefix), text, { quoted: mek })
                    break
                   case 'gpersona':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gpersona(prefix), text, { quoted: mek })
                    break
                   case 'destrava':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, destrava(prefix), text, { quoted: mek })
                    break
                   case 'packzera':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, pack(prefix), text, { quoted: mek })
                    break
                   case 'chentai':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, chentai(prefix), text, { quoted: mek })
                    break
                   case 'gcpf':
                    if (!isPremium) return reply(mess.only.premium)
                    client.sendMessage(from, gcpf(prefix), text, { quoted: mek })
                    break
				case 'ytmp4':
					if (args.length < 1) return reply('Falta codigo url, tio?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
		case 'iri':
			client.sendPtt(from, './lindy/iri.mp3', {quoted: mek, ptt:true})
			break
				case 'ytmp3':
			    	if (!isPremium) return reply(mess.only.premium)
                   reply(mess.wait)
					if (args.length < 1) return reply('Falta el url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n*Tamaño de archivo* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					bufferyyy = await getBuffer(anu.result)
					client.sendMessage(from, bufferyyy, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'ytmp':
					if (args.length < 1) return reply('Falta el url tío')
				
					anu = await fetchJson(`https://api.vhtear.com/ytmp3?query=${body.slice(7)}&apikey=OOute55hhUyiwy772999she88982665000kjuGaGh`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo* : ${anu.title}\n*Peso del archivo * : ${anu.size}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp3', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'game':
				
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
                case 'quotemaker':
					var gh = body.slice(12)
					var quote = gh.split("|")[0];
					var wm = gh.split("|")[1];
					var bg = gh.split("|")[2];
					const pref = `Usage: \n.}quotemaker teks | marca d'água | tema\n\nEx :\n${prefix}quotemaker este é um exemplo | bicit | aleatório`
					if (args.length < 1) return reply(pref)
					reply(mess.wait)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Nih dah jadi kak', quoted: mek})
					break
				case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'gneon':
                    if (!isGroup)return reply(mess.only.group)
					gh = `${body.slice(12)}`
					gbl1 = gh.split("/")[0];
					gbl2 = gh.split("/")[1];
					if (args.length < 1) return reply('Sou Vidente porra? cade o texto?')
					buffer = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=apivinz&text=${teks}`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break
                case 'matrixlogo':
                    if (!isGroup)return reply(mess.only.group)
					gh = `${body.slice(12)}`
					gbl1 = gh.split("/")[0];
					gbl2 = gh.split("/")[1];
					if (args.length < 1) return reply('Sou Vidente porra? cade o texto?')
					buffer = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=apivinz&text1=ZEKS&text2=API`, {method: 'get'})
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
					case 'hashidentifier':

					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipe: *${anu.hash_type}*\nChar Tipe: *${anu.char_type}*`
					  frhan.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'testing':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'covidbr':
                    anu = await fetchJson(`https://api-gdr.herokuapp.com/api/covidbr`)
                    resp = `Ativos: ${anu.ativo}\nCasos: ${anu.casos}\nCasos Hoje: ${anu.casos_hoje}\nCasos Criticos: ${anu.criticos}\nMortes: ${anu.mortes}\nMortes Hoje: ${anu.mortes_hoje}`
                    client.sendMessage(from, resp, text,  {quoted: mek})
                   break
				case 'testing2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
		case 'tahta':
                tahta = `${body.slice(7)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('mínimo 10 linhas')
                     buff = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${tahta}&apikey=apivinz`, {method: 'get'})
                     anker.sendMessage(from, buff, image, {quoted: mek, caption: `Tesouro do trono ${tahta}`})
                  await limitAdd(sender) 
                  break  
                    case 'glitch':
                    gh = body.slice(7)
                    teks1 = gh.split("|")[0];
                    teks2 = gh.split("|")[1];
                    data = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${teks1}&text2=${teks2}&apikey=BotWeA`, {method: 'get'})
                    hasil = await getBuffer(data.result)
                    anker.sendMessage(from, hasil, image, {quoted: mek, caption: 'neh...'})
                    await limitAdd(sender)
                    break
          case 'snack':
				if (args.length < 1) return reply('Falta el Url tio?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *SNACK VIDEO DOWNLOADER* 」\n\n*• Formato:* ${anu.format}\n*• Tamanho:* ${anu.size}\n\n*ESPERE ENVIANDO POR FAVOR, NÃO SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                frhan.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                frhan.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui amigo (a)', quoted: mek})
					break
				case 'modoanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('El modo anime yá está activo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Activado con exito el modo anime en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓Modo anime desactivado con exito en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para activar, Off para desactivar')
					}
					break
					case 'antiracismo':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAntiRacismo) return reply('el modo antiracismo ya esta activo')
										
						antiracismo.push(from)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Activado con exito el modo antiracismo en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						antiracismo.splice(from, 1)
						fs.writeFileSync('./database/json/antiracismo.json', JSON.stringify(antiracismo))
						reply(`\`\`\`✓Modo antiracismo desactivado con exito en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('On para desactivar, Off para desligar')
					}
					break
				case 'modonsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('O modo nsfw ya esta activo')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Activado con exito el modo nsfw en el grupo:\`\`\` *${groupName}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓Modo nsfw desactivado con exito en el grupo:\`\`\` *${groupName}*`)
					} else {
						reply('On para activar, Off para desactivar')
					}
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                 case 'nombregp':
                 if (!isGroup) return reply(`Este comando solo puede ser usado en grupos`)
		             if (args.length < 1) return reply (`el nombre del grupo es: *${groupName}*`)
		             break
				case 'loli2':
					if (!isAnime) return reply('❌ *Debe activar el modo Anime* ❌')
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=loli&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					var lol = JSON.parse(JSON.stringify(anu.result));
					var i2 =  lol[Math.floor(Math.random() * lol.length)];
					nyeee = await getBuffer(i2)
					client.sendMessage(from, nyeee, image, { caption: 'Oni chan baka!!', quoted: mek })
					break
					case 'xd':				
					if (args.length < 1) return reply(mess.wait)
					pinte = body.slice(11)
					anu = await fetchJson(`https://api-zeks.harispoppy.com/api/pin?q=${pin}&apikey=APIKEY`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pineq = await getBuffer(trest)
					client.sendMessage(from, pineq, image, { caption: '*Pinterest*\n\n*Resultado Encontrado:'+pinte+'*', quoted: mek })
					break
//@darkYT					
				case 'pokemon':
                    client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
                    await limitAdd(sender)
					break
              case 'circlesticker':
    const pack = arg.split('|')[0]
    const author = arg.split('|')[1]
    if (isMedia && mimetype == 'image/jpeg') {
      await createExif(pack,author)
      await sleep(5000)
      decryptMedia(message).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            sqlter.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/jpeg') {
      await createExif(pack, author)
      await sleep(5000)
      decryptMedia(quotedMsg).then(mediaData => {
        sharp(mediaData).resize({
          width: 512,
          height: 512,
          fit: sharp.fit.contain,
          background: {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0
          }
        }).webp().toBuffer().then(buffer => {
          modifExif(buffer, id, (res) => {
            mediaData = res.toString('base64')
            client.sendRawWebpAsSticker(from, mediaData)
          })
        })
      })
    } else if (isMedia && mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'image/gif') {
      const shape = "circle"
      const type = "gif"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (isMedia && mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(message);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    } else if (quotedMsg && quotedMsgObj.mimetype == 'video/mp4') {
      const shape = "circle"
      const type = "mp4"
      const mediaData = await decryptMedia(quotedMsg);
      await convertSticker(shape, author, pack, mediaData, type, from).then((res) => client.sendRawWebpAsSticker(from, res.toString("base64")))
    }
    break
    
				case 'semoji':
					if (args.length < 1) return reply('onde está o emojis hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(8).trim()
					anu = await fetchJson(`https://mhankbarbars.tech/api/emoji2png?emoji=${teks}&apikey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker)
						fs.unlinkSync(rano)
					})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'ytsearch':
					if (args.length < 1) return reply('Falta el texto tio?')
					reply(mess.wait)
					anu = await fetchJson(`https://api.arugaz.my.id/api/media/ytsearch?query=${body.slice(10)}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `\`\`\`Título\`\`\` : *${i.title}*\n\`\`\`Link\`\`\` : *https://youtu.be/${i.id}*\n\`\`\`Publicados\`\`\` : *${i.uploadDate}*\n\`\`\`Duracion\`\`\` : *${i.duration}*\n\`\`\`Visualizadores: \`\`\`*${h2k(i.viewCount)}*\n\`\`\`Canal:\`\`\` *${i.channel.name}*\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
					case 'vipmenu':
					if (!isPremium) return reply('Usted no es un miembro Premium, contacte con el dueño o digite *#daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					client.sendMessage(from, vipmenu(prefix) , text, { quoted: mek })
					break
					case 'otros':
					client.sendMessage(from, otros(prefix) , text, { quoted: mek })
					break
					case 'menu2':
					client.sendMessage(from, menu2(prefix) , text, { quoted: mek })
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'rize':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'rize chan!!', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'mia':
				  	if (!isNsfw) return reply(' *Active el modo nsfw, para activar use: .modonsfw on* ')
					reply(mess.wait)
					anu = await fetchJson(`https://testesw.herokuapp.com/`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'i love you, mia 🥺❤️', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('O que você quer escrever??') 
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
                    await limitAdd(sender)
					break
				case 'jogo':
					anu = await fetchJson(`http://rt-files.000webhostapp.com/tts.php?apikey=rasitech`, {method: 'get'})
					setTimeout( () => {
					client.sendMessage(from, '*➸ Responda :* '+anu.result.jawaban+'\n'+anu.result.desk, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_10 Outro segundo…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_20 Outro segundo_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_30 Outro segundo_…', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, anu.result.soal, text, { quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					break
					case 'brainly':
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '♡───────────♡\n'
					for (let Y of res.data) {
						teks += `\n*「 BRAINLY 」*\n\n*➸ Questão:* ${Y.pertanyaan}\n\n*➸ Resposta:* ${Y.jawaban[0].text}\n♡───────────♡\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break
				case 'bloquear':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Blz Hatori te bloqueo ${body.slice(7)}@c.us`, text)
					break
					
				case 'premiumlist':
					teks = '╭────*「 *PREMIUM USER👑* 」\n'
					for (let V of premium) {
						teks += `│+  @${V.split('@')[0]}\n`
					}
					teks += `│+ Total : ${premium.length}\n╰──────*「 *⚡HH BOT⚡* 」*────`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": premium}})
					break
                  case 'qrcode':
        			if (!isPremium) return reply('Usted no es un miembro premium, contacte con el dueño o digite *.Daftarvip* para adquirir el acesso Premium!' ,text, { quoted: mek })
					const tex = encodeURIComponent(body.slice(8))
					if (!tex) return client.sendMessage(from, 'Digite um texto/url que deseja criar um código qr', text, {quoted: mek})
					const bufferr = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
					client.sendMessage(from, bufferr, image, {quoted: mek})
					break
		    	case 'wa.me':
		        case 'wame':
                  client.updatePresence(from, Presence.composing) 
                  options = {
                  text: `「 *LINK WHATSAPP* 」\n\n_Solicitado por_ : *@${sender.split("@s.whatsapp.net")[0]}*\n\nSu link de WhatsApp:\n\n*https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n\n*Ou*\n\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*\n\n*⚡HH BOT⚡ NO CONTROLA*`,
                  contextInfo: { mentionedJid: [sender] }
                  }
                  client.sendMessage(from, options, text, { quoted: mek } )
			      break
                  case 'playstore':
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/playstore?q=%20free%20fire${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nombre Apk:* ${ply.app.name}\n• *ID:* ${ply.app.id}\n• *Link Apk:* ${ply.app.url}\n===================°]\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Falta el texto prro?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Título: ${bokep.title}\nActor: ${bokep.author}\nVisualizadores: *${bokep.views}*\nDuracion: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Falta el texto prro')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Título: ${neko.title}\nDescripcion: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
              	    if (args.length < 1) return reply('Falta el texto prro')


                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Título: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 
            case 'onichan':
            case 'bodoh':
                client.sendMessage(from, buff, './lindy/baka.mp3', audio/mp3, {quoted: mek, ptt:true})
                break
				case 'daftar':
					client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply(`Parameter Salah\nCommand : ${prefix}daftar nama|umur\nContoh : ${prefix}daftar ICHI|12`)
					var reg = body.slice(8)
					var jeneng = reg.split("|")[0];
					var umure = reg.split("|")[1];
						user.push(sender)
						fs.writeFileSync('./src/user.json', JSON.stringify(user))
						client.sendMessage(from, `\`\`\`Pendaftaran berhasil dengan SN: TM08GK8HEUZBEHDO\`\`\`\n\n\`\`\`Pada ${date} ${time}\`\`\`\n\`\`\`[Nome]: ${jeneng}\`\`\`\n\`\`\`[Número]: wa.me/${sender.split("@")[0]}\`\`\`\n\`\`\`[Era]: ${umure}\`\`\`\n\`\`\`Para usar um bot\`\`\`\n\`\`\`Por favor\`\`\`\n\`\`\`enviar ${prefix}help\`\`\`\n\`\`\`\nTotal de usuários ${user.length}\`\`\``, text, {quoted: mek})
					break
				case 'hunti':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey={BELI APIKEY BIAR WORK DI 0816546638}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					bufferjj = await getBuffer(anu.result.pdf_file)
					client.sendMessage(from, bufferjj, document, {mimetype: 'document/pdf', quoted: mek})
					break
                 case 'setdesc':
			    	 if (!isGroup) return reply(mess.only.group)
				     if (!isGroupAdmins) return reply(mess.only.admin)
			   	     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				     client.groupUpdateDescription(from, `${body.slice(9)}`)
				     client.sendMessage(from, 'Descripción alterada con exito' , text, {quoted: mek})
				     break
			case 'google':
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Hasil Pencarian : ${googleQuery}* tidak ditemukan`)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado da pesquisa : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Título* : ${results[i].title}\n\n*Descrição* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    client.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
		case 'bpfont':
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break 
			 
                case 'speed':
                case 'ping':
                
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    client.updatePresence(from, Presence.composing) 
				uptime = process.uptime()
                    client.sendMessage(from, `Speed: *${latensi.toFixed(4)} _Segundos_*\nDispositivo: *Xiaomi*\nRAM: *6/64*\nData: *Telkomsel*\nRede: *4G*\nStatus: *Anda sin datos*\nTipo do bot: *Termux Solamente*\n\n*El bot esta activo por*\n*${kyun(uptime)}*`, text, { quoted: mek})
                    break
				case 'delete':
				case 'del':
				case 'd':  
					if (!isPremium) return reply('Usted no es un miembro premium, entre en contacto con el propietario o digite *.Daftarvip* para adquirir el acesso Premium!' ,text, { quoted: mek })
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins)return reply(mess.only.admin)
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
           case 'playmp3':
                reply(mess.wait)
                play = body.slice(9)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=${ZeksApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `「 *TIMELINE PLAY MP3* 」\n*• Título:* ${anu.result.title}\n*• Link:* ${anu.result.source}\n*• Tamaño:* ${anu.result.size}\n\n*ESPERE NUEVAMENTE ENVIANDO POR FAVOR, NO SPAME EL CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break 
            case 'smule':
					if (args.length < 1) return reply('Cadê o url mano?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Título* : ${anu.title}\n\n Espere 1 minuto, talvez um pouco mais porque o download de vídeos esta executando`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aqui mano'})
					await limitAdd(sender) 	
					break  
				case 'ttp':
					if (args.length < 1) return reply('Cadê o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(4).trim()
					anu = await fetchJson(`https://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
                                        await limitAdd(sender)
					break
                  case 'desbloquear':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `orden recibida, desbloquear a ${body.slice(9)}@c.us`, text)
				    break
                case 'image':
					if (args.length < 1) return reply('O que você quer procurar, mano?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					reply(mess.wait)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, { caption: '*Google Image*\n\n*Resultado da pesquisa : '+goo+'*', quoted: mek })
					break
				case 'ban':
					if (!isOwner) return reply(mess.only.ownerB)
					client.banUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `Usted fue baneado ${body.slice(7)}@c.us`, text)
					break
				case 'playstore':
					kuji = body.slice(7)
					reply(mess.wait)
					anu = await getBuffer(`https://api.vhtear.com/playstore?query={kuji}&apikey=Aris komtol`, {method: 'get'})
					capty = `*➸ title :* ${anu.title}\n*➸ app_id :* ${anu.app_id}\n*➸ description :* ${anu.description}\n*➸ developer_id :* ${anu.developer_id}\n*➸ developer :* ${anu.developer}\n*➸ score :* ${anu.score}\n*➸ full_price :* ${anu.full_price}\n*➸ price :* ${anu.price}\n*➸ free :* ${anu.free}`
					client.sendMessage(from, anu, image, {quoted: mek, caption: capty})
					break
				case 'otagall2':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'pinterest':
                    tels = body.slice(11)
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.fdci.se/rep.php?gambar=${tels}`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(data));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*\n\*Resultado de la búsqueda* : *${tels}*`})
                    await limitAdd(sender)
					break
                case 'darkjokes':
				 data = fs.readFileSync('./src/darkjokes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*GELAP BOS :V*')
				break
				 case 'naruto':
				 data = fs.readFileSync('./image/naruto.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Narutoooooo!!!!*')
				break
                case 'alerta':
				 data = fs.readFileSync('./src/alerta.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*alerta :V*')
				break									
         case 'moddroid':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=${TobzApi}`)
			hepi = data.result[0] 
			teks = `*Nombre*: ${data.result[0].title}\n*editor*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*Tamanho*: ${hepi.size}\n*última versão*: ${hepi.latest_version}\n*gênero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
		case 'happymod':
			data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=${TobzApi}`)
			hupo = data.result[0] 
			teks = `*Nome*: ${data.result[0].title}\n*versão*: ${hupo.version}\n*Tamanho:* ${hupo.size}\n*root*: ${hupo.root}\n*compra*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break

				case 'nsfwboquete':

					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob}`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					client.sendMessage(from, nye, image, { caption: 'naruto!!', quoted: mek })
					await limitAdd(sender)
					break 
				case 'animecry':
					cry = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzApi}`, {method: 'get'})
                   if (!isGroup) return reply(mess.only.group)
					reply (mess.wait)
					exec(`wget ${anu.result} -O ${cry} && ffmpeg -i ${cry} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(cry)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
case 'onichann':
tujuh = fs.readFileSync('./assets/sound7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tropa':
tujuh = fs.readFileSync('./assets/tropa.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'pato':
tujuh = fs.readFileSync('./assets/pato.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ola':
tujuh = fs.readFileSync('./assets/ola.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bv':
tujuh = fs.readFileSync('./assets/bv.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'tchau':
tujuh = fs.readFileSync('./assets/tchau.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'bem':
tujuh = fs.readFileSync('./assets/bem.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'ecko':
tujuh = fs.readFileSync('./assets/ecko.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'a':
tujuh = fs.readFileSync('./assets/a.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'fdp':
tujuh = fs.readFileSync('./assets/fdp.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat1':
tujuh = fs.readFileSync('./assets/beat1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat2':
tujuh = fs.readFileSync('./assets/beatdois.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat3':
tujuh = fs.readFileSync('./assets/beatt.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat4':
tujuh = fs.readFileSync('./assets/beatq.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat5':
tujuh = fs.readFileSync('./assets/beatc.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat6':
tujuh = fs.readFileSync('./assets/beats.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat7':
tujuh = fs.readFileSync('./assets/beatsete.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat8':
tujuh = fs.readFileSync('./assets/beato.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat9':
tujuh = fs.readFileSync('./assets/beatn.m4a');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'meliodas':
tujuh = fs.readFileSync('./assets/edit.mp4');
client.sendMessage(from, tujuh, MessageType.video, {quoted: mek, mimetype: 'video/mp4', ptt:true})
break
case 'beat10':
tujuh = fs.readFileSync('./assets/beatd.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat11':
tujuh = fs.readFileSync('./assets/beaton.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat12':
tujuh = fs.readFileSync('./assets/beatdo.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat13':
tujuh = fs.readFileSync('./assets/beattreze.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat14':
tujuh = fs.readFileSync('./assets/beatquatorze.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat15':
tujuh = fs.readFileSync('./assets/beatquinze.m4a');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat16':
tujuh = fs.readFileSync('./assets/beatdeze.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat17':
tujuh = fs.readFileSync('./assets/beatdezesete.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat18':
tujuh = fs.readFileSync('./assets/beatdezoito.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat19':
tujuh = fs.readFileSync('./assets/beatdezenove.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat20':
tujuh = fs.readFileSync('./assets/beatvinte.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat21':
tujuh = fs.readFileSync('./assets/beatvinteum.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat22':
tujuh = fs.readFileSync('./assets/beatvintedois.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat23':
tujuh = fs.readFileSync('./assets/beatvintetres.m4a');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'beat24':
tujuh = fs.readFileSync('./assets/beatvintequatro.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap1':
tujuh = fs.readFileSync('./assets/trap1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap2':
tujuh = fs.readFileSync('./assets/trap2.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap3':
tujuh = fs.readFileSync('./assets/trap3.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap4':
tujuh = fs.readFileSync('./assets/trap4.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap5':
tujuh = fs.readFileSync('./assets/trap5.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap6':
tujuh = fs.readFileSync('./assets/trap6.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap7':
tujuh = fs.readFileSync('./assets/trap7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap8':
tujuh = fs.readFileSync('./assets/trap8.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap9':
tujuh = fs.readFileSync('./assets/trap9.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap10':
tujuh = fs.readFileSync('./assets/trap10.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap11':
tujuh = fs.readFileSync('./assets/trap11.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap12':
tujuh = fs.readFileSync('./assets/trap12.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap13':
tujuh = fs.readFileSync('./assets/trap13.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap14':
tujuh = fs.readFileSync('./assets/trap14.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap15':
tujuh = fs.readFileSync('./assets/trap15.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap16':
tujuh = fs.readFileSync('./assets/trap16.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap17':
tujuh = fs.readFileSync('./assets/trap17.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap18':
tujuh = fs.readFileSync('./assets/trap18.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap19':
tujuh = fs.readFileSync('./assets/trap19.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap20':
tujuh = fs.readFileSync('./assets/trap20.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap21':
tujuh = fs.readFileSync('./assets/trap21.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap22':
tujuh = fs.readFileSync('./assets/trap22.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap23':
tujuh = fs.readFileSync('./assets/trap23.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap24':
tujuh = fs.readFileSync('./assets/trap24.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'trap25':
tujuh = fs.readFileSync('./assets/trap25.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc1':
tujuh = fs.readFileSync('./assets/rock1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc2':
tujuh = fs.readFileSync('./assets/rock2.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc3':
tujuh = fs.readFileSync('./assets/rock3.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc4':
tujuh = fs.readFileSync('./assets/rock4.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc5':
tujuh = fs.readFileSync('./assets/rock5.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc6':
tujuh = fs.readFileSync('./assets/rock6.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc7':
tujuh = fs.readFileSync('./assets/rock7.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc8':
tujuh = fs.readFileSync('./assets/rock8.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc9': 
tujuh = fs.readFileSync('./assets/rock9.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc10':
tujuh = fs.readFileSync('./assets/rock10.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc11':
tujuh = fs.readFileSync('./assets/rock11.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc12':
tujuh = fs.readFileSync('./assets/rock12.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc13':
tujuh = fs.readFileSync('./assets/rock13.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc14':
tujuh = fs.readFileSync('./assets/rock14.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc15':
tujuh = fs.readFileSync('./assets/rock15.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc16':
tujuh = fs.readFileSync('./assets/rock16.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc17':
tujuh = fs.readFileSync('./assets/rock17.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc18':
tujuh = fs.readFileSync('./assets/rock18.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc19':
tujuh = fs.readFileSync('./assets/rock19.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc20':
tujuh = fs.readFileSync('./assets/rock20.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc21':
tujuh = fs.readFileSync('./assets/rock21.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc22':
tujuh = fs.readFileSync('./assets/rock22.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc23':
tujuh = fs.readFileSync('./assets/rock23.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc24':
tujuh = fs.readFileSync('./assets/rock24.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'roc25':
tujuh = fs.readFileSync('./assets/rock25.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rap1':
tujuh = fs.readFileSync('./assets/rap1.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rap2':
tujuh = fs.readFileSync('./assets/rap2.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rap3':
tujuh = fs.readFileSync('./assets/rap3.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rap4':
tujuh = fs.readFileSync('./assets/rap4.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'rap5':
tujuh = fs.readFileSync('./assets/rap5.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
case 'glub':
tujuh = fs.readFileSync('./assets/glub.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
		
				case 'hinata':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					client.sendMessage(from, nye, image, { caption: 'hinata!!', quoted: mek })
					await limitAdd(sender)
					break 
           case 'hobby':

					hobby = body.slice(1)
					const hob =['Desah Di Game','Ngocokin Doi','Stalking sosmed nya mantan','Kau kan gak punya hobby awokawok','Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
					const by = hob[Math.floor(Math.random() * hob.length)]
					client.sendMessage(from, 'Questão : *'+hobby+'*\n\nResponda : '+ by, text, { quoted: mek })
					await limitAdd(sender)
					break
           case 'gay1':

					gay = body.slice(13)
		   anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
		   hasil = `Veja os dados do Gay ${gay}\n\n\nPercentagem Gay : ${anu.persen}%\nAlerta!!! : gay, mas não cego`
		   reply(hasil)
		   await limitAdd(sender)
					break
                case 'nangis':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=${TobzKey}`, {method: 'get'})
					reply('PACIENTE NGAB')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzKey}`, {method: 'get'})
					reply('Mwahhh')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':

					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzKey}`, {method: 'get'})
					reply('Peyukkkk')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break	
                case 'truth':
				case 'sasuke':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					client.sendMessage(from, nye, image, { caption: 'sasuke!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':

					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					client.sendMessage(from, nye, image, { caption: 'sakura!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'addfoto':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply('Usted quien es, el dueño? ')
					client.sendMessage(from, addfoto(prefix), text, { quoted: mek })
					break
			    case 'otagall3':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
			    case 'kbbi':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('De acordo com Kbbi:\n\n'+anu.result)
					break
				case 'persengay':
					if (args.length < 1) return reply('O que você quer procurar um?')
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`, {method: 'get'})
					reply('De acordo com o percentual gay:\n\n'+anu.desc+anu.persen)
					break
			  case 'next':
               
                if (!isGroup) return reply(`SÓ PODE SER USADO EM GRUPOS`)
                await reply('Ache um companheiro >_<')
                await reply(`wa.me/${anug}`)
                await reply( `Par encontrado: 🐊\n*${prefix}next* — Encontre novos parceiros`)
                break
			case 'instaimg':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'instavid':
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    client.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
				    
				case 'instastory':
				if (args.length < 1) return reply('username??')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/igstory?username=${instor}`, {method: 'get'})
				insta = '=========================\n'
				for (let story of anu.result) {
				insta += `• *Envio:* ${story.uploaded}\n• *Termina:* ${story.expired}\n• *Tamaño: ${story.filesize}\n• *Tipo:* ${story.type}\n• Link: ${story.url}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
                                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('irme afk por una causa de?')                                  
                                        var nom = mek.participant
                                        const tag = {
                                                text: `@${nom.split("@s.whatsapp.net")[0]} * AFK ${tels} No molestar*`,
                                                contextInfo: { mentionedJid: [nom] }
                                        }
                                        client.sendMessage(from, tag, text, {quoted: mek})
                                        break 
				case 'indo10':
					if (!isPremium) return reply('Você não é um Membro Premium, entre em contato com o proprietário ou digite *.daftarvip* para comprar acesso Premium!' ,text, { quoted: mek })
					qute9 = await getBuffer(`https://i.ibb.co/z6w14Gq/32d64d819e21.png`)
					client.sendMessage(from, qute9, image, { quoted: mek, caption: 'Aqui está o Bro Baixe o seu próprio link\n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
					break
case 'iri':
const irimp3 = fs.readFileSync('./assets/iri.mp3');
client.sendMessage(from, irimp3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
				case 'bucin':
					anu = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`, {method: 'get'})
					reply('Não fique entediado:\n\n'+anu.desc)
					break
			    case 'nsfwblowjob':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Não faça ingredientes para o tio comum'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'testime':
					setTimeout( () => {
					client.sendMessage(from, 'O tempo acabou:v', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, 'Mais 5 segundos', text) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '10 segundos para ir', text) // ur cods
					}, 0) // 1000 = 1s,
					break
		        case 'gay':		
	            	if (args.length < 1) return reply('marque sus amigos!')
					rate = body.slice(1)
					const ti =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const kl = ti[Math.floor(Math.random() * ti.length)]
					client.sendMessage(from, 'Como usted es joto: *'+rate+'*\n\nSu porcentaje joto : '+ kl+'%', text, { quoted: mek })
					break
                  case 'timer':
				if (args[1]=="segundo") {var timer = args[0]+"000"
				} else if (args[1]=="minuto") {var timer = args[0]+"0000"
				} else if (args[1]=="hora") {var timer = args[0]+"00000"
				} else {return reply("*escoger:*\nsegundo\nminuto\nhora")}
				setTimeout( () => {
				reply("El tiempo acabó")
				}, timer)
				break
				case 'delete':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque un msj para eliminar *debes ser administrador!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Comando recibido, eliminar mensaje. :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.deleteMessage(from, mentioned)
					} else {
						mentions(`Orden recibida, eliminar msj : @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.deleteMessage(from, mentioned)
					}
					break
				case 'openanime':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isAnime) return reply(' modo anime yá está activo')
						anime.push(from)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Activado con exito el modo anime en este grupo ✔️')
					} else if (Number(args[0]) === 0) {
						anime.splice(from, 1)
						fs.writeFileSync('./src/anime.json', JSON.stringify(anime))
						reply('Modo anime desactivado con éxito en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar')
					}
					break
			    case 'nsfwneko':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'nsfwtrap':
				    try {
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni Anjim'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
				case 'animekiss':
                if (!isAnime) return reply(' *Deve ativar o modo Anime* ')
					anp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=${TobzApi}`, {method: 'get'})
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'setfoto':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('Cambio con exito el icono del grupo')
                    break			
                case 'level':
					if (!isLevelingOn) return reply(mess.levelnoton)
					if (!isGroup) return reply(mess.only.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
					sem = sender.replace('@s.whatsapp.net','')
					resul = `┏━━❉ *LEVEL* ❉━━\n┣⊱ Nombre: ${sem}\n┣⊱ Su XP :  ${userXp}\n┣⊱ Su Level : ${userLevel}\n┗━━━━━━━━━━━━`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
                    console.error(err)
                    await reply(`Error!\n${err}`)
                    })
                    break
                case 'leveling':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (args[0] === 'on') {
                    if (isLevelingOn) return reply('*El comando leveling ya esta activado*')
                    _leveling.push(groupId)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.levelon)
					} else if (args[0] === 'off') {
                    _leveling.splice(groupId, 1)
                    fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
                     reply(mess.leveloff)
					} else {
					reply(' Use ${prefix}leveling on para activar   ${prefix}leveling off para desactivar')
					}
					break
			    case 'tinyurl':
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
				case 'slide':
					if (args.length < 1) return reply('*Textnya mana gan?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					client.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'cpaper':
				cpaper = `${body.slice(8)}`
				buff = await getBuffer(`https://api.arugaz.my.id/api/photooxy/text-on-burn-paper?text=${cpaper}`, {method: 'get'})
				client.sendMessage(from, buff, image, {quoted: mek})
				break 
                                case 'antilink':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('digite 1 para activar ')
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('el anti-link está activo')
						antilink.push(from)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Grupo anti-link activado con exito en este grupo✔️')
						client.sendMessage(from,`Atencion a todos los miembros activos de este grupo,si usted envia un link de grupo, sera expulsado de este grupo`, text)
					} else if (Number(args[0]) === 0) {
						if (!isantilink) return reply('El modo de grupo anti-link fue deshabilitado ')
						var ini = anti.clientOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
						reply('Desactivo grupo anti-link con exito en este grupo ✔️')
					} else {
						reply('1 para activar, 0 para desactivar ')
					}
					break
				case 'cgame':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/gamelogo?text=${body.slice(7)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cparty':

					part = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cstyle':

					reply(mess.wait)
					buff = await getBuffer(`https://api.vhtear.com/stylelogo?text=${body.slice(8)}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, buff, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
				case 'cglass':

					glass = `${body.slice(8)}`
					reply(mess.wait)
					bufferu = await getBuffer(`https://api.vhtear.com/wetglass?text=${glass}&apikey=${VthearApi}`, {method: 'get'})
					client.sendMessage(from, bufferu, image, {caption: 'Aqui amigo (a)', quoted: mek})
					await limitAdd(sender) 
					break 
					case 'croman':               
                roman = `${body.slice(8)}`
                     if (args.length < 1) return reply('Cadê o texto, mano??')
                     if (args.length > 10) return reply('pelo menos 10 caracteres')
                     buff = await getBuffer(`https://api.vhtear.com/romancetext?text=${roman}&apikey=${VthearApi}`, {method: 'get'})
                     client.sendMessage(from, buff, image, {quoted: mek})
                  await limitAdd(sender) 
                  break 
				case 'setnombrebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`El nombre del bot fue alterado con éxito para : ${name}`)
					break
					case 'clove':
					  if (args.length < 1) return reply('Falta el texto prro??')
                     if (args.length > 10) return reply('por lo menos 10 carácteres')
					 love = `${body.slice(7)}`
					 buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=${VthearApi}`, {method: 'get'})
					 client.sendMessage(from, buff, image, {quoted: mek})
					 await limitAdd(sender)
					 break 
			    case 'lovemake':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
                	case 'tomp3':
                	client.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('Marque el video ps')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falló al convertir el video a mp3 ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					break
				case 'boquet':
				client.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./Fxc7/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = jsonData[Math.floor(Math.random() * (jsonData.length))];
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = await fetchJson(randKey.teks)
                 client.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

			    case 'shorturl':
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/shorturl?url=${body.slice(10)}`)
			        hasil = `${anu.result}`
			        reply(hasil)
			        break
			    case 'infonomor':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        hasil = `*número* \n${anu.nomor} *internacional* \n${anu.international}`
			        reply(hasil)
			        break
			    case 'igstalk':
					if (args.length < 1) return reply('Masukan username mu!!')
					ige = body.slice(9)
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${ige}&apikey=ANTIGRATISNIHANJENKKK`, {method: 'get'})
					buffer = await getBuffer(anu.result.picture)
					capt = `User Ditemukan!!\n\n*➸ Nama :* ${anu.result.full_name}\n*➸ Username :* ${anu.result.username}\n*➸ Followers :* ${anu.result.follower}\n*➸ Mengikuti :* ${anu.result.follow}\n*➸ Jumlah Post :* ${anu.result.post_count}\n*➸ Private :* ${anu.result.is_private}\n*➸ Bio :* ${anu.result.biography}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: capt})
					break
				//lgiproses
				case 'tesss':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(7)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/leavest?text=${teks}&apikey=xptnbot352`)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                                case 'mining':
                                        if (isLimit(sender)) return reply(ind.limitend(pushname))
                                        if (!isEventon) return reply(`maaf ${pushname} event mining tidak di aktifkan oleh owner`)
                                        if (isOwner) {
                                                const one = 999999999
                                                addLevelingXp(sender, one)
                                                addLevelingLevel(sender, 99)
                                                reply(`porque você é nosso proprietário da equipe bot de envio ${one}Xp para voce`)
                                        } else {
                                                const mining = Math.ceil(Math.random() * 10000)
                                                addLevelingXp(sender, mining)
                                                await reply(`*Parabéns* ${pushname} você pega *${mining}Xp*`)
                                        }
                                        await limitAdd(sender)
                                        break
			    case 'waifu':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
						buffer = await getBuffer(res.image)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ksksksks hmm'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'waifu2':
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/waifu`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.image)
					waifu = `*${anu.desc}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: waifu})
					break
				case 'text3d':
              	    if (args.length < 1) return reply('Onde está o texto, irmão??')
                    teks = `${body.slice(8)}`
                    if (teks.length > 10) return client.sendMessage(from, 'Teksnya kepanjangan, Maksimal 10 kalimat', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     	break
				case 'imoji':
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/emoji2png?emoji=`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'wibu':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.foto)
					wibu = ` ➸ *nome* ${anu.result.nama} ➸ *descrição* ${anu.result.deskripsi}`
					client.sendMessage(from, buffer, image, {quoted: mek, caption: wibu})
					break
                   case 'map':
                   data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`)
                   hasil = await getBuffer(data.gambar)
                   client.sendMessage(from, hasil, image, {quoted: mek, caption: `Resultados de *${body.slice(5)}*`})
                   await limitAdd(sender)
                   break
                   case 'covidcountry':
                   client.updatePresence(from, Presence.composing) 
                   data = await fetchJson(`https://arugaz.my.id/api/edu/corona?country=${body.slice(7)}`)
                   if (data.result) reply(data.result)
                   hasil = `País : ${data.result.country}\n\nAtivo : ${data.result.active}\ncasesPerOneMillion : ${data.result.casesPerOneMillion}\ncrítico : ${data.result.critical}\nMortes por milhão : ${data.result.deathsPerOneMillion}\nrecuperado : ${data.result.recovered}\nteste por milhão : ${data.result.testPerOneMillion}\ncasos de hj : ${data.result.todayCases}\nMortes de hj : ${data.result.todayDeath}\nCasos total : ${data.result.totalCases}\ntotalTest : ${data.result.totalTest}`
                   reply(hasil)
                   await limitAdd(sender)
                   break
					case 'usuarios':
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `\`\`\`╭────*「 *TOTAL DE USUÁRIOS ⚡HH BOT⚡* 」\n\`\`\``
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total de usuários : ${user.length}\n╰──────*「 *⚡HH BOT⚡* 」*────`
					 client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'desligar':
				if (!isOwner) return reply('Comando solo para mi dueño, quien es Ud ?')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						client.sendMessage(from, 'BOT DESLIGADO CON EXITO', text, { quoted: mek })
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buffer222 = fs.readFileSync(ran)
								client.sendMessage(from, buffer222, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								buffer333 = fs.readFileSync(ran)
								client.sendMessage(from, buffer333, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer444 = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer444, (err) => {
								if (err) return reply('Falha, ocorreu um erro, tente novamente mais tarde.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								buffer555 = fs.readFileSync(ran)
								client.sendMessage(from, buffer555, sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Mande una palabra de una foto si ustee desea desligar el bot!`)
					}
					break
			case 'closegp':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo cerrado por el administrador @${nomor.split("@s.whatsapp.net")[0]}\n *espere..*
`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
					
// recursos anime, random @✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎ domina vida

                case 'anjing':
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(ind.wait())
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender)
					break
				//jojo 
				case 'stickerhide':
				    ranp = getRandom('.gif')
					rano = getRandom('.webp')
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/screed?text=${args[0]}`,{method: 'get'})
				exec(`wget ${anu} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'emoji':
				anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/emoji2png?emoji=%F0%9F%98%82&type=aple`, {method: 'get'})
				jes = await getBuffer(anu)
				client.sendMessage(from, jes, image,{quoted : mek, caption : 'DONE'})
				break
                case 'resepmasakan':
                
                reply(mess.wait)
                   anu = await fetchJson(`https://api.vhtear.com/resepmasakan?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result.image)
                   resep = `*${anu.result.title}*\n${anu.result.desc}\n\n*INGREDIENTES² INDISPENSÁVEL*\n${anu.result.bahan}\n\n*COMO COZINHAR*\n${anu.result.cara}`
                   client.sendMessage(from, buff, image, {quoted: mek, caption: resep})
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Título:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   client.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'cerpen':

                   anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`, {method: 'get'})
                   cerpen = `• *Title:* ${anu.result.title}\n• *Pengarang:* ${anu.result.pengarang}\n• *Kategori:* ${anu.result.kategori}\n\n${anu.result.cerpen}`
                   client.sendMessage(from, cerpen, text, {quoted: mek})
                   break 
               case 'puisiimg':

                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   client.sendMessage(from, pus, image, {quoted: mek})
                   break 
				case 'akira':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					client.sendMessage(from, nye, image, { caption: 'akira chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					client.sendMessage(from, nye, image, { caption: 'itori chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					client.sendMessage(from, nye, image, { caption: 'kurumi chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					client.sendMessage(from, nye, image, { caption: 'miku chan!!', quoted: mek })
					await limitAdd(sender) 
					break 
                case 'opengp':
                case 'bukagc':
					client.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo abierto por el administrador @${sender.split("@")[0]}\nAhora *todos los participantes* pueden enviar mensajes`,
					contextInfo: { mentionedJid: [sender] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, false)
					client.sendMessa
				case 'setppbot':
				client.updatePresence(from, Presence.composing) 
				if (!isQuotedImage) return reply(`Grupo abierto`)
					if (!isOwner) return reply(mess.only.ownerB)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil😗')
					break
				case 'filme':
				if (args.length < 1) return reply('Que filme quiere encontrar?')
				reply(mess.wait)
				anu = await fetchJson(`https://api.vhtear.com/downloadfilm?judul=${body.slice(6)}&apikey=${VthearApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				film = `• Título: *${anu.result.judul}*\n• Resolução: *${anu.result.data.resolusi}*\n• Link Download: *${anu.result.data.urlDownload}*\n`
				client.sendMessage(from, film, text, {quoted: mek})
				await limitAdd(sender) 
					break					
				case 'randomcat':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=ANTIGRATISNIHANJENKKK`)
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'mlherolist':
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/mlherolist?apikey=ANTIGRATISNIHANJENKKK`)
					icon = await getBuffer(anu.icon)
					client.sendMessage(from, icon, image, {quoted: mek})
					break
			    case 'randomanime':
				    try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'ni randomanime!'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
			    case 'randomhentai':
				    try {
						if (!isNsfw) return reply('❌ *FALSE* ❌')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai`, {method: 'get'})
						buffer = await getBuffer(res.result)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hentai teros'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERROR* ❌')
					}
					break
                case 'irii':
			client.sendPtt(from, './lindy/iri2.mp3', id)
			break
                 case 'play':
                reply(mess.wait)
                play = body.slice(5)
                anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
               if (anu.error) return reply(anu.error)
                 infomp3 = `*MUSICA ENCONTRADA!!!*\nTítulo : ${anu.result.title}\nUrl : ${anu.result.source}\nTamaño : ${anu.result.size}\n\n*ESPERE UN POCO, NO SPAMEE EL CHAT*`
                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                await limitAdd(sender)
                break
				case 'setnombre':
                   if (!isGroup) return reply(mess.only.group)
			       if (!isGroupAdmins) return reply(mess.only.admin)
			   	   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   client.groupUpdateSubject(from, `${body.slice(9)}`)
                   client.sendMessage(from, 'Cambió el nombre del grupo con éxito', text, {quoted: mek})
                   break
				case 'galaxtext':
					if (args.length < 1) return reply('o que você quer tio')
					teks = body.slice(12)
					if (teks.length > 8) return reply('O texto é longo, com até 8 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/galaxytext?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
                case 'agua':
					if (args.length < 1) return reply(mess.blank)
					anaa = body.slice(5)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/ocean?text=${anaa}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'neon', quoted: mek})
					break
                case 'battle':
				    gh = body.slice(7)
                    p1 = gh.split("/")[0];
                    p2 = gh.split("/")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply('espere')
					anu = await fetchJson(`https://api-gdr.herokuapp.com/api/battlefield?text=${p1}&text2=${p2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'BattleField', quoted: mek})
					break
                case 'bug':
					gh = body.slice(7)
                    p1 = gh.split("/")[0];
                    p2 = gh.split("/")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply('espere')
					anu = await fetchJson(`https://restapi-exe.herokuapp.com/api/glitch?text=${p1}&text2=${p2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'bugado vey', quoted: mek})
					break
                case 'pubg':
					gh = body.slice(7)
                    p1 = gh.split("/")[0];
                    p2 = gh.split("/")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply('espere')
					anu = await fetchJson(`https://api-gdr.herokuapp.com/api/pubg?text=${p1}&text2=${p2}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'pubg', quoted: mek})
					break
               case 'narutologo':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(11)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/naruto?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Naruto', quoted: mek})
					break
               case 'coffee':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(11)
					reply('espere')
					anu = await fetchJson(`https://api-gdr.herokuapp.com/api/coffee?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Coffee', quoted: mek})
					break
                case 'neon':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(5)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/neon?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'neon', quoted: mek})
					break
                case 'hrptr':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(6)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/harry?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: 'Harry Potter', quoted: mek})
					break
                case 'cemiterio':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(9)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/cimiterio?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: '...I morreu....', quoted: mek})
					break
                case 'sombra':
					if (args.length < 1) return reply(mess.blank)
					p1 = body.slice(7)
					reply('espere')
					anu = await fetchJson(`https://mistic-api-br.herokuapp.com/api/shadow?text=${p1}`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {caption: ' ', quoted: mek})
					break
				case 'primbonjodoh':
					var gh = body.slice(14)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${gbl1}&pasangan=${gbl2}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
				case 'ramaljadian':
					var gh = body.slice(10)
					var gbl1 = gh.split("|")[0];
					var gbl2 = gh.split("|")[1];
					var gbl3 = gh.split("|")[2];
					anu = await fetchJson(`https://api.vhtear.com/harijadian?tgl=${gbl1}&bln=${gbl2}&thn=${gbl3}&apikey=ANTIGRATISNIHANJENKKK`)
					reply(anu.result.hasil)
					break
                      case 'teste': 
                                        var imgbb = require('imgbb-uploader')
                                         if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                                         ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
                                         reply(mess.wait)
                                         owgi = await  client.downloadAndSaveMediaMessage(ger)
                                         anu = await imgbb("727e7e43f6cda1dfb85d888522fd4ce1", owgi)
                                        teks = `${anu.display_url}`
                                        ranp = getRandom('.png')
                                        rano = getRandom('.webp')
                                        anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
                                         exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                         if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                 client.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a foto!')
                                          }
                                             break
                case 'tahta':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/hartatahta?text=${teks}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Harta Tahta '+teks})
					break
				case 'testing':
					var gh = body.slice(5)
					var gbl3 = gh.split("|")[0];
					var gbl4 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/watercolour?text1=${gbl3}&text2=${gbl4}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'snowrite':
					var gh = body.slice(10)
					var gbl7 = gh.split("|")[0];
					var gbl8 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/snowwrite?text1=${gbl7}&text2=${gbl8}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'marvelogo':
					var gh = body.slice(9)
					var gbl5 = gh.split("|")[0];
					var gbl6 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto, hum')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/marvellogo?text1=${gbl5}&text2=${gbl6}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug&apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break
				case 'lovemake':
					if (args.length < 1) return reply('Cadê o texto, hum')
					love = body.slice(10)
					if (love.length > 12) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/lovemessagetext?text=${love}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+love})
					break
				case 'thunder':
					if (args.length < 1) return reply('Cadê o texto, hum')
					thun = body.slice(9)
					if (thun.length > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/thundertext?text=${thun}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: ' '+thun})
					break
                case 'stiltext':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      buff = await getBuffer(`https://api.vhtear.com/silktext?text=${gl1}&text2=${gl2}&apikey=ANTIGRATISNIHANJENKKK`)
                      reply(mess.wait)
                      client.sendMessage(from, buff, image, {quoted: mek, caption: 'thund ni '+gh})
                      break
                case 'teste':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					buffer = await getBuffer(`https://zeksapi.herokuapp.com/api/watercolour?text1=${coli1}&text2=${coli2}&apikey=xptnbot352`)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'teste2':
					var gh = body.slice(9)
					coli1 = gh.split("|")[0];
					coli2 = gh.split("|")[1];
					if (args.length < 1) return reply('Cadê o texto?')
					reply(mess.wait)
					party = await getBuffer(`https://api.vhtear.com/partytext?text=${coli1}&text2=${coli2}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, party, image, {quoted: mek})
					break
                case 'ninjalogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(11)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=ninjalogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
                case 'glitch':
					var gh = body.slice(8)
					var tels3 = gh.split("|")[0];
					var tels4 = gh.split("|")[1];
					if (args.length < 1) return reply(mess.blank)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=glitch&text1=${tels3}&text2=${tels4}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'party':
					if (args.length < 1) return reply(mess.blank)
					part = body.slice(7)
					if (part.length > 20) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/partytext?text=${part}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {caption: 'Aqui mana', quoted: mek})
					break
				case 'rtext':
					if (args.length < 1) return reply(mess.blank)
					tels5 = body.slice(7)
					if (tels5.length > 10) return reply('O texto é longo, com até 10 caracteres')
					reply(mess.wait)
					buffer = await getBuffer(`https://api.vhtear.com/romancetext?text=${tels5}&apikey=ANTIGRATISNIHANJENKKK`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: tels5})
					break
				case 'water':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.length > 15) return reply('O texto é muito longo, até 20 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tfire?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
					break
				case 'firetext':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(7)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=xptnbot352`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textdark':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=metal_dark_gold&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textblue':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=blue_metal&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'textsky':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`https://hujanapi.herokuapp.com/api/sky_online?text=${tels}&apiKey=freetrial`, {method: 'get'})
					buff = await getBuffer(anu.result.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'texteng':
					if (args.length < 1) return reply(mess.blank)
					tels = body.slice(9)
					if (tels.ength > 10) return reply('O texto é longo, até 9 caracteres')
					reply(mess.wait)
					anu = await fetchJson(`http://melodicxt.herokuapp.com/api/txtcustom?theme=sand_engraved&text=${tels}&apiKey=administrator`, {method: 'get'})
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
                case 'wolflogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=wolflogo1&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
					case 'spamcall':
          if (!isPremium) return reply(mess.only.premi)
          reply('Espere..')
                                       if (args[0].startsWith('08')) return reply('Use o prefixo número 8/n ex : *8796662*')
                                       if (args[0].startsWith('82255123081')) return reply('Falha ao ligar para o número do bot')
                                       if (args[0].startsWith('82387804410')) return reply('Falha ao ligar para o número do proprietário')
                                       var data = body.slice(10)
                                       await fetchJson(`https://core.ktbs.io/v2/user/registration/otp/62`+data, {method: 'get'})
                                       await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=`+data, {method: 'get'})
                                       await fetchJson(`https://api.danacita.co.id/users/send_otp/?mobile_phone=62`+data, {method: 'get'})
                                       await fetchJson(`https://account-api-v1.klikindomaret.com/api/PreRegistration/SendOTPSMS?NoHP=0`+data, {method: 'get'})
                                       await fetchJson(`https://api-zeks.harispoppy.com/api/spamcall?no=`+data+`&apikey=apivinz`, {method: 'get'})
                                       break
                case 'lionlogo':
                      if (args.length < 1) return reply('Cadê o texto?')
                      gh = body.slice(9)
                      gl1 = gh.split("|")[0];
                      gl2 = gh.split("|")[1];
                      reply(mess.wait)
                      anu = await fetchJson(`https://tobz-api.herokuapp.com/api/textpro?theme=lionlogo&text1=${gl1}&text2=${gl2}`, {method: 'get'})
                      buff = await getBuffer(anu.result)
                      client.sendMessage(from, buff, image, {quoted: mek})
                      break
			    case 'fakereplay':
                   client.reply(from, 'ange mas', 'mending lari', "0816-5466368")
                   break
				case 'infogc':
				client.updatePresence(from, Presence.composing)
				if (!isGroup) return reply(mess.only.group)
					try {
					ppimg = await client.getProfilePicture(from)
				} catch {
					ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
				}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nome do grupo :* ${groupName}\n*Descrição :* ${groupDesc}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de membros :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					client.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			    case 'owner':
                    client.sendMessage(from, {displayname: "Hatori", vcard: vcard}, MessageType.contact, { quoted: mek})
                    client.sendMessage(from, 'puede donar ahi o mandar un msj pv ',MessageType.text, { quoted: mek} )
                    break
                case 'fitnah':	
				case 'fake':          
                    if (!isGroup) return reply(mess.only.group)
                    arg = body.substring(body.indexOf(' ') + 1)
				    isi = arg.split(' |')[0] 
			        pesan = arg.split('|')[1] 
				    pesan2 = arg.split('|')[2] 
                    costum(pesan, isi, pesan2)
                    break
				case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*Nombre del bot* : ${me.name}\n*Número del bot* : @${me.jid.split('@')[0]}\n*Prefijo* : ${prefix}\n*Contatos bloqueados* : ${blocked.length}\n*El bot está activo en* : ${kyun(uptime)}\n\n*Digite .dueño para ver la info del dueño*`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
                case 'blowjob':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
				case 'bloqueados':
					teks = 'Esta és la lista de números bloqueados :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
		//CODIGO PARA LEER DE FOTO/ CAMBIE DE ind A ES
				case 'leens':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Solo una foto tío')
					}
					break
				case 'sticker':
				case 'stiker':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Falló al momento de convertir ${tipe} para sticker`)
							})
							.on('end', function () {
								console.log('Finish')
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Armaria vey deu erro aqui mn, tenta mais tarde ae.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Envie fotos con el texto **s* o remarque una foto que ya fue enviada`)
					}
					break
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'pff, falto el codido del lenguaje \n Ejemplo: *tts es chupala maick 🤠 ', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, 'falta el texto', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 100
					? reply('La mayor parte del texto es mierda')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('falha:(')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
				case 'shadow': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					shad = body.slice(8)
					reply(mess.wait)
					ssha = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/photooxy/shadowtext?text=${shad}`)
					client.sendMessage(from, ssha, image, {caption: 'Nihkkkak', quoted: mek})
					break
				case 'minion':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					minio = body.slice(8)
					reply(mess.wait)
					minn = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/miniontext?text=${minio}`)
					client.sendMessage(from, minn, image, {caption: 'Nihhjmmak', quoted: mek})
					break
				case 'neon':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					nneoo = body.slice(6)
					reply(mess.wait)
					nooe = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neontext?text=${nneoo}`)
					client.sendMessage(from, nooe, image, {caption: 'Nihjjkkak', quoted: mek})
					break
				case 'neongreen': 
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					grre = body.slice(11)
					reply(mess.wait)
					gree = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/greenneontext?text=${grre}`)
					client.sendMessage(from, gree, image, {caption: 'Njkkkak', quoted: mek})
					break
				case 'neon2':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					duadua = body.slice(7)
					reply(mess.wait)
					duaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/neonwithgalaxytext?text=${duadua}`)
					client.sendMessage(from, duaa, image, {caption: 'kkkkkk', quoted: mek})
					break
				case '3d':
				if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply(mess.blank)
					dimen = body.slice(4)
					reply(mess.wait)
					tigaa = await getBuffer(`https://api-anoncybfakeplayer.herokuapp.com/textpro/3dgradientstext?text=${dimen}`)
					client.sendMessage(from, tigaa, image, {caption: 'kkksk', quoted: mek})
					break
				case 'wallpaperanime':
				    try {
			    	if (!isOwner) return reply(mess.only.ownerB)
						if (!isNsfw) return reply('❌ *FALSO* ❌')
						res = await fetchJson(`https://wallpaperaccess.com/full/395986.jpg','https://wallpaperaccess.com/full/21628.jpg','https://wallpaperaccess.com/full/21622.jpg','https://wallpaperaccess.com/full/21612.jpg','https://wallpaperaccess.com/full/21611.png','https://wallpaperaccess.com/full/21597.jpg','https://cdn.nekos.life/wallpaper/QwGLg4oFkfY.png','https://wallpaperaccess.com/full/21591.jpg','https://cdn.nekos.life/wallpaper/bUzSjcYxZxQ.jpg','https://cdn.nekos.life/wallpaper/j49zxzaUcjQ.jpg','https://cdn.nekos.life/wallpaper/YLTH5KuvGX8.png','https://cdn.nekos.life/wallpaper/Xi6Edg133m8.jpg','https://cdn.nekos.life/wallpaper/qvahUaFIgUY.png','https://cdn.nekos.life/wallpaper/leC8q3u8BSk.jpg','https://cdn.nekos.life/wallpaper/tSUw8s04Zy0.jpg','https://cdn.nekos.life/wallpaper/sqsj3sS6EJE.png','https://cdn.nekos.life/wallpaper/HmjdX_s4PU4.png','https://cdn.nekos.life/wallpaper/Oe2lKgLqEXY.jpg','https://cdn.nekos.life/wallpaper/GTwbUYI-xTc.jpg','https://cdn.nekos.life/wallpaper/nn_nA8wTeP0.png','https://cdn.nekos.life/wallpaper/Q63o6v-UUa8.png','https://cdn.nekos.life/wallpaper/ZXLFm05K16Q.jpg','https://cdn.nekos.life/wallpaper/cwl_1tuUPuQ.png','https://cdn.nekos.life/wallpaper/wWhtfdbfAgM.jpg','https://cdn.nekos.life/wallpaper/3pj0Xy84cPg.jpg','https://cdn.nekos.life/wallpaper/sBoo8_j3fkI.jpg','https://cdn.nekos.life/wallpaper/gCUl_TVizsY.png','https://cdn.nekos.life/wallpaper/LmTi1k9REW8.jpg','https://cdn.nekos.life/wallpaper/sbq_4WW2PUM.jpg','https://cdn.nekos.life/wallpaper/QOSUXEbzDQA.png','https://cdn.nekos.life/wallpaper/khaqGIHsiqk.jpg','https://cdn.nekos.life/wallpaper/iFtEXugqQgA.png','https://cdn.nekos.life/wallpaper/deFKIDdRe1I.jpg','https://cdn.nekos.life/wallpaper/OHZVtvDm0gk.jpg','https://cdn.nekos.life/wallpaper/YZYa00Hp2mk.jpg','https://cdn.nekos.life/wallpaper/R8nPIKQKo9g.png','https://cdn.nekos.life/wallpaper/_brn3qpRBEE.jpg','https://cdn.nekos.life/wallpaper/ADTEQdaHhFI.png','https://cdn.nekos.life/wallpaper/MGvWl6om-Fw.jpg','https://cdn.nekos.life/wallpaper/YGmpjZW3AoQ.jpg','https://cdn.nekos.life/wallpaper/hNCgoY-mQPI.jpg','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/iQ2FSo5nCF8.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/CmEmn79xnZU.jpg','https://cdn.nekos.life/wallpaper/MAL18nB-yBI.jpg','https://cdn.nekos.life/wallpaper/FUuBi2xODuI.jpg','https://cdn.nekos.life/wallpaper/ez-vNNuk6Ck.jpg','https://cdn.nekos.life/wallpaper/K4-z0Bc0Vpc.jpg','https://cdn.nekos.life/wallpaper/Y4JMbswrNg8.jpg','https://cdn.nekos.life/wallpaper/ffbPXIxt4-0.png','https://cdn.nekos.life/wallpaper/x63h_W8KFL8.jpg','https://cdn.nekos.life/wallpaper/lktzjDRhWyg.jpg','https://cdn.nekos.life/wallpaper/j7oQtvRZBOI.jpg','https://cdn.nekos.life/wallpaper/MQQEAD7TUpQ.png','https://cdn.nekos.life/wallpaper/lEG1-Eeva6Y.png','https://cdn.nekos.life/wallpaper/Loh5wf0O5Aw.png','https://cdn.nekos.life/wallpaper/yO6ioREenLA.png','https://cdn.nekos.life/wallpaper/4vKWTVgMNDc.jpg','https://cdn.nekos.life/wallpaper/Yk22OErU8eg.png','https://cdn.nekos.life/wallpaper/Y5uf1hsnufE.png','https://cdn.nekos.life/wallpaper/xAmBpMUd2Zw.jpg','https://cdn.nekos.life/wallpaper/f_RWFoWciRE.jpg','https://cdn.nekos.life/wallpaper/Y9qjP2Y__PA.jpg','https://cdn.nekos.life/wallpaper/eqEzgohpPwc.jpg','https://cdn.nekos.life/wallpaper/s1MBos_ZGWo.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/32EAswpy3M8.png','https://cdn.nekos.life/wallpaper/Z6eJZf5xhcE.png','https://cdn.nekos.life/wallpaper/xdiSF731IFY.jpg','https://cdn.nekos.life/wallpaper/Y9r9trNYadY.png','https://cdn.nekos.life/wallpaper/8bH8CXn-sOg.jpg','https://cdn.nekos.life/wallpaper/a02DmIFzRBE.png','https://cdn.nekos.life/wallpaper/MnrbXcPa7Oo.png','https://cdn.nekos.life/wallpaper/s1Tc9xnugDk.jpg','https://cdn.nekos.life/wallpaper/zRqEx2gnfmg.jpg','https://cdn.nekos.life/wallpaper/PtW0or_Pa9c.png','https://cdn.nekos.life/wallpaper/0ECCRW9soHM.jpg','https://cdn.nekos.life/wallpaper/kAw8QHl_wbM.jpg','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/WVEdi9Ng8UE.png','https://cdn.nekos.life/wallpaper/IRu29rNgcYU.png','https://cdn.nekos.life/wallpaper/LgIJ_1AL3rM.jpg','https://cdn.nekos.life/wallpaper/DVD5_fLJEZA.jpg','https://cdn.nekos.life/wallpaper/siqOQ7k8qqk.jpg','https://cdn.nekos.life/wallpaper/CXNX_15eGEQ.png','https://cdn.nekos.life/wallpaper/s62tGjOTHnk.jpg','https://cdn.nekos.life/wallpaper/tmQ5ce6EfJE.png','https://cdn.nekos.life/wallpaper/Zju7qlBMcQ4.jpg','https://cdn.nekos.life/wallpaper/CPOc_bMAh2Q.png','https://cdn.nekos.life/wallpaper/Ew57S1KtqsY.jpg','https://cdn.nekos.life/wallpaper/hVpFbYJmZZc.jpg','https://cdn.nekos.life/wallpaper/sb9_J28pftY.jpg','https://cdn.nekos.life/wallpaper/JDoIi_IOB04.jpg','https://cdn.nekos.life/wallpaper/rG76AaUZXzk.jpg','https://cdn.nekos.life/wallpaper/9ru2luBo360.png','https://cdn.nekos.life/wallpaper/ghCgiWFxGwY.png','https://cdn.nekos.life/wallpaper/OSR-i-Rh7ZY.png','https://cdn.nekos.life/wallpaper/65VgtPyweCc.jpg','https://cdn.nekos.life/wallpaper/3vn-0FkNSbM.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/3VjNKqEPp58.jpg','https://cdn.nekos.life/wallpaper/NoG4lKnk6Sc.jpg','https://cdn.nekos.life/wallpaper/xiTxgRMA_IA.jpg','https://cdn.nekos.life/wallpaper/yq1ZswdOGpg.png','https://cdn.nekos.life/wallpaper/4SUxw4M3UMA.png','https://cdn.nekos.life/wallpaper/cUPnQOHNLg0.jpg','https://cdn.nekos.life/wallpaper/zczjuLWRisA.jpg','https://cdn.nekos.life/wallpaper/TcxvU_diaC0.png','https://cdn.nekos.life/wallpaper/7qqWhEF_uoY.jpg','https://cdn.nekos.life/wallpaper/J4t_7DvoUZw.jpg','https://cdn.nekos.life/wallpaper/xQ1Pg5D6J4U.jpg','https://cdn.nekos.life/wallpaper/aIMK5Ir4xho.jpg','https://cdn.nekos.life/wallpaper/6gneEXrNAWU.jpg','https://cdn.nekos.life/wallpaper/PSvNdoISWF8.jpg','https://cdn.nekos.life/wallpaper/SjgF2-iOmV8.jpg','https://cdn.nekos.life/wallpaper/vU54ikOVY98.jpg','https://cdn.nekos.life/wallpaper/QjnfRwkRU-Q.jpg','https://cdn.nekos.life/wallpaper/uSKqzz6ZdXc.png','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/N1l8SCMxamE.jpg','https://cdn.nekos.life/wallpaper/n2cBaTo-J50.png','https://cdn.nekos.life/wallpaper/ZXcaFmpOlLk.jpg','https://cdn.nekos.life/wallpaper/7bwxy3elI7o.png','https://cdn.nekos.life/wallpaper/7VW4HwF6LcM.jpg','https://cdn.nekos.life/wallpaper/YtrPAWul1Ug.png','https://cdn.nekos.life/wallpaper/1p4_Mmq95Ro.jpg','https://cdn.nekos.life/wallpaper/EY5qz5iebJw.png','https://cdn.nekos.life/wallpaper/aVDS6iEAIfw.jpg','https://cdn.nekos.life/wallpaper/veg_xpHQfjE.jpg','https://cdn.nekos.life/wallpaper/meaSEfeq9QM.png','https://cdn.nekos.life/wallpaper/Xa_GtsKsy-s.png','https://cdn.nekos.life/wallpaper/6Bx8R6D75eM.png','https://cdn.nekos.life/wallpaper/zXOGXH_b8VY.png','https://cdn.nekos.life/wallpaper/VQcviMxoQ00.png','https://cdn.nekos.life/wallpaper/CJnRl-PKWe8.png','https://cdn.nekos.life/wallpaper/zEWYfFL_Ero.png','https://cdn.nekos.life/wallpaper/_C9Uc5MPaz4.png','https://cdn.nekos.life/wallpaper/zskxNqNXyG0.jpg','https://cdn.nekos.life/wallpaper/g7w14PjzzcQ.jpg','https://cdn.nekos.life/wallpaper/KavYXR_GRB4.jpg','https://cdn.nekos.life/wallpaper/Z_r9WItzJBc.jpg','https://cdn.nekos.life/wallpaper/Qps-0JD6834.jpg','https://cdn.nekos.life/wallpaper/Ri3CiJIJ6M8.png','https://cdn.nekos.life/wallpaper/ArGYIpJwehY.jpg','https://cdn.nekos.life/wallpaper/uqYKeYM5h8w.jpg','https://cdn.nekos.life/wallpaper/h9cahfuKsRg.jpg','https://cdn.nekos.life/wallpaper/iNPWKO8d2a4.jpg','https://cdn.nekos.life/wallpaper/j2KoFVhsNig.jpg','https://cdn.nekos.life/wallpaper/z5Nc-aS6QJ4.jpg','https://cdn.nekos.life/wallpaper/VUFoK8l1qs0.png','https://cdn.nekos.life/wallpaper/rQ8eYh5mXN8.png','https://cdn.nekos.life/wallpaper/D3NxNISDavQ.png','https://cdn.nekos.life/wallpaper/Z_CiozIenrU.jpg','https://cdn.nekos.life/wallpaper/np8rpfZflWE.jpg','https://cdn.nekos.life/wallpaper/ED-fgS09gik.jpg','https://cdn.nekos.life/wallpaper/AB0Cwfs1X2w.jpg','https://cdn.nekos.life/wallpaper/DZBcYfHouiI.jpg','https://cdn.nekos.life/wallpaper/lC7pB-GRAcQ.png','https://cdn.nekos.life/wallpaper/zrI-sBSt2zE.png','https://cdn.nekos.life/wallpaper/_RJhylwaCLk.jpg','https://cdn.nekos.life/wallpaper/6km5m_GGIuw.png','https://cdn.nekos.life/wallpaper/3db40hylKs8.png','https://cdn.nekos.life/wallpaper/oggceF06ONQ.jpg','https://cdn.nekos.life/wallpaper/ELdH2W5pQGo.jpg','https://cdn.nekos.life/wallpaper/Zun_n5pTMRE.png','https://cdn.nekos.life/wallpaper/VqhFKG5U15c.png','https://cdn.nekos.life/wallpaper/NsMoiW8JZ60.jpg','https://cdn.nekos.life/wallpaper/XE4iXbw__Us.png','https://cdn.nekos.life/wallpaper/a9yXhS2zbhU.jpg','https://cdn.nekos.life/wallpaper/jjnd31_3Ic8.jpg','https://cdn.nekos.life/wallpaper/Nxanxa-xO3s.png','https://cdn.nekos.life/wallpaper/dBHlPcbuDc4.jpg','https://cdn.nekos.life/wallpaper/6wUZIavGVQU.jpg','https://cdn.nekos.life/wallpaper/_-Z-0fGflRc.jpg','https://cdn.nekos.life/wallpaper/H9OUpIrF4gU.jpg','https://cdn.nekos.life/wallpaper/xlRdH3fBMz4.jpg','https://cdn.nekos.life/wallpaper/7IzUIeaae9o.jpg','https://cdn.nekos.life/wallpaper/FZCVL6PyWq0.jpg','https://cdn.nekos.life/wallpaper/5dG-HH6d0yw.png','https://cdn.nekos.life/wallpaper/ddxyA37HiwE.png','https://cdn.nekos.life/wallpaper/I0oj_jdCD4k.jpg','https://cdn.nekos.life/wallpaper/ABchTV97_Ts.png','https://cdn.nekos.life/wallpaper/58C37kkq39Y.png','https://cdn.nekos.life/wallpaper/HMS5mK7WSGA.jpg','https://cdn.nekos.life/wallpaper/1O3Yul9ojS8.jpg','https://cdn.nekos.life/wallpaper/hdZI1XsYWYY.jpg','https://cdn.nekos.life/wallpaper/h8pAJJnBXZo.png','https://cdn.nekos.life/wallpaper/apO9K9JIUp8.jpg','https://cdn.nekos.life/wallpaper/p8f8IY_2mwg.jpg','https://cdn.nekos.life/wallpaper/HY1WIB2r_cE.jpg','https://cdn.nekos.life/wallpaper/u02Y0-AJPL0.jpg','https://cdn.nekos.life/wallpaper/jzN74LcnwE8.png','https://cdn.nekos.life/wallpaper/IeAXo5nJhjw.jpg','https://cdn.nekos.life/wallpaper/7lgPyU5fuLY.jpg','https://cdn.nekos.life/wallpaper/f8SkRWzXVxk.png','https://cdn.nekos.life/wallpaper/ZmDTpGGeMR8.jpg','https://cdn.nekos.life/wallpaper/AMrcxZOnVBE.jpg','https://cdn.nekos.life/wallpaper/ZhP-f8Icmjs.jpg','https://cdn.nekos.life/wallpaper/7FyUHX3fE2o.jpg','https://cdn.nekos.life/wallpaper/CZoSLK-5ng8.png','https://cdn.nekos.life/wallpaper/pSNDyxP8l3c.png','https://cdn.nekos.life/wallpaper/AhYGHF6Fpck.jpg','https://cdn.nekos.life/wallpaper/ic6xRRptRes.jpg','https://cdn.nekos.life/wallpaper/89MQq6KaggI.png','https://cdn.nekos.life/wallpaper/y1DlFeHHTEE.png']`, {method: 'get'})
						bufferttt = await getBuffer(res.result)
						client.sendMessage(from, bufferttt, image, {quoted: mek, caption: 'ksksks'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('❌ *ERRO* ❌')
					}
					break
					case 'dado':    
					if (!isPremium) return reply('Usted no es un miembro Premium, entre en contacto con Hatori o digite *.Daftarvip* para adquirir el acesso Premium!' ,text, { quoted: mek })
					
					kapankah = body.slice(1)
					const elu =['1','2','3','4','5','6']
					const ule = elu[Math.floor(Math.random() * elu.length)]
					client.sendMessage(from, ule, text, { quoted: mek })
					break
					case 'addvip':  
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Usted no és un Miembro Premium, entre en contato con Hatori o digite * # Daftarvip * para adquirir o acesso Premium!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('La meta objetivo que desea llegar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Expirado*: *30 Days*\n│+ *Status*: *ACTIVO*\n│ Thx por actualizar para premium🥰\n*╰──────「 *posición* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Expirado*: *30 Days*\n│+ *Status*: *ATIVO*\n│ *Thx por actualizar para premium🥰\n*╰──────「 *posición* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'daftarvip': 
					client.sendMessage(from, daftarvip(prefix) , text, { quoted: mek })
					break
					case 'nekopoi':   
					
					client.sendMessage(from, nekopoi(prefix) , text, { quoted: mek })
					break
				case 'neko':
					gatauda = body.slice(6)
					reply(mess.wait)
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nekonime?apikey=BotWeA`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
					break	
					case 'cekvip': 
					if (!isPremium) return reply('Usted no es un miembro Premium, entre en contacto con el propietario o digite *.Daftarvip* para adquirir el acesso Premium!' ,text, { quoted: mek })
					me = client.user
					uptime = process.uptime()
					client.sendMessage(from,  `*──────────────────*\n*Nombre del bot:* HH BOT\n*─────────────────*\n『 *𝐕𝐈𝐏 𝐔𝐒𝐄𝐑*』\n*──────────────────*\n*•Número:* *${sender.split("@s.whatsapp.net")[0]}*\n*•Estado:* *ACTIVO*\n*──────────────────*\n*Estado del Bot:* *${kyun(uptime)}*\n\n*USTED ES UN MIEMBRO PREMIUM* 🐊🚩\n*──────────────────*` , text, { quoted: mek, })
					break
					case 'dellvip':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isPremium) return reply('Usted no es un miembro Premium, entre en contacto con el propietario o digite *.Daftarvip* para adquirir el acesso Premium!!' ,text, { quoted: mek })
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '╭────「 *PREMIUM👑* 」──*\n│+ *Número* : \n│+ *Estado*: *DESACTIVADO*\n│ Te veo para el próximo pedido🙂\n*╰──────「 *posição* 」────'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.sendMessage(from, mentioned)
					} else {
						mentions(`╭────「 *PREMIUM👑* 」──*\n│+ *Número* : @${mentioned[0].split('@')[0]}\n│+ *Status*: *DEATIVO*\n│ Te vejo para o próximo pedido🙂\n*╰──────「 *posición* 」────`, mentioned, true)
					client.sendMessage(from, mentioned)
				    }
					break
					case 'ichiadmin':
					tod = await getBuffer(`https://i.ibb.co/XDwBVDJ/1f2652c622fa.jpg`)
					client.sendMessage(from, tod, image, { quoted: mek, caption: '*╭────*「 *ADMINBOT ✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎ ✨* 」\n*│+ wa.me/5547992091566*╰──────*「 *✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎* 」*────*\n\n*_SE QUER SER ADMIN DO BOT ✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎_*\n*_Tipo /iklan_*' })
					break
				case 'iklan':
					client.sendMessage(from, iklan(prefix) , text, { quoted: mek })
					break
					case 'premiumcek':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					sa = await getBuffer(`https://i.ibb.co/PcQ6tsB/79ac87b9358c.jpg`)
					client.sendMessage(from, sa, image, { quoted: mek, caption: '*╭────*「 *PREMIUM USER👑* 」\n*│+ wa.me/554792091566/*╰──────*「 * ✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎* 」*────*\n\n*_SE QUER SER UM USUÁRIO PREMIUM DO ✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎ BOT_*\n*_Ketik #daftarvip*' })
					break
					case 'cekmod': 
 
					if (!isOwner) return reply(mess.only.ownerB)
                 if (!ismod) return reply('Te has registrado como usuario del MODBOT')
                reply('Te has registrado como usuario del MODBOT')
                break
                    case 'modbotlist':
					teks = 'Esta és la lista de usuários premium :\n'
					for (let p of mod) {
						teks += `~> @${p.split('@')[0]}\n`
					}
					teks += `Total : ${mod.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": mod}})
					break
					case 'addpremium': 
					client.updatePresence(from, Presence.composing) 
 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					premium = args[0]
					reply(`Comando acepto añadir usuário premium : ${premium}`)
					break
                 case 'calculadora':
				     if (args.length < 1) return reply(`[❗] Enviar pedidos *${prefix}calculadora [ Números ]*\nExemplo : ${prefix}calculadora 12*12\n*NOTA* :\n- Para multiplicación usar *\n- Para sumar usar +\n- Para restar usar -\n- Para dividir usar /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    client.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'porno':
				    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0UmT8RigE3Hbr80gmigjb2AdnPJklcQ3A&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/11/novinha-petuda-fotos-4.jpg`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWoYHFA_SDgUip6MtvimWRdub_lshAn5Edg&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwvLmbqW9LeOCpXiGxgu3By4eQEmJM2Xp26Q&usqp=CAU`)
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnhmpQD1C1Dp7I2_kpi13gAsuoudOPPraog&usqp=CAU`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/prima-novinha-pelada-6.jpg`)
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-5.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-6.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-7.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-8.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					buffer = await getBuffer(`https://fotosdemulheresnuas.net/wp-content/uploads/2018/12/Mia-Khalifa-fotos-16.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'heheheheheh'})
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'k'})
					break
				case 'belle2':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.pinimg.com/originals/24/5f/91/245f91208f9030724dbc8d1bede2e9ff.gif`)
					client.sendMessage(from, buffer, sticker, {quoted: mek, caption: 'slc'})
					break
				 /* case 'bot':
			     	memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/dPUVFF6.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*_Comandos para instalar o ⚡Super Xandão⚡_\n\ntermux-setup-storage\n\npkg install git\n\npkg install ffmpeg\n\npkg install wget\n\npkg install nodejs\n\ngit clone https://github.com/Meliodas-rai/Bot\n\ncd Bot\n\nbash install.sh\n\nnpm start\n\n\nescaneie o qr code q ira aparecer\n\naperte o botão "Ctrl" depois aperte "C" no teclado\n\ndigite\n\npkg install pm2\n\nnpm i -g pm2\n\npm2 start index.js\n\npm2 monit\n\n_seja feliz meu parsa_😎\n\nOBS:vc vai precisar do termux e de 2 celulares'})
					break/*/
				case 'belle3':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://1.bp.blogspot.com/-3K_b14RzHTA/XwTW7SQTPRI/AAAAAAAAPtY/UOaKURECbzwXfvASa3g6Pz0D_Ha73Dw4wCLcBGAsYHQ/s1600/boabronha_10.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'olha p isso mano, pqp '})
					break
				case 'akeno':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnFAocqaur5ZX1DPN6ZGP8PJy2cNppas_gYA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break
				case 'loli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/iphQUGi.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'hmm, então quer ver loli?'})
					break
				case 'hentai':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.imgur.com/8U9GwX4.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Cara bate pra 2d 😂'})
					break
				case 'buendia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`http://imgur.com/gallery/uTUtdGb`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Buen dia a todos <tres ❤️'})
					break
				case 'buenastardes':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/MguOe76`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Buenas tarde, gentee 😎👍'})
					break
				case 'buenasnoches':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/AFutbJy`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Buenas noches, haganse la paja y a mimir csm 👍'})
					break
                case 'belle':                 
				 data = fs.readFileSync('./src/belle.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                hasil = await getBuffer(randKey.result)
                sendImage(hasil, mek, '*Belle :V*')
				break
				 /* case 'belle1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7ot6RZPnXSJFFKVjPoeXHjTYyi6uk5W_mA&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '👀️'})
					break 
				case 'lofi':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL9hZBPRo16fIhsIus3t1je2oAU23pQqBpfw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'malkova':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtbo5EcVSGj-IvEVznHIgMZ9vjFptZfvprtg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️💆'})
					break
				case 'canal':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/xuTCBPO`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '️*canal do ✞︎𝙼𝚎𝚕𝚒𝚘𝚍𝚊𝚜✞︎:*\n\n https://youtube.com/channel/UCpB3qh2Sp3K23s9a2Q-Gf-g'})
					break
				case 'nsfwloli1':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhzKetbU3pzhoZdaIo6qBklCzwvmCCOznbg&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Rum️'})
					break
				case 'reislin':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlc2hMIJ4PjW5tIXltrKe6xeBoKPLKTZMnQ&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '🤭'})
					break*/
				case 'buenasnoches':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/4HeRfuO`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'buenas noxhes ❤️'})
					break
				case 'buendia':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/gallery/zFvzl2S`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'buen dia ❤️'})
					break
				case 'termux':
					meme = await kagApi.memes()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgADDq_64EbTI0NroP7CUoVeWmu1J06NnGHw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Termmux ws muy conocido en el mundo de distribución Linux. Esta es una herramienta que facilita mucho las tareas del sistema. Ahora, yá pensó en utilizar el Terminal Linux en su Android? Esta és la propuesta de Termux.\n\n*TERMUX: UTILIZE EL TERMINAL EN SU ANDROID*\n\nLa utilización del Terminal aumenta mucho la productividad de los usuários que ya poseen un determinado nível de conocimiento técnico.\nCon el terminal, es posible hacer diversas y diferentes cosas, desde navegar entre los directórios e instalar programas, hasta descomprimir archivos y monitorear procesos.'})
					break
		    	case 'grupoinfo':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(mess.only.group)
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOMBRE* : ${groupName}\n*MIEMBROS* : ${groupMembers.length}\n*ADMINS* : ${groupAdmins.length}\n*DESCRIPCIÓN* : ${groupDesc}`})
                    break
				 /* case 'meme':
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=MEME BRASIL`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					client.sendMessage(from, nye, image, { caption: 'cringe️', quoted: mek })
					await limitAdd(sender) 	
					break
				case 'memeindo':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://imgur.com/${memein.hash}.jpg`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '.......'})
					break/*/
				case 'dueño':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://i.ibb.co/Q6TftwD/Meliodas.png`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*𝙲𝚁𝙸𝙰𝙳𝙾𝚁 𝙳𝙾 𝚇𝙰𝙽𝙳𝙰𝙾:Eae meu parsa, sou ꧁╰‿╯𝙼𝙴𝙻𝙸𝙾𝙳𝙰𝚂-𝚁𝙰𝙸╰‿╯꧂ Filho do rei demônio e sou criador do Bot Super Xandão \n*WPP:* wa.me/+558981246187\n\n\nEspero que tenham gostado do bot 💪\n*Kibadores vão se FUDER*️'})
					break
				 /*case 'dono2':
					memein = await kagApi.memeindo()
					buffer = await getBuffer(`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V_4fdvF8rluX0T3KKGOvY0TusMwx7nVWtw&usqp=CAU`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*CRIADOR:* Causs\n*YOUTUBE:* https://youtube.com/channel/UCpB3qh2Sp3K23s9a2Q-Gf-g\n*WPP:* wa.me/+5547992091566\n*INSTA:* @animexx_png\n\n\nEspero que tenham gostado do bot 🐊🚩\n segue esse Goxtoso ai no yt ️'})
					break*/
				case 'setprefijo':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo fue alterado con éxito para : ${prefix}`)
					break
				case 'loli':
					loli.getSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERROR* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'loli 7u7'})
					})
					break
                case 'lolih':
                    gatauda = body.slice(6)
                    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomloli?apikey=BotWeA`, {method: 'get'})
                    buffer = await getBuffer(anu.result)
                    client.sendMessage(from, buffer, image, {quoted: mek})
                    await limitAdd(sender)
                    break
				case 'nsfwloli':
					if (!isNsfw) return reply('*COMANDO SO FUNCIONA NO PV AMIGO.*')
					loli.getNSFWLoli(async (err, res) => {
						if (err) return reply('❌ *ERRO* ❌')
						buffer = await getBuffer(res.url)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Jangan jadiin bahan buat comli om'})
					})
					break
				 /*case 'pronomeneu':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
				case 'yt2mp3':
					if (args.length < 1) return reply('Onde está o url, hum?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/yta?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}\n*Filesize* : ${anu.filesize}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
				case 'tiktok':
					if (args.length < 1) return reply('𝙲𝚊𝚍𝚎 𝚘 𝚕𝚒𝚗𝚔 𝚟𝚎𝚢?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/tiktok?url=${args[0]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {quoted: mek})
					break
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, '𝙲𝚊𝚍𝚎 𝚘 𝚗𝚘𝚖𝚎 𝚍𝚎𝚕𝚎 𝚟𝚎𝚢?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possível nome de usuário inválido')
					}
					break
				case 'nulis':
				case 'tulis':
				  client.updatePresence(from, Presence.composing)
			if (args.length < 1) return reply(`O que você deve escrever?`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					client.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('Que tipo é??')
					if (!tipelist.includes(args[0])) return reply('Tipe desktop|tablet|mobile')
					if (args.length < 2) return reply('Cadê o url, hum?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					client.sendMessage(from, buff, image, {quoted: mek})
					break
				case 'tstiker':
				case 'tsticker':
					if (args.length < 1) return reply('Onde está o texto, hum?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(9).trim()
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/text2image?text=${teks}&apiKey=${apiKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						client.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					break/*/
				case 'marcar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*#* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
                case 'marcar2':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					reply(teks)
					break
                 case 'marcar3':
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					client.sendMessage(from, teks, text, {detectLinks: false, quoted: mek})
					break
				case 'limpiar':
					if (!isOwner) return reply('Quien es usted?, Ud no es mi dueño 😂')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.clearChat(_.jid)
					}
					reply('Borrado todos los chats con éxito :)')
					break
				case 'bc':
					if (!isOwner) return reply('Quem é Você, você não é meu dono 😂?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ TRANSMIÇÃO DE AVISO ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada com sucesso')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ RAPAZIADA OLHA ESSE AVISO ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada com sucesso')
					}
					break
                           case 'promover':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok: @${mentioned[0].split('@')[0]} ahora es un admin del grupo!`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebajar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Ok @${mentioned[0].split('@')[0]} perdió el admin con exito!`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Usted quiere añadir un genio?')
					if (args[0].startsWith('08')) return reply('Use el codigo + el numero \n ex: +51 928564603')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Falló al añadir destino, quizas por que es una cuenta privada')
					}
					break
				case 'banear':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque alguien que desee eliminar!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ese ya fue xd :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Eliminaste con éxito a: @${mentioned[0].split('@')[0]}`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
				case 'admins':
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admins del grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                                case 'linkgp':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (!isGroupAdmins) return reply(mess.only.admin)
                                        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                                        linkgc = await client.groupInviteCode(from)
                                        reply('https://chat.whatsapp.com/'+linkgc)
                                        break
                                case 'salir':
                                        if (!isGroup) return reply(mess.only.group)
                                        if (isGroupAdmins || isOwner) {
                                            client.groupLeave(from)
                                        } else {
                                            reply(mess.only.admin)
                                        }
                                        break
				case 'toimg':
					if (!isQuotedSticker) return reply('{ ❗ } *Marque el sticker*')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Falló al convertir sticker a imagen ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'simi':
					if (args.length < 1) return reply('Donde está el texto, hum?')
					teks = body.slice(5)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('el modo Simi está activo')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Activo con éxito el modo simi en este grupo 😗️')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('Desactivó con éxito el modo simi en este grupo 😡️')
					} else {
						reply('1 para activar, 0 para desactivar, es lento vdd?'  )
					}
					break
				case 'bienvenido':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('yá esta ativo.')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Activo con éxito el recurso de Bienvenida en este grupo 😉️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('Desactivo con éxito el recurso de bienvenida en esre grupo 😞')
					} else {
						reply('1 para activar, 0 para desactivar, entiendes?')
					}
                                      break
				case 'clonar':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Marque la persona que desea clonar\n\n*EXEMPLO:* clone @')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto de perfil actualizada com éxito, usando la foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('tmr, dió error, esta persona debe estar sin foto 😔')
					}
					break
		        case 'setfoto2':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isadminbot) return reply('Quien es Ud?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('cambio con éxito el icono del grupo')
                    break
                case 'bc2':
					if (!isadminbot) return reply('Quiem es ud?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *admin bot Broadcast* ]\n\n${body.slice(4)}`)
						}
						reply('Transmision enviada')
					}
					break
				case 'hidetag2':
				    if (!isOwner) return reply(mess.only.owner)
					if (!isGroup) return reply(mess.only.group)
					if (!isadminbot) return reply('Quem é Você?')
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					break
					//
				case 'setpp3':
                    if (!isGroup) return reply(mess.only.group)
                    if (!isfrendsowner) return reply('Quien es ud?')
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await client.downloadAndSaveMediaMessage(mek)
                    await client.updateProfilePicture (from, media)
                    reply('cambio con éxito el icono del grupo')
                    break
                case 'bc3':
					if (!isfrendsowner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ admin bot Broadcast ]\n\n${body.slice(4)}`})
						}
						reply('Transmissão enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRANSMISSÃO* ]\n\n${body.slice(4)}`)
						}
						reply('Transmissão enviada')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Solo una foto prro')
					}
					break
				default:
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERRO]','red'), 'Este es un, comando no registrado', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
