
    // function toggleText(element) {
    //     if (element.textContent === "See more") {
    //         element.textContent = "See less";
    //     } else {
    //         element.textContent = "See more";
    //     }
    // }

    function toggleText() {
        var moreProjects = document.querySelector(".more-projects");
        var btn = document.getElementById("toggle-btn");

        if (moreProjects.style.display === "none") {
            moreProjects.style.display = "block";
            btn.textContent = "See less";
        } else {
            moreProjects.style.display = "none";
            btn.textContent = "See more";
        }
    }































































