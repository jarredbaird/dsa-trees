/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    const sumTraverse = (node, stack, total = 0) => {
      if (node) stack.push(node);
      // Base Case
      if (stack.length === 0) return total;
      // Normal Case
      total += stack[0].val;
      const nodeBabies = stack.shift().children;
      stack = [...stack, ...nodeBabies];
      return sumTraverse(null, stack, total);
    };
    return sumTraverse(this.root, []);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    const evenTraverse = (node, stack, total = 0) => {
      if (node) stack.push(node);
      // Base Case
      if (stack.length === 0) return total;
      // Normal Case
      total = stack[0].val % 2 ? total : total + 1;
      const nodeBabies = stack.shift().children;
      stack = [...stack, ...nodeBabies];
      return evenTraverse(null, stack, total);
    };
    return evenTraverse(this.root, []);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    const boundTraverse = (node, stack, total = 0) => {
      if (node) stack.push(node);
      // Base Case
      if (stack.length === 0) return total;
      // Normal Case
      total = stack[0].val > lowerBound ? total + 1 : total;
      const nodeBabies = stack.shift().children;
      stack = [...stack, ...nodeBabies];
      return boundTraverse(null, stack, total);
    };
    return boundTraverse(this.root, []);
  }
}

module.exports = { Tree, TreeNode };
