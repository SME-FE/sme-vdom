
export default function updateWalkInfo () {
  const $infoBox = document.querySelector('.info-box')
  setInterval(() => {
    const infoList = window._walkInfo && window._walkInfo.split('\n')
    $infoBox.innerHTML = ''
    infoList && infoList.forEach(content => {
      $infoBox.innerHTML += `<p>${content}</p>`
    })
  }, 500)
}
