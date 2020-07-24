#! /usr/bin/env ruby
# frozen_string_literal: true

# def reverse(ary)
#   ary.each_with_object([]) { |e, o| o.unshift(e) }
# end
def reverse(ar)
  ar.reduce([], :unshift)
end

puts reverse([1, 2, 3, 4]) == [4, 3, 2, 1] # => true
puts reverse(%w[a b e d c]) == %w[c d e b a]  # => true
puts reverse(['abc']) == ['abc']              # => true
puts reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
puts list.object_id != new_list.object_id  # => true
puts list == [1, 3, 2]                     # => true
puts new_list == [2, 3, 1]                 # => true
