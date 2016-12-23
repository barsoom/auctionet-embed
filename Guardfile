guard "shell" do
  watch(/coffee\/(.+?)\.coffee/) { |m|
    puts "Compiling #{m[0]} to js/#{m[1]}.js"
    `coffee -c -o coffee #{m[0]} && mv coffee/#{m[1]}.js js/#{m[1]}.js`
  }
end
