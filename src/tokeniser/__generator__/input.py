def inline_inner_function(*, a, b):
    def inline_function(): return "Inline"

    return inline_function()

def other_inline_function(): return "Also inline"; other_inline_function()