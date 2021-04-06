#!/usr/bin/env node
const inquirer = require('inquirer')
var startingText = `
███████╗░█████╗░░██████╗██╗░░░██╗  ████████╗░█████╗░██████╗░██████╗░███████╗███╗░░██╗████████╗
██╔════╝██╔══██╗██╔════╝╚██╗░██╔╝  ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗░██║╚══██╔══╝
█████╗░░███████║╚█████╗░░╚████╔╝░  ░░░██║░░░██║░░██║██████╔╝██████╔╝█████╗░░██╔██╗██║░░░██║░░░
██╔══╝░░██╔══██║░╚═══██╗░░╚██╔╝░░  ░░░██║░░░██║░░██║██╔══██╗██╔══██╗██╔══╝░░██║╚████║░░░██║░░░
███████╗██║░░██║██████╔╝░░░██║░░░  ░░░██║░░░╚█████╔╝██║░░██║██║░░██║███████╗██║░╚███║░░░██║░░░
╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░
`
console.log(startingText)
inquirer.prompt({
    type: "list",
    name:"TorrentProviderIsHere",
    message: "Choose the torrent provider",
    choices: ["ThePirateBay",
    "Yts",
    "KickassTorrents",
    "Torrent9",
    "Torrentz2",
    "Limetorrents",
    "TorrentProject",
    "1337x",
    "Rarbg",
    "Eztv"]
}).then(answer => {
    inquirer.prompt({
        name: "TorrentNameAlr",
        message: "Which torrent do you want?"
    }).then(searchthisthing =>{
        (async () => {
            const TorrentSearchApi = require('torrent-search-api');
            TorrentSearchApi.enableProvider(answer.TorrentProviderIsHere);
            const magnet = await TorrentSearchApi.search(searchthisthing.TorrentNameAlr).catch(e => console.log(e))
            console.log(magnet);
            TorrentSearchApi.disableAllProviders();})();
    })
})
