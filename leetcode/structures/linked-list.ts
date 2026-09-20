class NodeInstance<T> {
	element: T;
	next: NodeInstance<T> | null;

	constructor(element: T) {
		this.element = element;
		this.next = null;
	}
}

class LinkedList<T = string> {
	head: NodeInstance<T | string>;

	constructor() {
		this.head = new NodeInstance<T | string>('head');
	}

	find(item: T | string): NodeInstance<T | string> | null {
		let currentNode: NodeInstance<T | string> | null = this.head;

		while (currentNode !== null && currentNode.element !== item) {
			currentNode = currentNode.next;
		}

		return currentNode;
	}

	insert(newElement: T, item: T | string): void {
		const currentNode = this.find(item);

		if (!currentNode) {
			return;
		}

		const newNode = new NodeInstance<T | string>(newElement);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
	}

	display(): void {
		let currentNode: NodeInstance<T | string> | null = this.head;

		while (currentNode && currentNode.next) {
			console.log(currentNode.next.element);
			currentNode = currentNode.next;
		}
	}
}

const list = new LinkedList();
list.insert('1', 'head');
list.insert('2', '1');
list.insert('3', '2');
list.display();
