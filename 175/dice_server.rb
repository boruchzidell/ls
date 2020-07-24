#! /usr/bin/env ruby

require 'socket'

def decompose_request(request_line)
  http_method, request_uri = request_line.split
  path, query_string = request_uri.split('?')
  params = query_string&.split('&')&.map { |pair| pair&.split('=') }.to_h

  [http_method, path, params]
end

server = TCPServer.new('localhost', 3003)

loop do
  client = server.accept

  request_line = client.gets
  next if !request_line || request_line =~ /favicon/
  puts request_line

  # Parse the request line
  http_method, path, params = decompose_request(request_line)

  # HTTP response
  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/html"
  client.puts
  client.puts '<html>'
  client.puts '<body>'
  client.puts '<pre>'
  client.puts request_line
  client.puts '</pre>'

  client.puts '<h1>Rolls:</h1>'

  count_of_dice = params.fetch('rolls', 2).to_i
  dice_max = params.fetch('sides', 6).to_i

  client.puts '<p>'
  count_of_dice.times do
    client.puts rand(dice_max) + 1
  end
  client.puts '</p>'
  
  client.puts '</body>'
  client.puts '</html>'

  client.close
end

