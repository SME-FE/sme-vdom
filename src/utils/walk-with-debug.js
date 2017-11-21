import { diffType } from './constant'

/**
 * 因为是测试用的，所以就全部写在一个文件了。。。。。
 * debugger example utils
 */
const logSome = (info) => {
  console.log(`%c${info}`, 'color: #8b80f9;font-weight:bold;')
}

const shakingMeee = [
  'Sadly I will be removed by tree shaking...',
  'TAT',
  'QAQ',
  'TUT',
  'QvQ'
]

logSome(shakingMeee.join(', '))

const typeDescription = {
  NODE_DELETE: '删除节点',
  NODE_TEXT_MODIFY: '更新节点内容',
  NODE_REPLACE: '替换节点',
  NODE_ADD: '添加节点',
  NODE_ATTRIBUTE_MODIFY: '更新节点属性',
  NODE_ATTRIBUTE_ADD: '新增节点属性',
  NODE_ATTRIBUTE_DELETE: '删除节点属性'
}
const updateWalkInfo = ($node, type) => {
  const info = `=>  ${$node.nodeName}.${$node.className} do ${typeDescription[type]}`
  logSome(info)
  if (!window._walkInfo) window._walkInfo = '=>  <(￣︶￣)↗[GO!] \n => see [console] for more detail'
  window._walkInfo += `\n${info}`
}

/**
 * debug wrapper
 */
let walkedList = []
export default function dfsWalkDebugger ($node, index, patches, isEnd = false) {
  dfsWalk($node, index, patches, isEnd)
  let i = 0
  console.log(walkedList)
  let walkLater = setInterval(() => {
    if (i === walkedList.length) { 
      clearInterval(walkLater)
      return
    }
    const item = walkedList[i]
    operator(item.node, item.patch)
    i++
  }, 1500)

  function operator ($node, p) {
    updateWalkInfo($node, p.type)
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
  }
}

function dfsWalk ($node, index, patches, isEnd = false) {
  if (patches[index.value]) {
    patches[index.value].forEach(p => {
      if (p.key) {
        p.key = p.key === 'className' ? 'class' : p.key
      }
      if (!isEnd) {
        walkedList.push({
          node: $node,
          patch: p
        })
      }
      // switch (p.type) {
      //   case diffType.NODE_ATTRIBUTE_MODIFY: {
      //     $node.setAttribute(p.key, p.value)
      //     break
      //   }
      //   case diffType.NODE_ATTRIBUTE_DELETE: {
      //     $node.removeAttribute(p.key.toLowerCase())
      //     break
      //   }
      //   case diffType.NODE_ATTRIBUTE_ADD: {
      //     $node.setAttribute(p.key, p.value)
      //     break
      //   }
      //   case diffType.NODE_ADD: {
      //     $node.appendChild(p.value.render())
      //     break
      //   }
      //   case diffType.NODE_TEXT_MODIFY: {
      //     $node.textContent = p.value
      //     break
      //   }
      //   case diffType.NODE_REPLACE: {
      //     $node.replaceWith(p.value.render())
      //     break
      //   }
      //   case diffType.NODE_DELETE: {
      //     $node.remove()
      //     break
      //   }
      //   default: {
      //     console.error(p)
      //   }
      // }
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

function markActiveNode($node, type) {
  $node.setAttribute()
}
