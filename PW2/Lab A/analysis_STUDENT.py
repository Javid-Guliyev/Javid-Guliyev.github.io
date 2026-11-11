"""
PW2 Lab A -- Motion from tracking data.

Read noisy free-fall position measurements, then:
  - differentiate once  -> velocity
  - differentiate twice -> acceleration (should be ~ constant -g, but noisy!)
  - integrate the acceleration back up -> recover velocity and position

Complete the TODOs. Run:  python analysis.py
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import cumulative_trapezoid

# TODO 1: read freefall.csv into arrays t and y
#         (hint: np.loadtxt with a comma delimiter, skipping the header)

data = np.loadtxt("freefall.csv", delimiter=",", skiprows=1)

t = data[:, 0]
y = data[:, 1]

# TODO 2: compute velocity v = derivative of y w.r.t. t   (np.gradient)
#         and acceleration a = derivative of v w.r.t. t    (np.gradient again)
#         Print the mean acceleration. Is it close to -9.81? Is it noisy?

v = np.gradient(y, t)
a = np.gradient(v, t)

print("Mean acceleration:", np.mean(a))
print("Standard deviation:", a.std())



# TODO 3: integrate a back up to recover velocity and position
#         (hint: cumulative_trapezoid(a, t, initial=0) + v[0], then again)

v_recovered = cumulative_trapezoid(a, t, initial=0) + v[0]
y_recovered = cumulative_trapezoid(v_recovered, t, initial=0) + y[0]

difference = np.abs(y_recovered - y)
print("Largest difference in position:", np.max(difference), "m")

# TODO 4: make a figure with 3 stacked panels: position, velocity, acceleration
#         vs time. Mark the true -9.81 line on the acceleration panel.
#         Save it as motion.png




# TODO 4: make a figure with 3 stacked panels

fig, axes = plt.subplots(3, 1, figsize=(8, 10), sharex=True)

# Position
axes[0].plot(t, y)
axes[0].set_ylabel("Position (m)")
axes[0].set_title("Position vs Time")
axes[0].grid(True)

# Velocity
axes[1].plot(t, v)
axes[1].set_ylabel("Velocity (m/s)")
axes[1].set_title("Velocity vs Time")
axes[1].grid(True)

# Acceleration
axes[2].plot(t, a)
axes[2].axhline(-9.81, linestyle="--", label="True acceleration = -9.81 m/s²")
axes[2].set_xlabel("Time (s)")
axes[2].set_ylabel("Acceleration (m/s²)")
axes[2].set_title("Acceleration vs Time")
axes[2].grid(True)
axes[2].legend()

plt.tight_layout()
plt.savefig("motion.png")
plt.show()
