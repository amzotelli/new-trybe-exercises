const englishWordFor = (word) => {
    let arrayTranslatedWords = [['olá', 'Hi'],['Bom dia', 'Good Morning'],['Obrigado', 'Thank you']];
    let translatedWord = '';
    arrayTranslatedWords.forEach((wordPair)=>{
        if(wordPair[0] === word){
            translatedWord = wordPair[1];
        }
    });

    return translatedWord !== undefined ? translatedWord : 'Word not found';
}

const translate = (word,language) => {
    return new Promise((resolve, reject)=>{
        if(language === 'english'){
            const translateWord = englishWordFor(word);
            resolve(translateWord);
        }else{
           reject('Language not found im my braisn, sorry :('); 
        }
    });
}

const execute = () => {
    translate('Bom dia', 'spanish')
    .then((result)=>console.log(result))
    .catch((error)=> console.log(error))
};

execute();