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
    function sumNode(node) {
      if (!node) return 0; // Base case: if the node is null, return 0
      let sum = node.val; // Start with the value of the current node
      for (const child of node.children) {
        sum += sumNode(child); // Add the sum of all children
      }
      return sum;
    }
  
    return sumNode(this.root);
  }
  

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    function countEvenNode(node) {
      if (!node) return 0;
      // Increment if the current node's value is even
      let count = node.val % 2 === 0 ? 1 : 0;
      for (const child of node.children) {
        count += countEvenNode(child); // Add counts from all children
      }
      return count;
    }
  
    return countEvenNode(this.root);
  }
  

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    function countGreaterNode(node) {
      if (!node) return 0;
      // Increment if the current node's value is greater than lowerBound
      let count = node.val > lowerBound ? 1 : 0;
      for (const child of node.children) {
        count += countGreaterNode(child); // Add counts from all children
      }
      return count;
    }
  
    return countGreaterNode(this.root);
  }
  
}

module.exports = { Tree, TreeNode };
