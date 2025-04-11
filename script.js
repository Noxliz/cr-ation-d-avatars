// Avatar parts configurations
const faceShapes = ['round', 'square', 'oval', 'heart'];
const eyeTypes = ['normal', 'wide', 'narrow', 'closed'];
const mouthTypes = ['smile', 'neutral', 'frown', 'surprise'];
const hairStyles = ['short', 'long', 'curly', 'bald', 'mohawk'];
const accessories = ['none', 'glasses', 'hat', 'earrings'];
const facialHair = ['none', 'beard', 'mustache', 'goatee'];

// DOM elements
const canvas = document.getElementById('avatarCanvas');
const ctx = canvas.getContext('2d');
const randomizeBtn = document.getElementById('randomize');
const downloadBtn = document.getElementById('download');
const skinColorInput = document.getElementById('skinColor');
const hairColorInput = document.getElementById('hairColor');

// Current avatar state
let currentAvatar = {
    faceShape: 'round',
    eyeType: 'normal',
    mouthType: 'smile',
    hairStyle: 'short',
    skinColor: '#f5d0b9',
    hairColor: '#3a2d1e',
    eyeColor: '#000000',
    accessory: 'none',
    facialHair: 'none',
    bgColor: '#ffffff'
};

// DOM elements
const eyeColorInput = document.getElementById('eyeColor');
const accessoryInput = document.getElementById('accessory');
const facialHairInput = document.getElementById('facialHair');

// Initialize
function init() {
    randomizeBtn.addEventListener('click', generateRandomAvatar);
    downloadBtn.addEventListener('click', downloadAvatar);
    skinColorInput.addEventListener('input', updateSkinColor);
    hairColorInput.addEventListener('input', updateHairColor);
    eyeColorInput.addEventListener('input', updateEyeColor);
    accessoryInput.addEventListener('change', updateAccessory);
    facialHairInput.addEventListener('change', updateFacialHair);
    
    drawAvatar();
}

// Update eye color
function updateEyeColor(e) {
    currentAvatar.eyeColor = e.target.value;
    drawAvatar();
}

// Update accessory
function updateAccessory(e) {
    currentAvatar.accessory = e.target.value;
    drawAvatar();
}

// Update facial hair
function updateFacialHair(e) {
    currentAvatar.facialHair = e.target.value;
    drawAvatar();
}

// Draw the complete avatar
function drawAvatar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background
    ctx.fillStyle = currentAvatar.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    drawFace();
    drawEyes();
    drawMouth();
    drawHair();
    drawFacialHair();
    drawAccessory();
}

