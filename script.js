const API_URL = "http://localhost:4000/api";

function getToken() {
    return localStorage.getItem("skilltrackToken");
}

async function apiRequest(endpoint, options = {}) {

    const token = getToken();

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {})
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(API_URL + endpoint, {
        ...options,
        headers
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

/* =====================================================
   SKILLTRACK AI
   CLEAN FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   DATA
===================================================== */

const careerData = {

    "Software Developer": {
        skills: [
            "Programming",
            "Python",
            "Java",
            "Data Structures",
            "Git",
            "Problem Solving"
        ],

        courses: [
            "Programming Fundamentals",
            "Data Structures",
            "Java / Python",
            "Git & GitHub"
        ],

        path: [
            ["Learn Programming",
             "Build strong programming fundamentals."],

            ["Learn Data Structures",
             "Practice arrays, strings, algorithms and problem solving."],

            ["Build Projects",
             "Create real-world projects for your portfolio."],

            ["Learn Git & GitHub",
             "Understand version control and collaboration."],

            ["Prepare for Jobs",
             "Practice coding, aptitude and interview questions."]
        ]
    },


    "Data Analyst": {
        skills: [
            "Excel",
            "SQL",
            "Python",
            "Statistics",
            "Data Visualization",
            "Power BI"
        ],

        courses: [
            "Advanced Excel",
            "SQL Fundamentals",
            "Python for Data Analysis",
            "Power BI"
        ],

        path: [
            ["Learn Excel",
             "Build strong spreadsheet and data handling skills."],

            ["Learn SQL",
             "Learn how to query and manage databases."],

            ["Learn Statistics",
             "Understand data, probability and basic statistics."],

            ["Learn Visualization",
             "Create dashboards using Power BI or similar tools."],

            ["Build Data Projects",
             "Create projects using real datasets."]
        ]
    },


    "AI Engineer": {
        skills: [
            "Python",
            "Machine Learning",
            "Statistics",
            "Data Structures",
            "Deep Learning",
            "SQL"
        ],

        courses: [
            "Python",
            "Machine Learning",
            "Deep Learning",
            "Artificial Intelligence"
        ],

        path: [
            ["Master Python",
             "Build strong Python programming knowledge."],

            ["Learn Mathematics",
             "Study statistics, probability and linear algebra."],

            ["Learn Machine Learning",
             "Understand supervised and unsupervised learning."],

            ["Learn Deep Learning",
             "Explore neural networks and modern AI."],

            ["Build AI Projects",
             "Create practical AI applications."]
        ]
    },


    "Web Developer": {
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git",
            "Responsive Design",
            "Problem Solving"
        ],

        courses: [
            "HTML & CSS",
            "JavaScript",
            "Responsive Web Design",
            "Git & GitHub"
        ],

        path: [
            ["Learn HTML",
             "Understand the structure of web pages."],

            ["Learn CSS",
             "Create attractive and responsive interfaces."],

            ["Learn JavaScript",
             "Add interaction and functionality."],

            ["Build Websites",
             "Create multiple real-world projects."],

            ["Create Portfolio",
             "Show your projects to potential employers."]
        ]
    },


    "Cloud Engineer": {
        skills: [
            "Linux",
            "Networking",
            "Python",
            "Cloud Computing",
            "Docker",
            "Security"
        ],

        courses: [
            "Linux Fundamentals",
            "Networking",
            "Cloud Computing",
            "Docker"
        ],

        path: [
            ["Learn Linux",
             "Understand operating systems and command line tools."],

            ["Learn Networking",
             "Understand IP, DNS, HTTP and networking basics."],

            ["Learn Cloud",
             "Explore cloud services and architecture."],

            ["Learn Containers",
             "Understand Docker and containerized applications."],

            ["Build Cloud Projects",
             "Deploy practical applications to the cloud."]
        ]
    }

};


/* =====================================================
   USER DATA
===================================================== */

let student = {

    name: "Student",

    email: "",

    phone: "",

    location: "",

    education: {
        college: "",
        degree: "",
        branch: "",
        graduation: ""
    },

    skills: [],

    courses: [],

    employment: {
        status: ""
    },

    career: ""

};


/* =====================================================
   LOCAL STORAGE
===================================================== */

function saveStudent() {

    localStorage.setItem(
        "skilltrackStudent",
        JSON.stringify(student)
    );

}


function loadStudent() {

    const saved =
        localStorage.getItem("skilltrackStudent");

    if (saved) {

        try {

            student = {
                ...student,
                ...JSON.parse(saved)
            };

        } catch (error) {

            console.log("Could not load student data.");

        }

    }

}


/* =====================================================
   MODALS
===================================================== */

function openModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.add("show");

    }

}


