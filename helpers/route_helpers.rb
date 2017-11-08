module RouteHelpers
  ROUTES = {
    work:                                               '/',
    about:                                              '/about/',
  }

  URL_REGEX = /https?:/

  ROUTES.each do |route_name, destination|
    route_extension = (destination =~ URL_REGEX ? 'url' : 'path')
    define_method "#{route_name}_#{route_extension}" do
      destination
    end
  end
end
