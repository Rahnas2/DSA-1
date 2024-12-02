
class TrieNode{
    constructor(){
        this.children = {}
        this.endOfWord = false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        if(word.length < 1) return 
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true
        this.insert(word.slice(1))
    }

    remove(word){
        this.removeHelper(this.root, word, 0)
    }

    removeHelper(node, word, depth){
        if(!node) return false

        if(word.length === depth){
            if(!node.endOfWord) return false

            node.endOfWord = false

            return Object.keys(node.children).length === 0
        }

        const char = word[depth]
        const canRemove = this.remove(node.children[char], word, depth + 1)

        if(canRemove){
            delete node.children[char]

            return !node.endOfWord && Object.keys(node.children).length === 0
        }
    }
    
    searchPrefix(prefix){
        let node = this.root
        for(let char of prefix){
           if(!node.children[char]){
            return null
           }
           node = node.children[char]
        }
        return node
    }

    autoComplete(prefix){
        let node = this.searchPrefix(prefix)

        if(!node) return null

        let suggestions = []

        this.collectWords(node, prefix, suggestions)

        return suggestions
    }

    collectWords(node, currentWord, suggestions){

        if(node.endOfWord){
           suggestions.push(currentWord)
        }

        for(let char in node.children){
            this.collectWords(node.children[char], currentWord + char, suggestions)
        }
    }

}


const trie = new Trie()
trie.insert('hello')
trie.insert('help')
trie.insert('hearo')
trie.insert('helium')

console.log(trie.root)
console.log(trie.autoComplete('he'))