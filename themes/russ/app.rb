# Use the app.rb file to load Ruby code, modify or extend the models, or
# do whatever else you fancy when the theme is loaded.

module Nesta
  class App
    # Uncomment the Rack::Static line below if your theme has assets
    # (i.e images or JavaScript).
    #
    # Put your assets in themes/russ/public/russ.
    #
    use Rack::Static, :urls => ['/russ'], :root => 'themes/russ/public'

    helpers do
      # Add new helpers here.
    end

    get '/photographs' do
      haml :photographs
      'Hello world!'

    end
  end
end
