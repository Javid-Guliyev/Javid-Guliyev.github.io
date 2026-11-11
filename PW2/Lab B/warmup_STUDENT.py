"""
PW2 Lab B Part 2 -- three routes to a minimum.
"""

import numpy as np
from scipy.optimize import newton, minimize

# ---------- 2A: easy convex function ----------
def f(x):
    return (x-3)**2 + 1

def df(x):
    return 2*(x-3)

def d2f(x):
    return 2.0


def gradient_descent(derivative, x0, lr=0.01):
    x = float(x0)

    for i in range(100000):
        step = lr * derivative(x)
        x = x - step

        if abs(step) < 1e-8:
            break

    return x


# Three methods for 2A
x0 = 0.0

x_gd = gradient_descent(df, x0)
x_newton = newton(df, x0, fprime=d2f)
result = minimize(f, x0, method="SLSQP")

print("\n--- 2A: Easy function ---")
print("Gradient Descent:", x_gd, "f(x) =", f(x_gd))
print("Newton:", x_newton, "f(x) =", f(x_newton))
print("SLSQP:", result.x[0], "f(x) =", result.fun)


# ---------- 2B: harder landscape ----------
def g(x):
    return x**4 - 3*x**2 + x + 5

def dg(x):
    return 4*x**3 - 6*x + 1

def d2g(x):
    return 12*x**2 - 6


print("\n--- 2B: Harder function ---")

for x0 in [0.0, 2.0]:

    print(f"\nStarting point: x0 = {x0}")

    x_gd = gradient_descent(dg, x0)
    print("Gradient Descent:", x_gd, "g(x) =", g(x_gd))

    x_newton = newton(dg, x0, fprime=d2g)
    print("Newton:", x_newton, "g(x) =", g(x_newton))

    if d2g(x_newton) > 0:
        print("Newton classification: Minimum")
    elif d2g(x_newton) < 0:
        print("Newton classification: Maximum")
    else:
        print("Newton classification: Inconclusive")

    result = minimize(g, x0, method="SLSQP")
    print("SLSQP:", result.x[0], "g(x) =", result.fun)




