#! /usr/bin/env ruby

require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

puts $LOADED_FEATURES.grep(/minitest/)

require 'stringio'

require_relative 'transactions'

class TransactionsTest < Minitest::Test
  def setup
  end

  def test_prompt_for_payment
    transaction = Transaction.new(20)
    simulated_input = StringIO.new('20\n')
    simulated_output = StringIO.new

    transaction.prompt_for_payment(input: simulated_input, output: simulated_output)
    assert_equal(20, transaction.amount_paid)
  end


  
  
end 