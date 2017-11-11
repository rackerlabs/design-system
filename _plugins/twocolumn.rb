# fudged from https://github.com/paulrobertlloyd/jekyll-figure/blob/master/lib/jekyll/figure.rb

require 'kramdown'

module Jekyll
  class RenderTwoColumnTag < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
      @markup = markup
    end

    def render(context)

      # Content: convert markdown to html
      # @maincol = Kramdown::Document.new(super(context)).to_helix_html;
      # @maincol = Kramdown::Document.new(@maincol).to_helix_html;
      @maincol = super(context)

      # Render any liquid variables
      markup = Liquid::Template.parse(@markup).render(context)

      # Extract tag attributes
      attributes = {}
      markup.scan(Liquid::TagAttributes) do |key, value|
        attributes[key] = value
      end

      @sizeleft=attributes['left']
      @sizeright=attributes['right']

      # Left column
      unless @sizeleft.nil?
        leftcol_size = @sizeleft.gsub!(/\A"|"\Z/, '')
        leftcol_size = " class\=\"#{leftcol_size}\""
      end

      # Right column
      unless @sizeright.nil?
        rightcol_size = @sizeright.gsub!(/\A"|"\Z/, '')
        rightcol_size = " class\=\"#{rightcol_size}\""
      end

      # Render column
      if @sizeright.nil?
        col_tag =  "<<<<<<#<<div#{leftcol_size}>>#>>>>>>"
        col_tag += @maincol
        col_tag += "<<<<<<#<</div>>#>>>>>>"
      elsif @sizeleft.nil?
        col_tag =  "<<<<<<#<<div#{rightcol_size}>>#>>>>>>"
        col_tag += @maincol
        col_tag += "<<<<<<#<</div>>#>>>>>>"
      end

      return col_tag;

    end
  end
end


Liquid::Template.register_tag('column', Jekyll::RenderTwoColumnTag)
