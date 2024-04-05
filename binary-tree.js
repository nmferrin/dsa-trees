/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
  function findMinDepth(node) {
    if (node === null) return 0;
    // If it's a leaf node, return 1
    if (node.left === null && node.right === null) return 1;
    // If only one child is null, we must continue down the path with the child
    if (node.left === null) return findMinDepth(node.right) + 1;
    if (node.right === null) return findMinDepth(node.left) + 1;
    // Return the minimum of the depths of the subtrees + 1
    return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
  }

  return findMinDepth(this.root);
}


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    function findMaxDepth(node) {
      if (node === null) return 0;
      // Calculate the depth of each subtree and add 1 for the current node
      return 1 + Math.max(findMaxDepth(node.left), findMaxDepth(node.right));
    }
  
    return findMaxDepth(this.root);
  }
  

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let globalMaxSum = -Infinity;
  
    function findMaxSum(node) {
      if (node === null) return 0;
      const leftSum = Math.max(0, findMaxSum(node.left));
      const rightSum = Math.max(0, findMaxSum(node.right));
      // Calculate max path sum passing through the current node
      const currentMaxSum = node.val + leftSum + rightSum;
      // Update global maximum if needed
      globalMaxSum = Math.max(globalMaxSum, currentMaxSum);
      // Return the maximum sum path of the current node's children plus the node's value
      return node.val + Math.max(leftSum, rightSum);
    }
  
    findMaxSum(this.root);
    return globalMaxSum;
  }
  

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    let result = null;
  
    function traverse(node) {
      if (node === null) return;
      if (node.val > lowerBound) {
        if (result === null || node.val < result) {
          result = node.val;
        }
      }
      traverse(node.left);
      traverse(node.right);
    }
  
    traverse(this.root);
    return result;
  }
  

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    let info = {}; // Store depth and parent for each node
  
    function dfs(node, parent = null, depth = 0) {
      if (node === null) return;
      info[node.val] = { parent, depth };
      dfs(node.left, node, depth + 1);
      dfs(node.right, node, depth + 1);
    }
  
    dfs(this.root);
    return (info[node1.val].depth === info[node2.val].depth) && (info[node1.val].parent !== info[node2.val].parent);
  }
  

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
