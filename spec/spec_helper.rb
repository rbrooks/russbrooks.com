ENV['RACK_ENV'] = 'test'

require "rubygems"
require "spec"
require "rack/test"
require "rspec_hpricot_matchers"

require File.join(File.dirname(__FILE__), *%w[support config_spec_helpers])
require File.join(File.dirname(__FILE__), *%w[support model_factory])
require File.join(File.dirname(__FILE__), "..", "application")

Nesta::Application.class_eval do
  set :reload_templates, true
end

module RequestSpecHelper
  def app
    Nesta::Application
  end

  def body
    last_response.body
  end
end

Spec::Runner.configure do |config|
  config.include(Rack::Test::Methods)
  config.include(RspecHpricotMatchers)
  config.include(RequestSpecHelper)
end
