const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const videos = document.querySelectorAll('video')
videos.forEach(video => {
    video.addEventListener('click', e => {
        lightbox.classList.add('active')
        const vid = document.createElement('video')
        vid.src = video.src 
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(vid)
    })
})

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})



for(i = 0; i < videos.length; i++){
    videos[i].id = i + 1
}


