x = 312
y = 312

r = 310

start_angle = 0
step = 60
6.times do |i|
  angle = start_angle + (step * i)
  puts x + r * Math.cos(angle * (Math::PI / 180.0))
  puts y + r * Math.sin(angle * (Math::PI / 180.0))
  puts "---"
end