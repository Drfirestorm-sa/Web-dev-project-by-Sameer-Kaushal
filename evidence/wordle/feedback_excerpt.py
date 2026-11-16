def feedback(guess: str, answer: str) -> int:
    _validate_word(guess, "guess")
    _validate_word(answer, "answer")

    result = [0] * WORD_LENGTH
    remaining: dict[str, int] = {}

    # Reserve only non-green answer letters for the second pass.
    for g, a in zip(guess, answer):
        if g != a:
            remaining[a] = remaining.get(a, 0) + 1

    # Pass 1: exact matches (green).
    for i, (g, a) in enumerate(zip(guess, answer)):
        if g == a:
            result[i] = 2

    # Pass 2: remaining matches (yellow).
    for i, g in enumerate(guess):
        if result[i] == 0 and remaining.get(g, 0) > 0:
            result[i] = 1
            remaining[g] -= 1

    return sum(d * (3**i) for i, d in enumerate(result))