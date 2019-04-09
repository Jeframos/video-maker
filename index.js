const readline = require('readline-sync')


function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')

        console.log(selectPrefixIndex)
    }

    console.log(content)


}

start()