in_thread(name: :left) do
  loop do
    play 60
    sleep 0.30
    play 60
    sleep 0.20
    
    play 64
    play 67
    sleep 0.30
    play 64
    play 67
    sleep 0.20
    
    play 57
    sleep 0.30
    play 57
    sleep 0.20
    
    play 60
    play 64
    sleep 0.30
    play 60
    play 64
    sleep 0.20
    
    play 53
    sleep 0.30
    play 53
    sleep 0.20
    
    play 57
    play 60
    sleep 0.30
    play 57
    play 60
    sleep 0.20
    
    play 55
    sleep 0.30
    play 55
    sleep 0.20
    
    play 59
    play 62
    sleep 0.30
    play 59
    play 62
    sleep 0.20
  end
end

in_thread(name: :righ) do
  loop do
    play 72
    sleep 0.5
    play 72
    sleep 0.5
    play 72
    sleep 0.75
    
    play 72
    sleep 0.25
    play 71
    sleep 0.30
    play 69
    sleep 0.20
    play 71
    sleep 0.30
    play 72
    sleep 0.20
    play 74
    sleep 1
    
    # part 2
    play 76
    sleep 0.5
    play 76
    sleep 0.5
    play 76
    sleep 0.75
    
    play 76
    sleep 0.25
    play 74
    sleep 0.30
    play 72
    sleep 0.20
    play 74
    sleep 0.30
    play 76
    sleep 0.20
    play 77
    sleep 1
    
    play 79
    sleep 1
    play 72
    sleep 0.75
    
    play 81
    sleep 0.25
    play 79
    sleep 0.75
    play 77
    sleep 0.25
    play 76
    sleep 0.75
    play 74
    sleep 0.25
    play 72
    sleep 0.75
    play 71
    sleep 0.25
    play 69
    sleep 0.75
    play 67
    sleep 0.25
    
    play 65
    sleep 0.25
    play 67
    sleep 0.25
    play 69
    sleep 0.50
    
    play 67
    sleep 0.25
    play 69
    sleep 0.25
    play 71
    sleep 0.5
    
  end
end
