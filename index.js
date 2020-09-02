const { Client, Util } = require('discord.js');
const client = new Client({ disableEveryone: true });
const randomColour = require('randomcolor'); // yes, the creator of this package does not speak the real english

client.on("ready", async () => {
  console.log(`${client.user.username} prisijungė!`);
  client.user.setActivity(`➔ MCSTORY.LT`);

});
//////////////////////
class Bot {
    constructor(){
        this.servers = require('./serveriai.json');
        this.discordClient = new Client({sync: true});
        
        this.discordClient.on("ready", () => {this.initialize();});
        
        this.discordClient.on("message", (msg) => {this.processMessage(msg)});
    }
    
    initialize() {
        this.log("Connected to discord.");
        
        setInterval(() => {
            this.randomizeRoleColors();
        }, 3*1000);
    }
    
    processMessage(msg) {
        if(msg.content.startsWith(">addrole")) {
            for(var role of msg.mentions.roles.array()) {
                msg.reply("Added " + role + " to list of rainbow roles.");
                
                this.addRainbowRole(msg.guild.id, role.id);
            }
        }
    }
    
    randomizeRoleColors() {
        for(var server in this.servers) {
            var liveGuild = this.discordClient.guilds.get(server);
            
            if (!liveGuild) {
                this.error("Guild with ID " + server+ " no longer exists or the bot has been removed from it.");
                continue;
            }
            
            for(var role of this.servers[server]) {
                var liveRole = liveGuild.roles.get(role);
                
                liveRole.setColor(randomColour(), "Rainbowbot random role color randomizer.");
            }
        }
    }
    
    addRainbowRole(guild, role) {
        if(this.servers[guild] == undefined) {
            this.servers[guild] = [];
        }
        
        for(var existingRole of this.servers[guild]) {
            if(existingRole == role) {
                return "That role has already been added.";
            }
        }
        
        this.servers[guild].push(role);
        this.saveServers();
    } 
    
    saveServers() {
        fs.writeFileSync("./serveriai.json", JSON.stringify(this.servers), "utf8");
    }
}

var instance = new Bot();
///////////////////






//////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '-';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}naujiena9`){
	
	
	
	
  }	
	
	
	
	
  if (cmd === `${prefix}naujiena9`){
message.channel.send({embed: {
    color: 85841,
    title: "<a:laimingas:720259065263030373> **__Perskaitykite ir sutikite su taisyklėmis__**",
    description: "\nＮＡＵＪＩＥＮＡ:\n\n"+
	"<:sarasas:722738107648049206> Nesikeikti ir neįžeidinėti kitų narių.\n"+
	"<:rasiklis:722738124987433043> Draudžiama apsimesti kitais žmonėmis, jūs esate jūs, o ne kažkas kitas.\n"+
	"\n"+
	" <:failas:722232975118565387> *Trumpai tariant elkitės tvarkingai ir atsakingai!* <:failas:722232975118565387> \n\n"+
	"\n",
    "image": {
      "url": "http://mcstory.lt/failai/logodc.png"
    },
    timestamp: new Date(),
    footer: {
      icon_url: "http://enoxas.lt/discord/laikrodis.png",
      text: "MCSTORY.LT   "
    }
  }
});
  }
	

//////////////////////////////////////////////////////////////////////////////
/////////////  TAISYKLĖS
//////////////////////////////////////////////////////////////////////////////
  if (cmd === `${prefix}taisykles9`){

message.channel.send({embed: {
    color: 114568,
    title: "<a:laimingas:720259065263030373> **__Perskaitykite ir sutikite su taisyklėmis__**",
    description: "\nＴＡＩＳＹＫＬＥＳ:\n\n"+
"<:zole:720289285542248469> 1. Nesikeikti ir neįžeidinėti kitų narių.\n"+
"<:zole:720289285542248469> 2. Draudžiama apsimesti kitais žmonėmis, jūs esate jūs, o ne kažkas kitas.\n"+
"<:zole:720289285542248469> 3. Slapyvardžiai, avatarai ir custom statusai turi atitikti etikos taisykles.\n"+
"<:zole:720289285542248469> 5. Nesireklamuoti ir nereklamuoti įvairaus pobūdžio turinio.\n"+
"<:zole:720289285542248469> 6. Netrukdyti kitiems. Netaginti žmonių be rimtos priežasties.\n"+
"<:zole:720289285542248469> 7. Neprašyti rolių, paslaugų ir kitų dalykų kurie jums nepriklauso.\n"+
"<:zole:720289285542248469> 8. Reakcijų naudojimas nėra skirtas vulgariems žodžiams ar įžeisti žmones.\n"+
"<:zole:720289285542248469> 9. Nespaminti ir nefloodinti pokalbių, elgtis tvarkingai.\n"+
"<:zole:720289285542248469> 10. Pokalbiuose neskleisti pašalinių garsų.\n\n"+
" <:failas:722232975118565387> *Trumpai tariant elkitės tvarkingai ir atsakingai!* <:failas:722232975118565387> \n\n"+
"\n"+
"<:ateivis:720293974719332402> **Paspauskite ant <:taip:720291007878660098> emocijos jog sutikti su taisyklėmis!** <:labas:501712009268822016>\n"
  }
});
	  
  }
