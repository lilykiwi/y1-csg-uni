# A note about the CSS Validation

The CSS Validation fails on 5 points, and I'm going to outline here why this is okay and why I use each part. Hopefully this is acceptible.

## Errors

### Line 149 - article a

```plaintext
text is not a background-clip value : text
```

This error relates to the way anchor links work in the article. In this case, I've used background-clip: text; to make it so that the text has a gradient. While this is an error in the W3C validation, this tag works perfectly fine on Firefox and Google Chrome, the two browsers which I'm targeting with this project. This error likely comes from the W3C standards for CSS not lining up perfectly with the implemented feature-set in modern browsers.

https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip

## Warnings

### Line 21 - Unknown vendor extension

```plaintext
-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" is an unknown vendor extension
```

This warning specifically relates to the `-apple-system` segment of this font-family tag. This is a webkit vendor extension that is skipped over on other browsers. On Safari (and likely on MacOS-installed-Chrome) it will instead use the apple system font. This is a non-issue and is actually good form for CSS, as using native system fonts where possible is ideal.

### Line 150 - Unknown vendor extension

```plaintext
-webkit-background-clip is an unknown vendor extension
```

This is linked to the first error with the background clip, differentiated by the fact that this tag refers specifically to the webkit implementation of this tag. Webkit is a vender extension set that is included on Safari and Chrome. Firefox also has some webkit compatibility.

### Line 151 - Unknown vendor extension

```plaintext
-webkit-text-fill-color is an unknown vendor extension
```

Webkit is a vender extension set that is included on Safari and Chrome. Firefox also has some webkit compatibility.

### Line 279 - Unknown vendor extension

```plaintext
-webkit-animation is an unknown vendor extension
```

Webkit is a vender extension set that is included on Safari and Chrome. Firefox also has some webkit compatibility.
