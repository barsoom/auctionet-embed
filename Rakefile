require "capybara"
require "capybara/poltergeist"
require "rack"

task :default do
  WebServer.new.run
  Test.new.run
end

WEB_SERVER_PORT = 12345

class Test
  include Capybara::DSL

  def run
    setup

    visit "http://localhost:#{WEB_SERVER_PORT}/index.html"

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
    Capybara.javascript_driver = :poltergeist
    Capybara.current_driver = Capybara.javascript_driver

    Capybara.register_driver :poltergeist do |app|
      options = {
        :timeout => 60,
        :debug => false,
        :phantomjs_options => ['--disk-cache=false'],
      }
      Capybara::Poltergeist::Driver.new(app, options)
    end
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
