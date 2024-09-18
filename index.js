const projects=[{
    title: "Day Planner",
    image: "/assets/img/dayplannerpic.png",
    altImage: "Geographic Information System",
    description: "A Geographic Information System built on Glade ",
    tools: "C++, Glade, EZGL",
    accomplishments: [
        "Led a team of 3 engineering students in developing a functional Geographic Information System in C++ that utilizes OpenStreetMap API to generate detailed and interactive maps of any chosen city.",
        "Utilized algorithms such as Dijkstra's Algorithm and A* Search to determine the shortest route for efficient navigation.",
        "Actively discussed algorithms, considering factors such as efficiency, scalability, and feasibility to guide the team toward effective solutions."
    ]
}];

function displayProjects(){
    const projectDisplay = document.getElementById("recent projects");

    projectDisplay.innerHTML="";
    const showProject= projects[0];
    
    const projectCode=`
    <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                  <img alt="${showProject.altImage}" src="${showProject.image}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                  <span class="card-title activator teal-text hoverline">Day Planner<i
                      class="mdi-navigation-more-vert right"></i></span>
                  <p>
                    ${showProject.description} 
                    THIS IS THE NEW CODE
                  </p>
                </div>
                <div class="card-reveal">
                  <!-- TODO: change this -- only close button -->
                  <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                  <span class="card-title grey-text"><small>Accomplishments</small><i
                      class="mdi-navigation-close right"></i></span>
                  <ul>
                    <li><b>Tools:</b> ${showProject.tools}</li>
                    <li>${showProject.accomplishments[0]}                    
                    </li>
                    <li>${showProject.accomplishments[1]}   </li>
                    <li>${showProject.accomplishments[2]}   
                      </li>
                  </ul>
                </div>
              </div>
    `
    projectDisplay.innerHTML=projectHTML;
}

displayProjects();