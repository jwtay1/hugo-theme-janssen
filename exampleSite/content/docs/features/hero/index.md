---
title: Hero components
lastmod: 2025-04-21T07:52:12-06:00
---

A ``hero`` or ``call-to-action`` is commonly used in web design, usually on the front page, to call attention to a product or idea. In Janssen, You can use the ``hero`` shortcode to render a hero component.

For example:

```go
{{</* hero image="janko-ferlic.jpg" btn1_href="/docs/getting-started/" btn1_text="Get Started" btn2_href="https://example.com" btn2_text="Example link" */>}}

# Here is the hero title

And some text to follow

{{</* /hero */>}}
```

renders:

{{< hero image="janko-ferlic.jpg" btn1_href="/docs/getting-started/" btn1_text="Get Started" btn2_href="https://example.com" btn2_text="Example link" >}}

# Here is the hero title

And some text to follow

{{< /hero >}}

The hero features:
- Up to two buttons
- An optional background image
- Background color (will be used as an overlay if a background image is specified)
