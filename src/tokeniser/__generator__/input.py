[
  {
    x for x in range(
      len(
        [
          {
            y: y**2 for y in range(3)
          } for x in range(2)
        ]
      )
    )
  } for y in range(
    len(
      [
        x for x in iterable if condition1 if condition2
      ]
    )
  )
]
