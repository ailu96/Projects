import keyboard

while True:
    
    if keyboard.read_key() == "p":
        print("You pressed p")
        keyboard.press('h')
        
        keyboard.press('right')
        
        break