import { diffType } from './utils/constant'
import walkWithDebug from './utils/walk-with-debug'

export default patch

function patch ($dom, patches) {
  const index = { value: 0 }
  if (process.env.NODE_ENV === 'debug') {
    walkWithDebug($dom, index, patches)
  } else {
    dfsWalk($dom, index, patches)
  }
}

function dfsWalk ($node, index, patches, isEnd = false) {
  if (patches[index.value]) {
    patches[index.value].forEach(p => {
      if (p.key) {
        p.key = p.key === 'className' ? 'class' : p.key
      }
      switch (p.type) {
        case diffType.NODE_ATTRIBUTE_MODIFY: {
          $node.setAttribute(p.key, p.value)
          break
        }
        case diffType.NODE_ATTRIBUTE_DELETE: {
          $node.removeAttribute(p.key.toLowerCase())
          break
        }
        case diffType.NODE_ATTRIBUTE_ADD: {
          $node.setAttribute(p.key, p.value)
          break
        }
        case diffType.NODE_ADD: {
          $node.appendChild(p.value.render())
          break
        }
        case diffType.NODE_TEXT_MODIFY: {
          $node.textContent = p.value
          break
        }
        case diffType.NODE_REPLACE: {
          $node.replaceWith(p.value.render())
          break
        }
        case diffType.NODE_DELETE: {
          $node.remove()
          break
        }
        default: {
          console.error(p)
        }
      }
    })
  }

  if (isEnd) return
  if ($node.children.length > 0) {
    // in case $node children will add or delete that the length will be changed
    const cacheChildren = []
    for (let i = 0; i < $node.children.length; i++) {
      cacheChildren.push($node.children[i])
    }
    for (let i = 0; i < cacheChildren.length; i++) {
      index.value++
      dfsWalk(cacheChildren[i], index, patches)
    }
  } else {
    dfsWalk($node, index, patches, true)
  }
}
