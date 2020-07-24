#! /usr/bin/env ruby


class Car
  attr_accessor :wheels, :name
  
  def initialize
    @wheels = 4
  end

end

require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

class CarTest < MiniTest::Test
  
  def test_car_exists
    # car = Car.new
    assert(nil, 'does not exist')
  end

  def test_equality
    assert_equal(1, 2, 'no match')
  end
end