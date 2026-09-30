import pytest
import numpy as np
from decay import simulate
def test_negative_rate():
    with pytest.raises(ValueError):
        simulate(100, -0.1)
def test_average_decay():
    N0 = 1000
    lam = 0.5
    dt = 0.05
    steps = 100

    values = []

    for seed in range(100):
        result = simulate(N0, lam, dt, steps, seed)
        values.append(result[-1])

    average = sum(values) / len(values)
    t = dt * steps
    expected = N0 * np.exp(-lam * t)

    assert average == pytest.approx(expected, rel=0.05)

