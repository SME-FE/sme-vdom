import './main.scss'
import VirtualDom from '@/index'

const tree = new VirtualDom({
  tag: 'div', // 0
  children: [
    {
      tag: 'h1', // 1
      className: 'header',
      style: 'color: #f36b6b; padding-left: 16px;',
      text: 'Hi there ~'
    },
    {
      tag: 'section', // 2
      className: 'content',
      style: 'color: #606c76; padding-left: 16px;',
      text: 'Hallo, vdom content ~~',
      children: [
        {
          tag: 'p', // 3
          text: 'too young'
        },
        {
          tag: 'p', // 4
          text: 'too simple'
        },
        {
          tag: 'p', // 5
          style: 'color: #f36b6b;',
          text: '+1s +1s +1s'
        },
        {
          tag: 'p', // 6
          text: 'some time nativeeee'
        }
      ]
    },
    {
      tag: 'footer', // 7
      text: '@power by hwen <hwenleung@gmail.com>'
    }
  ]
})

const $dom = tree.render()
const $app = document.querySelector('#app')
$app.replaceWith($dom)

tree.update($dom, {
  tag: 'div',
  children: [
    {
      tag: 'h1',
      className: 'header',
      style: 'color: blue; padding-left: 16px;',
      text: 'Hii ~'
    },
    {
      tag: 'section',
      className: 'content',
      style: 'color: #606c76;  padding-left: 16px;',
      text: 'Hallo, vdom content ~~',
      children: [
        {
          tag: 'p',
          text: 'too young'
        },
        {
          tag: 'p',
          text: 'some time nativeeee'
        }
      ]
    },
    {
      tag: 'footer',
      style: 'margin: 20px 16px;',
      text: '@power by hwen <hwenleung@gmail.com>'
    },
    {
      style: 'color: #606c76;  padding-left: 16px;',
      text: '============= (○´･д･)ﾉ 暴力膜不可取 ============='
    }
  ]
})
