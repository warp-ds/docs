<script setup>
import { data } from './iconNames.data.js'

const iconNames = Object.keys(data);
</script>

# Icons - Overview
Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

<ComponentsStatus />

## Phosphor

Warp uses the [Phosphor icon set](https://phosphoricons.com) as its foundation and offers a curated subset. Phosphor is an open-source icon family with 9,000+ UI-focused icons, see the warp supported icons below.

<icon-example>
<ul>
    <li v-for="name in iconNames">
        {{name}}
    </li>
</ul>
</icon-example>

## Need new icons?

If you need a new icon or adjustments to an existing one, please submit a request in Slack [#warp-design-system](https://sch-chat.slack.com/archives/C04P0GYTHPV).

When requesting a new icon, please include a short description of the use case and the thinking behind it. If possible, share draft designs or screenshots to help us understand the context. This ensures we create (or select) the most appropriate icon for your needs.

We recommend browsing the [Phosphor icon library](https://phosphoricons.com/) to search for icons that suit your use case, and sharing links to relevant options in your request.

Icons should work across all verticals, so we aim to keep them general enough to scale across multiple teams and use cases.

In the rare case that you can’t find an icon that is “good enough” to solve your needs, we can create a custom icon. Please keep in mind that we’ve chosen to use the Phosphor icon library to reduce the time and cost related to icon creation. Custom icons will only be considered when no suitable existing options are available.

<component-questions />