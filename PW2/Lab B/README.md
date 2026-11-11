## Part 3 — Chemistry 1: Reaction Rate Fitting

The experimental concentration data was fitted using a
first-order reaction model:

C(t) = C0 * exp(-k*t)

The optimization was performed using SLSQP with bounds
between 0 and 5.

Fitted rate constant:
k = 0.2617613706

Optimization successful: True

The fitted rate constant is close to the expected value
of 0.25. The fitted curve represents the experimental
concentration data.

The plot was saved as kinetics.png.


## Part 4 — Chemistry 2: Chemical Equilibrium

The equilibrium extent was calculated using two methods:
Newton's method and SLSQP optimization.

Equilibrium results:

Newton's method: x = 0.66384767
SLSQP: x = 0.66384743

Both methods converged to practically the same equilibrium extent.

Equilibrium amounts:
H2 = 0.33615 mol
I2 = 0.33615 mol
HI = 1.32770 mol

The two methods agree, confirming the equilibrium solution.
The graph showing the changes in reactant and product amounts
was saved as equilibrium.png.
