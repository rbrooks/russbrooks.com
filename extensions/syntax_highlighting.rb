require 'nokogiri'

module Nesta

  module SyntaxHighlighting

    def highlight(html)
      tag = 'highlight'
      attribute = 'lang'

      if system("which pygmentize > /dev/null")
        bin = `which pygmentize`.chomp
      else
        raise Exception, "Pygmentize is missing"
      end

      document = Nokogiri::HTML(html)
      nodes = document.css(tag)
      nodes.each do |node|
        lang = node.attribute(attribute).nil? ? bash : node.attribute(attribute).value
        pygmentize = `echo '#{node.content}' | #{bin} -l #{lang} -f html`
        node.replace(Nokogiri::HTML(pygmentize).css("div.highlight").first)
      end

      document.to_s
    end

    module BodySyntaxHighlighting
      def self.included(base)
        base.send(:alias_method, :body_without_syntax_highlighting, :body)
        base.send(:alias_method, :body, :body_with_syntax_highlighting)
      end

      def body_with_syntax_highlighting
        highlight body_without_syntax_highlighting
      end
    end

    module PageSyntaxHighlighting
      def self.included(base)
        base.send(:alias_method, :to_html_without_syntax_highlighting, :to_html)
        base.send(:alias_method, :to_html, :to_html_with_syntax_highlighting)
      end

      def to_html_with_syntax_highlighting
        highlight to_html_without_syntax_highlighting
      end
    end

  end

end

FileModel.send(:include, Nesta::SyntaxHighlighting)
FileModel.send(:include, Nesta::SyntaxHighlighting::PageSyntaxHighlighting)
Page.send(:include, Nesta::SyntaxHighlighting::BodySyntaxHighlighting)
