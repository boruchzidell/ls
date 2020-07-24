#! /usr/bin/env ruby

require 'minitest/autorun'
require "minitest/reporters"
Minitest::Reporters.use!

require_relative 'car'

class CarTest < MiniTest::Test

  def test_raise_initialize_with_arg
    assert_raises(ArgumentError) do
      Car.new
    end
  end
end