//////////////////////////////////////////////////////////////////////////////	
	
	
	
	
	
  if (cmd === `${prefix}komandos` || cmd === `${prefix}help`){
    message.channel.send(`
**Komandos:**
**⬥ -Komandos** ➔ Informacija apie visas komandas
**⬥ -Groti** ➔ Paleisti dainą iš youtube
**⬥ -Daina** ➔ Pažiūrėti kokia daina dabar groja
**⬥ -Pauze** ➔ Sustabdyti dabartinę dainą
**⬥ -Stabdys** ➔ Perjungti dainą į kitą
**⬥ -Paleisti** ➔ Paleisti dabartinę dainą
**⬥ -Praleisti** ➔ Praleisti dabartinę dainą
**⬥ -Sarasas** ➔ Pažiūrėti kokios dainos yra sąraše
		`);
  }	
	
	
});


//////////////////////////////////////////////////////////////////////////////
/*
const { TOKEN, PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

client.on('warn', console.warn);

client.on('error', console.error);

client.on('ready', () => console.log('Pasiruošęs dirbti!'));

client.on('disconnect', () => console.log('Tuoj persikrausiu...'));

client.on('reconnecting', () => console.log('Persikraunu!'));

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(PREFIX)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'groti' || command === 'play') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('Atsiprašau , bet gal pirma prisijunk prie muzikos kanalo?');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		
		
		
		if (!permissions.has('CONNECT')) return msg.channel.send('Neturiu leidimų, prašau duoti :(');
		if (!permissions.has('SPEAK')) return msg.channel.send('Neturiu leidimų, prašau duoti :(');
		
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`✅ Sąrašas: **${playlist.title}** buvo pridėta!`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Muzika parinkta:**__

${videos.map(video2 => `**▹ ${++index} -** ${video2.title}`).join('\n')}

✨ Įrašykite skaičių, kad pasirinktumėte vieną iš paieškos rezultatų.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('⛔ Neužpildyta arba neteisingas skaičius, atšaukiamas vaizdo įrašų pasirinkimas.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('🆘 Ot kurmis! Nieko neradau.');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'skip' || command === 'praleisti') {
		if (!msg.member.voiceChannel) return msg.channel.send('Kvailas? Prisijunk prie muzikos kanalo!');
		if (!serverQueue) return msg.channel.send('Šiuo metu nieko nėra , todėl galiu praleisti.');
		serverQueue.connection.dispatcher.end('Daina buvo praleista!');
		return undefined;
	} else if (command === 'stop' || command === 'stabdys') {
		if (!msg.member.voiceChannel) return msg.channel.send('Kvailas? Prisijunk prie muzikos kanalo!');
		if (!serverQueue) return msg.channel.send('Niekas šiuo metu negroja.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stabdžiai buvo įjungti!');
		return undefined;
	} else if (command === 'volume' || command === 'garsumas') {
		if (!msg.member.voiceChannel) return msg.channel.send('Kvailas? Prisijunk prie muzikos kanalo!');
		if (!serverQueue) return msg.channel.send('Niekas šiuo metu negroja.');
		if (!args[1]) return msg.channel.send(`Dabar nustatytas garsumas: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`Garsumas: **${args[1]}**`);
	} else if (command === 'np' || command === 'daina') {
		if (!serverQueue) return msg.channel.send('Šiuo metu niekas negroja.');
		return msg.channel.send(`🎶 Dabar groja: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue' || command === 'sarasas') {
		if (!serverQueue) return msg.channel.send('Šiuo metu niekas negroja.');
		return msg.channel.send(`
__**Sąrašas:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Dabar groja:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause' || command === 'pauze') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('⏸ Daina buvo pristabdyta!');
		}
		return msg.channel.send('Šiuo metu niekas negroja.');
	} else if (command === 'resume' || command === 'paleisti') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('▶ Daina buvo paleista!');
		}
		return msg.channel.send('Niekas šiuo metu negroja.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`Negaliu prisijungti prie: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`Negaliu prisijungti prie: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** buvo pridėta į sąrašą!`);
	}
	return undefined;
}











function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	///	console.log('Muzika : '+song.url);
	
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Daina pasibaigė.') console.log('Daina pasibaigė.');
			else console.log(reason);
			serverQueue.songs.shift();
                setTimeout(function() {
                  play(guild, serverQueue.songs[0]);
                }, 500);
            })
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Groja: **${song.title}**`);
}

*/

client.login(process.env.token);
