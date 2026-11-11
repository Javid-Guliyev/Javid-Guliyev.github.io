import numpy as np
import matplotlib.pyplot as plt

# Read the experimental data
data = np.loadtxt("titration.csv", delimiter=",", skiprows=1)

V = data[:, 0]
pH = data[:, 1]

# Calculate the slope of the pH curve
slope = np.gradient(pH, V)

# Find the maximum slope
index = np.argmax(slope)

# Equivalence point
V_eq = V[index]

print("Equivalence point:", V_eq, "mL")
print("Maximum slope:", slope[index])

# Create two plots
fig, ax = plt.subplots(1, 2, figsize=(12, 5))

# First plot: pH versus volume
ax[0].plot(V, pH, 'b-', label="pH curve")
ax[0].axvline(V_eq, color='r', linestyle='--',
              label="Equivalence point")
ax[0].set_xlabel("Volume of base (mL)")
ax[0].set_ylabel("pH")
ax[0].set_title("Titration Curve")
ax[0].legend()
ax[0].grid()

# Second plot: slope versus volume
ax[1].plot(V, slope, 'g-', label="Slope")
ax[1].axvline(V_eq, color='r', linestyle='--',
              label="Equivalence point")
ax[1].set_xlabel("Volume of base (mL)")
ax[1].set_ylabel("dpH/dV")
ax[1].set_title("Slope of Titration Curve")
ax[1].legend()
ax[1].grid()

plt.tight_layout()
plt.savefig("titration.png")
plt.show()
