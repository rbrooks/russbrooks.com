$:.unshift File.expand_path(File.dirname(__FILE__) + '/lib')

require 'rubygems'
require 'bundler'

Bundler.setup

require './application'

use Nesta::Application
run Sinatra::Base
