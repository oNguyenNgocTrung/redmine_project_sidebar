$(window).on('load', function(){
  var $slidebarProject = $('.projects-sidebar');

  if($slidebarProject.length > 0){
    var projectTreeVisibleIds = localStorage.getItem('projectTreeVisible').split(',');
    var projectTreeHiddenIds = localStorage.getItem('projectTreeHidden').split(',');

    projectTreeVisibleIds.forEach(function(projectTreeId){
      if(projectTreeId == ""){return;}
      var $projectTree = $slidebarProject.find('#' + projectTreeId);
      if($projectTree.length > 0) {
        $projectTree.show();
        $projectTree.closest('li.fa').removeClass('fa-plus-circle').addClass('fa-minus-circle');
      }
    });

    projectTreeHiddenIds.forEach(function(projectTreeId){
      if(projectTreeId == ""){return;}
      var $projectTree = $slidebarProject.find('#' + projectTreeId);
      if($projectTree.length > 0 && !$projectTree.hasClass('root')) {
        $projectTree.hide();
        $projectTree.closest('li.fa').removeClass('fa-minus-circle').addClass('fa-plus-circle');
      }
    });
  }
});

$(window).on('unload', function(e) {
  var $slidebarProject = $('.projects-sidebar');
  if($slidebarProject.length > 0){
    var projectTreeVisible = $slidebarProject.find('ul.projects:visible').map(function () {
      return this.id;
    }).get().join(',');
    var projectTreeHidden = $slidebarProject.find('ul.projects:hidden').map(function () {
      return this.id;
    }).get().join(',');
    localStorage.setItem('projectTreeVisible', projectTreeVisible);
    localStorage.setItem('projectTreeHidden', projectTreeHidden);
  }
});

$(document).on('click', '.projects-sidebar a.toogle-projects-tree', function(e){
  e.preventDefault();

  $('.projects-sidebar').find('.projects-tree').toggle();
  $(this).find('.fa').toggleClass('fa-plus-square').toggleClass('fa-minus-square')
});