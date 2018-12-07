require "capybara"
require "capybara/dsl"
require "selenium-webdriver"
require "rack"

task :default do
  if ENV["DEVBOX"]
    system "foreman start --procfile=Procfile.dev"
  else
    WebServer.new.run
    Test.new.run
  end
end

task :test do
  WebServer.new.run
  Test.new.run
end

WEB_SERVER_PORT = 12345

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
    arguments = ['--no-default-browser-check', '--start-maximized']
    capabilities = Selenium::WebDriver::Remote::Capabilities.chrome("chromeOptions" => {"args" => arguments})

    Capybara.register_driver :selenium do |app|
      Capybara::Selenium::Driver.new(
        app,
        browser: :remote,
        url: "http://localhost:4444/wd/hub",
        desired_capabilities: capabilities
      )

    end

    Capybara.current_driver = :selenium
    Capybara.javascript_driver = :selenium

    Capybara.app_host = "http://localhost:12345"
    Capybara.run_server = false
  end
end

class WebServer
  TIMEOUT = 5

  def run
    wait_for_rack_server_to_be_ready do
      start_rack_server_in_background
    end
  end

  private

  def start_rack_server_in_background
    Thread.new do
      Rack::Server.start app: Rack::Directory.new(Dir.pwd), Port: WEB_SERVER_PORT
    end
  end

  def wait_for_rack_server_to_be_ready
    wait_for_output_on_stderr(output: WEB_SERVER_PORT.to_s) do
      yield
    end
  end

  def wait_for_output_on_stderr(output:)
    old = $stdout
    $stderr = StringIO.new

    yield

    t = Time.now

    loop do
      $stderr.rewind
      content = $stderr.read
      break if content.include?(output)

      sleep 0.05

      if Time.now - t > TIMEOUT
        raise %{Did not find #{output} in "#{content}" within #{TIMEOUT} seconds}
      end
    end

    $stderr = old
  end
end
