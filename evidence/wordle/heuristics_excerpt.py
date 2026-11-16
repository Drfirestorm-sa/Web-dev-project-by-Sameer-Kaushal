def entropy_score(counts: np.ndarray, n_candidates: int) -> np.ndarray:
    if n_candidates <= 0:
        raise ValueError("n_candidates must be positive")
    counts = np.asarray(counts, dtype=np.float64)
    probabilities = counts / n_candidates
    with np.errstate(divide="ignore", invalid="ignore"):
        return -np.sum(
            np.where(probabilities > 0,
                     probabilities * np.log2(probabilities), 0),
            axis=1,
        )


def expected_size_score(counts: np.ndarray, n_candidates: int) -> np.ndarray:
    if n_candidates <= 0:
        raise ValueError("n_candidates must be positive")
    counts = np.asarray(counts, dtype=np.float64)
    return np.sum(counts * counts, axis=1) / n_candidates


def minimax_score(counts: np.ndarray) -> np.ndarray:
    return np.max(np.asarray(counts), axis=1)