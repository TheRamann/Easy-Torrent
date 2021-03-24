# Easy-Torrent

It will get torrents for you right in your terminal

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
PS D:\Desktop> torrent
? Choose the torrent provider (Use arrow keys)
> ThePirateBay
  Yts
  KickassTorrents
  Torrent9
  Torrentz2
  Limetorrents
  TorrentProject
(Move up and down to reveal more choices)
```

Choose the provider and type the name of torrent you want. Result will look like this
```powershell
PS D:\Desktop> torrent
? Choose the torrent provider ThePirateBay
? Which torrent do you want? shingeki no kyojin
[
  {
    provider: 'ThePirateBay',
    id: '41835283',
    title: 'Attack.on.Titan.Shingeki.no.Kyojin.S04E11.E70.Eng.Sub.1080p.x264',
    time: 'Mon, 22 Feb 2021 00:44:18 GMT',
    seeds: 70,
    peers: 0,
    size: '255.6 MB',
    magnet: 'magnet:?xt=urn:btih:95F2C0A408D64BFA4A825D829B35C46006962A95&dn=undefined&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce',
    numFiles: 1,
    status: 'trusted',
    category: '208',
    imdb: 'tt2560140'
  },
  {
    provider: 'ThePirateBay',
    id: '41799242',
    title: 'Attack.on.Titan.Shingeki.no.Kyojin.S04E10.E68.Eng.Sub.1080p.x264',
    time: 'Mon, 15 Feb 2021 03:11:06 GMT',
    seeds: 56,
    peers: 3,
    size: '258.3 MB',
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
The error can be easily tackled by disabling AntiVirus while using it.
Results after disabling AntiVirus are given below
```powershell
PS D:\Ramann\Programming And Stuff\NodeJS> torrent
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

# Like the package? <img src="https://cdn.discordapp.com/emojis/599598716521021441.gif?v=1" alt = "✏" width="35px">
<a href = "https://www.buymeacoffee.com/TheRamann">
Support the creator here
</a>
