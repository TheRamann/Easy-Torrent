# Easy-Torrent

It will get torrents for you right in your terminal <br> <br>
If you don't like CLIs, then checkout <a href = "https://github.com/TheRamann/torrent-gui">Torrent-Gui</a>


# Installation <img src="https://cdn.discordapp.com/emojis/316264057659326464.png?v=1" alt = "🖥" width="35px">
<b><a href = "https://www.npmjs.com/package/easy-torrent"> npm: </a><b> 
<p>
<code> npm i -g easy-torrent </code>
<p><b><a href = "https://classic.yarnpkg.com/en/package/easy-torrent"> yarn: </a></p>
<code>yarn add easy-torrent </code>
<p><p><p><b><a href = "https://www.npmjs.com/package/easy-torrent"> npx: </a> (no installation required) <b> 
<p>
<code> npx easy-torrent </code>
            
            
# Usage <img src="https://cdn.discordapp.com/emojis/757399420319825950.png?v=1" alt = "✏" width="35px">

It is a very easy to use cli. <br>
Just type "torrent" or "npx easy-torrent" and you will be guided your way to get any torrent you would ever need. <br>
```powershell
PS D:\Desktop> npx easy-torrent
npx: installed 228 in 23.908s

███████╗░█████╗░░██████╗██╗░░░██╗  ████████╗░█████╗░██████╗░██████╗░███████╗███╗░░██╗████████╗
██╔════╝██╔══██╗██╔════╝╚██╗░██╔╝  ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗░██║╚══██╔══╝
█████╗░░███████║╚█████╗░░╚████╔╝░  ░░░██║░░░██║░░██║██████╔╝██████╔╝█████╗░░██╔██╗██║░░░██║░░░
██╔══╝░░██╔══██║░╚═══██╗░░╚██╔╝░░  ░░░██║░░░██║░░██║██╔══██╗██╔══██╗██╔══╝░░██║╚████║░░░██║░░░
███████╗██║░░██║██████╔╝░░░██║░░░  ░░░██║░░░╚█████╔╝██║░░██║██║░░██║███████╗██║░╚███║░░░██║░░░
╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░

? Choose the torrent provider
  1337x
  Rarbg
  Eztv
> ThePirateBay
  Yts
  KickassTorrents
  Torrent9
(Move up and down to reveal more choices)
```

Choose the provider and type the name of torrent you want. Result will look like this
```powershell
PS D:\Desktop> easy-torrent

███████╗░█████╗░░██████╗██╗░░░██╗  ████████╗░█████╗░██████╗░██████╗░███████╗███╗░░██╗████████╗
██╔════╝██╔══██╗██╔════╝╚██╗░██╔╝  ╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗██╔════╝████╗░██║╚══██╔══╝
█████╗░░███████║╚█████╗░░╚████╔╝░  ░░░██║░░░██║░░██║██████╔╝██████╔╝█████╗░░██╔██╗██║░░░██║░░░
██╔══╝░░██╔══██║░╚═══██╗░░╚██╔╝░░  ░░░██║░░░██║░░██║██╔══██╗██╔══██╗██╔══╝░░██║╚████║░░░██║░░░
███████╗██║░░██║██████╔╝░░░██║░░░  ░░░██║░░░╚█████╔╝██║░░██║██║░░██║███████╗██║░╚███║░░░██║░░░
╚══════╝╚═╝░░╚═╝╚═════╝░░░░╚═╝░░░  ░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░

? Choose the torrent provider ThePirateBay
? Which torrent do you want? Godzilla vs. Kong
[
  {
    provider: 'ThePirateBay',
    id: '10368712',
    title: 'King.Kong.Vs.Godzilla.1963.1080p.BluRay.x264.3000th.Release-WaLM',
    time: 'Mon, 16 Jun 2014 05:08:39 GMT',
    seeds: 35,
    peers: 16,
    size: '7.2 GB',
    magnet: 'magnet:?xt=urn:btih:762E7CEE292A6BEEB18C8A686F105D8C93072052&dn=undefined&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce',
    numFiles: 4,
    status: 'vip',
    category: '207',
    imdb: 'tt0056142'
  },
  {
    provider: 'ThePirateBay',
    id: '6237982',
    title: 'Godzilla vs King Kong (1963) dvd rip eng',
    time: 'Sat, 12 Mar 2011 15:18:38 GMT',
    seeds: 13,
    peers: 1,
    size: '1.4 GB',
    .....
    ("The result is shortened for the website, the result will include more torrents than this")
```

# Common Errors <img src = "https://cdn.discordapp.com/emojis/788360740822056960.gif?v=1" alt = "😔👍" width = "30">

AntiVirus often creates an error. The error might look like this

```powershell
PS D:\Easy-Torrent> torrent
? Choose the torrent provider ThePirateBay
? Which torrent do you want? Justice League
OperationalError: write EPROTO 20020:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:c:\ws\deps\openssl\openssl\ssl\record\ssl3_record.c:332:

    at WriteWrap.onWriteComplete [as oncomplete] (internal/stream_base_commons.js:94:16) {
  cause: Error: write EPROTO 20020:error:1408F10B:SSL routines:ssl3_get_record:wrong version number:c:\ws\deps\openssl\openssl\ssl\record\ssl3_record.c:332:

      at WriteWrap.onWriteComplete [as oncomplete] (internal/stream_base_commons.js:94:16) {
    errno: -4046,
    code: 'EPROTO',
    syscall: 'write'
  },
  isOperational: true,
  errno: -4046,
  code: 'EPROTO',
  syscall: 'write'
}
undefined

```
The error can be easily tackled by disabling Browsing Protection in your AntiVirus while using it. <br>
Results after disabling Browsing Protection in your AntiVirus are given below
```powershell
PS D:\Easy-Torrent> torrent
? Choose the torrent provider ThePirateBay
? Which torrent do you want? justice league
[
  {
    provider: 'ThePirateBay',
    id: '42122803',
    title: 'Justice League Snyders Cut 2021 1080p HDRip X264-WORM',
    time: 'Wed, 17 Mar 2021 08:31:44 GMT',
    seeds: 937,
    peers: 130,
    size: '7.5 GB',
    magnet: 'magnet:?xt=urn:btih:449EDF3CDE94B83EA689FA82742132174FA4543F&dn=undefined&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce',
    numFiles: 3,
    status: 'vip',
    category: '207',
    imdb: ''
  },
  {
    provider: 'ThePirateBay',
    id: '42122861',
    title: 'Zack.Snyders.Justice.League.2021.REPACK.720p.HDRip.1200MB.x264-G',
    time: 'Wed, 17 Mar 2021 09:43:02 GMT',
    seeds: 637,
    peers: 74,
    size: '1.3 GB',
        .....
    ("The result is shortened for the website, the result will include more torrents than this")
```
You can enable Browsing Protection in your AntiVirus after usage

# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
