require "capybara"
require "capybara/dsl"
require "selenium-webdriver"
require "rack"

task :default do
  if ENV["DEVBOX"]
    system "foreman start --procfile=Procfile.dev"
  else
    Rake::Task["test"].execute
  end
end

task :run_tests do
  Test.new.run
end

desc "Build docker images"
task :build do
  system "docker-compose --project-name auctionet-embed build test"
end

desc "Run embed smoke test"
task :test do
  selenium_is_running = system("docker ps --quiet --no-trunc | grep $(docker-compose ps --quiet selenium) > /dev/null 2>&1")
  unless selenium_is_running
    system "docker-compose --project-name auctionet-embed up --build --detach"
  end

  elapsed_seconds = 0
  loop do
    if `docker-compose --project-name auctionet-embed exec webserver curl '--silent' 'http://selenium:4444/wd/hub/status'`.include?("Server is running")  # Break when service is up and running.
      break
    elsif elapsed_seconds > 10
      exit 1
    else
      elapsed_seconds += 0.1
      sleep 0.1
    end
  end

  system "docker-compose --project-name auctionet-embed run test"
end

desc "How to debug failing smoke test"
task :debug do
  host = ENV["DEVBOX"] ? "192.168.50.51" : "localhost"
  puts "Please start VNC via #{host}:5900 and then run: rake test"
end

desc "Stops containers and removes containers, networks, volumes, and images created by up"
task :stop do
  system "docker-compose --project-name auctionet-embed down"
end

class Test
  include Capybara::DSL

  def run
    setup

    visit "/index.v3.html"

    if page.has_css?("a.object-link")
      puts "Success. The page loaded and displayed items from the API."
    else
      puts "Failure! No published items were found!"
      puts
      puts "The page was displayed as:"
      puts page.body
      exit 1
    end
  end

  private

  def setup
    # Configure the Chrome driver capabilities & register
    arguments = [ "--no-default-browser-check", "--start-maximized" ]
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome("chromeOptions" => {"args" => arguments})

    Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(
        app,
        browser: :remote,
        url: "http://#{ENV.fetch("SELENIUM_HOST")}:#{ENV.fetch("SELENIUM_PORT")}/wd/hub",
        desired_capabilities: capabilities
      )

    end

    Capybara.current_driver = :selenium
    Capybara.javascript_driver = :selenium

    Capybara.app_host = "http://#{ENV.fetch("TEST_APP_HOST")}:#{ENV.fetch("TEST_APP_PORT")}"
    Capybara.run_server = false
  end
end
