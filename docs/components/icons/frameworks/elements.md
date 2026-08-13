# Icons - Elements

Warp’s icons are crafted to deliver consistency, clarity, and scalability across our multi-brand product ecosystem.

<ComponentsStatus />
<FrameworkTabs />
<ThemeSwitcher />

<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/icon/accessibility.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/icon/usage.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/icon/examples.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/styling/api.md-->
<!--@include: ../../../../node_modules/@warp-ds/elements/dist/docs/icon/api.md-->

## Migrating from the `@warp-ds/icons` package

The `@warp-ds/icons` package is replaced by the `<w-icon>` component documented here. To migrate, replace imports from `@warp-ds/icons` with the `<w-icon>` component.

For example, say you import `IconBag16` from `@warp-ds/icons/react`. To use `<w-icon>` instead, remove the import of `@warp-ds/icons/react` and add this markup to your React code instead:

```diff
- import { IconBag16 } from '@warp-ds/icons/react';
+ import "@warp-ds/elements"; // optional, @warp-ds/elements components are globally available on Aurora

export const MyComponent = () => {
	return (
		<>
-    <IconBag16 />
+    <w-icon name="Bag" size="small"></w-icon>
    </>
	);
};
```

Similarly for the Elements icons:

```diff
- import "@warp-ds/icons/elements";
+ import "@warp-ds/elements"; // optional, @warp-ds/elements components are globally available on Aurora

export const render = () => {
	return `
-    <w-icon-attachment-16></w-icon-attachment-16>
+    <w-icon name="Attachment" size="small"></w-icon>
    </>
	`;
};
```

<component-questions />
