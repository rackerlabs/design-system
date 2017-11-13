# Hook for fixing the TOC with the custom column Liquid tag


Jekyll::Hooks.register :documents, :post_render do |document|
  initial_file = document.to_s
  sub1 = initial_file.gsub(/<p>«««#div/, "<div")
  sub1 = sub1.gsub(/&lt;&lt;&lt;&lt;&lt;&lt;#div/, "<div")
  # sub1 = sub1.gsub(/[”“]/, '"')
  sub2 = sub1.gsub(/<p>«««#\/div/, "</div")
  sub2 = sub2.gsub(/&lt;&lt;&lt;&lt;&lt;&lt;#\/div/, "</div")
  # sub2 = sub2.gsub(/[”“]/, '"')
  sub3 = sub2.gsub(/#»»»<\/p>/, ">")
  sub3 = sub3.gsub(/#&gt;&gt;&gt;&gt;&gt;&gt;/, ">")
  sub3 = sub3.gsub(/[”“]/, '"')
  document.output = sub3
end
