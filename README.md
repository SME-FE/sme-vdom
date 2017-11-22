# sme-vdom

a simple virtual dom lib

## start 🤕

```s
npm i
```

```s
npm run dev
```

open `http://localhost:8080/`

- build with webpack

```s
npm run build
```

- build with rollup

```s
npm run build:rollup
```

## live demo 🤓

[demooooo](https://sme-fe.github.io/sme-vdom/)

## example 👾

```js
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
      // tag 可缺省，默认为 div 标签
      style: 'color: #606c76;  padding-left: 16px;',
      text: '== (○´･д･)ﾉ 暴力膜不可取 =='
    }
  ]
}

const tree = new VirtualDom(newDom)
const $dom = tree.render()
const $app = document.querySelector('#app')
$app.replaceWith($dom)
```

## refrence 🐱‍

inspired by [simple-virtual-dom](https://github.com/livoras/simple-virtual-dom)
