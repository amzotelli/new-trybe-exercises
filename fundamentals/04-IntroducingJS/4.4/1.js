let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info.personagem}`);

console.log('------------')

info.recorrente = 'Sim';

for (const key in info) {
  console.log(key);
}

console.log('------------')

for (const key in info) {
  if (Object.hasOwnProperty.call(info, key)) {
    const element = info[key];
    console.log(element);
  }
}

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log('------------')

const verificacao = () => {
  if (info.recorrente === 'Sim' && info2.recorrente === 'Sim') {
    return 'Ambos recorrentes';
  }
};

console.log(`${info.personagem} e ${info2.personagem}
${info.origem} e ${info2.origem}
${info.nota} e ${info2.nota}
${verificacao()}
`)
