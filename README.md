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

* Ruby 1.9.2 [MRI]
* [Heroku](http://heroku.com/) hosting
* Sinatra Cache, which uses Rack Cache.  Nesta's previous custom caching removed / disabled.  Cached pages will no longer appear in your /public dir.
* Syntax highlighting with Ultraviolet.  Hyphenated languages fixed, such as 'shell-unix-generic'.
* App is a Sinatra subclass [the "new way" of doing it].
* Different banner image per page.  An example of how to add your own custom metadata to the Markdown header.
* Enable / disable Comments on per-page basis.  Put 'comments: false' in page header.
* Newer HAML gem.
* Newer RedCloth gem.
* Many double quotes converted to single app-wide.  Minutely faster and more standard.

## Installation

Begin by cloning the git repository:

    $ git clone git://github.com/gma/nesta.git

Nesta's dependencies are managed with bundler, which handles installing the
necessary gems for you:

    $ gem install bundler
    $ cd nesta
    $ bundle install

You'll need a config file. You can start with the default and tweak it to suit
later:

    $ cp config/config.yml.sample config/config.yml

Create some sample web pages (optional):

    $ bundle exec rake setup:sample_content

That's it - you can launch a local web server in development mode using
shotgun...

    $ bundle exec shotgun config.ru

...then point your web browser at http://localhost:9393. Start editing the
files in `nesta/content`, and you're on your way.

See [http://effectif.com/nesta](http://effectif.com/nesta) for more
documentation.

## Ultraviolet Notes ##

Ultraviolet support only tested with Markdown, not Textile.

Mark up code like this:

    <pre>:::language-name
      # Source code
    </pre>

To see supported language name's, type this at a Shell prompt after installing UV:

    uv -l syntax

I fixed hyphenated ones like "shell-unix-generic", but PHP still doesn't work.

**IMPORTANT:**

* Use HTML Named-Entities [&amp;gt; and &amp;lt;] in place of greater-than [>] and less-than [<] symbols in your code, or you'll confuse Maruku, Haml, and/or UV.

## Gotchas ##

* **Categories** - Your category names in mexu.txt, and your category file names, must be entirely lower case and must match in spelling.  Your Heading1 element in the category's markdown file can be proper-cased, which is what Nesta uses to build your Categories sidebar.  If case doesn't match between menu.txt and filenames, those Categories will be missing from your sidebar.
