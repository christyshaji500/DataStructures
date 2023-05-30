class Node {
    constructor() {
      this.keys = new Map()
      this.end = false
    }
  }
  
  class Trie {
    constructor() {
      this.root = new Node()
    }
  
    insert(word) {
      let current = this.root
      for (let i = 0; i < word.length; i++) {
        let charToInsert = word[i]
        if (!current.keys.has(charToInsert)) {
          current.keys.set(charToInsert, new Node())
        }
        current = current.keys.get(charToInsert)
      }
      current.end = true
    }
  
    contains(word) {
      let current = this.root
      for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (!current.keys.has(char)) {
          return false
        }
        current = current.keys.get(char)
      }
      return current.end
    }

    containsword(word) {
      let current = this.root;
      let foundWords = [];
    
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
    
        if (!current.keys.has(char)) {
          return foundWords; // Return the found words so far
        }
    
        current = current.keys.get(char);
      }
    
      // Traverse the subtree from the word node to collect all words
      const traverse = (node, word) => {
        if (node.end) {
          foundWords.push(word);
        }
    
        for (let [char, child] of node.keys.entries()) {
          traverse(child, word + char);
        }
      };
    
      traverse(current, word);
    
      return foundWords;
    }
    
    prefix(word) {
      let current = this.root
      for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (!current.keys.has(char)) {
          return false
        }
        current = current.keys.get(char)
      }
      return true
    }
  
    prefixCount(word) {
      let current = this.root;
      for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!current.keys.has(char)) {
          return 0;
        }
        current = current.keys.get(char);
      }
      // Call the modified countWords function to count the words
      return this.countWords(current);
    }
    
    countWords(node) {  
      let count = 0;
      if (node.end) {
        count++;
      }
      for (let char of node.keys.keys()) {
        count += this.countWords(node.keys.get(char));
      }
      return count;
    }
    
  
    remove(word) {
      this.removeHelper(this.root, word, 0)
    }
  
    removeHelper(current, str, index) {
      if (index === str.length) {
        current.end = false
        return current.keys.size === 0
      }
      let char = str[index]
      const nextNode = current.keys.get(char)
      if (!nextNode) return false
      let shouldDeleteChar = this.removeHelper(nextNode, str, ++index)
      if (shouldDeleteChar) {
        current.keys.delete(char)
        return current.keys.size === 0
      }
      return false
    }
  
    longestCommonPrefix() {
      let current = this.root;
      let prefix = "";
    
      while (current.keys.size === 1) {
        let char = Array.from(current.keys.keys())[0];
        prefix += char;
        current = current.keys.get(char);
      }
    
      return prefix;
    }
    
    printAll() {
      let current = this.root;
      let words = [];
    
      const traverse = (node, prefix) => {
        if (node.end) {
          words.push(prefix);
        }
    
        for (let [char, child] of node.keys.entries()) {
          traverse(child, prefix + char);
        }
      };
    
      traverse(current, '');
    
      console.log(words);
    }
    
  
  }
  
  const trie = new Trie()
  
  trie.insert("hello")
  
  trie.insert("help")
  // trie.insert("helo")
  trie.insert("low")
  trie.insert("high")
  trie.insert("air")
  trie.insert('apple');
  // trie.insert('cojo');
  
trie.insert('app');
trie.insert('appointment')
trie.insert('application');
trie.insert('appology')
  
  const long = trie.longestCommonPrefix()

  console.log(trie.contains("help"))
  // trie.remove("help")
  console.log(trie.contains("hel"))
  
  console.log(trie.prefix("hel"))
  console.log(trie.containsword("app"));
  console.log(trie.prefixCount("app")) 
  
  console.log(trie.longestCommonPrefix())
 trie.printAll()
  