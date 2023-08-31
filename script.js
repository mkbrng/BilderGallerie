let images = ['image0', 'image1','image2', 'image3', 'image4', 'image5']


function load() {
    document.getElementById('container').innerHTML = '' 
    for (i=0; i < images.length;i++) {
        document.getElementById('container').innerHTML += ` 
        <div onclick="openImage(${i})" class="imgbox">
        <img src="./img/image${i}.jpg"/>
        </div>
        `;
    
}
}

function openImage(i) {
    document.getElementById('container').innerHTML = '';
    document.getElementById('container').innerHTML += `<div onclick="closeImage(${i})" 
    class="showPicture" >
    <img src="./img/image${i}.jpg"/>
    </div>` 
}

function closeImage(i) {
    load()
}