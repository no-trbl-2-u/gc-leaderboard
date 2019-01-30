/*
  Reserved for a Landing Page to the ENTIRE High
  Score System.

  For now it'll just be a description of Groove
  Catcher VR and how to navigate this site.

  In The Future:
    * Do "Featured of the Day" for games. (Show their:
      Bio, Scores, Picture, Stats, Etc...)
    * Show "Featured" accounts to show their latest
      High Score collections
*/

import React from 'react'

export interface LayoutHomeProps {
  path: string
}

export default
function LayoutHome (props: LayoutHomeProps) {
  return (
    <section className="LayoutHome">
      <h1>You Made it Home!</h1>
    </section>
  );
}
