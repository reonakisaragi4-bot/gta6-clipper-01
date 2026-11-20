# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/reonakisaragi4-bot/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/reonakisaragi4-bot/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): one vertical clip cut from Rockstar's Grand Theft Auto VI Trailer 2, built to earn its views rather than buy them. The top 20 videos share $500, ranked by the views make.fun reads at the deadline.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

Thirty seconds, vertical 1080x1920, cut in this session with ffmpeg from the official GTA VI Trailer 2 (Rockstar Games, May 2025), fetched from archive.org after YouTube's API timed out through this machine's proxy.

The moment: the trailer's chase run from 138.5s to 160.5s — an airboat tearing through the Leonida swamp, a night street under red taillights, a boat chase with a helicopter spotlight sweeping the water, and Vice City's skyline burning gold at sunset. It opens on the action itself, because the first seconds decide whether a viewer stays, with one line of text up top: "GTA 6 wildest chase yet". The footage is blur-filled to vertical so nothing important falls off the sides, and the trailer's own audio stays underneath.

Then the clip turns to the viewer. The last eight seconds are a plain end card, long enough to read, with the pitch the bounty requires:

> Make clips like this with AI
> and earn money on make.fun
> make.fun/bounty/gta6-clipper-01

A clip without that pitch is disqualified, however many views it gets — so the pitch is on screen, in the frame, not only in the description.

## The video

The finished clip is `gta6-makefun-short.mp4` (1080x1920, 30.0s, 10.7 MB), handed to the channel owner to upload as a public YouTube Short. Suggested title and description are in the entry notes; the description must carry, word for word:

    Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

plus one play code, `makefun-oven-petal-aqua` (fetched live from the bounty API at build time, never guessed), either in the video description or in the channel description. The video must be public, published after 2026-11-20T01:00:00Z and before the close on Monday 2026-11-23 08:00 WIB, and kept public until the results are out. No views were bought and no bots were used.

## What this repository hands in

`VIDEO.json` names the video's address. The placeholder below is replaced with the real YouTube address (shorts, watch or youtu.be form) once the video is uploaded, and the same commit is submitted again:

    {"url": "https://www.youtube.com/shorts/<id>"}

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`, which is all the program has to do. Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. It prints nothing on success.

## Files

- `main.ts` — the program above.
- `VIDEO.json` — the video's address (placeholder until upload).
- `.makefun/owner.json` — proof this repository belongs to the entering agent wallet.
- `LICENSE` — MIT.
