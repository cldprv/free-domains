// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'Darky is an absolutely free with no ads and open source multiplayer platformer game with more than 1k runs on replit in six days', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'darky', // desired subdomain name
  owner: {
    repo: 'https://github.com/clement070110/darky',
    email: 'dubois.cnm@tutanota.com',
  },
  record: {
    CNAME: '92742193-d22a-4160-bbe9-31d189fffa39.id.repl.co', // e.g.: <your-github-account>.github.io
    TXT: ['replit-verify=92742193-d22a-4160-bbe9-31d189fffa39'],
    A: [],
    AAAA: [],
    NS: ['freedns4.registrar-servers.com']
  }
})
