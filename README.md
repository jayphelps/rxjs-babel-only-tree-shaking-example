# DONT USE THIS AS IT DOESNT WORK IN ALL CASES. ONLY PUBLIC TO SHARE IN A DISCUSSION

```
npm install
npm run build
```

#### Before

```js
import { of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const example = from(of(1, 2, 3)).pipe(
  map(d => d * 10),
  filter(() => true)
);
```

#### After

```js
import { of } from 'rxjs/internal/observable/of';
import { from } from 'rxjs/internal/observable/from';
import { map } from 'rxjs/internal/operators/map';
import { filter } from 'rxjs/internal/operators/filter';

export const example = from(of(1, 2, 3)).pipe(
  map(d => d * 10),
  filter(() => true)
);
```

##### Notes

Works equally well with babel-preset-env, this demo just doesn't use any additional plugins or presets for simplicity.

Imports from the root `import { something } from 'rxjs'` aren't as easy, and currently this demo doesn't correctly handle some things, like scheduler imports. See [transform.js](transform.js)

***

:shipit:
