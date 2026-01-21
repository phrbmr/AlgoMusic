# Function to convert a number into a float with only one digit before the decimal point
def fibonacci_fractional(n, a = 0, b = 1, base_note = nil)
  # Keeps the base_note as a constant
  base_note ||= n
  print(n)
  
  # Shift the decimal point to ensure only one digit is on the left
  def convert_to_fraction(num)
    num_str = num.to_s
    if num_str.length > 1
      "#{num_str[0]}.#{num_str[1..-1]}".to_f
    else
      num.to_f
    end
  end
  
  # Base case: When n is 0, process, play the final value of 'a' and sleep
  if n == 0
    processed_value = convert_to_fraction(a) + base_note
    play processed_value, amp: 0.5
    sleep 0.25
  else
    # Play the current value of 'a', converted as specified, and sleep
    processed_value = convert_to_fraction(a) + base_note
    play processed_value, amp: 0.5
    sleep 0.25
    # Recursive call: Shift 'a' to 'b', and 'b' to 'a+b', decrease n by 1 and track the base note
    fibonacci_fractional(n - 1, b, a + b, base_note)
  end
end


fibonacci_fractional(60)
sleep 0.5
#fibonacci_fractional(69)
#sleep 0.5
#fibonacci_fractional(65)
