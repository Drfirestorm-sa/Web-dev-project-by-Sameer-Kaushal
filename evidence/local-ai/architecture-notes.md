# Local AI Assistant — configuration and status notes

This page is a reconstruction of setup details recorded during development. It is not a direct export from LM Studio, OpenClaw or Tailscale.

## Components recorded
- Older Windows 11 PC used as a gateway host; recorded hardware: Intel Core i5-7200U and 24 GB RAM.
- OpenClaw gateway hosted on the older PC.
- ASUS V16 laptop used for local inference.
- LM Studio serving Qwen3.5-4B locally.
- Tailscale used for connectivity between the devices.
- Hermes agent integration was part of the setup work.

## Issues and status recorded
- An 8,192-token model context was below the 64,000-token minimum reported by Hermes Agent. The LM Studio context was subsequently configured to 64,000 tokens.
- Local model inference was reported as slow.
- Faster-Whisper and Pipecat were explored for voice input/orchestration; the complete voice pipeline should be treated as exploratory, not a finished integrated feature.

## Evidence boundary
No original screenshot of the LM Studio settings, OpenClaw dashboard, Tailscale device list or a complete working voice session was included in the supplied portfolio ZIP. The architecture SVG on the portfolio is therefore labelled as an illustration derived from setup notes, not a captured screenshot.