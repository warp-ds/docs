import { Link } from '@warp-ds/components/react/link';
import React from 'react';

export default function LinkExample() {
  return (
    <div className="flex flex-wrap gap-16">
      <Link button href="https://google.com/" target="_blank">
        Link as button
      </Link>

      <Link button variant="primary" href="https://google.com/" target="_blank">
        Link as button primary
      </Link>

      <Link button variant="negative" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="quiet" href="https://google.com/" target="_blank">
        Link as button negative
      </Link>

      <Link button variant="utility" href="https://google.com/" target="_blank">
        Link as button utility
      </Link>

      <Link button variant="negativeQuiet" href="https://google.com/" target="_blank">
        Link as button negative quiet
      </Link>

      <Link button variant="utilityQuiet" href="https://google.com/" target="_blank">
        Link as button utility quiet
      </Link>

      <Link button disabled href="https://google.com/" target="_blank">
        Link as button disabled
      </Link>

      <Link button href="https://google.com/" target="_blank" onClick={() => alert("you've clicked")}>
        Link with onClick
      </Link>
      <Link button fullWidth variant="primary" href="https://google.com/">
        Link as a Full width button
      </Link>
    </div>
  );
}
