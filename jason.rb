require 'httparty'
require 'pry'
require 'sinatra'
require 'json'

puts "Pick a door (type out an ip address)"
connect = gets.chomp
response = HTTParty.get(connect)

def trythis(connect, response)
  puts "you are now connected to#{connect}"

  puts ""
  puts response['results']
  i = 0
  while i < 1

    puts "Who is this person?"

    answer = gets.chomp

    answerURL = HTTParty.get(connect+"/"+answer)

    if answerURL['correct']

      puts "You Won!"
      i += 1

    elsif answerURL['incorrect']
      puts "Sorry try again"
    end
  end
end

trythis(connect, response)
exit
