class _Node {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if(this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while(tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null)
        }
    }

    insertBefore(newItem, beforeItem) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }
        let currNode = this.head
        let prevNode = this.head
        
        while(currNode !== null && currNode.value !== beforeItem) {
            prevNode = currNode
            currNode = currNode.next
        }

        if(currNode === null) {
            this.insertLast(newItem)
            return
        }

        const tempNode = new _Node(newItem, currNode)

        prevNode.next = tempNode
    }

    insertAfter(newItem, afterItem) {
        if(this.head === null) {
            this.insertFirst(newItem)
            return
        }

        let currNode = this.find(afterItem)

        if(currNode === null) {
            this.insertLast(newItem)
            return
        }

        const tempNode = new _Node(newItem, currNode.next)

        currNode.next = tempNode
    }

    insertAt(item, position) {
        if(this.head === null) {
            this.insertFirst(item)
            return
        }

        let currNode = this.head
        let currPosition = 1

        while(currPosition < position - 1) {
            currNode = currNode.next
            currPosition++
        }

        const tempNode = new _Node(item, currNode.next)

        currNode.next = tempNode
    }

    find(item) {
        //start at the head
        let currNode = this.head;
        //if the list is empty
        if(!this.head) {
            return null;
        }
        //check for item
        while(currNode.value !== item) {
            //return null if it's the end of the list and the item is not on the list
            if(currNode.next === null) {
                return null;
            } else {
                //keep looking
                currNode = currNode.next
            }
        }
        //when found
        return currNode;

    }
    
    remove(item) {
        //if empty
        if(!this.head) {
            return null;
        }
        //if item is head, make next node the head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if(currNode === null) {
            console.log('Item not found')
            return;
        }
        previousNode.next = currNode.next
    }
}

displayList = (list) => {
    
    let currNode = list.head
    while(currNode !== null) {
        console.log(currNode.value)
        currNode = currNode.next
    }
}

size = (list) => {
    let size = 0
    let currNode = list.head
    while(currNode !== null) {
        size++
        currNode = currNode.next
    }
    console.log(size)
}

findPrevious = (item, list) => {
    if(list.head === null) {
        console.log('list is empty')
        return
    }
    let currNode = list.head
    let prevNode = list.head

    while(currNode !== null && currNode.value !== item) {
        prevNode = currNode
        currNode = currNode.next
    }
    if(currNode === null) {
        console.log('item not found')
        return
    }
    console.log(prevNode.value)
}

findLast = (list) => {
    if(list.head === null) {
        return 'list is empty'
    }
    let currNode = list.head
    while(currNode.next !== null) {
        currNode = currNode.next
    }
    console.log(currNode.value)
}

reverseList = (list) => {
    let currNode = list.head
    let prevNode = list.head
    let nextNode = list.head

    while(nextNode !== null) {
        if(currNode === prevNode) {
            currNode.next === null
        } else {
            currNode.next = prevNode
        }
        prevNode = currNode
        currNode = nextNode
        nextNode = nextNode.next
    }
    return prevNode
    
}

main = () => {
    const SLL = new LinkedList()

    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    SLL.insertLast('Tauhida')
    SLL.find('Husker')
    SLL.remove('Husker')

    displayList(SLL)
    size(SLL)
    findPrevious('Helo', SLL)
    findLast(SLL)
    reverseList(SLL)
}

main()

isEmpty =(list) => {
    if(list.head === null) {
        return true
    } else {
        return false
    }
}

