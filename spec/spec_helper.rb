ENV['RACK_ENV'] = 'test'

require 'rubygems'
require 'rspec'
require 'rack/test'
require 'rspec_hpricot_matchers'

require File.join(File.dirname(__FILE__), *%w[support config_spec_helpers])
require File.join(File.dirname(__FILE__), *%w[support model_factory])
require File.join(File.dirname(__FILE__), '..', 'application')

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

Rspec.configure do |c|
  c.mock_with :rspec
  c.include Rack::Test::Methods
  c.include RspecHpricotMatchers
  c.include RequestSpecHelper
end