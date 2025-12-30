/* app.js */
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // 1 Data
  // =========================
  const colleges = [
    { id:"baruch", name:"Baruch College (CUNY)", borough:"Manhattan", image:"./images/b.jpg",
      desc:"Business, finance, and strong NYC opportunities." },

    { id:"hunter", name:"Hunter College (CUNY)", borough:"Manhattan", image:"./images/h.jpg",
      desc:"Science, health, and strong academics in the city." },

    { id:"ccny", name:"City College of New York (CCNY)", borough:"Manhattan", image:"./images/c.jpg",
      desc:"Engineering and STEM with NYC connections." },

    { id:"nyu", name:"New York University (NYU)", borough:"Manhattan", image:"./images/n.jpg",
      desc:"Big city campus with many majors and programs." },

    { id:"newschool", name:"The New School (Parsons)", borough:"Manhattan", image:"./images/nn.jpg",
      desc:"Design, arts, and portfolio focused programs in NYC." },

    { id:"cooper", name:"The Cooper Union", borough:"Manhattan", image:"./images/cc.jpg",
      desc:"Engineering, art, and architecture enrichment." },

    { id:"fordham", name:"Fordham University", borough:"Bronx and Manhattan", image:"./images/f.jpg",
      desc:"Pre college learning, leadership, and real college courses." },

    { id:"pace", name:"Pace University", borough:"Manhattan", image:"./images/p.jpg",
      desc:"Career focused programs plus strong computing options." }
  ];

  const interests = [
    { key: "engineering", label: "Engineering" },
    { key: "medical", label: "Medical" },
    { key: "dance", label: "Dance" },
    { key: "arts", label: "Arts" },
    { key: "business", label: "Business" }
  ];

  const programs = {
    medical: [
      {
        title: "Baruch STEP Academy High School Program",
        provider: "Baruch STEP Academy (CUNY)",
        cost: "🟢 Free",
        details: "Pre college STEM learning that can include health and biomedical themed study depending on the term.",
        highlights: [
          "Explore biomedical topics like anatomy and physiology",
          "Strengthen science habits and lab style thinking",
          "Build confidence for harder science classes"
        ],
        collegeId: "baruch",
        infoText: "Learn more",
        infoUrl: "https://step.baruch.cuny.edu/",
        applyText: "Apply now",
        applyUrl: "https://step.baruch.cuny.edu/how-to-apply/"
      },
      {
        title: "College Now at Baruch",
        provider: "Baruch College Now (CUNY)",
        cost: "🟢 Free",
        details: "Dual enrollment college credit program. Course options change by term.",
        highlights: [
          "Experience college pacing and expectations early",
          "Earn credit that can support pre health pathways",
          "Strengthen writing and study discipline"
        ],
        collegeId: "baruch",
        infoText: "Learn more",
        infoUrl: "https://collegenow.baruch.cuny.edu/",
        applyText: "Apply now",
        applyUrl:
          "https://cssa.cunyfirst.cuny.edu/psc/cnycsprd/GUEST/SA/c/OAA_ONLINE_APPLICATION.CU_ENTRY_VIST_PG.GBL"
      },
      {
        title: "College Now at Hunter",
        provider: "Hunter College (CUNY)",
        cost: "🟢 Free",
        details: "College credit options that can include health aligned courses depending on the term.",
        highlights: [
          "Try college level science learning early",
          "Improve study habits, note taking, and writing",
          "Get a real feel for a NYC campus"
        ],
        collegeId: "hunter",
        infoText: "Learn more",
        infoUrl: "https://www.hunter.cuny.edu/college-now",
        applyText: "Apply now",
        applyUrl: "https://www.hunter.cuny.edu/college-now/apply-now"
      },
      {
        title: "College Now at CCNY",
        provider: "City College of New York (CUNY)",
        cost: "🟢 Free",
        details: "College credit courses with strong academics. Health aligned options depend on the term.",
        highlights: [
          "Build a stronger transcript with college credit",
          "Practice college workload and deadlines",
          "Get early exposure to a major campus"
        ],
        collegeId: "ccny",
        infoText: "Learn more",
        infoUrl: "https://www.ccny.cuny.edu/collegenow",
        applyText: "Apply now",
        applyUrl: "https://www.ccny.cuny.edu/collegenow/apply"
      },
      {
        title: "NYU Tandon ARISE",
        provider: "NYU Tandon K12 STEM",
        cost: "🟢 Free (stipend)",
        details: "Research lab experience with tracks that can be medical adjacent depending on placement.",
        highlights: [
          "Work in real research labs and learn research culture",
          "Build a strong application story beyond grades",
          "Meet mentors and students in STEM"
        ],
        collegeId: "nyu",
        infoText: "Learn more",
        infoUrl: "https://k12stem.engineering.nyu.edu/programs/arise",
        applyText: "Apply now",
        applyUrl: "https://k12stem.engineering.nyu.edu/programs/arise"
      },
      {
        title: "NYU Precollege",
        provider: "New York University",
        cost: "🟡 Paid",
        details: "Choose courses across academics. Health aligned choices depend on the term.",
        highlights: [
          "Experience college life through real NYU courses",
          "Explore majors before you apply to college",
          "Build independence and confidence"
        ],
        collegeId: "nyu",
        infoText: "Learn more",
        infoUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege-program.html",
        applyText: "Apply now",
        applyUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege/application-information.html"
      },
      {
        title: "College Courses for High School Students",
        provider: "Fordham University",
        cost: "🟡 Paid",
        details: "Real Fordham courses that strengthen readiness and academic confidence.",
        highlights: [
          "Take real college courses and build confidence",
          "Strengthen writing and critical thinking",
          "Show effort beyond school requirements"
        ],
        collegeId: "fordham",
        infoText: "Learn more",
        infoUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/college-courses-for-high-school-students/",
        applyText: "Apply now",
        applyUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/college-courses-for-high-school-students/"
      },
      {
        title: "High School Bridge Summer Program",
        provider: "Pace University",
        cost: "🟡 Paid",
        details: "Take a for credit course. Best fit depends on the class you choose.",
        highlights: [
          "Earn credit and prove you can handle college work",
          "Build study discipline and writing habits",
          "Get comfortable navigating a campus"
        ],
        collegeId: "pace",
        infoText: "Learn more",
        infoUrl:
          "https://www.pace.edu/summer-sessions/pre-college-programs/high-school-bridge-summer-program",
        applyText: "Apply now",
        applyUrl: "https://admission.pace.edu/"
      }
    ],

    engineering: [
      {
        title: "Baruch STEP Academy High School Program",
        provider: "Baruch STEP Academy (CUNY)",
        cost: "🟢 Free",
        details: "STEM enrichment that can include coding and applied STEM topics depending on the year.",
        highlights: [
          "Build coding and problem solving skills",
          "Create projects you can talk about in essays",
          "Prepare for tougher math and science sequences"
        ],
        collegeId: "baruch",
        infoText: "Learn more",
        infoUrl: "https://step.baruch.cuny.edu/",
        applyText: "Apply now",
        applyUrl: "https://step.baruch.cuny.edu/how-to-apply/"
      },
      {
        title: "College Now at Hunter",
        provider: "Hunter College (CUNY)",
        cost: "🟢 Free",
        details: "College credit courses that can support math, CS, and engineering prep depending on the term.",
        highlights: [
          "Strengthen math and computing readiness",
          "Earn college credit and show academic ambition",
          "Get campus experience before applications"
        ],
        collegeId: "hunter",
        infoText: "Learn more",
        infoUrl: "https://www.hunter.cuny.edu/college-now",
        applyText: "Apply now",
        applyUrl: "https://www.hunter.cuny.edu/college-now/apply-now"
      },
      {
        title: "STEM Research Academy at CCNY (College Now)",
        provider: "City College of New York (CUNY)",
        cost: "🟢 Free",
        details: "Engineering and STEM research training with lab style learning.",
        highlights: [
          "Learn research skills and lab style workflow",
          "Build a project that shows real STEM commitment",
          "Meet mentors and peers who take STEM seriously"
        ],
        collegeId: "ccny",
        infoText: "Learn more",
        infoUrl: "https://www.ccny.cuny.edu/collegenow/stem-research-academy",
        applyText: "Apply now",
        applyUrl: "https://www.ccny.cuny.edu/collegenow/apply"
      },
      {
        title: "College Now at CCNY",
        provider: "City College of New York (CUNY)",
        cost: "🟢 Free",
        details: "College credit courses strong for engineering math and science depending on the term.",
        highlights: [
          "Earn credit and get used to college expectations",
          "Strengthen your academic foundation in STEM",
          "Learn to manage workload like a college student"
        ],
        collegeId: "ccny",
        infoText: "Learn more",
        infoUrl: "https://www.ccny.cuny.edu/collegenow",
        applyText: "Apply now",
        applyUrl: "https://www.ccny.cuny.edu/collegenow/apply"
      },
      {
        title: "NYU Tandon ARISE",
        provider: "NYU Tandon K12 STEM",
        cost: "🟢 Free (stipend)",
        details: "Hands on research experience in labs across engineering and data focused areas.",
        highlights: [
          "Work in real labs with research mentors",
          "Build proof of interest beyond school classes",
          "Learn professional communication and research habits"
        ],
        collegeId: "nyu",
        infoText: "Learn more",
        infoUrl: "https://k12stem.engineering.nyu.edu/programs/arise",
        applyText: "Apply now",
        applyUrl: "https://k12stem.engineering.nyu.edu/programs/arise"
      },
      {
        title: "NYU Precollege",
        provider: "New York University",
        cost: "🟡 Paid",
        details: "Choose from many courses. STEM options depend on course availability.",
        highlights: [
          "Experience college level classes at NYU",
          "Explore majors before you commit",
          "Develop stronger independence and confidence"
        ],
        collegeId: "nyu",
        infoText: "Learn more",
        infoUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege-program.html",
        applyText: "Apply now",
        applyUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege/application-information.html"
      },
      {
        title: "The Cooper Union Saturday Program",
        provider: "The Cooper Union",
        cost: "🟢 Free",
        details: "College level enrichment that builds design and engineering style thinking.",
        highlights: [
          "Strengthen technical thinking and creative problem solving",
          "Learn in a serious academic environment",
          "Build habits that translate to engineering readiness"
        ],
        collegeId: "cooper",
        infoText: "Learn more",
        infoUrl: "https://cooper.edu/academics/outreach-and-pre-college/saturday-program",
        applyText: "Apply now",
        applyUrl: "https://cooper.edu/academics/outreach-and-pre-college/saturday-program"
      },
      {
        title: "Seidenberg STEM Summer Institute",
        provider: "Pace University Seidenberg",
        cost: "🟢 Free",
        details: "Computing focused summer institute with coding and data focused learning.",
        highlights: [
          "Build Python coding confidence through projects",
          "Learn data and computing skills you can reuse",
          "Develop practical skills for school and beyond"
        ],
        collegeId: "pace",
        infoText: "Learn more",
        infoUrl:
          "https://www.pace.edu/seidenberg/academics/pre-college-summer-programs/stem-summer-institute",
        applyText: "Apply now",
        applyUrl:
          "https://www.pace.edu/seidenberg/academics/pre-college-summer-programs/stem-summer-institute"
      }
    ],

    dance: [
      {
        title: "Broadway Workshop Summer Stage at Baruch Performing Arts Center",
        provider: "Broadway Workshop",
        cost: "🟡 Paid",
        details: "Musical theatre training with a showcase at Baruch Performing Arts Center.",
        highlights: [
          "Train choreography, acting, and performance skills",
          "Build confidence on stage in a real venue setting",
          "Work with focused students and teaching artists"
        ],
        collegeId: "baruch",
        infoText: "Learn more",
        infoUrl: "https://broadwayworkshop.com/program/summer-stage/",
        applyText: "Apply now",
        applyUrl: "https://broadwayworkshop.com/summer-stage-audition-form/"
      }
    ],

    arts: [
      {
        title: "Parsons Summer Intensive Studies NYC (Parsons Academy)",
        provider: "The New School Parsons",
        cost: "🟡 Paid",
        details: "Studio based design learning focused on skill building and portfolio development.",
        highlights: [
          "Build a portfolio with real studio projects",
          "Learn critique, process, and design thinking",
          "Experience an arts school environment"
        ],
        collegeId: "newschool",
        infoText: "Learn more",
        infoUrl: "https://www.newschool.edu/parsons/youth-teen-summer-ny/",
        applyText: "Apply now",
        applyUrl: "https://www.newschool.edu/parsons/youth-teen-summer-ny/"
      },
      {
        title: "The Cooper Union Saturday Program",
        provider: "The Cooper Union",
        cost: "🟢 Free",
        details: "Serious enrichment that supports art, architecture, and design style learning.",
        highlights: [
          "Practice college level creative and technical thinking",
          "Learn with peers who care about craft and ideas",
          "Build stronger foundations for portfolio work"
        ],
        collegeId: "cooper",
        infoText: "Learn more",
        infoUrl: "https://cooper.edu/academics/outreach-and-pre-college/saturday-program",
        applyText: "Apply now",
        applyUrl: "https://cooper.edu/academics/outreach-and-pre-college/saturday-program"
      },
      {
        title: "Summer Art Intensive",
        provider: "The Cooper Union",
        cost: "🟡 Paid (scholarship option)",
        details: "Portfolio driven summer art program with strong studio practice.",
        highlights: [
          "Create focused portfolio pieces with guidance",
          "Build stronger fundamentals and visual voice",
          "Learn critique and presentation skills"
        ],
        collegeId: "cooper",
        infoText: "Learn more",
        infoUrl: "https://cooper.edu/academics/outreach-and-pre-college/summer-art-intensive",
        applyText: "Apply now",
        applyUrl: "https://cooper.edu/academics/outreach-and-pre-college/summer-art-intensive"
      },
      {
        title: "NYU Precollege",
        provider: "New York University",
        cost: "🟡 Paid",
        details: "Course options can include arts depending on the term and offerings.",
        highlights: [
          "Take real NYU classes and feel the pace",
          "Explore interests before choosing a major",
          "Build independence and confidence in college settings"
        ],
        collegeId: "nyu",
        infoText: "Learn more",
        infoUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege-program.html",
        applyText: "Apply now",
        applyUrl:
          "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege/application-information.html"
      }
    ],

    business: [
      {
        title: "Summer Leaders Academy",
        provider: "Fordham University",
        cost: "🟡 Paid",
        details: "Leadership focused pre college experience with tracks that support business style development.",
        highlights: [
          "Build leadership and communication skills",
          "Practice networking and teamwork",
          "Develop a stronger story for applications"
        ],
        collegeId: "fordham",
        infoText: "Learn more",
        infoUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/summer-leaders-academy/",
        applyText: "Apply now",
        applyUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/summer-leaders-academy/"
      },
      {
        title: "College Courses for High School Students",
        provider: "Fordham University",
        cost: "🟡 Paid",
        details: "Real Fordham courses that can strengthen writing, analysis, and college readiness.",
        highlights: [
          "Prove you can succeed in real college classes",
          "Strengthen writing and critical thinking skills",
          "Build confidence in academic environments"
        ],
        collegeId: "fordham",
        infoText: "Learn more",
        infoUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/college-courses-for-high-school-students/",
        applyText: "Apply now",
        applyUrl:
          "https://www.fordham.edu/summer-session/pre-college-programs/college-courses-for-high-school-students/"
      },
      {
        title: "College Now at Baruch",
        provider: "Baruch College Now (CUNY)",
        cost: "🟢 Free",
        details: "College credit and college readiness. Course options change by term.",
        highlights: [
          "Experience college expectations at a business focused campus",
          "Earn credit and strengthen your transcript",
          "Build study discipline and independence"
        ],
        collegeId: "baruch",
        infoText: "Learn more",
        infoUrl: "https://collegenow.baruch.cuny.edu/",
        applyText: "Apply now",
        applyUrl:
          "https://cssa.cunyfirst.cuny.edu/psc/cnycsprd/GUEST/SA/c/OAA_ONLINE_APPLICATION.CU_ENTRY_VIST_PG.GBL"
      },
      {
        title: "High School Bridge Summer Program",
        provider: "Pace University",
        cost: "🟡 Paid",
        details: "Take a for credit course. Choose a class that supports your goals.",
        highlights: [
          "Earn credit and show academic maturity",
          "Practice deadlines and college level pacing",
          "Build confidence navigating a university setting"
        ],
        collegeId: "pace",
        infoText: "Learn more",
        infoUrl:
          "https://www.pace.edu/summer-sessions/pre-college-programs/high-school-bridge-summer-program",
        applyText: "Apply now",
        applyUrl: "https://admission.pace.edu/"
      }
    ]
  };

  // =========================
  // 2 State
  // =========================
  const state = { selectedCollegeId: null, selectedInterestKey: null };

  // =========================
  // 3 DOM
  // =========================
  const splash = document.getElementById("splash");

  const homeView = document.getElementById("homeView");
  const collegeView = document.getElementById("collegeView");
  const resultsView = document.getElementById("resultsView");

  const collegeGrid = document.getElementById("collegeGrid");
  const searchInput = document.getElementById("searchInput");

  const collegeHeroImg = document.getElementById("collegeHeroImg");
  const collegeTitle = document.getElementById("collegeTitle");
  const collegeDesc = document.getElementById("collegeDesc");
  const interestChips = document.getElementById("interestChips");

  const resultsTitle = document.getElementById("resultsTitle");
  const programList = document.getElementById("programList");
  const programFilterInput = document.getElementById("programFilterInput");

  const backToGridBtn = document.getElementById("backToGridBtn");
  const backToCollegeBtn = document.getElementById("backToCollegeBtn");
  const backToHomeBtn2 = document.getElementById("backToHomeBtn2");

  const required = [
    splash, homeView, collegeView, resultsView,
    collegeGrid, searchInput,
    collegeHeroImg, collegeTitle, collegeDesc, interestChips,
    resultsTitle, programList, programFilterInput,
    backToGridBtn, backToCollegeBtn, backToHomeBtn2
  ];
  if (required.some(x => !x)) return;

  // =========================
  // 4 Helpers
  // =========================
  function escapeHtml(s){
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function showView(which){
    homeView.classList.remove("active");
    collegeView.classList.remove("active");
    resultsView.classList.remove("active");

    if(which === "home") homeView.classList.add("active");
    if(which === "college") collegeView.classList.add("active");
    if(which === "results") resultsView.classList.add("active");
  }

  function getProgramsForSelection(){
    const colId = state.selectedCollegeId;
    const key = state.selectedInterestKey;
    const all = programs[key] || [];
    return all.filter(p => !p.collegeId || p.collegeId === colId);
  }

  // =========================
  // 5 Render
  // =========================
  function renderCollegeGrid(filterText = ""){
    const q = filterText.trim().toLowerCase();
    const filtered = colleges.filter(c => (c.name + " " + c.borough).toLowerCase().includes(q));

    collegeGrid.innerHTML = "";

    filtered.forEach(col => {
      const card = document.createElement("div");
      card.className = "card";
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open ${col.name}`);

      card.innerHTML = `
        <div class="thumb">
          <img src="${col.image}" alt="${escapeHtml(col.name)}"/>
        </div>
        <div class="cardbody">
          <p class="name">${escapeHtml(col.name)}</p>
          <p class="meta">${escapeHtml(col.borough)}</p>
          <p class="meta">${escapeHtml(col.desc)}</p>
        </div>
      `;

      card.addEventListener("click", () => openCollege(col.id));
      card.addEventListener("keydown", (e) => {
        if(e.key === "Enter" || e.key === " "){
          e.preventDefault();
          openCollege(col.id);
        }
      });

      collegeGrid.appendChild(card);
    });
  }

  function renderInterests(){
    interestChips.innerHTML = "";

    interests.forEach(it => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.textContent = it.label;

      chip.addEventListener("click", () => {
        state.selectedInterestKey = it.key;
        [...interestChips.children].forEach(x => x.classList.remove("selected"));
        chip.classList.add("selected");
        openResults();
      });

      interestChips.appendChild(chip);
    });
  }

  function renderProgramList(filterText){
    const q = filterText.trim().toLowerCase();

    const list = getProgramsForSelection().filter(p => {
      const hay = (
        p.title + " " +
        p.provider + " " +
        (p.cost || "") + " " +
        p.details + " " +
        (p.highlights || []).join(" ")
      ).toLowerCase();
      return hay.includes(q);
    });

    programList.innerHTML = "";

    if (list.length === 0) {
      const col = colleges.find(c => c.id === state.selectedCollegeId);
      const it = interests.find(x => x.key === state.selectedInterestKey);

      const collegeName = col ? col.name : "This college";
      const interestName = it ? it.label : "this category";

      programList.innerHTML = `
        <div class="item">
          <h3>No programs found</h3>
          <p>${escapeHtml(collegeName)} does not offer any <strong>${escapeHtml(interestName)}</strong> programs right now.</p>
          <p>Check back later, or try a different interest category.</p>
        </div>
      `;
      return;
    }

    list.forEach(p => {
      const costChip = p.cost ? `<span class="tag">${escapeHtml(p.cost)}</span>` : "";
      const highlightsHtml = (p.highlights || [])
        .map(h => `<span class="tag">${escapeHtml(h)}</span>`)
        .join("");

      const infoBox = p.infoUrl ? `
        <a class="linkBox learn" href="${p.infoUrl}" target="_blank" rel="noopener noreferrer">
          <div>
            <div class="linkBoxTitle">${escapeHtml(p.infoText || "Learn more")}</div>
            <div class="linkBoxSub">Overview, eligibility, dates, details</div>
          </div>
          <div class="linkBoxIcon">↗</div>
        </a>
      ` : "";

      const applyBox = p.applyUrl ? `
        <a class="linkBox apply" href="${p.applyUrl}" target="_blank" rel="noopener noreferrer">
          <div>
            <div class="linkBoxTitle">${escapeHtml(p.applyText || "Apply now")}</div>
            <div class="linkBoxSub">Start the application process</div>
          </div>
          <div class="linkBoxIcon">✓</div>
        </a>
      ` : "";

      const item = document.createElement("div");
      item.className = "item";

      item.innerHTML = `
        <h3>${escapeHtml(p.title)}</h3>
        <p><strong>${escapeHtml(p.provider)}</strong></p>
        <p>${escapeHtml(p.details)}</p>

        <div class="tagrow">
          ${costChip}
          ${highlightsHtml}
        </div>

        <div class="linkRow">
          ${infoBox}
          ${applyBox}
        </div>
      `;

      programList.appendChild(item);
    });
  }

  // =========================
  // 6 Navigation
  // =========================
  function openCollege(collegeId){
    state.selectedCollegeId = collegeId;
    state.selectedInterestKey = null;

    const col = colleges.find(c => c.id === collegeId);
    if(!col) return;

    collegeHeroImg.src = col.image;
    collegeHeroImg.alt = col.name;

    collegeTitle.textContent = col.name;
    collegeDesc.textContent = col.desc;

    renderInterests();
    showView("college");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openResults(){
    const col = colleges.find(c => c.id === state.selectedCollegeId);
    const it = interests.find(x => x.key === state.selectedInterestKey);
    if(!col || !it) return;

    resultsTitle.textContent = `${col.name} · ${it.label}`;
    programFilterInput.value = "";
    renderProgramList("");
    showView("results");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // =========================
  // 7 Events
  // =========================
  searchInput.addEventListener("input", (e) => renderCollegeGrid(e.target.value));
  programFilterInput.addEventListener("input", (e) => renderProgramList(e.target.value));

  backToGridBtn.addEventListener("click", () => {
    showView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  backToCollegeBtn.addEventListener("click", () => {
    showView("college");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  backToHomeBtn2.addEventListener("click", () => {
    showView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // =========================
  // 8 Splash: bug-free fade out
  // =========================
  // total splash feel ~ 4.8s bg + text timings, then fade out
  const SPLASH_VISIBLE_MS = 5200;
  const SPLASH_FADE_MS = 900;

  setTimeout(() => {
    splash.classList.add("fadeOut");
    setTimeout(() => {
      splash.style.display = "none";
    }, SPLASH_FADE_MS + 50);
  }, SPLASH_VISIBLE_MS);

  // =========================
  // 9 Init
  // =========================
  renderCollegeGrid("");
});
