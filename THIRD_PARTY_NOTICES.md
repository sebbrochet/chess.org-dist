# Licenses And Source

chess.org is distributed under GPL-3.0-or-later. The full GPL v3 text is provided in LICENSE.txt. When distributing the application, provide its complete corresponding source, including these notices, the lockfile, build configuration, and any modifications, under the same license. A minified bundle alone is not corresponding source.

## Runtime Libraries

- Stockfish.js 18.0.7 lite single-thread: (c) 2026 Chess.com, LLC; Nathan Rugg and Stockfish contributors; GPL-3.0. Exact loader, WASM, full GPL, source archive and build-input provenance are retained under [engine/](engine/SOURCE.md). See its manifest for immutable revision and SHA-256 hashes. Network is embedded, not a remote runtime dependency.
- chessops 0.15.1: Niklas Fiekas; GPL-3.0-or-later. [Source](https://github.com/niklasf/chessops) (npm package includes source).
- chessground 9.2.1: Thibault Duplessis and contributors; GPL-3.0-or-later. [Source](https://github.com/lichess-org/chessground) (npm package includes source). This requested major version is deprecated upstream.
- Cburnett chess pieces, Colin M. L. Burnett: bundled unmodified in chessground/assets/chessground.cburnett.css as embedded SVGs. Used under GPL-2.0-or-later, compatible with this application's GPL-3.0-or-later distribution. [Author reference](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces) and [licensing reference](https://github.com/lichess-org/lila/blob/master/COPYING.md). Do not remove the author's attribution. No baseline piece sets of uncertain provenance are copied.
- Merida chess pieces, Armando Hernandez Marroquin: copied unchanged from the authorized Ch3ssVid5 baseline into pieces/merida. Used under GPL-2.0-or-later as identified in [Lichess's asset licensing record](https://github.com/lichess-org/lila/blob/master/COPYING.md). Preserve this attribution when distributing the assets.
- Letter chess pieces, usolando: SVG artwork copied unchanged from the authorized baseline into pieces/letter, separately licensed AGPL-3.0-or-later. The complete license is retained in pieces/letter/LICENSE.txt; the original SVGs are their editable source. [Author and licensing record](https://github.com/lichess-org/lila/blob/master/COPYING.md).
- Mono chess pieces, Thibault Duplessis and Colin M. L. Burnett: original role SVGs retained unchanged from [Lichess's source](https://github.com/lichess-org/lila/tree/master/public/piece/mono), GPL-2.0-or-later. Application CSS supplies light/dark brightness for side identification; SVG source is unmodified. [Licensing record](https://github.com/lichess-org/lila/blob/master/COPYING.md).
- React / React DOM: Copyright (c) Meta Platforms, Inc. and affiliates; MIT. [Source](https://github.com/facebook/react).
- idb-keyval: Copyright (c) 2016 Jake Archibald; Apache-2.0. [Source](https://github.com/jakearchibald/idb-keyval).
- lucide-react: Copyright (c) 2022 Lucide Contributors; ISC, with Feather-derived icons Copyright (c) 2013-2022 Cole Bemis under MIT. [Source](https://github.com/lucide-icons/lucide).
- @badrap/result (chessops dependency): Copyright (c) 2018 Badrap Oy; MIT. [Source](https://github.com/badrap/result).
- Zod: Colin McDonnell and contributors; MIT. [Source](https://github.com/colinhacks/zod). Used for runtime validation of full personal-data backups; its exact license is included in THIRD_PARTY_LICENSES.txt.

Exact upstream license texts are included in THIRD_PARTY_LICENSES.txt, including the complete [Apache 2.0 text](https://www.apache.org/licenses/LICENSE-2.0.txt) (also provided in APACHE-2.0.txt). Dependency versions and integrity hashes are recorded in package-lock.json. Installed npm packages contain the upstream sources; preserve the corresponding source for the exact shipped versions when redistributing.

## Read-Only Technical Reference

Ch3ssVid5, Copyright (c) 2026 Sebastien Brochet, GPL-3.0-or-later, was inspected locally for board integration, PGN parsing, persistence, and piece assets. Its original notice is retained verbatim in CH3SSVID5-NOTICE.txt. With the author's explicit permission, its move-sound helper was adapted and its move.mp3 and capture.mp3 clips were copied unchanged into sounds/. No video, playlist or engine implementation was copied. The board uses chessground's own bundled Cburnett assets, also used by that reference project.

## Other Assets

The chess.org c. icon is newly authored for this application and distributed under the application license. Typography uses locally available Segoe UI/Aptos/Calibri/fallback fonts; no font files are redistributed. Stockfish assets are introduced by slice 2, not copied from the baseline.

## Puzzle Data

The bundled Checkmate essentials positions and generated solution data are original to chess.org and dedicated to the public domain under [CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/). All legal mate-in-one alternatives are enumerated and tested; the application code remains separately GPL licensed.

Optional Lichess puzzle downloads retain their original puzzle identity, rating system, and source URL. The [Lichess puzzle database](https://database.lichess.org/#puzzles) explicitly releases its database exports under CC0, permitting reuse and redistribution. Downloaded continuations are validated for legality; finite checks do not claim proof of every external tactical evaluation.
