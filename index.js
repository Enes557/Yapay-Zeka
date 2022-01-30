const readline = require("readline");
const fetch = require("node-fetch");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("UUID > ", function(isim) {

var api = "https://www.midordas.xyz/api/ai/"+isim+"/";

  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
  console.clear()

boot()

function boot() {
rl.question(isim+" > ", function(mesaj) {

fetch(api+mesaj,)
  .then(res => res.json())
      .then(ai => {
          console.log('AI > '+ai.msg)
          boot()
      })
  });
}
})