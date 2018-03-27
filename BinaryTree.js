class BinaryTree {

    constructor() {
        this.root = null
    }

    _initNode(key) {
        return {
            key: key,
            left: null,
            right: null
        }
    }

    _insertNode(node, newNode) {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this._insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode)
            }
        }
    }

    insert(key) {
        let newNode = this._initNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }

    get() {
        return this.root
    }

    each(node, fn) {//中序遍历
        if (node) {
            this.each(node.left, fn)
            fn(node.key)
            this.each(node.right, fn)
        }
    }
    before(node, fn) {//前序遍历
        if (node) {
            fn(node.key)
            this.before(node.left, fn)
            this.before(node.right, fn)
        }
    }
    after(node, fn) {//后序遍历
        if (node) {
            this.after(node.left, fn)
            this.after(node.right, fn)
            fn(node.key)
        }
    }
    dir() {
        let arr = []
        this.after(this.root, function (key) {
            arr.push(key)
        })
        // this.each(this.root, function (key) {
        //     arr.push(key)
        // })
        return arr
    }
}

let tree = new BinaryTree()
let nodes = [2, 10, 5, 78, 1, 90, 7, 3, 89]
nodes.forEach(key => {
    tree.insert(key)
})

console.log(tree.get())
console.log(tree.dir())

