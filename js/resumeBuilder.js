var bio = {
	"name": "Glenn Zhu",
	"role": "SDE",
	"contact": {
		"mobile": "832-914-6226",
		"email": "zzl@rice.edu",
		"twitter": "none",
		"github": "github.com/GlennZhu",
		"blog": "ziliangzhu.blogspot.com",
		"location": "Houston"
	},
	"picture": "https://www.linkedin.com/profile/view?id=174900275&trk=nav_responsive_tab_profile",
	"welcomeMsg": "Hello",
	"skills": ["Scala", "Java", "Swift"]
}

var work = {
	"jobs": [
		{
			"start": "5/2014",
			"position": "SDE Intern",
			"employer": "Amazon",
			"years": 0.3,
			"location": "Seattle, WA"
		},
		{
			"start": "5/2015",
			"position": "SDE Intern",
			"employer": "LinkedIn",
			"years": 0.3,
			"location": "Mountain View"
		}
	]
}

var education = {
	"schools": [
		{
			"name": "Rice University",
			"years": 2,
			"location": "Houston, TX",
			"major": "computer science",
			"graduation year": 2016
		}
	]
	
}

var project = [
	{
		"start": "05/2014",
		"title": "list.amazon.com",
		"description": "internal tool"
	},
	{
		"start": "01/2015",
		"title": "Owl Express",
		"description": "hackrice 2015"
	}
]

var projects = {}

function displayWork() {
	$("#workExperience").append(HTMLworkStart);
	for (var wk in work.jobs) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[wk].employer);
		$("#workExperience").append(formattedEmployer);

		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[wk].position);
		$("#workExperience").append(formattedTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[wk].city);
		$("#workExperience").append(formattedLocation);
	}
}

function inName() {
	var name = bio.name;
	name = name.trim().toLowerCase();
	var splited = name.split(" ");
	name = splited[0].charAt(0).toUpperCase() + splited[0].slice(1) + " " + splited[1].toUpperCase();
	document.getElementById('name').innerHTML = name;
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (var idx in project) {
		var formattedProject = HTMLprojectTitle.replace("%data%", project[idx].title);
		formattedProject = formattedProject + HTMLprojectDates.replace("%data%", project[idx].start);
		formattedProject = formattedProject + HTMLprojectDescription.replace("%data%", project[idx].description);
		$("#projects").append(formattedProject);
	}
}

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);	
	}
}

$("#main").append(internationalizeButton);
displayWork();
projects.display();
$("#mapDiv").append(googleMap);

var formattedName = HTMLheaderName.replace("%data%", bio["name"]);
var formattedRole = HTMLheaderRole.replace("%data%", bio["role"]);

$("#header").append(formattedName);
$("#header").append(formattedRole);





















