// app.js
// website contrast
window.toggleContrast = function() {
    document.body.classList.toggle('high-contrast');
};

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
            "copyright_policy":"copyright policy",  
            "hyperlinking_policy":"Hyperlinking Policy" ,  
            "last_updated":'Last Updated',      
            "footer_about_title": "About RBSK",
            "footer_about_desc": "A flagship program under NHM for comprehensive care of children in the community.",
            "home": "Home",
            "about_us": "About Us",
            "gallery": "Gallery",
            "find_phc": "Find PHC",
            "contact_us": "Contact Us",
            "search_phc": "Find Nearest PHC",
            "select_state": "Select State",            
            "about_rbsk": "About RBSK",
            "program_overview": "Program Overview",
            "operational_guidelines": "Operational Guidelines",
            "hero_title": "Empowering the Future:",
            "rbsk_name": "Rashtriya Bal Swasthya Karyakram",
            "hero_description":"The Ministry of Health & Family Welfare, Government of India, under the National Health Mission, launched RBSK—an innovative initiative which envisages Child Health Screening and Early Intervention Services.",
            "rbsk_mission_statement": "RBSK is a unique program aimed at improving the overall quality of life of children, enabling them to achieve their full potential by providing comprehensive care in the community. It involves screening of children from birth to 18 years for 4 Ds—Defects at birth, Diseases, Deficiencies, and Developmental delays—covering 32 common health conditions for early detection, free treatment, and necessary interventions, including surgeries at tertiary levels.",
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
            "ownership_text": "यह साइट राष्ट्रीय स्वास्थ्य मिशन (NHM), स्वास्थ्य और परिवार कल्याण मंत्रालय, भारत सरकार के स्वामित्व में है।",
            "footer_about_title": "आरबीएसके के बारे में",
            "footer_about_desc":"कम्युनिटी में बच्चों की पूरी देखभाल के लिए NHM के तहत एक फ्लैगशिप प्रोग्राम।",
            "home": "होम",
            "copyright_policy":"कॉपीराइट नीति",
            "hyperlinking_policy":"हाइपरलिंकिंग नीति" , 
            "last_updated":'अंतिम अपडेट',
            "about_us": "हमारे बारे में",
            "gallery": "Gallery",
            "find_phc": "पीएचसी खोजें",
            "contact_us": "संपर्क करें",
            "search_phc": "नजदीकी पीएचसी खोजें",
            "select_state": "राज्य चुनें",
            "about_rbsk": "आरबीएसके के बारे में",
            "program_overview": "कार्यक्रम विवरण",
            "operational_guidelines": "परिचालन दिशानिर्देश",
            "about_rbsk": "आरबीएसके के बारे में",
            "program_overview": "कार्यक्रम विवरण",
            "operational_guidelines": "परिचालन दिशानिर्देश",
            "gallery": "गैलरी",
            "hero_title": "भविष्य को सशक्त बनाना",
            "rbsk_name": "राष्ट्रीय बाल स्वास्थ्य कार्यक्रम",
            "hero_description": "स्वास्थ्य एवं परिवार कल्याण मंत्रालय, भारत सरकार ने राष्ट्रीय स्वास्थ्य मिशन के तहत RBSK की शुरुआत की—एक अभिनव पहल जो बाल स्वास्थ्य जांच और प्रारंभिक हस्तक्षेप सेवाओं की परिकल्पना करती है।",
            "rbsk_mission_statement": "RBSK बच्चों के जीवन की समग्र गुणवत्ता में सुधार लाने के उद्देश्य से एक अनूठा कार्यक्रम है, जो उन्हें समुदाय में व्यापक देखभाल प्रदान करके अपनी पूरी क्षमता हासिल करने में सक्षम बनाता है। इसमें जन्म से 18 वर्ष तक के बच्चों की 4Ds—जन्म दोष, बीमारियाँ, कमियां और विकासात्मक देरी के लिए जांच शामिल है—जिसमें शीघ्र पहचान, मुफ्त उपचार और तृतीयक स्तर पर सर्जरी सहित आवश्यक हस्तक्षेपों के लिए 32 सामान्य स्वास्थ्य स्थितियों को कवर किया गया है।"
        }
    }
};

// 2. Initialize i18next
i18next.init({
    lng: 'en',
    resources
}, function(err, t) {
    updateContent();
});

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerHTML = i18next.t(key);
    });
}

// 3. Font Size Function (Fixed)
window.changeFontSize = function(size, btnElement) {
    const html = document.documentElement;         
    if (size === 'small') html.style.fontSize = '14px';
    else if (size === 'normal') html.style.fontSize = '16px';
    else if (size === 'large') html.style.fontSize = '18px';
   
    const allButtons = document.querySelectorAll('.font-btn');
    allButtons.forEach(btn => {        
        btn.classList.remove('bg-emerald-600', 'text-white', 'active');
        btn.classList.add('text-slate-600', 'hover:bg-white');
    });
    
    if (btnElement) {
        btnElement.classList.add('bg-emerald-600', 'text-white', 'active');
        btnElement.classList.remove('text-slate-600', 'hover:bg-white');
    }
};

// Language Switcher Listener
document.addEventListener('change', function(e) {
    if (e.target && e.target.id === 'languageSwitcher') {
        const selectedLng = e.target.value;
        i18next.changeLanguage(selectedLng, () => {
            updateContent();
            console.log("Language changed to:", selectedLng);
        });
    }
});



  


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
        loadComponent('navbar-placeholder', 'navbar.html');
    };



    // Back to Top Logic
    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // 2. Scroll event listener (safer version)
    window.addEventListener('scroll', () => {
        const backToTopBtn = document.getElementById('backToTop');
        
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-10');
                backToTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-10');
                backToTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        }
    });




    window.addEventListener('scroll', () => {
        const navContainer = document.getElementById('nav-container');
        const isMobile = window.innerWidth < 1024;
        
        if (window.scrollY > 40) {
            navContainer.style.height = isMobile ? "52px" : "48px"; // Slim state
        } else {
            navContainer.style.height = isMobile ? "56px" : "64px"; // Normal state
        }
    });


    /**   * Unified Toggle Logic      */
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('#unifiedMenuBtn');
        const container = document.getElementById('mainNavContainer');
        const icon = document.getElementById('unifiedIcon');

        if (btn) {
            const isHidden = container.classList.toggle('hidden');            
            if(!isHidden) {
                icon.classList.replace('fa-bars-staggered', 'fa-xmark');
                document.body.style.overflow = 'hidden'; 
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars-staggered');
                document.body.style.overflow = '';
            }
        }
    });    
    function toggleMobileSub(id) {
        if (window.innerWidth < 1024) {
            const sub = document.getElementById(id);
            sub.classList.toggle('hidden');
        }
    }


    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    function openModal(imgSrc) {
        modalImg.src = imgSrc;
        modal.classList.remove('modal-hidden');
        document.body.style.overflow = 'hidden'; 
    }

    function closeModal() {
        modal.classList.add('modal-hidden');
        document.body.style.overflow = 'auto'; 
        setTimeout(() => { modalImg.src = ''; }, 300); 
    }
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