function closeModal(id) {

    const modal =
        document.getElementById(id);

    if (modal) {

        modal.classList.remove("show");

    }

}


function switchModal(closeId, openId) {

    closeModal(closeId);

    openModal(openId);

}


/* Close modal by clicking outside */

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("modal")) {

        event.target.classList.remove("show");

    }

});


/* =====================================================
   REGISTER
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    loadStudent();

    const registerForm =
        document.getElementById("registerForm");

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                const name =
    document.getElementById(
        "registerName"
    ).value.trim();

const email =
    document.getElementById(
        "registerEmail"
    ).value.trim();

const password =
    document.getElementById(
        "registerPassword"
    ).value;

const branchElement =
    document.getElementById(
        "registerBranch"
    );

const branch =
    branchElement
        ? branchElement.value
        : "";

if (!name || !email || !password || !branch) {

    alert(
        "Please fill all fields and select your Branch / Degree."
    );

    return;
}

                student.name = name;

                student.email = email;

                localStorage.setItem(
                    "skilltrackEmail",
                    email
                );

                localStorage.setItem(
                    "skilltrackPassword",
                    password
                );

                saveStudent();

                window.location.href =
                    "student.html";

            }
        );

    }


    /* LOGIN */

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function(event) {

                event.preventDefault();

                const email =
                    document.getElementById(
                        "loginEmail"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "loginPassword"
                    ).value;

                const savedEmail =
                    localStorage.getItem(
                        "skilltrackEmail"
                    );

                const savedPassword =
                    localStorage.getItem(
                        "skilltrackPassword"
                    );

                if (
                    email === savedEmail &&
                    password === savedPassword
                ) {

                    window.location.href =
                        "student.html";

                } else {

                    alert(
                        "Account not found or password is incorrect. Please register first."
                    );

                }

            }
        );

    }


    /* Dashboard */

    if (
        document.body.classList.contains(
            "dashboard-body"
        )
    ) {

        initializeDashboard();

    }

});


/* =====================================================
   DASHBOARD INITIALIZATION
===================================================== */

function initializeDashboard() {

    loadStudent();

    updateStudentDisplay();

    loadProfileFields();

    loadEducationFields();

    loadEmploymentField();

    renderSkills();

    renderCourses();

    updateDashboardStats();

    renderRecommendations();

    generateCareerPath();

    runJobMatch();

    updateResumeStatus();

}


/* =====================================================
   DISPLAY STUDENT
===================================================== */

function updateStudentDisplay() {

    const name =
        student.name || "Student";

    const firstLetter =
        name.charAt(0).toUpperCase();

    setText(
        "welcomeName",
        name
    );

    setText(
        "sidebarName",
        name
    );

    setText(
        "topAvatar",
        firstLetter
    );

    setText(
        "sidebarAvatar",
        firstLetter
    );

}


/* =====================================================
   HELPER
===================================================== */

function setText(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.textContent =
            value;

    }

}


function getElement(id) {

    return document.getElementById(id);

}


/* =====================================================
   NAVIGATION
===================================================== */

