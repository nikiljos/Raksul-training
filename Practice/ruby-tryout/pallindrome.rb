puts "Enter a string"
input=gets.chomp()
input=input.downcase()
rev=""

input.each_char{ |l| 
    rev=l+rev
}

if rev==input
    puts "Pallindrome"
else 
    puts "Not Pallindrome"
end