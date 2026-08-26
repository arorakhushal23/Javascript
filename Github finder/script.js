/* =========================
   GET HTML ELEMENTS
========================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");

const locationElement = document.getElementById("location");
const website = document.getElementById("website");
const joined = document.getElementById("joined");

const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");

const repoList = document.getElementById("repoList");
const profileLink = document.getElementById("profileLink");


/* =========================
   SEARCH BUTTON
========================= */

searchBtn.addEventListener("click", function () {

    /* Get username from input */

    const usernameInput = searchInput.value.trim();


    /* Check empty input */

    if (usernameInput === "") {

        alert("Please enter a GitHub username.");

        return;
    }


    /* =========================
       API URLS
    ========================= */

    const apiUrl =
        `https://api.github.com/users/${usernameInput}`;

    const repoUrl =
        `https://api.github.com/users/${usernameInput}/repos`;


    /* =========================
       FETCH PROFILE
    ========================= */

    fetch(apiUrl)

        .then(response => {

            /* Check if user exists */

            if (!response.ok) {

                throw new Error("User not found");
            }

            return response.json();
        })


        .then(data => {

            console.log(data);


            /* =========================
               PROFILE INFORMATION
            ========================= */

            /*
                If GitHub name is null,
                use username instead.
            */

            nameElement.textContent =
                data.name || data.login;


            username.textContent =
                "@" + data.login;


            /* Profile picture */

            avatar.src =
                data.avatar_url;


            /* Bio */

            bio.textContent =
                data.bio || "This profile has no bio.";


            /* Location */

            locationElement.textContent =
                data.location || "Location not available";


            /* Website */

            website.textContent =
                data.blog || "No website";


            /* Joined Date */

            const joinDate =
                new Date(data.created_at);


            joined.textContent =
                "Joined " +
                joinDate.toLocaleDateString("en-US", {

                    month: "short",

                    day: "numeric",

                    year: "numeric"

                });


            /* GitHub Profile */

            profileLink.href =
                data.html_url;


            /* =========================
               STATISTICS
            ========================= */

            followers.textContent =
                data.followers;


            following.textContent =
                data.following;


            repos.textContent =
                data.public_repos;


            /* =========================
               FETCH REPOSITORIES
            ========================= */

            fetch(repoUrl)

                .then(response => {

                    if (!response.ok) {

                        throw new Error(
                            "Could not fetch repositories"
                        );
                    }

                    return response.json();
                })


                .then(repositories => {

                    console.log(repositories);


                    /* Remove old repositories */

                    repoList.innerHTML = "";


                    /* Check if there are no repositories */

                    if (repositories.length === 0) {

                        repoList.innerHTML =
                            "<p>No public repositories found.</p>";

                        return;
                    }


                    /* =========================
                       CREATE REPOSITORY CARDS
                    ========================= */

                    repositories.forEach(repo => {

                        /* Create div */

                        const repoElement =
                            document.createElement("div");


                        /* Add CSS class */

                        repoElement.classList.add(
                            "repo-card"
                        );


                        /* Add repository content */

                        repoElement.innerHTML = `

                            <div>

                                <h3>
                                    ${repo.name}
                                </h3>

                                <p>
                                    ${repo.description ||
                                    "No description available."}
                                </p>

                            </div>

                            <span>
                                ⭐ ${repo.stargazers_count}
                            </span>

                        `;


                        /* Add to page */

                        repoList.appendChild(
                            repoElement
                        );

                    });

                })

                .catch(error => {

                    console.log(error);

                    repoList.innerHTML =
                        "<p>Unable to load repositories.</p>";

                });

        })


        /* =========================
           PROFILE ERROR
        ========================= */

        .catch(error => {

            console.log(error);

            alert("GitHub user not found.");

        });

});