function showSection(section, button) {

    const sections = [
        "dashboard",
        "profile",
        "education",
        "skills",
        "courses",
        "employment",
        "skillgap",
        "recommendations",
        "career",
        "jobs"
    ];


    sections.forEach(function(name) {

        const element =
            document.getElementById(
                name + "Section"
            );

        if (element) {

            element.classList.remove(
                "active-section"
            );

        }

    });


    const selected =
        document.getElementById(
            section + "Section"
        );

    if (selected) {

        selected.classList.add(
            "active-section"
        );

    }


    document
        .querySelectorAll(".side-link")
        .forEach(function(link) {

            link.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    const titles = {

        dashboard: "Dashboard",

        profile: "My Profile",

        education: "Education",

        skills: "My Skills",

        courses: "My Courses",

        employment: "Employment",

        skillgap: "Skill Gap Analysis",

        recommendations: "Recommendations",

        career: "Career Path",

        jobs: "Job Match",

        companies: "Companies & Roles",

        resume: "Resume Builder"

    };


    setText(
        "dashboardTitle",
        titles[section] || "Dashboard"
    );

    if (section === "companies") {
    renderCompanies();
}

if (section === "resume") {
    updateResumeStatus();
}

}


/* =====================================================
   PROFILE
===================================================== */

function loadProfileFields() {

    setValue(
        "profileName",
        student.name
    );

    setValue(
        "profileEmail",
        student.email
    );

    setValue(
        "profilePhone",
        student.phone
    );

    setValue(
        "profileLocation",
        student.location
    );

}


function saveProfile() {

    student.name =
        getValue("profileName");

    student.email =
        getValue("profileEmail");

    student.phone =
        getValue("profilePhone");

    student.location =
        getValue("profileLocation");


    saveStudent();

    updateStudentDisplay();

    setText(
        "profileMessage",
        "Profile saved successfully!"
    );

    updateDashboardStats();

}


/* =====================================================
   EDUCATION
===================================================== */

function loadEducationFields() {

    setValue(
        "collegeInput",
        student.education.college
    );

    setValue(
        "degreeInput",
        student.education.degree
    );

    setValue(
        "branchInput",
        student.education.branch
    );

    setValue(
        "graduationInput",
        student.education.graduation
    );

}


function saveEducation() {

    student.education = {

        college:
            getValue("collegeInput"),

        degree:
            getValue("degreeInput"),

        branch:
            getValue("branchInput"),

        graduation:
            getValue("graduationInput")

    };


    saveStudent();

    setText(
        "educationMessage",
        "Education saved successfully!"
    );

    updateDashboardStats();

}


/* =====================================================
   SKILLS
===================================================== */

function addSkill() {

    const input =
        getElement("skillInput");

    if (!input) return;

    const skill =
        input.value.trim();

    if (!skill) {

        alert("Please enter a skill.");

        return;

    }


    const exists =
        student.skills.some(function(item) {

            return item.toLowerCase() ===
                   skill.toLowerCase();

        });


    if (exists) {

        alert("This skill is already added.");

        return;

    }


    student.skills.push(skill);

    input.value = "";

    saveStudent();

    renderSkills();

    updateDashboardStats();

    renderRecommendations();

    runJobMatch();

}


function removeSkill(index) {

    student.skills.splice(
        index,
        1
    );

    saveStudent();

    renderSkills();

    updateDashboardStats();

    renderRecommendations();

    runJobMatch();

}


function renderSkills() {

    const list =
        getElement("skillsList");

    if (!list) return;

    list.innerHTML = "";


    if (student.skills.length === 0) {

        list.innerHTML =
            "<p class='empty-message'>No skills added yet.</p>";

        return;

    }


    student.skills.forEach(
        function(skill, index) {

            const tag =
                document.createElement("div");

            tag.className =
                "skill-tag";

            tag.innerHTML = `

                <span>${escapeHTML(skill)}</span>

                <button
                    onclick="removeSkill(${index})">
                    ×
                </button>

            `;

            list.appendChild(tag);

        }
    );

}


/* =====================================================
   COURSES
===================================================== */

function addCourse() {

    const input =
        getElement("courseInput");

    if (!input) return;


    const course =
        input.value.trim();


    if (!course) {

        alert("Please enter a course.");

        return;

    }


    /* Prevent duplicate courses */

    const alreadyExists =
        student.courses.some(function(existingCourse) {

            const existingName =
                typeof existingCourse === "string"
                    ? existingCourse
                    : existingCourse.name;

            return existingName
                .trim()
                .toLowerCase() ===
                course
                    .trim()
                    .toLowerCase();

        });


    if (alreadyExists) {

        alert("This course is already added.");

        return;

    }


    /* Add completed course */

    student.courses.push({

        name: course,

        completed: true

    });


    input.value = "";


    saveStudent();

    renderCourses();

    updateDashboardStats();

    renderRecommendations();

    /* IMPORTANT:
       Recalculate Resume progress */

    updateResumeStatus();

}


function removeCourse(index) {

    student.courses.splice(
        index,
        1
    );

    saveStudent();

    renderCourses();

    updateDashboardStats();

}


function renderCourses() {

    const list =
        getElement("coursesList");

    if (!list) return;

    list.innerHTML = "";


    if (student.courses.length === 0) {

        list.innerHTML =
            "<p class='empty-message'>No courses completed yet.</p>";

        return;

    }


    student.courses.forEach(
        function(course, index) {

            const name =
                typeof course === "string"
                    ? course
                    : course.name;


            const item =
                document.createElement("div");

            item.className =
                "list-item";

            item.innerHTML = `

                <span>
                    ✓ ${escapeHTML(name)}
                </span>

                <button
                    onclick="removeCourse(${index})">
                    Remove
                </button>

            `;

            list.appendChild(item);

        }
    );

}


/* =====================================================
   EMPLOYMENT
===================================================== */

function loadEmploymentField() {

    setValue(
        "employmentInput",
        student.employment.status
    );

}


function saveEmployment() {

    student.employment.status =
        getValue("employmentInput");

    saveStudent();

    setText(
        "employmentMessage",
        "Employment status saved!"
    );

    updateDashboardStats();

}


/* =====================================================
   DASHBOARD STATS
===================================================== */

function updateDashboardStats() {

    setText(
        "skillsStat",
        student.skills.length
    );


    const completed =
        student.courses.filter(
            function(course) {

                return typeof course === "string"
                    ? true
                    : course.completed !== false;

            }
        );


    setText(
        "coursesStat",
        completed.length
    );


    const result =
        calculateReadiness();


    setText(
        "readinessStat",
        result.score + "%"
    );

    setText(
        "readinessBig",
        result.score + "%"
    );


    const progress =
        getElement("readinessProgress");

    if (progress) {

        progress.style.width =
            result.score + "%";

    }


    setText(
        "employmentStat",
        student.employment.status ||
        "Not Set"
    );

}


/* =====================================================
   READINESS
===================================================== */

function calculateReadiness() {

    let score = 0;


    if (student.name &&
        student.name !== "Student") {

        score += 10;

    }


    if (student.email) {

        score += 5;

    }


    if (student.education.college) {

        score += 10;

    }


    if (student.education.degree) {

        score += 10;

    }


    if (student.skills.length >= 1) {

        score += 10;

    }

    if (student.skills.length >= 3) {

        score += 10;

    }

    if (student.skills.length >= 5) {

        score += 10;

    }


    if (student.courses.length >= 1) {

        score += 10;

    }


    if (student.career) {

        score += 10;

    }


    if (student.employment.status) {

        score += 5;

    }


    return {

        score: Math.min(score, 100)

    };

}


/* =====================================================
   SKILL GAP
===================================================== */

function analyzeSkillGap() {

    const career =
        getValue("careerSelect");

    const result =
        getElement("skillGapResult");

    if (!result) return;


    if (!career) {

        result.innerHTML =
            "Select a career to see your skill gap.";

        return;

    }


    student.career =
        career;

    saveStudent();


    const required =
        careerData[career].skills;


    const userSkills =
        student.skills.map(
            function(skill) {

                return skill.toLowerCase();

            }
        );


    const missing =
        required.filter(
            function(skill) {

                return !userSkills.includes(
                    skill.toLowerCase()
                );

            }
        );


    const matched =
        required.length -
        missing.length;


    const percentage =
        Math.round(
            matched /
            required.length *
            100
        );


    result.innerHTML = `

        <h3>${escapeHTML(career)}</h3>

        <p>
            You currently match
            <strong>${percentage}%</strong>
            of the recommended skills.
        </p>

        <div class="gap-list">

            ${
                missing.length
                ?
                missing.map(
                    function(skill) {

                        return `
                            <span class="gap-tag">
                                ${escapeHTML(skill)}
                            </span>
                        `;

                    }
                ).join("")
                :
                "<strong>Great! You have all the recommended skills.</strong>"
            }

        </div>

    `;


    updateDashboardStats();

}


/* =====================================================
   RECOMMENDATIONS
===================================================== */

function renderRecommendations() {

    const list = getElement("recommendationsList");

    if (!list) return;

    list.innerHTML = "";

    let recommendations = [];

    if (student.career && careerData[student.career]) {

        recommendations =
            careerData[student.career].courses.slice(0, 4);

    } else {

        recommendations = [
            "Programming Fundamentals",
            "Communication Skills",
            "Data Structures",
            "Resume & Interview Preparation"
        ];

    }


    recommendations.forEach(function(course, index) {

        const completed =
            student.courses.some(function(item) {

                const name =
                    typeof item === "string"
                        ? item
                        : item.name;

                const isCompleted =
                    typeof item === "string"
                        ? true
                        : item.completed !== false;

                return (
                    name.trim().toLowerCase() ===
                    course.trim().toLowerCase()
                    &&
                    isCompleted
                );

            });


        const card =
            document.createElement("div");

        card.className =
            "recommendation-card";


        card.innerHTML = `

            <div class="recommendation-icon">
                ${["📚","💻","🎯","🚀"][index % 4]}
            </div>


            <h3>
                ${escapeHTML(course)}
            </h3>


            <p>
                Recommended learning for your
                selected career path.
            </p>


            <div class="recommendation-status">

                ${
                    completed
                    ?
                    `
                    <span class="course-status completed">
                        ✓ Completed
                    </span>

                    <button
                        type="button"
                        class="learn-btn completed-btn"
                        disabled>
                        Completed ✓
                    </button>
                    `
                    :
                    `
                    <span class="course-status learning">
                        📖 Still Learning
                    </span>

                    <button
                        type="button"
                        class="learn-btn"
                        onclick="completeRecommendedCourse('${escapeHTML(course)}')">
                        Complete Course ✓
                    </button>
                    `
                }

            </div>

        `;


        list.appendChild(card);

    });

}

function completeRecommendedCourse(courseName) {

    if (!courseName) return;


    const alreadyCompleted =
        student.courses.some(function(item) {

            const name =
                typeof item === "string"
                    ? item
                    : item.name;

            const completed =
                typeof item === "string"
                    ? true
                    : item.completed !== false;

            return (
                name.trim().toLowerCase() ===
                courseName.trim().toLowerCase()
                &&
                completed
            );

        });


    if (alreadyCompleted) {

        return;

    }


    /* Add the recommended course as completed */

    student.courses.push({

        name: courseName,

        completed: true

    });


    saveStudent();


    /* Refresh everything */

    renderCourses();

    renderRecommendations();

    updateDashboardStats();

    updateResumeStatus();


    /* Check if all courses are complete */

    const progress =
        calculateLearningProgress();


    if (progress.percentage >= 100) {

        setTimeout(function() {

            alert(
                "🎉 Congratulations!\n\n" +
                "You completed all recommended courses!\n\n" +
                "📄 Your Resume is now unlocked."
            );

            showSection("resume");

        }, 300);

    }

}

/* =====================================================
   CAREER PATH
===================================================== */

function generateCareerPath() {

    const select =
        getElement(
            "careerPathSelect"
        );

    const result =
        getElement(
            "careerPathResult"
        );

    if (!select || !result) return;


    const career =
        select.value ||
        student.career;


    if (!career ||
        !careerData[career]) {

        result.innerHTML = "";

        return;

    }


    student.career =
        career;

    saveStudent();


    setValue(
        "careerPathSelect",
        career
    );


    result.innerHTML = "";


    careerData[career].path.forEach(
        function(step, index) {

            const element =
                document.createElement("div");

            element.className =
                "roadmap-step";

            element.innerHTML = `

                <div class="roadmap-number">
                    ${index + 1}
                </div>

                <div>
                    <h3>
                        ${escapeHTML(step[0])}
                    </h3>

                    <p>
                        ${escapeHTML(step[1])}
                    </p>
                </div>

            `;

            result.appendChild(element);

        }
    );


    updateDashboardStats();

    runJobMatch();

}


/* =====================================================
   JOB MATCH
===================================================== */

const jobs = [

    {
        title: "Junior Software Developer",
        company: "Technology Company",
        skills: [
            "Programming",
            "Python",
            "Java",
            "Git"
        ]
    },

    {
        title: "Web Developer",
        company: "Digital Solutions",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git"
        ]
    },

    {
        title: "Data Analyst",
        company: "Analytics Company",
        skills: [
            "Excel",
            "SQL",
            "Python",
            "Statistics"
        ]
    },

    {
        title: "AI Engineer Intern",
        company: "AI Solutions",
        skills: [
            "Python",
            "Machine Learning",
            "Statistics"
        ]
    },

    {
        title: "Cloud Engineer Intern",
        company: "Cloud Services",
        skills: [
            "Linux",
            "Networking",
            "Docker",
            "Cloud Computing"
        ]
    }

];


function runJobMatch() {

    const list =
        getElement("jobsList");

    const count =
        getElement("jobMatchCount");

    if (!list) return;


    const userSkills =
        student.skills.map(
            function(skill) {

                return skill.toLowerCase();

            }
        );


    const matches =
        jobs.map(
            function(job) {

                let matched = 0;


                job.skills.forEach(
                    function(required) {

                        const found =
                            userSkills.some(
                                function(userSkill) {

                                    return (
                                        userSkill ===
                                        required.toLowerCase()
                                    );

                                }
                            );


                        if (found) {

                            matched++;

                        }

                    }
                );


                const percentage =
                    Math.round(
                        matched /
                        job.skills.length *
                        100
                    );


                return {

                    ...job,

                    percentage

                };

            }
        )
        .sort(
            function(a,b) {

                return b.percentage -
                       a.percentage;

            }
        );


    if (count) {

        count.textContent =
            matches.filter(
                function(job) {

                    return job.percentage >= 25;

                }
            ).length;

    }


    list.innerHTML = "";


    matches.forEach(
        function(job) {

            const card =
                document.createElement("div");

            card.className =
                "job-card";

            card.innerHTML = `

                <div class="job-top">

                    <h3>
                        ${escapeHTML(job.title)}
                    </h3>

                    <span class="match-score">
                        ${job.percentage}% Match
                    </span>

                </div>

                <p>
                    ${escapeHTML(job.company)}
                </p>

                <div class="job-skills">

                    ${
                        job.skills.map(
                            function(skill) {

                                return `
                                    <span>
                                        ${escapeHTML(skill)}
                                    </span>
                                `;

                            }
                        ).join("")
                    }

                </div>

            `;

            list.appendChild(card);

        }
    );

}


/* =====================================================
   LOGOUT
===================================================== */

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );

    if (!confirmLogout) return;

    window.location.href =
        "index.html";

}


