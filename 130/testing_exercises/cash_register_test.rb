#! /usr/bin/env ruby


require 'minitest/autorun'
require 'minitest/reporters'
Minitest::Reporters.use!

require_relative 'cash_register'
require_relative 'transactions'

class CashRegisterTest < Minitest::Test

  def setup
    @register = CashRegister.new(100)
    @transaction = Transaction.new(20)
    @transaction.amount_paid = 20
  end

  def test_accept_money

    previous_amt = @register.total_money
    @register.accept_money(@transaction)
    current_amt = @register.total_money
    assert_equal(previous_amt + 20, current_amt)
  end

  def test_change
    assert_equal(0, @transaction.item_cost - @transaction.amount_paid )
  end

  def test_give_receipt
    item_cost = @transaction.item_cost
    assert_output("You've paid $#{item_cost}.\n") {@register.give_receipt(@transaction)}
  end
end
