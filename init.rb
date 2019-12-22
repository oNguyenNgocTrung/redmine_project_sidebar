Redmine::Plugin.register :redmine_projects_sidebar do
  name 'Redmine Projects Sidebar plugin'
  author 'Steel Brains Team'
  description 'Add projects tree to the sidebar of Issues page'
  version '0.0.1'
  url 'https://github.com/oNguyenNgocTrung/redmine_project_sidebar'
  author_url 'https://github.com/oNguyenNgocTrung'

  settings :default => {
    :project_tree_max_height => 300,
    :parent_status_id => 0
  }, :partial => 'projects_sidebar/settings'
end