/* =====================================================
   INPUT HELPERS
===================================================== */

function getValue(id) {

    const element =
        document.getElementById(id);

    return element
        ? element.value.trim()
        : "";

}


function setValue(id, value) {

    const element =
        document.getElementById(id);

    if (element) {

        element.value =
            value || "";

    }

}


/* =====================================================
   SECURITY / DISPLAY HELPER
===================================================== */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}

/* =====================================================
   🏢 COMPANIES & ROLES
   ===================================================== */

const companyRoles = [

    {
        company: "TechNova Solutions",
        logo: "💻",
        role: "Software Developer",
        type: "full-time",
        location: "Hyderabad",
        skills: ["Java", "Python", "SQL", "Git"],
        description:
            "Build software applications and work with development teams."
    },

    {
        company: "DataSphere Analytics",
        logo: "📊",
        role: "Data Analyst",
        type: "full-time",
        location: "Bengaluru",
        skills: ["Python", "SQL", "Excel", "Power BI"],
        description:
            "Analyze data and create useful business insights."
    },

    {
        company: "AI Innovate Labs",
        logo: "🤖",
        role: "AI / ML Intern",
        type: "internship",
        location: "Bengaluru",
        skills: ["Python", "Machine Learning", "Statistics"],
        description:
            "Work on practical artificial intelligence and machine learning projects."
    },

    {
        company: "WebCraft Technologies",
        logo: "🌐",
        role: "Frontend Developer",
        type: "internship",
        location: "Hyderabad",
        skills: ["HTML", "CSS", "JavaScript", "Git"],
        description:
            "Create modern and responsive websites and web applications."
    },

    {
        company: "CloudEdge Systems",
        logo: "☁️",
        role: "Cloud Engineer",
        type: "full-time",
        location: "Pune",
        skills: ["Linux", "Networking", "Docker", "Cloud Computing"],
        description:
            "Design, deploy and maintain cloud-based applications."
    },

    {
        company: "NextGen Digital",
        logo: "🚀",
        role: "Software Engineering Intern",
        type: "internship",
        location: "Chennai",
        skills: ["Java", "Python", "Problem Solving"],
        description:
            "Gain practical experience by working on real development projects."
    }

];


