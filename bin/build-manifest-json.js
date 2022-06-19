#!/usr/bin/env node

import { readFile, writeFile } from "fs/promises";

(async () => {
  const manifest = await readFile("manifest.json", "utf-8");

  writeFile(
    "manifest.json",
    JSON.stringify({
      ...JSON.parse(manifest),
      scope: "/slashdot/",
      start_url: "/slashdot/",
    }),
    "utf-8"
  );
})();
