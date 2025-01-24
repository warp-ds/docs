# Figma library

Datviz colours and components are in a dedicated library that you need to add to your Figma file. We use the same dataviz colours across all brands. However, the library allows you to swap between dark mode and light mode. ✨

::: tip Pro tips 💡 
- Check your design in both Light mode and Dark mode to easily see if you have added colour tokens for all elements in your frame 🤠 
- Design your page in Light mode, and make the whole page into a component. Then, create an instance of it, and change the mode of the instance to Dark mode. Now, if you only make changes in the master frame, you will see the result in both Light mode and Dark mode. 
- The same approach can be used to automagically see the design across different brands ✨
:::

## Connect to the library from your Figma file

In order to use this library you must first connect it to your Figma file.
1. Click on **Assets** in the left menu
2. Click on the **Open book** icon on the right side of the assets menu
3. In the **Libraries** pop-up, find **WARP - DataViz (Beta)** (for example by searching for 'dataviz')
4. Click **Add to file** to use the library in your file. 

The library includes colours and a few chart components.

![Screenshot from Figma](/foundations/dataviz/figma-dv-lib.png)

## Use components and colours from the library
When you have added the library, you will find some basic componens under **Assets** in the left side panel. See [Components](/foundations/data-visualization/components/) for an overview.

In addition, there are lots of colours available to use in your graphs. See [Colour Usage](/foundations/data-visualization/colour-usage/) on how to choose the right colours.

## Switch mode
To switch between light mode and dark mode:
1. Select the top frame
2. Click the 'Apply variable mode' icon in the right panel, in the 'Appearance' section
3. Select correct mode(s)

![Screenshot from Figma](/foundations/dataviz/figma-swap-mode.png)

The Dataviz Mode will only be visible if you have used any colours from the dataviz library in the frame.

::: tip Remember to switch mode for both libraries 💡


Since the dataviz colours are in a different library than the regular WARP components, you will need to change mode for both the **WARP - Components** library and the **WARP  - dataviz** library when you are changing between light mode and dark mode. 
:::

You don’t need to change the dataviz mode when changing from one brand to another, since we use the same dataviz colours across all brands.

## Why are the dataviz resources in a separate library?
There are several reasons for having dataviz resources in a separate library:

- Many teams that use WARP don’t need dataviz colours. We want to keep the WARP - Components library as clean as possible
- The WARP Components library has different modes for each brand, but the dataviz colours are the same across all brands
- Teams that don't use WARP might still want to use the dataviz colours.
