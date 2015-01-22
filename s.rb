require 'sinatra'
require 'httparty'

puts "type an ip adress"
ip = gets.chomp
url = "http://" + ip + "/"
response = HTTParty.get(url)
# clues = HTTParty.get(ip)

puts response

puts "Who do you think this is?"
guess = gets.chomp

if guess == "Dennis_Rodman"
  puts "Yay!!!"
end
if guess != "Dennis_Rodman"
  puts "Nooooope"
end









#
# if guess == ip + "/" + guess
#
# get ("#{ip}" + "/") do
#   clues = {
#     "profession": ["athlete", "all-around legend", "embassador"],
#     "known_for": ["crazy hair", "weddings dresses", "body piercings", "carmen electra"],
#     "gender": "male",
#     "first letter of first name": "D",
#     "extra hint": "chicago bulls"
#   }
#   ({msg: clues})
#
# end
#
# get ("#{ip}" + "/Dennis_Rodman") do
#   msg1 = "You are correct!!!"
#   ({msg: msg1})
#
# end
#
# get ("#{ip}" + "/:anything") do
#   any = params[:anything]
#
#   msg2 = "You are WRONG!!!"
#   ({msg: msg2})
#
# end
