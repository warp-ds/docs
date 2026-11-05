# Pagination - Overview
Pagination is used to split up long datasets into multiple 'pages'.

<ComponentsStatus />

## General
Pagination is used on various listing pages. It's typically found at the end of search result pages, My Ads, Favorite lists, or anywhere a long list of items are divided up and presented to users over multiple pages. Since pagination is a fairly basic and familiar feature, it's reasonable to expect that users would benefit from a consistent design and behaviour. Consistency reduces cognitive load, which in turn leads to less frustrated and more happy users.

## Example
<ThemeSwitcher />

<style-isolate>
    <div>
        <h3 class="h4">Default Pagination</h3>
        <w-pagination base-url="/search?page=" pages="10" current-page="5"></w-pagination>
    </div>
    <div>
        <h3 class="h4">With fewer pages</h3>
        <w-pagination base-url="/search?page=" pages="5" current-page="1"></w-pagination>
    </div>
    <div>
        <h3 class="h4">Many pages with limited visible</h3>
        <w-pagination base-url="/search?page=" pages="50" current-page="25" visible-pages="5"></w-pagination>
    </div>
</style-isolate>

<component-questions />

