//Given the root of a binary tree, invert the tree, and return its root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = (root) => {
  if (root === null) return null;

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};
