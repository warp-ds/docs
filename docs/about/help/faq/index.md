# FAQ
To answer the most frequently asked questions the following list is constantly updated. Please read through before using the support and communication channels for questions.

## General

### What are tokens?
Design tokens are representing visual properties like colours, typography, and spacing. They ensure consistency and flexibility across brands, simplifying style management and customisation. By abstracting design decisions into tokens, designers can efficiently adapt each brand's visual aspects while maintaining cohesiveness.

### Does WARP support Android and iOS components?
Yes. WARP has native component libraries for iOS (SwiftUI) and Android (Jetpack Compose), alongside WARP Elements for the web. Each platform has its own section in these docs: [Web](/web/), [iOS](/ios/) and [Android](/android/). A platform only lists the components it has, and [Platform coverage](/about/platform-coverage) shows which components exist where.

### Can I create custom components?
Try as much as you can to use WARP components, but sometimes you need something custom.

Please use the semantic tokens while building the component, by doing this you make sure the component have support for every brand and even dark mode.

### Does WARP have components for mobile web?
Most components are built to work well for mobile web. Get in touch with us if that is not the case!


## Design

### Can I still use Fabric?
No, WARP is replacing Fabric, please disable any Fabric libraries to avoid confusion and mishaps.

### Will my old design files be converted automatically to WARP?
No, If you have old design files made with Fabric you either have to replace the Fabric components one by one with the new WARP components or create a brand new Figma file and rebuild your designs from scratch using only WARP.

It may be time consuming but it’s essential in order for theming to work, and is something everyone will have to do. 

### Why FINN first?
When you insert a component from WARP the default styling will be FINN branded. We had to pick one brand to be the default and since WARP is based on Fabric this came natural.
