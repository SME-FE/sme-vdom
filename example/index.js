import './main.scss'
import VirtualDom from '@/index'
import logInfo from './utils/log-info'

logInfo()

const oldDom = {
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
          className: 'p1',
          text: 'too young'
        },
        {
          tag: 'p', // 4
          className: 'p2',
          text: 'too simple'
        },
        {
          tag: 'p', // 5
          className: 'p3',
          style: 'color: #f36b6b;',
          text: '+1s +1s +1s'
        },
        {
          tag: 'p', // 6
          className: 'p4',
          text: 'some time nativeeee'
        }
      ]
    },
    {
      tag: 'footer', // 7
      text: '@power by hwen <hwenleung@gmail.com>'
    }
  ]
}

const newDom = {
  tag: 'div',
  children: [
    {
      tag: 'h1',
      className: 'header',
      style: 'color: #7d7df1; padding-left: 16px;',
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
          className: 'p1',
          text: 'too young'
        },
        {
          tag: 'p',
          className: 'p2',
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
      text: '== (○´･д･)ﾉ 暴力膜不可取 =='
    }
  ]
}

const tree = new VirtualDom(oldDom)
const $dom = tree.render()
const $app = document.querySelector('#app')
$app.replaceWith($dom)

tree.update($dom, newDom)
