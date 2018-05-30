import { of, from } from 'rxjs';
import { map, filter } from 'rxjs/operators';

export const example = from(of(1, 2, 3)).pipe(
  map(d => d * 10),
  filter(() => true)
);