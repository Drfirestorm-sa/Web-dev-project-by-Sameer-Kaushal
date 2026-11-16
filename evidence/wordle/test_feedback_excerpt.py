def test_known_feedback():
    assert pattern_to_str(feedback("crane", "crane")) == "GGGGG"
    assert feedback("crane", "crane") == ALL_GREEN

    # Duplicate-letter cases check that matches do not exceed answer counts.
    assert pattern_to_str(feedback("geese", "abide")) == "----G"
    assert pattern_to_str(feedback("speed", "abide")) == "--Y-Y"
    assert pattern_to_str(feedback("llama", "hello")) == "YY---"
    assert pattern_to_str(feedback("allee", "eagle")) == "YY-YG"