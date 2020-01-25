#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const nome = chalk.white("         João da Silva");
const apelido = chalk.white("joaosilva");

const rotOcupacao = chalk.white.bold("Ocupação:");
const ocupacao = chalk.white("Analista Junior na IdeiaSoft");

const rotTwitter = chalk.white.bold("Twitter:".padStart(9));
const twitter = chalk.grey("https://twitter.com/") + chalk.cyan("joaosilva");

const rotGithub = chalk.white.bold("Github:".padStart(9));
const github = chalk.grey("https://github.com/") + chalk.green("joaosilva");

const rotLinkedIn = chalk.white.bold("LinkedIn:");
const linkedIn =
  chalk.grey("https://linkedin.com/in/") + chalk.blue("joaosilva");

const rotCard = chalk.white.bold("Card:".padStart(9));
const card = chalk.red("npx") + " " + chalk.white("joaosilva");

let saida = chalk.green(`${nome} / ${apelido}\n\n`);
saida += `${rotOcupacao}  ${ocupacao}\n\n`;
saida += `${rotTwitter}  ${twitter}\n`;
saida += `${rotGithub}  ${github}\n`;
saida += `${rotLinkedIn}  ${linkedIn}\n\n`;
saida += `${rotCard}  ${card}`;

const opcoes = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

console.log(boxen(saida, opcoes));
