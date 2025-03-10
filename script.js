const galleries = {
    redMilk: [
        {type: "image", src: "Pics/RedMilk/Red_Milk.png", alt: "Red Milk"},
        {type: "video", src: "Pics/RedMilk/AI_Video.mp4", alt: "AI of Red Milk"},
        {type: "video", src: "Pics/RedMilk/Audio_Video.mp4", alt: "Audio of Red Milk"},
        {type: "video", src: "Pics/RedMilk/NumLock_Video.mp4", alt: "NumLock in Red Milk"}
    ] ,
    vrGame: [
        {type: "image", src: "Pics/BrewlsBrawls/BrewsBrawls_GR.png", alt: "VR Game"},
        {type: "video", src: "Pics/BrewlsBrawls/Brewls_Brawls.mp4", alt: "VR Game_Video"}
    ],
    rangersReserve: [
        {type: "image", src: "Pics/Rangers_Reserve/Logo.png", alt: "Ranger's Reserve Logo"},
        {type: "image", src: "Pics/Rangers_Reserve/Town.jpeg", alt: "Ranger's Reserve Town"},
        {type: "image", src: "Pics/Rangers_Reserve/Zebras.jpeg", alt: "Ranger's Reserve Zebras"},
        {type: "image", src: "Pics/Rangers_Reserve/Tigers.jpeg", alt: "Ranger's Reserve Tigers"},
        {type: "image", src: "Pics/Rangers_Reserve/Carl.jpeg", alt: "Ranger's Reserve Carl"}
    ],
    jere: [
        {type: "image", src: "Pics/Jere/Jere/Norja_Jere_2.jpeg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_2.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Barca_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Barcelona_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Barcelona_1.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Barcelona_2.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Barcelona_Jere_2.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_1.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_3.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Levi_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Rooma.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_4.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_5.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_6.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_7.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Levi_Jere_2.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Norja_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Rooma_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_8.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Zakynthos.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Zakynthos_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_9.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_10.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Jere_11.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Ruotsi_Jere.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Zakynthos_Jere_2.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Zakynthos_Jere_4.jpg"},
        {type: "image", src: "Pics/Jere/Jere/Zakynthos_Jere_3.jpg"},
    ],
}
let currentGallery = [];
let currentImage = 0;

function openModal(galleryId, index) {
    currentGallery = galleries[galleryId];
    currentIndex = index;
    const modal = document.getElementById('modal');
    updateModalContent(); // Päivitetään sisältö
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Piilotetaan modal
}

function changeMedia(direction) {
    currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
    updateModalContent();
}

function updateModalContent() {
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = ""; // Tyhjennetään aiempi sisältö
    const currentMedia = currentGallery[currentIndex];

    if (currentMedia.type === "image") {
        // Luo kuva-elementti
        const img = document.createElement("img");
        img.src = currentMedia.src;
        img.style.maxWidth = "90vw";  // Maksimikoko 90% näkymän leveydestä
        img.style.maxHeight = "90vh"; // Maksimikoko 90% näkymän korkeudesta
        img.style.objectFit = "contain";
        modalContent.appendChild(img);
    } else if (currentMedia.type === "video") {
        // Luo video-elementti
        const video = document.createElement("video");
        video.src = currentMedia.src;
        video.controls = true;
        video.style.maxWidth = "90vw";  
        video.style.maxHeight = "90vh";  
        modalContent.appendChild(video);
    }
}


document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target === event.currentTarget){
        closeModal();
    }
});