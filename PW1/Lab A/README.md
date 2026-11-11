# PW1 Lab A

This is my Lab A work for Computer Science.
## Results

### Tests
All three tests passed successfully with `pytest -v`.

### Speed comparison
- Pure Python loop: 2.9057 seconds
- NumPy version: 0.0003 seconds
- Speed-up: 9782.55 times faster

### Conclusion
The NumPy implementation is much faster than the pure-Python implementation because it performs the decay calculations using vectorised operations instead of looping over every atom individually.
