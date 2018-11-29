require "capybara"
require "capybara/dsl"
require "capybara/webkit"
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

    visit "http://localhost:#{WEB_SERVER_PORT}/index.v3.html"

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
    Capybara.javascript_driver = :webkit
    Capybara::Webkit.configure do |config|
      config.allow_unknown_urls
    end
    Capybara.current_driver = Capybara.javascript_driver
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
