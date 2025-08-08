---
layout: default
___

<% highlight ruby%>
arr = [23,67,98,1003,4001]


def binary_search(arr,key)
    i = 0
    j = arr.length-1
    
    while (i < j)
        m = i + (j-i)/2
        
        if arr[m] == key
            return "Fount at index #{m}"
        elsif key > arr[m]
            i = m +1
        else
            j = m-1
        end
    end
    return 'Not found'
end

puts binary_search(arr,1003)

<% endhighlight%>
