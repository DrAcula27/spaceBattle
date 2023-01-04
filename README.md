# spaceBattle

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
<ul>
  <li>Background design is from <a href="https://medium.com/@jensaxena/css-tutorial-animated-geometric-galaxy-background-ad3835c36ce1" target="_blank">Jen Saxena at Medium.com</a>.</li>
  <li>Sounds are from <a href="https://freesound.org" target="_blank">freesound.org</a>.</li>
  <li>Images are from <a href="https://pixelstarships.fandom.com/wiki/Category:Faction" target="_blank">Pixel Starships Wiki</a> and <a href="https://gifer.com/en/gifs/explosion" target="_blank">gifer.com</a>.</li>
</ul>

<h3>Bonus Features</h3>
<ul>
  <li>The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it.</li>
  <li>When the game is over, prompt the user if they would like to play again, and make it so the user can play again with all the values set back to default.</li>
  <li>Scientists have improved your ship's shields. They don't work that consistently, and only improve your hit points by a random number each time you click the recharge button. Recharging allows the aliens to attack you first.</li>
</ul>

<h3>Future Work</h3>
<ul>
  <li>Scientists have developed a super targeting computer for your lasers. You now are asked which of the aliens you would like to hit with your lasers.</li>
  <li>Scientists have put missiles on your ship. You only have a limited number of them, but they do a lot of damage. You can say before each battle if you want to use one of your missles.</li>
  <li>The aliens have gained emotions and now can attack more than one at a time.</li>
  <li>Evil alien scientists have created an alien mega-ship. This mega-ship contains a number of "weapon pods" that each have their own individual hit points. These "weapon-pods" ( objects ) must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.</li>
  <li>So far the entire game is just one battle, with many aliens. Implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle. Keep track of points for the number of wins the player has.</li>
  <li>Make the enemies stronger after each battle.</li>
  <li>Distribute medals and power ups to the player depending on points.</li>
</ul>
