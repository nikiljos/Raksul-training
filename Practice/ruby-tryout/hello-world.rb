puts "Hi"
print "Hello World"
puts " & Nik..."

name="Nikhil"
age=20
is_smart=true

puts name+String(age)+String(is_smart)

print "1. Enter something: "
input_normal=gets
print "2. Enter something: "
input_chomp=gets.chomp()
puts "--> "+input_normal+";"+input_chomp+";"

# array
homo=Array["Nikhil","Elon","Mark"]
hetero=Array["text",111,true,nil]

puts homo,hetero
print homo,hetero

# hash
data={
    "name"=>"Nikhil",
    :age=>23,
    1=>"hello"
}

puts data
puts data[:age]

# method
def test_fn(name)
    puts name
    return true
end

puts test_fn("Nikhil")

# if else
if 1>2
    puts "hi"
elsif 2>3
    puts "hello"
else 
    puts "bye"
end

count=1

# while loop 
while count<10
    puts count
    count+=1
end

people=["Musk","Bezos","Pichai","Nadella"]

# for loop
for person in people
    puts person + " is a person."
end

for i in 0..5
    puts i**2
end

#error handling
begin
    puts 10/0
rescue => exception
    puts "Error",exception
end