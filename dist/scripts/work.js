let categories = document.querySelectorAll(".work__section_categories button");
let works = document.querySelectorAll(".work");

categories.forEach(category => {
    category.addEventListener("click", function() {
      categories.forEach(e => (e.className = ""));
      this.className = "active";
  
      works.forEach(work => {
        if (work.className !== "work hidden") {
          work.className = "work hidden";
        }
        if (work.getAttribute("data-category") === category.value) {
          work.className = "work";
        } else if (category.value === "all") {
          work.className = "work";
        }
      });
    });
  });