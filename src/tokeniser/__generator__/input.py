if bear.is_home():
    if bear.is_hungry() and cave.has_food():
        for food in cave.foods():
            bear.eat(food)

            if bear.is_full():
                break
    elif bear.is_hungry() and not cave.has_food():
        bear.search_for_food()

        if bear.cannot_find_food({"timeout": "1 hour"}):
            bear.go_home()
    else:
        bear.sleep()

        while bear.is_sleeping():
            bear.dream()
else:
    bear.go_home()
