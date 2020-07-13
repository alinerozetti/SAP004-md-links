const fs = require('fs');
const searchLinks = (path) => {
  return new Promise ((resolve, reject) => {
  // ler o arquivo se não der erro vai imprimir 
  fs.readFile(path, "utf-8", function(err, data){
    if(err){
      console.log('erro')
      reject(err)
    }
    else{
      const regex = /\[([^\]]*)\]\((http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?\)/gm;
      const array = data.match(regex);
      const links = array.map((item) => {
        const completeString = item.split("](");
        const text = completeString[0].replace("[", "");
        const href = completeString[1].replace(")", "");
        return { path, text, href };
      });

      resolve(links);

    }
  });
  });
};
module.exports = searchLinks;

