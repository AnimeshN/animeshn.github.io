---
layout: default
---

{% highlight ruby %}
arr = [5,3,8,7,1,9,2]

def insertion_sort(arr)
    n = arr.length
    for i in 1...n
        j = i
        while j > 0 && arr[j] < arr[j-1]
            arr[j-1], arr[j] = arr[j] , arr[j-1]
            j -=1
        end
    end
    arr
end

puts insertion_sort(arr)
{% endhighlight%}
