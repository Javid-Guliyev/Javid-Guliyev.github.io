import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import newton, minimize

K = 15.6
a = b = 1.0

# TODO 1: Equilibrium equation
def k_imbalance(x):
    return (2*x)**2 / ((a-x)*(b-x)) - K

# TODO 2: Newton's method
x_newton = newton(k_imbalance, x0=0.5)

# TODO 3: SLSQP optimization
def objective(x):
    return k_imbalance(x[0])**2

result = minimize(
    objective,
    x0=[0.5],
    method="SLSQP",
    bounds=[(0, 0.999)]
)

x_slsqp = result.x[0]

print("Newton's method:", x_newton)
print("SLSQP:", x_slsqp)
print("Optimization successful:", result.success)

# Equilibrium amounts
x_eq = x_newton

H2_eq = a - x_eq
I2_eq = b - x_eq
HI_eq = 2*x_eq

print("\nEquilibrium amounts:")
print("H2 =", H2_eq, "mol")
print("I2 =", I2_eq, "mol")
print("HI =", HI_eq, "mol")

# Plot amounts versus reaction extent
x = np.linspace(0, 0.999, 200)

H2 = a - x
I2 = b - x
HI = 2*x

plt.plot(x, H2, label="H2")
plt.plot(x, I2, label="I2")
plt.plot(x, HI, label="HI")

plt.axvline(x_eq, color="black", linestyle="--",
            label="Equilibrium")

plt.xlabel("Reaction extent x (mol)")
plt.ylabel("Amount (mol)")
plt.title("Chemical Equilibrium")
plt.legend()
plt.grid()

plt.savefig("equilibrium.png")
plt.show()
