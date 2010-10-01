require 'spec_helper'

describe Nesta::Application do
  context "helpers" do
    describe "cache" do
      let(:headers) { {} }
      let(:app) { Nesta::Application.new }
      let(:max_ages) { {'page' => 300, 'asset' => 6000} }
      before do
        app.stub(:headers => headers)
        Nesta::Config.stub(:max_age => max_ages)
      end
      it "accepts a proxy recommendation" do
        app.cache :proxy => 'no-cache'
        headers['Cache-Control'].should eql('no-cache')
      end
      it "accepts max-age looked up from the config" do
        app.cache(:max_age => 'page')
        headers['Cache-Control'].should eql('max-age=300')
      end
      it "accepts numeric max age" do
        app.cache(:max_age => 1337)
        headers['Cache-Control'].should eql('max-age=1337')
      end
      it "accepts both proxy and max-age" do
        app.cache :max_age => 'asset', :proxy => 'public'
        headers['Cache-Control'].should eql('public, max-age=6000')
      end
      context "when neither proxy nor max-age are given" do
        it "does not set a Cache-Control header" do
          app.cache
          headers['Cache-Control'].should be_nil
        end
      end
      context "when given an etag value" do
        it "puts the etag into the response via the framework" do
          app.should_receive(:etag).with('abc123')
          app.cache :etag => 'abc123'
        end
      end
      context "when not given an etag value" do
        it "does not pass a nil value" do
          app.should_receive(:etag).never
          app.cache
        end
      end
    end
  end
end
