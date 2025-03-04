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
            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "contain";
            modalContent.appendChild(img);
        } else if (currentMedia.type === "video") {
            // Luo video-elementti
            const video = document.createElement("video");
            video.src = currentMedia.src;
            video.controls = true;
            video.style.width = "100%";
            video.style.height = "100%";
            modalContent.appendChild(video);
        }
    }

document.getElementById('modal').addEventListener('click', (event) => {
    if (event.target === event.currentTarget){
        closeModal();
    }
});