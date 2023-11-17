def outer():
    x = "local"
    def inner():
        nonlocal x
        x = "nonlocal"
    inner()

def coroutine_example():
    value = yield
    yield value

x = 0
def function_with_global():
    global x
    x = 10