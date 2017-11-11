# Hook for fixing the TOC with the custom column Liquid tag


Jekyll::Hooks.register :documents, :post_render do |document|
  initial_file = document.to_s
  sub1 = initial_file.gsub(/^<<<<<<#<</, "<")
  sub2 = sub1.gsub(/^>>#>>>>>>/, ">")
  document.output = sub2
end
