# Logique

## Théorème de De Morgan
not(a and b) = (not a) or (not b)
not(a or b) = (not a) and (not b)

- Proof:

|a|b|not a|not b|a and b|not(a and b)|(not a) or (not b)|
|-|-|-----|-----|-------|------------|------------------|
|f|f|  t  |  t  |   f   |      t     |     t            |
|f|t|  t  |  f  |   f   |      t     |     t            |
|t|f|  f  |  t  |   f   |      t     |     t            |
|t|t|  f  |  f  |   t   |      f     |     f            |