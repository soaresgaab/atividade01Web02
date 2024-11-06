import fs from 'fs/promises'; 

async function readJsonFile(filePath) {
    const data = await fs.readFile(filePath, 'utf8');
    const jsonObject = JSON.parse(data);
    return jsonObject; 
}

async function exemplo() {
  const filePath = './exemploFileManager.json'; 
  const jsonData = await readJsonFile(filePath);
  console.log(jsonData); 
}

exemplo(); 

function writeJsonFile(filePath, data) {
    fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8', (err) => {
      console.log('Arquivo JSON escrito com sucesso!');
    });
  }

const sobrescrita = {
"nome": "Gabrielly",
"email": "gaby@gmail.com",
"enderecos": [
    {
    "cidade": "Uberlândia",
    "estado": "Minas Gerais"
    }
]
};

writeJsonFile('exemploFileManager.json', sobrescrita);