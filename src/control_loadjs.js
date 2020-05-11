function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = false
    script.src = src
    script.addEventListener('load', resolve)
    script.addEventListener('error', reject)

    document.head.appendChild(script)
  })
}
(async () => {
  try {
    // ссылка на скрипт
    const url = 'https://unpkg.com/react@16/umd/react.production.min.js'
    await loadScript(url)

    alert('загружено')
  } catch (err) {
    alert('ошибка')
  }
})()