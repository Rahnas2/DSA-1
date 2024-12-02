
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
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.endOfWord = true
    }

    search(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char]){
                return false
            }
            node = node.children[char]
        }
        return node.endOfWord
    }

    //check if any words start with a given prefix
    statWith(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]){
                return 
            }
            node = node.children[char]
        }
        return true
    }

    delete(word){
        this.deleteHelper(this.root, word, 0)
    }
    deleteHelper(node, word, depth){
        if(!node) return false

        if(word.length === depth){
            if(!node.endOfWord) return false

            node.endOfWord = false

            return Object.keys(node.children).length === 0

        }

        const char = word[depth]
        const canDelete = this.deleteHelper(node.children[char], word, depth + 1)

        if(canDelete){
            delete node.children[char]

            return !node.endOfWord && Object.keys(node.children).length === 0
        }
        return false

    }
}

const trie = new Trie()
trie.insert('hello')
trie.insert('hii')
trie.insert('hell')
trie.delete('hell')

console.log(trie.search('hello'))
console.log(trie.search('hii'))
// console.log(JSON.stringify(trie.root, null, 2));
