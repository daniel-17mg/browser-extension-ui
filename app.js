const tools = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

let themeToggle = document.getElementById("theme-toggle");

let allExt = document.getElementById("All-ext");

let active = document.getElementById("active");

let inactive = document.getElementById("Inactive");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  let isDarkMode = document.body.classList.contains("dark-mode");
  themeToggle.setAttribute("aria-pressed", isDarkMode);

  if (isDarkMode) {
    themeToggle
      .querySelector("img")
      .setAttribute("src", "./assets/images/icon-sun.svg");
    themeToggle.querySelector("img").setAttribute("alt", "Light mode icon");
  } else {
    themeToggle
      .querySelector("img")
      .setAttribute("src", "./assets/images/icon-moon.svg");
    themeToggle.querySelector("img").setAttribute("alt", "Dark mode icon");
  }
});

allExt.addEventListener("click", () => {
  document.getElementById(
    "extensions-container"
  ).innerHTML = `   <section   class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[0].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[0].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[0].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>


          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[1].logo}" class="w-[3rem]" alt="style spy logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[1].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[1].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[2].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[2].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[2].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[3].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[3].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[3].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[4].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[4].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[4].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[5].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[5].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[5].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[6].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[6].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[6].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[7].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[7].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[7].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[8].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[8].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[8].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[9].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[9].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[9].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[10].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[10].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[10].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>

          <section  class="extensions flex-col justify-between flex h-[11rem] bg-white shadow-2xl p-4 rounded-xl">
            <div class="flex gap-3">
              <img src="${tools[11].logo}" class="w-[3rem]" alt="devlens logo" />
              <div class="text-[0.9rem] font-light">
                <h1 class="font-bold">${tools[11].name}</h1>
                <p class="text-[0.8rem] font-light opacity-55">${tools[11].description}</p>
              </div>
            </div>

            <div class="flex justify-between">
              <button class="text-[0.8rem] border-gray-500 border rounded-2xl hover:bg-[rgb(186,80,80)] hover:border-[rgb(186,80,80)] p-1 remove">remove</button>
              <button class="">
                <i class="fa fa-toggle-off toggler text-[rgb(186,80,80)] text-2xl" aria-hidden="true" ></i>
              </button>
            </div>
          </section>`;

  let toggler = document.querySelectorAll(".toggler");

  let removeBtn = document.querySelectorAll(".remove");

  removeBtn.forEach((btn) => { 
    btn.addEventListener("click", () => {
      // tools.splice(index, 1); 
      // btn.parentElement.parentElement.remove(); 
      btn.closest(".extensions").remove();
    });
  });

  toggler.forEach((buttons, index) => {
    buttons.addEventListener("click", () => {
      
      
      // button.classList.toggle("fa-toggle-on", tools[index].isActive);
      // button.classList.toggle("fa-toggle-off", !tools[index].isActive);
      
      
      if (tools[index].isActive === true) {
        buttons.classList.remove("fa-toggle-off");
        buttons.classList.add("fa-toggle-on");
      } else {
        buttons.classList.remove("fa-toggle-on");
        buttons.classList.add("fa-toggle-off");
      }
      tools[index].isActive = !tools[index].isActive;
    });
  });
  
  const ext = document.querySelectorAll(".extensions");

  active.addEventListener("click", () => { 
  
    ext.forEach((exts, index) => { 
        exts.classList.toggle("hidden", tools[index].isActive);
    
      // console.log(exts);
    });
  });

  inactive.addEventListener("click", () => { 
  
    ext.forEach((exts, index) => { 
        exts.classList.toggle("hidden", !tools[index].isActive);
    
      console.log(exts);
    });
  });
});

