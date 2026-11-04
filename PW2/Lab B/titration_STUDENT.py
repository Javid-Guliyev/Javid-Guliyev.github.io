"""
PW2 Lab B Part 5 (bonus) -- find a titration's equivalence point.

titration.csv holds a titration curve: pH versus the volume of base added.
The equivalence point is the volume where the pH changes fastest (the steep
jump). Numerically, that is where the SLOPE of the pH curve is largest.
Run:  python titration.py
"""

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# TODO 1: read titration.csv (columns volume_base, pH) into arrays V, pH.
data = pd.read_csv("titration.csv")
V = data['volume_base'].values
pH = data['pH'].values

# TODO 2: compute the slope of the pH curve with np.gradient(pH, V), and find
#         the volume where that slope is largest (np.argmax). That is the
#         equivalence point. Print it.
slope = np.gradient(pH, V)
eq_index = np.argmax(slope)
eq_volume = V[eq_index]
print(f"Titration equivalence point volume: {eq_volume:.2f} mL")

# TODO 3: make two plots side by side: (left) pH vs volume with a line at the
#         equivalence point; (right) the slope vs volume, showing it peaks
#         at the equivalence point. Save as titration.png.
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 5))

ax1.plot(V, pH, color="purple", linewidth=2)
ax1.axvline(eq_volume, color='red', linestyle='--', label=f"Eq. Point: {eq_volume:.1f} mL")
ax1.set_xlabel("Volume of base (mL)")
ax1.set_ylabel("pH")
ax1.set_title("Titration Curve")
ax1.legend()

ax2.plot(V, slope, color="green", linewidth=2)
ax2.axvline(eq_volume, color='red', linestyle='--', label="Max Slope Peak")
ax2.set_xlabel("Volume of base (mL)")
ax2.set_ylabel("dpH / dV (Slope)")
ax2.set_title("Titration Curve Slope")
ax2.legend()

plt.savefig("titration.png")
plt.close()
