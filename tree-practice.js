const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let currentNode = rootNode;
  let minval = currentNode.val;

  while (currentNode.left != null) {
    console.log(currentNode.val)
    return findMinBST(currentNode.left)
  }

  return minval;
}

function findMaxBST (rootNode) {
  // Your code here
  let currentNode = rootNode;
  let maxVal = currentNode.val;

  while (currentNode.right != null) {
    console.log(maxVal);
    return findMaxBST(currentNode.right)
  }
  console.log("------------------------")
  return maxVal;
}

function findMinBT (rootNode) {
  // Your code here
  let smallest = 1000;
  const stack = [rootNode];

  while(stack.length > 0) {
    let current = stack.pop()

    if (current.val < smallest) smallest = current.val;

    if (current.left != null) stack.push(current.left)
    if (current.right != null) stack.push(current.right)

  }
  return smallest;
}

function findMaxBT (rootNode) {
  // Your code here
  let biggest = 0;
  const stack = [rootNode]

  while (stack.length > 0) {
    let current = stack.pop()

    if (current.val > biggest) biggest = current.val;

    if (current.left != null) stack.push(current.left);
    if (current.right != null) stack.push(current.right);
  }
  return biggest;

}

function getHeight (rootNode) {
  // Your code here
  let current = rootNode;

  if (current === null) return -1;

  left = getHeight(current.left)
  right = getHeight(current.right)

  if (left > right) {
    return left += 1
  } else {
    return right += 1
  }

};

function height(root){
     
  // base condition when binary tree is empty
  if(root == null)
      return 0

  return Math.max(height(root.left), height(root.right)) + 1
}

function balancedTree(root){
     
  // Base condition
  if(root == null)
      return true

  // For left and right subtree height
  let lh = height(root.left)
  let rh = height(root.right)

  // Allowed values for (lh - rh) are 1, -1, 0
  if (Math.abs(lh - rh) <= 1 && balancedTree(
    root.left) == true && balancedTree( root.right) == true)
    return true

  // If we reach here means tree is not height-balanced tree
  return false
}

function countNodes (rootNode) {
  // Your code here
  let total = 1;
  const stack = [rootNode];

  // While stack is not empty
  while(stack.length > 0) {
    let current = stack.pop()

    // Count the left side
    if (current.left != null){
      total += 1;
      stack.push(current.left)
    }
    // Count the right side
    if (current.right != null){
      total += 1;
      stack.push(current.right)
    }
  }
  // Return the total and hit the "That was Easy" button. *Sigh*
  return total;
}

function getParentNode(rootNode, target) {

  const stack = [rootNode];
  if (target === rootNode.val) {
    return null;
  }

  // While stack is not empty
  while(stack.length > 0) {
    let current = stack.pop()

    // Count the left side
    if (current.left != null){
      stack.push(current.left)
      if (current.left.val === target) {
        return current;
      }
    }
    // Count the right side
    if (current.right != null){
      if (current.right.val === target) {
        return current;
      }
      stack.push(current.right)
    }
  }
};




const findMaximum = (root) => {
  while(root.right){
    root = root.right;
  }
  
  return root.val;
}


function inOrderPredecessor (rootNode, target, parent = null) {
    // if this is our target node
    if (target === rootNode.val && rootNode.left) {
  
      return findMaxBST(rootNode.left); // reuse function from prior exercise
    }
    // if we need to look to the left of the current node
  
    if (target < rootNode.val) {
      return inOrderPredecessor(rootNode.left, target, parent);
    }
    // if we need to look to the right of the current node
    if (target > rootNode.val) {
      return inOrderPredecessor(rootNode.right, target, rootNode);
    }
    if (parent) {
      return parent.val;
    }
    return null;
  }


var deleteNodeBST = function(root, key) {

  if (!root) return root;

    
    if (root.val === key){
        if (!root.left && !root.right){
            return null;
        } 
        if (!root.right){
            return root.left;
        }
        const succ = inOrderSuccessor(root.right);
        root.val = succ.val;
        root.right = deleteNodeBST(root.right, succ.val);
        return root;
      } 
    
    if (key < root.val)
        root.left = deleteNodeBST(root.left, key);
    if (key > root.val)
        root.right = deleteNodeBST(root.right, key);

    return root;
};

const inOrderSuccessor = (node) => {
    while(node.left) {
        node = node.left;
    }
    return node;
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
