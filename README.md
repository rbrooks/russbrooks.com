Russbrooks.com is found on:

# Nesta - a CMS for Ruby Developers

A CMS for small web sites and blogs, written in
[Sinatra](http://www.sinatrarb.com/ "Sinatra").

Content can be written in
[Markdown](http://daringfireball.net/projects/markdown/ "Daring Fireball:
Markdown") or [Textile](http://textism.com/tools/textile/) and stored in text
files (though you can also use Haml if you need to add some HTML to your
pages). There's no database; write your content in your editor. Publish by
pushing to a git repository.

## This Fork Supports

I enhanced Nesta to support:

* Ruby 1.9.2 [MRI]
* [Heroku](http://heroku.com/) hosting
* Sinatra 1.1
* Sinatra Cache, which uses Rack Cache.  Nesta's previous custom caching removed / disabled.  Cached pages will no longer appear in your /public dir.
* Syntax highlighting with Ultraviolet.  Hyphenated languages fixed, such as 'shell-unix-generic'.
* App is a Sinatra subclass [the "new way" of doing it].
* Different banner image per page.  An example of how to add your own custom metadata to the Markdown header.
* Enable / disable Comments on per-page basis.  Put 'comments: false' in page header.
* Newer HAML gem.
* Newer RedCloth gem.
* Many double quotes converted to single app-wide.  Minutely faster and more standard.

This is my actual site, with my theme and all my content.  If you want the clean version, please see my [Nesta fork](https://github.com/iq9/nesta) repo.
