<script setup>
import Overview from './overview.md';
import Styling from './styling.md';
import Dev from './code.md';
import Accessibility from './accessibility.md';
import React from './react.md';
import data from './data.json';
import { mapFrameworkStatuses } from '../utils.js';
</script>

## Platform & Framework Support

<components-status v-bind="mapFrameworkStatuses(data.frameworks)" />

Our updated icon library is based on the Phosphor icon set, offering a flexible, modern foundation with over 9.000 icons.

## Overview
<icon-beta-example />

## Need new icons?

If you need a new icon or adjustments to an existing one, please submit a request in Slack [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV)

When requesting new icons, we recommend you browse the [Phosphor icon library](https://phosphoricons.com/) to search for icons that suit your needs, and share a link to the icons with us in your request.

In the rare case that you can’t find an icon that is “good enough” to solve your needs, we can create a custom icon. Please keep in mind that we have chosen to use the Phosphor icon library to reduce the time and cost related to icon creation, so we will only consider adding custom icons when there are no other possible solutions available.