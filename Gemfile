source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"
gem "minimal-mistakes-jekyll", "~> 4.24"
gem "jekyll-seo-tag"
gem "jekyll-feed", "~> 0.12"

group :jekyll_plugins do
  gem "faraday-retry"  # requerido para Faraday 2.0+ (usado por algunos temas)
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1", platforms: [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", platforms: [:jruby]
