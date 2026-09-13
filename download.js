// ==========================================================================
// AFROBENSOFT WEB CORE — RESPONSIVE AUTO-EXPANDING DOWNLOAD CONTROLLER
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("downloadModal");
    const progressBar = document.getElementById("progressBar");
    const progressPercent = document.getElementById("progressPercent");
    const statusText = document.querySelector(".status-text");
    const downloadButtons = document.querySelectorAll(".nav-download-btn, .main-download-btn");
    
    // Official GitHub Release high-speed warning-free link
    const fileUrl = "https://github.com/deepstate-9563/DeepState95Converter_Downloads/releases/download/v1.0/DeepState95Converter_Setup.exe";

    downloadButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            
            const mainHeroBtn = document.querySelector(".main-download-btn");
            
            if (mainHeroBtn) {
                // 1. Disable click capabilities instantly to prevent spam clicks
                mainHeroBtn.style.pointerEvents = "none"; 
                mainHeroBtn.style.opacity = "0.9";
                mainHeroBtn.style.background = "#4b5563"; // Elegant steel grey tone
                
                // 2. INJECT THE DYNAMIC INSTRUCTIVE TEXT
                mainHeroBtn.innerHTML = "⏳Setup is already dowloading, Wait for some minutes and check your downloads folder and double click the setup to install the software";
                
                // 3. Add the active class so our external CSS auto-expands the layout fluidly
                mainHeroBtn.classList.add("expanded-instruction");
            }

            // Open the beautiful green and gold loading popup box frame
            modal.classList.add("active");
            statusText.innerText = "Connecting to AFROBENSOFT secure cloud node...";
            
            executeFirmwareHypeDownload(fileUrl);
        });
    });

    function executeFirmwareHypeDownload(url) {
        let percent = 0;
        progressBar.style.width = "0%";
        progressPercent.innerText = "0%";

        const animationTimer = setInterval(() => {
            percent += 2;
            if (percent > 100) percent = 100;
            
            progressBar.style.width = `${percent}%`;
            progressPercent.innerText = `${percent}%`;

            if (percent < 30) {
                statusText.innerText = "Verifying AFROBENSOFT software security signatures...";
            } else if (percent < 65) {
                statusText.innerText = "Bundling offline high-speed conversion components...";
            } else if (percent < 100) {
                statusText.innerText = "Please wait a few minutes for the 164 MB installer package to land...";
            } else {
                statusText.innerText = "Download triggered successfully!";
                clearInterval(animationTimer);
                
                setTimeout(() => {
                    modal.classList.remove("active");
                }, 4000);
            }
        }, 60);

        // TRIGGER THE SECURE INSTANT FILES TRANSFER NOW
        const hiddenAnchor = document.createElement("a");
        hiddenAnchor.href = url;
        hiddenAnchor.download = "DeepState95Converter_Setup.exe";
        document.body.appendChild(hiddenAnchor);
        hiddenAnchor.click();
        document.body.removeChild(hiddenAnchor);
    }
});


// ==========================================================================
// AFROBENSOFT NAVIGATION TRACKER — HIGHLIGHTS ACTIVE SECTIONS ON SCROLL/CLICK
// ==========================================================================
window.addEventListener("scroll", () => {
    // Gather all your content sections from the HTML tree
    const sections = document.querySelectorAll("section, header, .hero");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    let currentActiveSectionId = "";

    // Math check: Find out which section is currently active on the screen glass
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // If the screen scroll line passes the top boundary frame of the section
        if (window.scrollY >= (sectionTop - 150)) {
            currentActiveSectionId = section.getAttribute("id") || "";
        }
    });

    // Loop through links to add or drop the "active-nav" styling layout class
    navLinks.forEach(link => {
        link.classList.remove("active-nav");
        const linkTargetAttribute = link.getAttribute("href");
        
        // Special match block check for the Home link target point
        if (linkTargetAttribute === "#" && (currentActiveSectionId === "" || currentActiveSectionId === null)) {
            link.classList.add("active-nav");
        } else if (linkTargetAttribute === `#${currentActiveSectionId}`) {
            link.classList.add("active-nav");
        }
    });
});

