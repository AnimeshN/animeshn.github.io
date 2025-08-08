arr = [9,4,2,5,2,5,6,3,6,1]


def bubble(arr)
    n = arr.length
    for i in 0...n-1
        for j in 0...n-i-1
            if arr[j] > arr[j+1]
                arr[j], arr[j+1] = arr[j+1], arr[j]
            end
        end
    end
    arr
end

puts bubble(arr)
