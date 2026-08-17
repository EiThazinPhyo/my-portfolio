document.addEventListener("DOMContentLoaded", function () {

    const heroSection =
        document.querySelector(".hero-section");

    const heroSlides =
        document.querySelectorAll(".hero-slide");

    const heroCurrent =
        document.getElementById("heroCurrent");

    let heroIndex = 0;

    function showHeroSlide(index) {

        heroSlides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        if (!heroSlides[index]) {
            return;
        }

        heroSlides[index].classList.add("active");

        if (heroCurrent) {
            heroCurrent.textContent =
                String(index + 1).padStart(2, "0");
        }
    }

    if (
        heroSection &&
        heroSlides.length > 0
    ) {

        heroSection.addEventListener(
            "click",
            function (event) {

                if (
                    event.target.closest(".primary-button")
                ) {
                    return;
                }

                heroIndex++;

                if (
                    heroIndex >= heroSlides.length
                ) {
                    heroIndex = 0;
                }

                showHeroSlide(heroIndex);

            }
        );

        showHeroSlide(0);
    }

    const projectsList = document.getElementById("projectsList");
    const projectPrev = document.getElementById("projectPrev");
    const projectNext = document.getElementById("projectNext");

    if (projectsList && projectPrev && projectNext) {

        const projectCard =
            projectsList.querySelector(".project-card");

        function getProjectMoveAmount() {

            if (!projectCard) {
                return 300;
            }

            const cardWidth =
                projectCard.getBoundingClientRect().width;

            const gap = 15;

            return cardWidth + gap;
        }


        function updateProjectButtons() {

            const currentScroll =
                projectsList.scrollLeft;

            const maxScroll =
                projectsList.scrollWidth -
                projectsList.clientWidth;

            projectPrev.disabled =
                currentScroll <= 5;

            projectNext.disabled =
                currentScroll >= maxScroll - 5;
        }


        // PREVIOUS

        projectPrev.addEventListener(
            "click",
            function () {

                projectsList.scrollBy({
                    left: -getProjectMoveAmount(),
                    behavior: "smooth"
                });

            }
        );


        // NEXT

        projectNext.addEventListener(
            "click",
            function () {

                projectsList.scrollBy({
                    left: getProjectMoveAmount(),
                    behavior: "smooth"
                });

            }
        );


        projectsList.addEventListener(
            "scroll",
            updateProjectButtons
        );


        window.addEventListener(
            "resize",
            updateProjectButtons
        );


        updateProjectButtons();
    }

    const skillsData = {

        wordpress: {
            title: "WordPress",
            category: "CMS",
            description:
                "Custom WordPress development for professional websites, business platforms, blogs, and content management systems.",
            details: [
                "Custom theme development",
                "Plugin integration",
                "Responsive WordPress websites",
                "Website performance optimization",
                "Content management setup"
            ]
        },

        php: {
            title: "PHP",
            category: "BACKEND",
            description:
                "Server-side PHP development for dynamic websites, backend systems, database integration, and web applications.",
            details: [
                "Backend development",
                "Form processing",
                "Database integration",
                "Dynamic website development",
                "API integration"
            ]
        },

        python: {
            title: "Python",
            category: "PROGRAMMING",
            description:
                "Python development for backend systems, automation, APIs, data processing, and application development.",
            details: [
                "Backend development",
                "Automation scripts",
                "REST API development",
                "Data processing",
                "Application development"
            ]
        },

        javascript: {
            title: "JavaScript",
            category: "FRONTEND",
            description:
                "Modern JavaScript development for interactive websites, dynamic interfaces, APIs, and frontend functionality.",
            details: [
                "Interactive web interfaces",
                "DOM manipulation",
                "API integration",
                "Event handling",
                "Dynamic web applications"
            ]
        },

        react: {
            title: "React",
            category: "FRONTEND",
            description:
                "React development for reusable components, interactive interfaces, and modern single-page applications.",
            details: [
                "Reusable components",
                "Component-based architecture",
                "State management",
                "Single-page applications",
                "Interactive user interfaces"
            ]
        },

        node: {
            title: "Node.js",
            category: "BACKEND",
            description:
                "Node.js backend development for REST APIs, server-side applications, real-time systems, and scalable web services.",
            details: [
                "REST API development",
                "Server-side applications",
                "Backend services",
                "Real-time applications",
                "Scalable web services"
            ]
        },

        mysql: {
            title: "MySQL",
            category: "DATABASE",
            description:
                "MySQL database development including database design, queries, relationships, optimization, and application data management.",
            details: [
                "Database design",
                "SQL queries",
                "Table relationships",
                "Database optimization",
                "Application data management"
            ]
        },

        git: {
            title: "Git",
            category: "VERSION CONTROL",
            description:
                "Git version control for managing source code, tracking development history, creating branches, and collaborating with development teams.",
            details: [
                "Source code management",
                "Branch management",
                "Commit history",
                "Version tracking",
                "Team collaboration"
            ]
        }

    };


    const skillsList =
        document.getElementById("skillsList");

    const skillCards =
        document.querySelectorAll(".skill-card");

    const skillsPrev =
        document.getElementById("skillsPrev");

    const skillsNext =
        document.getElementById("skillsNext");

    const skillTitle =
        document.getElementById("skillTitle");

    const skillDescription =
        document.getElementById("skillDescription");

    const skillDetailButton =
        document.getElementById("skillDetailButton");


    const skillModal =
        document.getElementById("skillModal");

    const skillModalClose =
        document.getElementById("skillModalClose");

    const modalSkillTitle =
        document.getElementById("modalSkillTitle");

    const modalSkillCategory =
        document.getElementById("modalSkillCategory");

    const modalSkillDescription =
        document.getElementById("modalSkillDescription");

    const modalSkillList =
        document.getElementById("modalSkillList");


    let currentSkill = 0;


    function updateSkillInfo(index) {

        const card =
            skillCards[index];

        if (!card) {
            return;
        }


        const skillName =
            card.dataset.skill;

        const skill =
            skillsData[skillName];

        if (!skill) {
            return;
        }


        skillTitle.textContent =
            skill.title;

        skillDescription.textContent =
            skill.description;


        skillCards.forEach(
            function (item) {

                item.classList.remove("active");

            }
        );


        card.classList.add("active");

        currentSkill = index;

    }


    function updateSkillButtons() {

        if (!skillsList) {
            return;
        }


        const maxScroll =
            skillsList.scrollWidth -
            skillsList.clientWidth;

        const currentScroll =
            skillsList.scrollLeft;


        skillsPrev.disabled =
            currentScroll <= 5;


        skillsNext.disabled =
            currentScroll >= maxScroll - 5;

    }


    function getSkillMoveAmount() {

        const card =
            skillCards[0];

        if (!card) {
            return 160;
        }


        const cardWidth =
            card.getBoundingClientRect().width;

        const gap = 12;

        return cardWidth + gap;

    }


    if (
        skillsList &&
        skillsPrev &&
        skillsNext
    ) {

        skillsNext.addEventListener(
            "click",
            function () {

                skillsList.scrollBy({

                    left:
                        getSkillMoveAmount(),

                    behavior: "smooth"

                });

            }
        );


        skillsPrev.addEventListener(
            "click",
            function () {

                skillsList.scrollBy({

                    left:
                        -getSkillMoveAmount(),

                    behavior: "smooth"

                });

            }
        );


        skillsList.addEventListener(
            "scroll",
            updateSkillButtons
        );


        window.addEventListener(
            "resize",
            updateSkillButtons
        );


        updateSkillInfo(0);

        updateSkillButtons();

    }

    skillCards.forEach(
        function (card, index) {

            card.addEventListener(
                "click",
                function () {

                    updateSkillInfo(index);

                }
            );

        }
    );

    function openSkillModal() {

        const card =
            skillCards[currentSkill];

        if (!card) {
            return;
        }


        const skillName =
            card.dataset.skill;

        const skill =
            skillsData[skillName];

        if (!skill) {
            return;
        }


        modalSkillTitle.textContent =
            skill.title;

        modalSkillCategory.textContent =
            skill.category;

        modalSkillDescription.textContent =
            skill.description;


        modalSkillList.innerHTML = "";


        skill.details.forEach(
            function (detail) {

                const item =
                    document.createElement("div");

                item.innerHTML =
                    `<i class="fa-solid fa-check"></i> ${detail}`;

                modalSkillList.appendChild(item);

            }
        );


        skillModal.classList.add("active");

        document.body.style.overflow = "hidden";

    }


    function closeSkillModal() {

        skillModal.classList.remove("active");

        document.body.style.overflow = "";

    }


    if (skillDetailButton) {

        skillDetailButton.addEventListener(
            "click",
            openSkillModal
        );

    }


    if (skillModalClose) {

        skillModalClose.addEventListener(
            "click",
            closeSkillModal
        );

    }

    const modalOverlay =
        document.querySelector(".skill-modal-overlay");

    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeSkillModal
        );

    }

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                skillModal &&
                skillModal.classList.contains("active")
            ) {

                closeSkillModal();

            }

        }
    );

    const filterButtons =
        document.querySelectorAll(".filter-button");

    const projectCards =
        document.querySelectorAll(".project-page-card");


    filterButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(
                        function (item) {

                            item.classList.remove("active");

                        }
                    );


                    button.classList.add("active");


                    const selectedCategory =
                        button.getAttribute("data-filter");


                    projectCards.forEach(
                        function (card) {

                            const cardCategory =
                                card.getAttribute(
                                    "data-category"
                                );


                            if (
                                selectedCategory === "all" ||
                                cardCategory === selectedCategory
                            ) {

                                card.style.display =
                                    "block";

                            } else {

                                card.style.display =
                                    "none";

                            }

                        }
                    );

                }
            );

        }
    );

    const currentPage =
        window.location.pathname
            .split("/")
            .pop();


    const navigationLinks =
        document.querySelectorAll(".nav-menu a");


    navigationLinks.forEach(
        function (link) {

            const linkPage =
                link.getAttribute("href");


            if (
                linkPage &&
                !linkPage.startsWith("#") &&
                linkPage === currentPage
            ) {

                link.classList.add("current-page");

            }

        }
    );

    const footerText =
        document.querySelector(".footer-bottom p");


    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} My Portfolio. All rights reserved.`;

    }

});

const projectData = {

    project1: {
        image: "assets/images/project-1.jpg",
        category: "APPLICATION",
        title: "E-commerce App",
        description:
            "An online shopping application designed to provide customers with a smooth and simple shopping experience. The project focuses on product presentation, user interaction, responsive design, and easy navigation.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    project2: {
        image: "assets/images/project-2.jpg",
        category: "APPLICATION",
        title: "Hotel Booking App",
        description:
            "A hotel booking platform designed to make hotel discovery and reservation easier. The interface focuses on clear information, responsive layouts, and a simple booking experience.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]
    },

    project3: {
        image: "assets/images/project-3.jpg",
        category: "WEBSITE",
        title: "Car Website",
        description:
            "A responsive automotive website focused on clean layouts, product presentation, responsive design, and easy navigation for users interested in automotive products.",
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap"
        ]
    },

    project4: {
        image: "assets/images/project-4.jpg",
        category: "WORDPRESS",
        title: "WordPress Projects",
        description:
            "Custom WordPress websites with optimized layouts and content management features. The projects focus on flexible content management, responsive design, and usability.",
        technologies: [
            "WordPress",
            "PHP",
            "CSS"
        ]
    },

    project5: {
        image: "assets/images/project-3.jpg",
        category: "WEBSITE",
        title: "Business Website",
        description:
            "A professional business website designed with responsive layouts, clear navigation, structured content, and a modern user interface.",
        technologies: [
            "HTML",
            "CSS",
            "Bootstrap"
        ]
    },

    project6: {
        image: "assets/images/project-4.jpg",
        category: "WORDPRESS",
        title: "Custom WordPress Website",
        description:
            "A custom WordPress solution with flexible content management, responsive design, and a structure that can be adapted to different business requirements.",
        technologies: [
            "WordPress",
            "PHP",
            "JavaScript"
        ]
    }

};


const projectDetailButtons =
    document.querySelectorAll(".project-detail-button");

const projectModal =
    document.getElementById("projectModal");

const projectModalClose =
    document.getElementById("projectModalClose");

const projectModalImage =
    document.getElementById("projectModalImage");

const projectModalCategory =
    document.getElementById("projectModalCategory");

const projectModalTitle =
    document.getElementById("projectModalTitle");

const projectModalDescription =
    document.getElementById("projectModalDescription");

const projectModalTechnologies =
    document.getElementById(
        "projectModalTechnologies"
    );


if (
    projectDetailButtons.length > 0 &&
    projectModal
) {

    projectDetailButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const projectId =
                    button.dataset.project;

                const project =
                    projectData[projectId];

                if (!project) {
                    return;
                }

                projectModalImage.src =
                    project.image;

                projectModalCategory.textContent =
                    project.category;

                projectModalTitle.textContent =
                    project.title;

                projectModalDescription.textContent =
                    project.description;


                projectModalTechnologies.innerHTML = "";


                project.technologies.forEach(
                    function (technology) {

                        const span =
                            document.createElement("span");

                        span.textContent =
                            technology;

                        projectModalTechnologies.appendChild(
                            span
                        );

                    }
                );


                projectModal.classList.add("active");

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    projectModalClose.addEventListener(
        "click",
        closeProjectModal
    );


    projectModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === projectModal
            ) {
                closeProjectModal();
            }

        }
    );


    function closeProjectModal() {

        projectModal.classList.remove(
            "active"
        );

        document.body.style.overflow = "";

    }

}

const activityData = {

    event1: {
        image: "assets/images/event-1.jpg",
        date: "19 May 2026",
        title: "MICT Park Developer Meetups & Workshops",
        description:
            "A technical meetup and workshop focused on software development, modern technologies, developer knowledge sharing, and practical technical discussions."
    },

    event2: {
        image: "assets/images/event-2.jpg",
        date: "12 May 2026",
        title: "Community Tech Sharing & BarCamp Yangon",
        description:
            "A community technology sharing event where developers and technology enthusiasts exchange knowledge, experiences, useful tools, and ideas."
    },

    event3: {
        image: "assets/images/event-3.jpg",
        date: "23 April 2026",
        title: "Local Startup & Client Platform Launches",
        description:
            "A collection of startup and client platform activities covering digital solutions, product development, website launches, and technology implementation."
    }

};


const activityButtons =
    document.querySelectorAll(".activity-detail-button");

const activityModal =
    document.getElementById("activityModal");

const activityModalClose =
    document.getElementById("activityModalClose");

const activityModalImage =
    document.getElementById("activityModalImage");

const activityModalDate =
    document.getElementById("activityModalDate");

const activityModalTitle =
    document.getElementById("activityModalTitle");

const activityModalDescription =
    document.getElementById("activityModalDescription");


if (
    activityButtons.length > 0 &&
    activityModal
) {

    activityButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const activityId =
                button.dataset.activity;

            const activity =
                activityData[activityId];

            if (!activity) {
                return;
            }

            activityModalImage.src =
                activity.image;

            activityModalDate.textContent =
                activity.date;

            activityModalTitle.textContent =
                activity.title;

            activityModalDescription.textContent =
                activity.description;

            activityModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    activityModalClose.addEventListener(
        "click",
        closeActivityModal
    );


    activityModal.addEventListener(
        "click",
        function (event) {

            if (event.target === activityModal) {
                closeActivityModal();
            }

        }
    );


    function closeActivityModal() {

        activityModal.classList.remove("active");

        document.body.style.overflow = "";

    }

}
