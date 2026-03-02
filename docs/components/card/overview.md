# Card - Overview
Card is an interactive layout component to display information.

<ComponentsStatus />

## Examples
<ThemeSwitcher />

<style-isolate>
    <h3 class="t4">Default Card</h3>
    <p>
        The card can have any content but it needs to at least have one interactive item.
    </p>

    <h5>with box-shadow (default)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
    </div>

    <h5>without box-shadow (using the flat prop)</h5>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
        <w-card flat clickable>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Title</p>
                </h2>
            </article>
        </w-card>
    </div>

    <h3 class="t4">Selected Card</h3>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card selected>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Selected Card</p>
                </h2>
            </article>
        </w-card>
        <w-card>
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Normal Card</p>
                </h2>
            </article>
        </w-card>
    </div>

    <h3 class="t4">Card with click toggle selection</h3>
    <div class="grid grid-cols-3 gap-24 mb-32 mt-24">
        <w-card clickable onclick="this.selected = !this.selected">
            <article class="p-16">
                <h2 class="h4 font-normal">
                    <p>Click to toggle selection</p>
                </h2>
            </article>
        </w-card>
    </div>
</style-isolate>

<component-questions />