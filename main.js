function showSection(id) {
    var sections = document.getElementsByClassName('service');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

function showProject(id) {
    var projects = document.getElementsByClassName('project');
    for (var i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}


