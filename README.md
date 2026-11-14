# chess.org

**chess.org** is a free chess training web app for club players. It is available online at **[https://chessorg.sebbrochet.com](https://chessorg.sebbrochet.com)**.

It runs entirely in your browser: there is no account and no server. Your games, analysis and training history are stored only on your device.

## What you can do

- **Games**: import PGN files or fetch your public games from Lichess and Chess.com, browse them and export them back to PGN.
- **Game Editor**: record a game on the board, with variations, comments, move glyphs and arrows.
- **Play Computer**: play against Stockfish at an adjustable level, optionally from a custom position, with an evaluation bar and best-move arrow.
- **Review**: analyse a game with Stockfish to find your mistakes and the best continuations. You can also explore and keep your own analysis lines, and turn on a live engine.
- **Trainer**: replay the positions where you went wrong and find the better move.
- **Repertoires**: import your opening repertoires as PGN, then study them and drill them from memory.
- **Puzzles**: solve tactical puzzles.
- **Openings**: explore opening statistics and engine evaluations move by move.
- **Progress**: follow your training results over time.
- **Backup**: save all your data to a file and restore it on another device.

## Good to know

- **Installable and offline**: once loaded, the app works without a network connection and can be installed from the browser as an app. Only the public-games and openings features need the internet.
- **Private by design**: no tracking and no sign-in. Because data lives in your browser, use **Backup** regularly and before clearing site data.
- **Local engine**: analysis runs on your own device with Stockfish 18 compiled to WebAssembly.

## About this repository

This repository contains only the built website that GitHub Pages serves at the address above. It is updated with each release.

## Licenses

chess.org is distributed under the GPL-3.0-or-later license (see [LICENSE.txt](LICENSE.txt)). Third-party components, including Stockfish (GPL-3.0, with its corresponding source in [engine/](engine/SOURCE.md)), chessground, chessops and the piece sets, keep their own licenses. These are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and [THIRD_PARTY_LICENSES.txt](THIRD_PARTY_LICENSES.txt).
