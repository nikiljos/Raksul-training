system("cls") # Clears CMD
# system("clear") # Clears TERMINAL

# Printing

puts "Hello"
print "World"
puts "!"

# Variables and Data Types

name="Raju"
age=19
weigh=67.5
is_alive=true

name = "Raju TK"

# puts "Name: #{name} | Is Alive: " + is_alive    ===> Doesn't work because is_alive is not string
puts "Name: " + name+ " | Is Alive: #{is_alive}"

# Casting and Converting

puts 3.14.to_i
puts 3.to_f
puts "3.0".to_s

puts 100 + "50".to_i
puts 100 + "50.32".to_f

# Strings

greeting = "Hello"

puts greeting.length
puts greeting[0]
puts greeting.include? "llo"
puts greeting.include? "f"
puts greeting[1,3] # substring function

# Numbers

puts 2*3
puts 2**3
puts 10%3
puts 1+2*3
puts (1+2)*3
puts 10/3
puts 10/3.to_f

num=10
num+=1
puts num

num=-3.4
puts num.abs()
puts num.round()

# Math Class
puts Math.sqrt(144)
puts Math.log(0)

# User Input

puts "Enter name: "
name=gets           #.chomp
puts "Hi, #{name}, Namaste!"

puts "Enter num 1: "
num1=gets.chomp
puts "Enter num 2: "
num2=gets.chomp
puts num1+num2
puts num1.to_f+num2.to_f

# Arrays

arr=[4,2,5,"string", true, 31.41, 0, "🦆"]
puts arr

arr[0]=1
puts arr[0]
puts arr[4]
puts arr[-1]

puts

puts arr[2,2]
puts arr[2..5]

puts

puts arr.length

# 2 Dimensional Arrays

number_grid = [[],[]]
# numberGrid = [ [1, 2], [3, 4] ]
number_grid[0][0] = 99

puts number_grid[0][0]
puts number_grid[0][1]

# Array Methods

friends = []
friends.push("Oscar")
friends.push("Angela")
friends.push("Kevin")

friends.pop
puts  friends
puts

puts friends.reverse
puts

puts friends.sort
puts

puts  friends.include? "Oscar"

# Methods

def sum(num1, num2=3)
    return num1+num2
end

sum=sum(2,4)
puts sum

sum=sum(2)
puts sum

# If Statements

is_phone=true
is_android=false

if is_phone and is_android
    puts "You can charge fast! :)"
elsif is_phone and !is_android
    puts "You can't charge fast :("
else
    puts "Oh, you are not a phone :|"
end

if 1 > 3
	puts "number comparison was true"
end

if "a" > "b"
     puts "string comparison was true"
end

# Switch Statements

grade="O"

case grade
when "A"
    puts "Pass"
when "F"
    puts "Fail"
when "O"
    puts "Outstanding!"
else
    puts "Invalid"
end

# Dictionaries (Objects in JS)

car = {
    "Color" => "Grey",
    :Company => "Tata",
    "Type" => "XUV",
    3 => 39.5
}

car["Type"] = "SUV"
puts car["Type"]
puts car[:Company]
puts car[3]

# While Loops

i=1

while i<=4
    puts i
    # i++ ===> Doesn't work
    i+=1
end

# For Loops

for i in 0..5
    puts i
end

5.times do |i|
    puts i
end

arr=[3,2,4,1,4,65,2.5,2,true,"false"]
for items in arr
    puts items
end

puts

arr.each do |items|
    puts items
end

# Exception Catching

begin
    # num = 10/0
    puts bad_variable
rescue ZeroDivisionError
    puts "Error"
rescue
    puts "All other errors"
end

raise "Made Up Exception"

# Classes and Objects

class Book
    attr_accessor :title, :author

    def readBook()
        puts "Reading #{self.title} by #{self.author}"
    end
end

book=Book.new()
book.title="My Book"
book.author="Me"

book.readBook();

# Constructors

class Book
    attr_accessor :title, :author

    def initialize(title, author)
        @title = title
        @author = author
    end

    def readBook()
        puts "Reading #{self.title} by #{self.author}"
    end
end

book=Book.new("My Book","Me")
book.readBook();
book.author="Raju"
book.readBook()

# Getters and Setters

class Book
    attr_accessor :title, :author

    def initialize(title, author)
        self.title = title
        @author = author
    end

    def title=(title)
        puts "Setter"
        @title=title
    end

    def title
        puts "Getter"
        return @title
    end
end

book=Book.new("My Book","Me")
puts book.title

# Inheritance

class Coock 
    attr_accessor :name, :age
    def initialize(name,age)
        @name=name
        @age=age
    end

    def make_roti()
        puts "#{self.name} makes roti"
    end

    def make_pizza()
        puts "#{@name} coocks Pizza"
    end
end

class Raamu < Coock
    attr_accessor :country
    def initialize(name,age,country)
        @country=country
        super(name,age)
    end

    def make_paneer()
        puts "#{@name} makes Paneer"
    end

    def make_pizza()
        puts "#{self.name} doesn't make pizza"
    end
end

my_coock=Coock.new("My Coock",43)
my_coock.make_pizza

raamu=Raamu.new("Raamu",53,"India")
raamu.make_paneer
raamu.make_pizza