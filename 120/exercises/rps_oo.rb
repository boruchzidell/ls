#! /usr/bin/env ruby

GOAL = 3

class Move
  attr_reader :value

  VALUES = %w[rock paper scissors lizard spock]

  def initialize(value)
    @value = value
  end

  def rock?
    @value == 'rock'
  end

  def paper?
    @value == 'paper'
  end

  def scissors?
    @value == 'scissors'
  end

  def lizard?
    @value == 'lizard'
  end

  def spock?
    @value == 'spock'
  end

  def >(other)
    (rock? && (other.lizard? || other.scissors?)) ||
      (scissors? && (other.lizard? || other.paper?)) ||
      (paper? && (other.spock? || other.rock?)) ||
      (lizard? && (other.spock? || other.paper?)) ||
      (spock? && (other.scissors? || other.rock?))
  end

  def <(other)
    (other.rock?      && (lizard?   || scissors?  )) ||
      (other.scissors?  && (lizard?   || paper?     )) ||
      (other.paper?     && (spock?    || rock?      )) ||
      (other.lizard?    && (spock?    || paper?     )) ||
      (other.spock?     && (scissors? || rock?      ))
  end

  def to_s
    @value
  end
end



class Player
  
  attr_accessor :name, :move, :score
  
  def initialize
    @move = nil
    @score = 0
  end

  def winner?
    @score == GOAL
  end
 
  def to_s
    @name
  end
end


class Human < Player
  def initialize
    super
    set_name
  end
  
  def set_name
    loop do
      puts "your name, sir? :"
      self.name = gets.chomp
      break if self.name.size > 0
    end
  end

  def choose
   self.move = prompt_user
  end
  
  def prompt_user
    mv = nil
    loop do
      print "Choose Rock, Paper, Scissors, Lizard, or Spock: "
      mv = gets.chomp.downcase
      break if Move::VALUES.include?(mv)
      puts "Invalid choice"
    end
    Move.new(mv)
  end
end

class Computer < Player

  def initialize
    super
    set_name
  end

  def set_name
    self.name = ['bot', 'deep blue', 'AI'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
  end
end



class RPSGame
  attr_accessor :human, :computer

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def display_welcome_message
    puts "Welcome to RPS-OO"
  end


  def display_goodbye_message
    puts "Thanks for playing"
  end

  
  def round_winner
    if human.move > computer.move
      human.score += 1
    elsif human.move < computer.move
      computer.score += 1
    end

  end

  def display_moves
    puts "#{human.name}: #{human.move}. #{human.score}"
    puts "#{computer.name}: #{computer.move}. #{computer.score}"

  end

  def display_grand_winner
    winner = [human, computer].detect { |player| player.score == GOAL }
    puts "winner is #{winner}"
   
  end

  def play_again?
    answer = nil
    loop do
      puts "Play again? (y/n): "
      answer = gets.chomp.downcase
      break if %w[y n].include? answer
      puts "y or n"
    end
    if answer.start_with? 'y'
      reset
      return true 
    else return false
    end
  end

  def reset
    [human, computer].each {|p| p.score = 0 }
    system('clr') || system('clear')
  end

  def play
    display_welcome_message

    loop do
      until human.winner? || computer.winner?
        human.choose
        computer.choose
        round_winner
        display_moves
      end
      display_grand_winner
      break unless play_again?
    end

    display_goodbye_message
  end

end

# Launch the game
RPSGame.new.play