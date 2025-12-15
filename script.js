// --- وظيفة تشغيل السلايدر (Carousel) للتلاشي (Fade) ---

const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

function fadeImages() {
    // إخفاء الصورة الحالية
    items[currentIndex].classList.remove('active');

    // تحديث الفهرس
    currentIndex++;
    
    // العودة إلى البداية عند الوصول للنهاية
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    
    // إظهار الصورة الجديدة
    items[currentIndex].classList.add('active');
}

// تشغيل وظيفة التغيير كل 3 ثواني
setInterval(fadeImages, 2000); 

// --- تحديث السنة في الفوتر تلقائياً ---
document.getElementById('currentYear').textContent = new Date().getFullYear();