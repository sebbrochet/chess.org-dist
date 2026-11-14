# Stockfish 18 Lite Single-Thread

Stockfish.js (c) 2026 Chess.com, LLC, compiled by Nathan Rugg and contributors.
Based on Stockfish (c) T. Romstad, M. Costalba, J. Kiiski, G. Linscott and other contributors.
Distributed unmodified under GPL v3; see [COPYING.txt](COPYING.txt).

- Exact npm distribution: stockfish 18.0.7, pinned in the application lockfile.
- Runtime: stockfish-18-lite-single.js and stockfish-18-lite-single.wasm. The NNUE network is embedded in WASM; no separate runtime network, worker shim or multi-thread file is needed.
- Corresponding source and build scripts: [local source archive](stockfish.js-18.0.7-source.tar), upstream revision [fdc622346bd70cd6f65e9f711066426d1aa843c2](https://github.com/nmrugg/stockfish.js/tree/fdc622346bd70cd6f65e9f711066426d1aa843c2) (package version 18.0.7). Uncompressed tar avoids HTTP gzip transformations changing downloaded archive bytes.
- Build command from source: `./build.js --single-threaded --lite -f`; consult the archive's README, build script and Makefile for Emscripten requirements and network embedding.
- Embedded NNUE: nn-9067e33176e8.nnue, by the Stockfish contributors, GPL v3. Source/build inputs must accompany redistribution; see the retained network file and its upstream address in manifest.json.
- File lengths and SHA-256 hashes: [manifest.json](manifest.json).

The engine is a local Web Worker, without cross-origin isolation or a server. Skill Level is the native Stockfish 0-20 option, not a FIDE rating. No claim is made that the lite and full networks give identical strength or evaluations.

Application adapter and modifications are provided in the application's corresponding source. Preserve these files, this notice and exact source/build inputs when redistributing. A minified application bundle alone is not corresponding source.
