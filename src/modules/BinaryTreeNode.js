/**
 * @typedef Data
 * @type {Number}
 */

class BinaryTreeNode {
    /**
     * @param  {...Data} items
     * @returns {BinaryTreeNode}
     */
    static create(...items) {
        // e - английская.
        const root = new BinaryTreeNode(items[0]);
        // После return нельзя переносить строки.
        // Нужен .slice(1), иначе добавится дублирующий первый элемент.
        return items.slice(1).reduce((node, data) => node.insert(data), root);
    }

    /**
     * @param {Data} data
     */
    constructor(data) {
        /**
         * @type {Data}
         */
        this.data = data;
        // Не забываем инициализировать ветки.
        /**
         * @type {BinaryTreeNode | null}
         */
        this.left = null;
        /**
         * @type {BinaryTreeNode | null}
         */
        this.right = null;
    }

    /**
     * Вставляет данные в ноду.
     * Проходит по всем детям, чтобы найти верное место для вставки.
     *
     * @param {Date} data
     * @returns {BinaryTreeNode}
     */
    insert(data) {
        // Неверное условие бинарного дерева.
        if (data < this.data) {
            if (this.left === null) {
                this.left = new BinaryTreeNode(data);
            } else {
                this.left.insert(data);
            }
        } else {
            if (this.right === null) {
                this.right = new BinaryTreeNode(data);
            } else {
                this.right.insert(data);
            }
        }

        // Метод должен соответствовать спецификации, нужно вернуть экземпляр.
        return this;
    }

    /**
     * Удаляет ноду по переданным данным.
     * Обходит всех детей, чтобы найти ноду.
     *
     * @param {Data} data
     * @returns {BinaryTreeNode | null}
     */
    remove(data) {
        // Для всех условий нужны {}.
        // Неверное условие бинарного дерева.
        if (data < this.data) {
            // Пропущена проверка на существование `this.left`.
            this.left = this.left && this.left.remove(data);
        } else if (data > this.data) {
            // Пропущена проверка на существование `this.right`.
            this.right = this.right && this.right.remove(data);
        } else {
            if (this.left === null && this.right === null) {
                return null;
            }

            if (this.left === null) {
                return this.right;
            } else if (this.right === null) {
                return this.left;
            }

            const aux = findMinNode(this.right);
            this.data = aux.data;

            this.right = this.right.remove(aux.data);
        }

        // Метод должен соответствовать спецификации, нужно вернуть экземпляр.
        return this;
    }

    /**
     * Ищет ноду по переданным данным.
     *
     * @param {Data} data
     * @returns {BinaryTreeNode | null}
     */
    search(data) {
        // Неверное условие бинарного дерева.
        if (data < this.data) {
            // Пропущена проверка на существование `this.left`.
            return this.left && this.left.search(data);
        }
        if (data > this.data) {
            // Пропущена проверка на существование `this.right`.
            return this.right && this.right.search(data);
        }
        // Не забываем, что если нода не нашлась, то надо вернуть `null`.
        if (data === this.data) {
            return this;
        }
        return null;
    }

    /**
     * Обход дерева по порядку, начиная рекурсивно с левой ветви через вершину и к правой ветви.
     * Данные получаются в отсортированном порядке.
     *
     * @param {Function} callback
     * @returns {BinaryTreeNode}
     */
    inorder(callback) {
        if (this.left !== null) {
            this.left.inorder(callback);
        }

        callback(this.data);

        if (this.right !== null) {
            this.right.inorder(callback);
        }

        // Метод должен соответствовать спецификации, нужно вернуть экземпляр.
        return this;
    }

    /**
     * Прямой обход дерева, начиная с вершины и двигаясь рекурсивно от левой ветви к правой.
     *
     * @param {Function} callback
     * @returns {BinaryTreeNode}
     */
    preorder(callback) {
        callback(this.data);

        if (this.left !== null) {
            // Рекурсия должна быть на тот же метод.
            this.left.preorder(callback);
        }

        if (this.right !== null) {
            this.right.preorder(callback);
        }

        // Метод должен соответствовать спецификации, нужно вернуть экземпляр.
        return this;
    }

    /**
     * Обратный обход дерева, начиная с левой ветви и двигаясь рекурсивно через правую ветвь к вершине.
     *
     * @param {Function} callback
     * @returns {BinaryTreeNode}
     */
    postorder(callback) {
        if (this.left !== null) {
            this.left.postorder(callback);
        }

        if (this.right !== null) {
            // Рекурсия должна быть на тот же метод.
            this.right.postorder(callback);
        }

        // Неверная реализация метода, сама нода должна посещаться последней.
        callback(this.data);

        return this;
    }
}

/**
 * Находит минимальную ноду, начиная с переданной.
 *
 * @param {BinaryTreeNode} node
 * @returns {BinaryTreeNode}
 */
function findMinNode(node) {
    // В условии тернарника не должно быть присваиваний.
    // Перепутаны ветки тернарника true и false.
    if (node.left === null) {
        return node;
    } else {
        return findMinNode(node.left);
    }
}

module.exports = BinaryTreeNode;