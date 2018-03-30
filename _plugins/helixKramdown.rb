# modeled after https://github.com/mvdbos/kramdown-with-pygments/blob/master/kramdown_pygments.rb
require 'kramdown/converter'

# Custom plugin for Kramdown. It's used by the custom converter, not by Jekyll.
module Kramdown
  module Converter
    class HelixHtml < Html
      def convert_header(el, indent)
        attr = el.attr.dup
        if @options[:auto_ids] && !attr['id']
          attr['id'] = generate_id(el.options[:raw_text])
        end
        @toc << [el.options[:level], attr['id'], el.children] if attr['id'] && in_toc?(el)
        level = output_header_level(el.options[:level])
        if level == 1
          attr['class'] = 'hxHeading-1'
        elsif level == 2
          attr['class'] = 'hxHeading-2'
        elsif level == 3
          attr['class'] = 'hxHeading-3'
        elsif level == 4
          attr['class'] = 'hxHeading-4'
        else
          attr['class'] = 'none'
        end
        format_as_block_html("h#{level}", attr, inner(el, indent), indent)
      end
    end
  end
end

# This class is the custom converter.
class Jekyll::Converters::Markdown::HelixKramdownParser
  def initialize(config)
    require 'kramdown'
    @config = config
  rescue LoadError
    STDERR.puts 'You are missing a library required for Markdown. Please run:'
    STDERR.puts '  $ [sudo] gem install kramdown'
    raise FatalException.new("Missing dependency: kramdown")
  end

  def convert(content)
    # puts 'converting with HelixKramdownParser'
    html = Kramdown::Document.new(content, @config).to_helix_html
    return html;
  end
end
