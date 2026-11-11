# PW2 — Lab B

## Part 2 — Optimization Methods

### 2A. Easy convex function:
All three methods (Gradient Descent, Newton's method and SLSQP)
converged to the global minimum at x = 3, where f(x) = 1.

### 2B. Harder function:

Starting from x0 = 0:
Gradient Descent and SLSQP converged to approximately
x = -1.301, which is a minimum.
Newton's method converged to approximately x = 0.170,
which is a maximum.

Starting from x0 = 2:
Gradient Descent and Newton's method converged to
approximately x = 1.131, which is a local minimum.
SLSQP converged to approximately x = -1.301,
which is the global minimum.

### Conclusion:
The methods do not always agree on complicated functions.
The starting point affects the result.
Newton's method can converge to a maximum instead of a minimum
because it finds stationary points without automatically
classifying them.
SLSQP found the global minimum in both experiments.

































