"""
PW2 Lab B Part 2 -- three routes to a minimum.

Compare gradient descent, Newton, and SLSQP on two functions:
  2A: f(x) = (x-3)**2 + 1       (easy, one minimum at x=3)
  2B: g(x) = x**4 - 3*x**2 + x + 5 (harder, several stationary points)
Run:  python warmup.py
"""

import numpy as np
from scipy.optimize import newton, minimize

# ---------- 2A: easy convex function ----------
def f(x):  return (x-3)**2 + 1
def df(x): return 2*(x-3)
def d2f(x): return 2.0

# TODO 2A: minimise f three ways from x0=0 and print each result:
print("--- 2A Results ---")

# (1) gradient descent by hand (loop x = x - lr*df(x) until the step is tiny)
x = 0.0
lr = 0.1
tolerance = 1e-6
step_size = 1.0
while abs(step_size) > tolerance:
    prev_x = x
    x = x - lr * df(x)
    step_size = x - prev_x
print(f"1. Gradient Descent result: x = {x:.4f}, f(x) = {f(x):.4f}")

# (2) scipy.optimize.newton(df, x0, fprime=d2f)
res_newton_2a = newton(df, x0=0.0, fprime=d2f)
print(f"2. Newton's method result: x = {res_newton_2a:.4f}, f(x) = {f(x):.4f}")

# (3) scipy.optimize.minimize(f, x0, method="SLSQP")
res_slsqp_2a = minimize(f, x0=0.0, method="SLSQP")
print(f"3. SLSQP result: x = {res_slsqp_2a.x[0]:.4f}, f(x) = {res_slsqp_2a.fun:.4f}\n")


# ---------- 2B: harder landscape ----------
def g(x):  return x**4 - 3*x**2 + x + 5
def dg(x): return 4*x**3 - 6*x + 1
def d2g(x): return 12*x**2 - 6

# TODO 2B: run the same three methods on g, from x0=0 AND from x0=2.
print("--- 2B Results ---")
for x0 in [0.0, 2.0]:
    print(f"Starting from x0 = {x0}:")
    
    # (1) Gradient descent by hand for g(x)
    x = x0
    step_size = 1.0
    while abs(step_size) > tolerance:
        prev_x = x
        x = x - lr * dg(x)
        step_size = x - prev_x
    print(f"  - Gradient Descent: x = {x:.4f}, g(x) = {g(x):.4f}")
    
    # (2) Newton's method for dg(x) = 0
    try:
        res_newton_2b = newton(dg, x0=x0, fprime=d2g)
        curvature = d2g(res_newton_2b)
        point_type = "minimum (d2g > 0)" if curvature > 0 else "maximum/stationary (d2g < 0)"
        print(f"  - Newton's method: x = {res_newton_2b:.4f} -> {point_type}")
    except Exception as e:
        print(f"  - Newton's method failed to converge from x0 = {x0}")

    # (3) SLSQP for g(x)
    res_slsqp_2b = minimize(g, x0=x0, method="SLSQP")
    print(f"  - SLSQP: x = {res_slsqp_2b.x[0]:.4f}, g(x) = {res_slsqp_2b.fun:.4f}\n")

# For Newton (which solves dg(x)=0), also check the sign of d2g at the answer:
# d2g > 0 means a minimum, d2g < 0 means a maximum.
# In your README note: do the methods agree? did Newton find a minimum or 
# another stationary point? how did the starting point change the result?
