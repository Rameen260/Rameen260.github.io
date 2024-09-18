let numProjShown=0;
const projects=[{
    date: "2024-04-01",
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
},
{
    date: "2024-01-01",
    title: "Syllabus Organizer",
    image: "/assets/img/syllabusorganizer.png",
    altImage: "syllabus organizer",
    description: "Webiste that highlights student's course information",
    tools: "Python, Flask, SQLAlchemy",
    accomplishments: [
        "Developed a website that extracts all relevant information from user’s course syllabus (important deadlines, grade distributions, etc.)",
        "Utilized Flask to manage user requests and SQLAlchemy for user authentication and storing course information",
    ]
},
{
    date: "2024-03-01",
    title: "Custom Processor",
    image: "/assets/img/customproccesor.png",
    altImage: "Custom Processor",
    description: "Custom Processor built using verilog",
    tools: "Verilog/Assembly",
    accomplishments: [
        "Developed a custom processor, complete with its own assembly language, capable of executing multiple instructions such as mv, mvt, add, sub, and, ld, st, along with stack operations and conditional branches.",
        "Utilized ModelSim for simulating and debugging the processor on the DE1-SoC board.",
    ]
},
{
    date: "2022-03-01",
    title: "Reversi",
    image: "/assets/img/reversi.png",
    altImage: "Reversi",
    description: "Reversi against AI",
    tools: "C",
    accomplishments: [
        "Built a fully function Reversi game (also known as Othello), programmed for user to face a high difficulty AI",
    ]
},
{
    date: "2024-03-01",
    title: "Block Breaker Game",
    image: "/assets/img/blockbreaker.png",
    altImage: "blockbreaker",
    description: "Block Breaker game designed to function of FPGAs",
    tools: "C",
    accomplishments: [
        "Engineered a high-performance block breaker game using C and Assembly designed for FPGA’s"
    ]
}
];

projects.sort((a, b) => new Date(b.date) - new Date(a.date));

function displayProjects(showProject){
    const projectDisplay = document.getElementById("recentprojects");

    //projectDisplay.innerHTML="";
   // const showProject= projects[0];
    const popDescription = showProject.accomplishments.map(item=>`<li>${item}</li>`).join(''); //joins everything into one string

    const projectCode=`
            <div class="col s12 m6 l4">
                <div class="card medium">
                <div class="card-image waves-effect waves-block waves-light">
                  <img alt="${showProject.altImage}" src="${showProject.image}" style="height: 100%; width: 100%" class="activator" />
                </div>
                <div class="card-content">
                  <span class="card-title activator teal-text hoverline">${showProject.title}<i
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
    `
    projectDisplay.innerHTML+=projectCode;
    numProjShown++;
}

function intialProjects(){
displayProjects(projects[0]);
//displayProjects(projects[1]);
//displayProjects(projects[2]);
document.getElementById("showLessProjects").style.display = "none";
document.getElementById("loadMoreProjects").style.display = "inline-block";
}

function loadMore(){
    while (numProjShown<projects.length){
        displayProjects(projects[numProjShown]);
    }

}


intialProjects();

document.getElementById("loadMoreProjects").addEventListener("click",function(){ //load more projects
    loadMore();
    document.getElementById("loadMoreProjects").style.display = "none";
    document.getElementById("showLessProjects").style.display = "inline-block";
}
);

document.getElementById("showLessProjects").addEventListener("click",function(){ //show less projects
    numProjShown=0;
    const projectDisplay = document.getElementById("recentprojects");
    projectDisplay.innerHTML=''; //resetting to no projects shown
    intialProjects();
}
);