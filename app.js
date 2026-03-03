// app.js

// 1. Resources for i18next
const resources = {
    en: {
        translation: {
            "gov_india": "Government of India",
            "skip_content": "Skip to Main Content",
            "screen_reader": "Screen Reader",
            "contrast": "Contrast",
            "rbsk_full": "Rashtriya Bal Swasthya Karyakram",
            "hero_h1": "Healthy Kids, <br> Stronger India",
            "hero_p": "RBSK ensures universal health screening for children from birth to 18 years.",
            "about_tag": "About the Program",
            "about_h3": "Comprehensive Care from Birth to 18 Years.",
            "about_p": "Rashtriya Bal Swasthya Karyakram (RBSK) is a program for early identification of health conditions.",
            "copyright_text": "© 2026 RBSK Portal. All Rights Reserved.",
            "ownership_text": "This site is owned by the National Health Mission (NHM), Ministry of Health and Family Welfare, Government of India.",            
            "footer_about_title": "About RBSK",
            "footer_about_desc": "A flagship program under NHM for comprehensive care of children in the community.",
            "about_us" : "About Us",
            "copyright_policy" : "Copyright Policy",
            "hyperlinking_policy" : "Hyper Linking Policy",
        }
    },
    hi: {
        translation: {
            "gov_india": "भारत सरकार",
            "skip_content": "मुख्य सामग्री पर जाएं",
            "screen_reader": "स्क्रीन रीडर",
            "contrast": "कंट्रास्ट",
            "rbsk_full": "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम",
            "hero_h1": "स्वस्त बच्चे, <br> सशक्त भारत",
            "hero_p": "आरबीएसके जन्म से 18 वर्ष तक के बच्चों के लिए सार्वभौमिक स्वास्थ्य जांच सुनिश्चित करता है।",
            "about_tag": "कार्यक्रम के बारे में",
            "about_h3": "जन्म से 18 वर्ष तक व्यापक देखभाल।",
            "about_p": "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम (RBSK) स्वास्थ्य स्थितियों की शीघ्र पहचान के लिए एक कार्यक्रम है।",
            "copyright_text": "© 2026 आरबीएसके पोर्टल। सर्वाधिकार सुरक्षित।",
            "ownership_text": "यह साइट राष्ट्रीय स्वास्थ्य मिशन (NHM), स्वास्थ्य और परिवार कल्याण मंत्रालय, भारत सरकार के स्वामित्व में है।"

        }
    }
};

// 2. Initialize i18next
i18next.init({
    lng: 'en', // default language
    resources
}, function(err, t) {
    updateContent();
});

// Function to update content
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
    });
}





window.changeFontSize = function(size, btnElement) {
    // 1. Body ka font size change karein
    const body = document.body;
    if (size === 'small') body.style.fontSize = '14px';
    else if (size === 'normal') body.style.fontSize = '16px';
    else if (size === 'large') body.style.fontSize = '20px';

    // 2. Active class ko shift karne ka logic
    if (btnElement) {
        // Step A: Pehle check karein ki koi bhi button active hai ya nahi, aur use hatayein
        const allButtons = document.querySelectorAll('.font-btn');
        allButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Step B: Ab clicked button par active class lagayein
        btnElement.classList.add('active');
    }
};


// Function to load components
function loadComponent(id, file) {
    fetch(file)
        .then(response => {
            if (response.ok) return response.text();
            throw new Error('File not found');
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

// Dono components ko call karein
window.onload = function() {
    loadComponent('header-placeholder', 'header.html');
    loadComponent('footer-placeholder', 'footer.html');
};