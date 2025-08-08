---
layout: default
---

{% highlight ruby %}
class Node
    attr_accessor :data, :next
    def initialize(data)
        @data = data
        @next = nil
    end
end


class LL
    attr_accessor :head
    
    def initialize
        @head = nil
    end
    
    def append(data)
        
        new_node = Node.new(data)
        if @head.nil?
            @head = new_node
        else
            current = @head
            while current.next != nil
                current = current.next
            end
            current.next = new_node
        end
    end
    
    def display
        current = @head
        while current != nil
            puts current.data
            current = current.next
        end
    end

end


l1 = LL.new
l2 = LL.new
l1.append(10)
l2.append(20)
l1.append(30)
l2.append(40)
l1.append(50)
l2.append(60)
puts "LL1"
l1.display()
puts "*****"
puts "LL2"

l2.display()

    
    
{% endhighlight %}
