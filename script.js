window.onload = () => {
  const hash = location.hash
  document.querySelector(`${hash}`).scrollIntoView()
}