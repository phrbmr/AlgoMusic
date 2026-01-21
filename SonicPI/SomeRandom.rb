# Some Random 
in_thread do
  loop do
    play choose([60, 62, 64, 65, 67, 69, 71, 72])
    sleep 0.5
    play choose([48, 50, 52, 53, 55, 57, 59, 60])
    sleep 0.5
  end
end

in_thread do
  loop do
    sample :perc_bell, rate: rrand_i(0.125, 1.5)
    sleep choose([2, 4])
  end
end
