"""
PW2 Lab B Part 3 -- fit a reaction's rate constant to measured data.

A first-order reaction decays as C(t) = C0 * exp(-k*t). You have noisy
concentration-vs-time measurements; find the k that best matches them.
Complete the TODOs. Run:  python kinetics.py
"""

import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from scipy.optimize import minimize

# TODO 1: read kinetics.csv (columns time, concentration) into arrays t, C.
#         Set C0 = the first concentration.
data = pd.read_csv("kinetics.csv")
t = data['time'].values
C_measured = data['concentration'].values
C0 = C_measured[0]

# TODO 2: write total_error(k) = sum of (measured - C0*exp(-k*t))**2.
#         This is the "how bad" number: small when the model matches the data.
def total_error(k):
    model = C0 * np.exp(-k * t)
    return np.sum((C_measured - model)**2)

# TODO 3: minimise total_error with scipy.optimize.minimize (method "SLSQP",
#         bounds [(0, 5)], start x0=0.5). Print the fitted k.
res = minimize(total_error, x0=0.5, method="SLSQP", bounds=[(0, 5)])
fitted_k = res.x[0]
print(f"Fitted rate constant k: {fitted_k:.4f}")

# TODO 4: plot the measured data (points) and your fitted curve (line) together.
#         Save as kinetics.png.
plt.figure()
plt.scatter(t, C_measured, color='red', label='Measured Data')
t_smooth = np.linspace(min(t), max(t), 200)
plt.plot(t_smooth, C0 * np.exp(-fitted_k * t_smooth), color='blue', label=f'Fitted Curve (k={fitted_k:.3f})')
plt.xlabel('Time (t)')
plt.ylabel('Concentration (C)')
plt.legend()
plt.title('Reaction Rate Fitting')
plt.savefig('kinetics.png')
plt.close()
