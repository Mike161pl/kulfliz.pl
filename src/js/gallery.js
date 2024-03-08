const fullImgBox = document.querySelector('.full-img')
const fullImg = document.querySelector('.gallery__full-img')
const closeBtn=document.querySelector('.full-img-close')
const img=document.querySelectorAll('.gallery__image')


const openFullImg = (pic) => {
    const picture=pic.target.src
	fullImgBox.style.display = 'flex'
	fullImg.src = picture
}
const closeFullImg=()=>{
    fullImgBox.style.display='none'
}

img.forEach(element => {
    element.addEventListener('click', openFullImg);

});
fullImg.addEventListener('click',closeFullImg)
closeBtn.addEventListener('click',closeFullImg)