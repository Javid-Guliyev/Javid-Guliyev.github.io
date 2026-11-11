import csv
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import minimize

# Read experimental data
with open("kinetics.csv", "r") as file:
    reader = csv.DictReader(file)
    rows = list(reader)

time = np.array([float(row["time"]) for row in rows])
concentration = np.array([float(row["concentration"]) for row in rows])

# Initial concentration
C0 = concentration[0]

# First-order reaction model
def model(t, k):
    return C0 * np.exp(-k * t)

# Calculate total squared error
def total_error(k):
    predicted = model(time, k[0])
    return np.sum((concentration - predicted) ** 2)

# Minimize the error
result = minimize(
    total_error,
    x0=[0.5],
    method="SLSQP",
    bounds=[(0, 5)]
)

k_fit = result.x[0]

print("Fitted rate constant k =", k_fit)
print("Optimization successful:", result.success)

# Plot results
t_fit = np.linspace(time.min(), time.max(), 200)
C_fit = model(t_fit, k_fit)

plt.scatter(time, concentration, label="Measured data")
plt.plot(t_fit, C_fit, label="Fitted curve")
plt.xlabel("Time")
plt.ylabel("Concentration")
plt.title("First-order reaction kinetics")
plt.legend()
plt.grid()
plt.savefig("kinetics.png")
plt.show()









