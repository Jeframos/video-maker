const algorithmia = require ('algorithmia')
const algorithmiaApiKey = require ('../credencials/algorithmia.json').apiKey

async function robot(content){
    await fetchContentFromWikipedia(content)
    sanitizeContent(content)
    //breakContentIntoSentences(content)

    async function fetchContentFromWikipedia(content){
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
        const wikipediaResponde = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponde.get()
        console.log(wikipediaContent)

        content.sourceContentOriginal = wikipediaContent.content
    }

    function sanitizeContent(content) {
        const withoutBlankLines = removeBlankLines(content.sourceContentOriginal)
        const withoutMarkdown =  removeMarkdown(withoutBlankLines)
        console.log(withoutMarkdown)

        function removeBlankLines(text){
            const allLines = text.split('\n')
            
            const withoutBlankLines = allLines.filter((line) =>{
                if (line.trim().length === 0){
                    return false
                }
                return true
            })
            return withoutBlankLines
        }
    }
    
    function removeMarkdown(line){
        const withoutMarkdown = lines.filter((line) =>{
            if (line.trim().startsWith('=')) {
                return false
            }
            return true
        })
        return withoutMarkdown
    }

}

module.exports = robot