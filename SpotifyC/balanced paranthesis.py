
#balanced paranthesis a code a day problem solution
#to remove particular indexed we use pop(index) in python
expression=input("Enter the expression=")

stack_list=[]
new_str=''

#extract all the paranthesis from the string for seak of understanding 
for i in expression:
    if i in "{[()]}":
        new_str+=i 

print(new_str)

flag=new_str.count('{')==new_str.count('}') and new_str.count('(')==new_str.count(')') and new_str.count('[')==new_str.count(']')

if flag:
    