// Draw face
function drawFace() {
    ctx.fillStyle = currentAvatar.skinColor;
    
    switch(currentAvatar.faceShape) {
        case 'round':
            ctx.beginPath();
            ctx.arc(150, 150, 120, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'square':
            ctx.fillRect(30, 30, 240, 240);
            break;
        case 'oval':
            ctx.beginPath();
            ctx.ellipse(150, 150, 100, 140, 0, 0, Math.PI * 2);
            ctx.fill();
            break;
    }
}

// Draw eyes
function drawEyes() {
    ctx.fillStyle = currentAvatar.eyeColor;
    
    switch(currentAvatar.eyeType) {
        case 'normal':
            // Left eye
            ctx.beginPath();
            ctx.arc(100, 120, 15, 0, Math.PI * 2);
            ctx.fill();
            // Right eye
            ctx.beginPath();
            ctx.arc(200, 120, 15, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'wide':
            // Left eye
            ctx.beginPath();
            ctx.arc(80, 120, 20, 0, Math.PI * 2);
            ctx.fill();
            // Right eye
            ctx.beginPath();
            ctx.arc(220, 120, 20, 0, Math.PI * 2);
            ctx.fill();
            break;
        case 'narrow':
            // Left eye
            ctx.fillRect(90, 120, 20, 5);
            // Right eye
            ctx.fillRect(190, 120, 20, 5);
            break;
    }
}

// Draw mouth
function drawMouth() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    
    switch(currentAvatar.mouthType) {
        case 'smile':
            ctx.beginPath();
            ctx.arc(150, 180, 40, 0, Math.PI);
            ctx.stroke();
            break;
        case 'neutral':
            ctx.beginPath();
            ctx.moveTo(110, 180);
            ctx.lineTo(190, 180);
            ctx.stroke();
            break;
        case 'frown':
            ctx.beginPath();
            ctx.arc(150, 200, 40, Math.PI, 0, true);
            ctx.stroke();
            break;
    }
}

// Draw accessory
function drawAccessory() {
    if (currentAvatar.accessory === 'none') return;
    
    ctx.fillStyle = '#555';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    
    switch(currentAvatar.accessory) {
        case 'glasses':
            // Left lens
            ctx.beginPath();
            ctx.arc(100, 120, 25, 0, Math.PI * 2);
            ctx.stroke();
            // Right lens
            ctx.beginPath();
            ctx.arc(200, 120, 25, 0, Math.PI * 2);
            ctx.stroke();
            // Bridge
            ctx.beginPath();
            ctx.moveTo(125, 120);
            ctx.lineTo(175, 120);
            ctx.stroke();
            break;
        case 'hat':
            ctx.beginPath();
            ctx.moveTo(50, 80);
            ctx.lineTo(250, 80);
            ctx.lineTo(220, 30);
            ctx.lineTo(80, 30);
            ctx.closePath();
            ctx.fill();
            break;
        case 'earrings':
            // Left earring
            ctx.beginPath();
            ctx.arc(50, 150, 8, 0, Math.PI * 2);
            ctx.fill();
            // Right earring
            ctx.beginPath();
            ctx.arc(250, 150, 8, 0, Math.PI * 2);
            ctx.fill();
            break;
    }
}

// Draw facial hair
function drawFacialHair() {
    if (currentAvatar.facialHair === 'none') return;
    
    ctx.fillStyle = currentAvatar.hairColor;
    
    switch(currentAvatar.facialHair) {
        case 'beard':
            ctx.beginPath();
            ctx.arc(150, 200, 60, 0, Math.PI, true);
            ctx.fill();
            break;
        case 'mustache':
            ctx.fillRect(120, 190, 60, 10);
            break;
        case 'goatee':
            ctx.beginPath();
            ctx.moveTo(140, 190);
            ctx.lineTo(150, 220);
            ctx.lineTo(160, 190);
            ctx.fill();
            break;
    }
}

// Draw hair
function drawHair() {
    ctx.fillStyle = currentAvatar.hairColor;
    
    switch(currentAvatar.hairStyle) {
        case 'short':
            ctx.beginPath();
            ctx.arc(150, 150, 120, 0, Math.PI * 2);
            ctx.fill();
            // Cut off bottom part
            ctx.fillStyle = currentAvatar.skinColor;
            ctx.fillRect(30, 150, 240, 120);
            break;
        case 'long':
            ctx.beginPath();
            ctx.arc(150, 150, 120, 0, Math.PI * 2);
            ctx.fill();
            // Long hair down
            ctx.fillRect(60, 150, 180, 100);
            break;
        case 'curly':
            for (let i = 0; i < 10; i++) {
                const x = 30 + Math.random() * 240;
                const y = 30 + Math.random() * 60;
                const radius = 20 + Math.random() * 30;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
        case 'bald':
            // No hair
            break;
    }
}

// Generate random avatar
function generateRandomAvatar() {
    currentAvatar.faceShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
    currentAvatar.eyeType = eyeTypes[Math.floor(Math.random() * eyeTypes.length)];
    currentAvatar.mouthType = mouthTypes[Math.floor(Math.random() * mouthTypes.length)];
    currentAvatar.hairStyle = hairStyles[Math.floor(Math.random() * hairStyles.length)];
    currentAvatar.skinColor = getRandomColor();
    currentAvatar.hairColor = getRandomColor();
    currentAvatar.eyeColor = getRandomColor();
    currentAvatar.accessory = accessories[Math.floor(Math.random() * accessories.length)];
    currentAvatar.facialHair = facialHair[Math.floor(Math.random() * facialHair.length)];
    
    skinColorInput.value = currentAvatar.skinColor;
    hairColorInput.value = currentAvatar.hairColor;
    eyeColorInput.value = currentAvatar.eyeColor;
    accessoryInput.value = currentAvatar.accessory;
    facialHairInput.value = currentAvatar.facialHair;
    
    drawAvatar();
}

// Helper function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Update skin color
function updateSkinColor(e) {
    currentAvatar.skinColor = e.target.value;
    drawAvatar();
}

// Update hair color
function updateHairColor(e) {
    currentAvatar.hairColor = e.target.value;
    drawAvatar();
}

// Download avatar
function downloadAvatar() {
    const link = document.createElement('a');
    link.download = 'mon-avatar.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
}

// Initialize the app
window.onload = init;
