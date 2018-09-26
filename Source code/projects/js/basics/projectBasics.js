// code review on Dec. 8, 2016
// 
function prepareHtml(index, project) {
    var div1 = '<div class="grid_2 alhpa project_info_t ">';
    var div2 = '<div class="grid_4 product_inl_x project_link">';
    var div3 = '<div class="grid_x project_row">';
    var div4 = '<div class="grid_4 product_inl">';


    var nameArray = ['PROJECT', 'LOCATION', 'FIXTURES', 'CODE', 'PHOTO CREDIT'];
    var projectArray = [project.project, project.location, project.Fixture, project.Code, project.Credit];

    var html1 = div1.concat(nameArray[index]).concat('</div>');

    var htmlWithLinks = html1.concat(projectArray[index]).concat('</div>');
    var htmlNoLinks = html1.concat(div2).concat(projectArray[index]).concat('</div>');

    if (index >= 0 && index <= 1)
        return htmlNoLinks;
    else if (index == 2)
        return htmlWithLinks;
    else if (index >= 3) {
        if (projectArray[index] == '') return '';
        else {
            if (index == 3)
                return div3.concat(htmlWithLinks);
            else if (index == 4)
                return div3.concat(htmlNoLinks).concat('</div>');
        }
    }
}

// define a function to retrieve project detail from .json file
/*
function populateProjectInfo(selectedProject) {
    var jqxhr3 = $.getJSON("project_information2.json", function (data) {
        $.each(data.projects, function (index, project) {
            if (project.uniqueID == selectedProject) {

                var idArray = ["project_row_project",
                               "project_row_location",
                               "project_row_fixture",
                               "project_row_code",
                               "project_row_credit"];

                var index = 0;
                for (; index < 5; index++)
                    document.getElementById(idArray[index]).innerHTML = prepareHtml(index, project);
            }
        });
    })
    .done(function () { console.log("second success"); })
    .fail(function () { console.log("error"); })
};
*/