/* =====================================================
   RENDER COMPANIES
   ===================================================== */

function renderCompanies(list = companyRoles) {

    const container =
        document.getElementById("companiesList");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {

        container.innerHTML = `
            <div class="empty-company-message">
                🔍
                <h3>No opportunities found</h3>
                <p>
                    Try another company name or role.
                </p>
            </div>
        `;

        return;
    }


    list.forEach(function(job) {

        const card =
            document.createElement("div");

        card.className =
            "company-role-card";


        const typeLabel =
            job.type === "internship"
                ? "Internship"
                : "Full Time";


        const typeClass =
            job.type === "internship"
                ? "internship"
                : "full-time";


        card.innerHTML = `

            <div class="company-card-top">

                <div class="company-logo">
                    ${job.logo}
                </div>

                <span class="company-type ${typeClass}">
                    ${typeLabel}
                </span>

            </div>


            <h3>
                ${escapeHTML(job.role)}
            </h3>


            <h4>
                ${escapeHTML(job.company)}
            </h4>


            <div class="company-location">
                📍 ${escapeHTML(job.location)}
            </div>


            <p class="company-description">
                ${escapeHTML(job.description)}
            </p>


            <div class="required-skills">

                <strong>
                    🎯 Required Skills
                </strong>

                <div class="company-skill-tags">

                    ${job.skills.map(function(skill) {

                        return `
                            <span>
                                ${escapeHTML(skill)}
                            </span>
                        `;

                    }).join("")}

                </div>

            </div>


            <button
                class="company-view-btn"
                onclick="viewCompanyRole('${escapeHTML(job.company)}','${escapeHTML(job.role)}')"
            >
                View Role →
            </button>

        `;


        container.appendChild(card);

    });

}


