const projects=[{
    title: "Day Planner",
    image: "/assets/img/dayplannerpic.png",
    altImage: "Geographic Information System",
    description: "NEWA Geographic Information System built on Glade ",
    tools: "C++, Glade, EZGL",
    accomplishments: [
        "NEWLed a team of 3 engineering students in developing a functional Geographic Information System in C++ that utilizes OpenStreetMap API to generate detailed and interactive maps of any chosen city.",
        "Utilized algorithms such as Dijkstra's Algorithm and A* Search to determine the shortest route for efficient navigation.",
        "Actively discussed algorithms, considering factors such as efficiency, scalability, and feasibility to guide the team toward effective solutions."
    ]
},
{
    title: "Syllabus Organizer",
    image: "/assets/img/syllabusorganizer.png",
    altImage: "syllabus organizer",
    description: "Webiste that highlights student's course information",
    tools: "Python, Flask, SQLAlchemy",
    accomplishments: [
        "Developed a website that extracts all relevant information from user’s course syllabus (important deadlines, grade distributions, etc.)",
        "Utilized Flask to manage user requests and SQLAlchemy for user authentication and storing course information",
        "Actively discussed algorithms, considering factors such as efficiency, scalability, and feasibility to guide the team toward effective solutions."
    ]
},
{
    title: "Custom Processor",
    image: "/assets/img/customproccesor.png",
    altImage: "Custom Processor",
    description: "Custom Processor built using verilog",
    tools: "Verilog/Assembly",
    accomplishments: [
        "Developed a custom processor, complete with its own assembly language, capable of executing multiple instructions such as mv, mvt, add, sub, and, ld, st, along with stack operations and conditional branches.",
        "Utilized ModelSim for simulating and debugging the processor on the DE1-SoC board.",
        "Actively discussed algorithms, considering factors such as efficiency, scalability, and feasibility to guide the team toward effective solutions."
    ]
},
{
    title: "Reversi",
    image: "/assets/img/reversi.png",
    altImage: "Reversi",
    description: "Reversi against AI",
    tools: "C",
    accomplishments: [
        "Built a fully function Reversi game (also known as Othello), programmed for user to face a high difficulty AI",
        "Utilized ModelSim for simulating and debugging the processor on the DE1-SoC board.",
        "Actively discussed algorithms, considering factors such as efficiency, scalability, and feasibility to guide the team toward effective solutions."
    ]
},

];

function displayProjects(showProject){
    const projectDisplay = document.getElementById("recentprojects");

    projectDisplay.innerHTML="";
   // const showProject= projects[0];
    const popDescription = showProject.accomplishments.map(item=>`<li>${item}</li>`).join(''); //joins everything into one string

    const projectCode=`
    <div class="container">
        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                  <img alt="${showProject.altImage}" src="${showProject.image}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                  <span class="card-title activator teal-text hoverline">Day Planner<i
                      class="mdi-navigation-more-vert right"></i></span>
                  <p>
                  ${showProject.description}
                  </p>
                </div>
                <div class="card-reveal">
                  <!-- TODO: change this -- only close button -->
                  <!-- <span class="card-title brown-text">Accomplishments<i class="mdi-navigation-close right"></i></span> -->
                  <span class="card-title grey-text"><small>Accomplishments</small><i
                      class="mdi-navigation-close right"></i></span>
                  <ul>
                    <li><b>Tools:</b> ${showProject.tools}</li>
                    ${popDescription}
                  </ul>
                </div>
              </div>
            </div>
        </div>
    </div>
    `
    projectDisplay.innerHTML=projectCode;
}

displayProjects(projects[0]);
displayProjects(projects[1]);