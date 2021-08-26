window.onload = () => {
  const hash = location.hash
  if(hash) document.querySelector(`${hash}`).scrollIntoView()
}