/* =====================================================
   SEARCH + FILTER
   ===================================================== */

function filterCompanies() {

    const searchInput =
        document.getElementById(
            "companySearchInput"
        );

    const typeFilter =
        document.getElementById(
            "companyTypeFilter"
        );


    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    const type =
        typeFilter
            ? typeFilter.value
            : "all";


    const filtered =
        companyRoles.filter(function(job) {

            const matchesSearch =
                job.company
                    .toLowerCase()
                    .includes(search)

                ||

                job.role
                    .toLowerCase()
                    .includes(search)

                ||

                job.skills.some(function(skill) {

                    return skill
                        .toLowerCase()
                        .includes(search);

                });


            const matchesType =
                type === "all" ||
                job.type === type;


            return (
                matchesSearch &&
                matchesType
            );

        });


    renderCompanies(filtered);

}


/* =====================================================
   VIEW ROLE
   ===================================================== */

function viewCompanyRole(company, role) {

    alert(
        "🏢 " +
        company +
        "\n\n💼 Role: " +
        role +
        "\n\nThis opportunity can be connected to your backend job system later."
    );

}

/* =====================================================
   📄 RESUME BUILDER
   ===================================================== */

function getRecommendedCourses() {

    if (!student.career ||
        !careerData[student.career]) {

        return [];
    }

    return careerData[student.career].courses || [];
}


