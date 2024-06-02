# Split Website Template
 
 A free React and Bootstrap template for a general business website.
    
- Uses React `^17.0.2`
- Uses Bootstrap `5.3.0-alpha3`

![image](https://github.com/vidella-lee/split-website-template/assets/25461721/18631121-2b02-42ed-88ce-664227a73214)

- Preview available here: https://split-website-template.netlify.app/

## Components

### `Hero`

This hero component is spilt into two sides. The left side contains the main content and the right contains subcontent, but the sides can be reversed so that the left side becomes the right and vice versa. The text content of both sides can also be reversed without reversing the other elements of either side.

#### Props:

| Prop               | Type    | Description                                                                                                                         | Attributes                                                                                                                                                                     |   |
|--------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| `heading`            | string  | an `h1` heading for left side of the hero                                                                                           |                                                                                                                                                                                |   |
| `headingColor`*      | string  | the font color of the h1 `rightHeading` prop                                                                                        |                                                                                                                                                                                |   |
| `subheading`         | string  | an `h2` heading                                                                                                                     |                                                                                                                                                                                |   |
| `rightHeading`       | string  | an `h1` heading for right side of the hero                                                                                          |                                                                                                                                                                                |   |
| `rightHeadingColor`* | string  |                                                                                                                                     |                                                                                                                                                                                |   |
| `leftParagraph`      | string  | a paragraph element for the main content on the left side of the hero                                                               |                                                                                                                                                                                |   |
| `leftTextColor`*     | string  | the font color of the text on the left side of the hero                                                                             |                                                                                                                                                                                |   |
| `rightParagraph`     | string  | a paragraph element for the right side of the hero                                                                                  |                                                                                                                                                                                |   |
| `rightTextColor`*    | string  | the font color of the text on the right side of the hero                                                                            |                                                                                                                                                                                |   |
| `leftBgImg`          | Object  | a background image for the left side of the hero                                                                                    | <ul><li>`src`: string; the image`src`.</li> <li>`title`: string; the "alt" text for the image; provided for accessibility purposes since background images do not have actual "alt" tags</li></ul> |   |
| `leftBgColor`*       | string  | a background color of the left side of the hero                                                                                     |                                                                                                                                                                                |   |
| `rightBgImg`         | Object  | a background image for the right side of the hero                                                                                   | `src`: string; the image `src`.    `title`: string; the "alt" text for the image; provided for accessibility purposes since background images do not have actual "alt" tags |   |
| `rightBgColor`*      | string  | a background color of the left side of the hero                                                                                     |                                                                                                                                                                                |   |
| `logo`               | Object  | an Object containing the `src` and `alt` properties for an image, assumedly, of a logo                                             | `src`: string; the image `src`. `alt`: string; the alt text for the image.                                                                                                      |   |
| `buttonLabel`        | string  | a label for the button                                                                                                              |                                                                                                                                                                                |   |
| `btnHref`            | string  | a link for the button                                                                                                               |                                                                                                                                                                                |   |
| `reverse`            | boolean | If set to true, the both sides are reversed so that the left side appears on the right and vice versa                               |                                                                                                                                                                                |   |
| `reverseContent`     | boolean | If set to true, the text content of both sides is reversed so that the content of the left side appears on the right and vice versa |                                                                                                                                                                                |   |

\* ***These properties accept Bootstrap classnames.** For more info, view the Bootstrap documentation:*
- https://getbootstrap.com/docs/5.0/utilities/colors/
- https://getbootstrap.com/docs/5.0/utilities/background/#background-color
