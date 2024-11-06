import fs from 'fs/promises'; // Usando a versão promises do fs
import chalk from 'chalk'; // Importando o Chalk

const ex = 'teste.md';

async function ler() {
    const read = await fs.readFile(ex, 'utf8');
    console.log('\n', read);
}

async function colorir() {
    const read = await fs.readFile(ex, 'utf8');
    const linkRegex = /https?:\/\/[^\s]+/g;
    const color = read.replace(linkRegex, (url) => {
        return chalk.green(url); // Aplica a cor azul ao URL
    });

    console.log('\n', color);
}

ler();
colorir();