/* =====================================================
   CALCULATE LEARNING PROGRESS
   ===================================================== */

function calculateLearningProgress() {

    const recommended =
        getRecommendedCourses();

    if (recommended.length === 0) {
        return {
            completed: 0,
            total: 0,
            percentage: 0
        };
    }


    const completedCourses =
        student.courses.filter(function(course) {

            if (typeof course === "string") {
                return true;
            }

            return course.completed !== false;

        });


    const completedNames =
        completedCourses.map(function(course) {

            return (
                typeof course === "string"
                    ? course
                    : course.name
            ).trim().toLowerCase();

        });


    let completed = 0;


    recommended.forEach(function(course) {

        if (
            completedNames.includes(
                course.trim().toLowerCase()
            )
        ) {

            completed++;

        }

    });


    return {

        completed: completed,

        total: recommended.length,

        percentage:
            Math.round(
                completed /
                recommended.length *
                100
            )

    };

}


/* =====================================================
   UPDATE RESUME LOCK
   ===================================================== */

function updateResumeStatus() {

    const locked =
        getElement("resumeLocked");

    const unlocked =
        getElement("resumeUnlocked");


    if (!locked || !unlocked) return;


    const progress =
        calculateLearningProgress();


    const progressBar =
        getElement("resumeProgressBar");

    const progressPercent =
        getElement("resumeProgressPercent");

    const progressText =
        getElement("resumeProgressText");


    if (progressBar) {

        progressBar.style.width =
            progress.percentage + "%";

    }


    if (progressPercent) {

        progressPercent.textContent =
            progress.percentage + "%";

    }


    if (progressText) {

        if (progress.total === 0) {

            progressText.textContent =
                "Select a career first to begin your learning path.";

        } else {

            progressText.textContent =
                progress.completed +
                " of " +
                progress.total +
                " recommended courses completed.";

        }

    }


    if (progress.percentage >= 100) {

        locked.style.display = "none";

        unlocked.style.display = "block";

        generateResume();

    } else {

        locked.style.display = "block";

        unlocked.style.display = "none";

    }

}


