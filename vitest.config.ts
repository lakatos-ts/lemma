import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    // The bin suites spawn dist/cli.js, so one build before any file runs.
    globalSetup: [
      fileURLToPath(new URL("./tests/global-setup.ts", import.meta.url)),
    ],
    coverage: {
      provider: "v8",
      all: true,
      include: ["src/**/*.ts"],
      exclude: ["**/*.d.ts"],
      reporter: ["text", "html"],
      thresholds: {
        // Ratchet: vitest raises these on local runs; CI only enforces.
        autoUpdate: true,
        statements: 99.67,
        branches: 98.91,
        functions: 100,
        lines: 99.78,
      },
    },
  },
});
