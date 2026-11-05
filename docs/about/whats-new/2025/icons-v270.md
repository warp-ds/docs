---
title: "@warp-ds/icons v2.7.0"
date: 2025-04-25
---
Bug fix
---

This release addresses a bug introduced in v2.6.0, where the refactoring of our Lingui translation files caused a mismatch in ID mappings. This issue was not detected during testing and led to missing translations for some icons.

In this version:

✅ The ID mapping has been corrected.

⚠️ A warning boundary has been added to flag empty translations during the build process.

These changes improve translation reliability and help catch issues earlier in development.