/* =====================================================
   GENERATE RESUME
   ===================================================== */

function generateResume() {

    setText(
        "resumeName",
        student.name || "Student"
    );


    const contactParts = [];


    if (student.email) {

        contactParts.push(
            student.email
        );

    }


    if (student.phone) {

        contactParts.push(
            student.phone
        );

    }


    if (student.location) {

        contactParts.push(
            student.location
        );

    }


    setText(
        "resumeContact",
        contactParts.length
            ? contactParts.join(" • ")
            : "Email • Phone • Location"
    );


    setText(
        "resumeCareerName",
        student.career || "your career"
    );


    setText(
        "resumeCareer",
        student.career ||
        "Career goal not selected"
    );


    /* CAREER OBJECTIVE */

    const objective =
        student.career
            ? "Motivated student preparing for a career as a " +
              student.career +
              ", with practical learning experience and a commitment to continuous improvement."
            : "Motivated student seeking opportunities to build a successful career.";


    setText(
        "resumeObjective",
        objective
    );


    /* EDUCATION */

    const educationParts = [];


    if (student.education.degree) {

        educationParts.push(
            student.education.degree
        );

    }


    if (student.education.branch) {

        educationParts.push(
            student.education.branch
        );

    }


    if (student.education.college) {

        educationParts.push(
            student.education.college
        );

    }


    if (student.education.graduation) {

        educationParts.push(
            "Graduation: " +
            student.education.graduation
        );

    }


    setText(
        "resumeEducation",
        educationParts.length
            ? educationParts.join(" • ")
            : "Education details not added yet."
    );


    /* SKILLS */

    const skillsContainer =
        getElement("resumeSkills");


    if (skillsContainer) {

        skillsContainer.innerHTML = "";


        if (student.skills.length === 0) {

            skillsContainer.innerHTML =
                "<span>No skills added yet.</span>";

        } else {

            student.skills.forEach(
                function(skill) {

                    const tag =
                        document.createElement("span");

                    tag.textContent =
                        skill;

                    skillsContainer.appendChild(tag);

                }
            );

        }

    }


    /* COURSES */

    const coursesContainer =
        getElement("resumeCourses");


    if (coursesContainer) {

        coursesContainer.innerHTML = "";


        const completedCourses =
            student.courses.filter(
                function(course) {

                    return typeof course === "string"
                        ? true
                        : course.completed !== false;

                }
            );


        if (completedCourses.length === 0) {

            coursesContainer.innerHTML =
                "<p>No completed courses yet.</p>";

        } else {

            completedCourses.forEach(
                function(course) {

                    const item =
                        document.createElement("div");

                    item.className =
                        "resume-course-item";

                    item.textContent =
                        "✓ " +
                        (
                            typeof course === "string"
                                ? course
                                : course.name
                        );

                    coursesContainer.appendChild(
                        item
                    );

                }
            );

        }

    }

}


/* =====================================================
   UPDATE RESUME WHEN PAGE OPENS
   ===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setTimeout(
            function() {

                updateResumeStatus();

            },
            100
        );

    }
);