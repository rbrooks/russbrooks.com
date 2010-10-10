$:.unshift File.expand_path(File.dirname(__FILE__) + '/lib')

require 'rubygems'
require 'bundler'
require 'uv'
require 'rack/codehighlighter'

Bundler.setup

require './application'

use Rack::Codehighlighter, :ultraviolet, :theme => 'twilight', :lines => false,
  :element => 'pre', :pattern => /\A:::([\w\-*]+)\s*\n/, # Must allow dashes, so 'shell-unix-generic' works.
  :logging => false
use Nesta::Application
run Sinatra::Base
