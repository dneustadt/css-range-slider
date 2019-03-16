# (Almost) Pure CSS Responsive Range Slider

## Description

A range slider that allows for non-numeric custom values, utilizing an array of radio inputs.
It's only almost purely built with css, since some JS is still required for drag/touch events.
Those events are optional though and selection by click/tap of a slider point is achieved without
requiring JS.

## Demo

[See here](https://htmlpreview.github.io/?https://github.com/dneustadt/css-range-slider/blob/master/dist/index.html)

## Usage

### Prerequisites

See the example on how to structure your HTML. The required class name of the root container is `range-slider`.
Note that input should have the `type` of `radio` and a common `name`. Every input must have a unique `id` and
must be immediately followed by a `label` with the according `for` attribute.

If you require selection on `mouseover` and `touchmove` events, you must integrate `range-slider-events.min.js` before
the closing body tag.

### Example

```html
<div class="range-slider">
    <ul>
        <li>
            <input type="radio" name="slider" id="option1" required checked>
            <label for="option1">
                <span>
                    First Point
                </span>
            </label>
        </li>
        <li>
            <input type="radio" name="slider" id="option2" required>
            <label for="option2">
                <span>
                    Second Point
                </span>
            </label>
        </li>
        <li>
            <input type="radio" name="slider" id="option3" required>
            <label for="option3">
                <span>
                    Third Point
                </span>
            </label>
        </li>
        <li>
            <input type="radio" name="slider" id="option4" required>
            <label for="option4">
                <span>
                    Fourth Point
                </span>
            </label>
        </li>
        <li>
            <input type="radio" name="slider" id="option5" required>
            <label for="option5">
                <span>
                    Fifth Point
                </span>
            </label>
        </li>
    </ul>
</div>
```

## Customization

To alter colors find the accordings variables in `src/range-slider.scss`

## License

MIT