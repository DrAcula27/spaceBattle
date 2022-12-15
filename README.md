# spaceBattle_consoleGame

<h2>Per Scholas - Week 4 - CSS&JS Concepts - Project: Space Battle</h2>

<h3>Build a game of battling alien spaceships using Javascript, HTML, and CSS.</h3>

<p>Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.</p>
<p>Battle the aliens as you try to destroy them with your lasers.</p>
<p>There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.</p>
<p>The HTML should show the starting and final hull of the ships.</p>
<p>After the game, prompt the user to let them know if they won or lost, and ask if they would like to play again.</p>

<h4>A game round looks like this:</h4>
<ol>
  <li>You attack the first alien ship (update alien ship in html).</li>
  <li>If the ship survives, it attacks you (update your ship in html).</li>
  <li>If you survive, you attack the ship again.</li>
  <li>If it survives, it attacks you again … etc.</li>
  <li>You win the game if you destroy all of the aliens.</li>
  <li>You lose the game if you are destroyed.</li>
</ol>

<h3>Ship Properties</h3>
<ul>
  <li><b>hull</b> is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.</li>
  <li><b>firepower</b> is the amount of damage done to the hull of the target with a successful hit.</li>
  <li><b>accuracy</b> is the chance between 0 and 1 that the ship will hit its target.</li>
</ul>

<h4>Your spaceship, the USS HelloWorld, should have the following properties:</h4>
<ul>
  <li>hull - 20</li>
  <li>firepower - 5</li>
  <li>accuracy - 0.7</li>
</ul>

<h4>The alien ships should each have the following ranged properties determined randomly:</h4>
<ul>
  <li>hull - between 3 and 6</li>
  <li>firepower - between 2 and 4</li>
  <li>accuracy - between 0.6 and 0.8</li>
</ul>

<h3>Credits:</h3>
<p>Background image is from <a href="www.DesktopBackground.org" target="_blank">DesktopBackground.org</a>.</p>
