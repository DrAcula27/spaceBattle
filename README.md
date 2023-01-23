# spaceBattle

## Per Scholas - Week 4 - CSS&JS Concepts - MODULE 1 Project: Space Battle

### Build a game of battling alien spaceships using Javascript, HTML, and CSS.

Earth has been attacked by a horde of aliens! You are the captain of the USS HelloWorld, on a mission to destroy every last alien ship.

Battle the aliens as you try to destroy them with your lasers!

There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship. Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order. After you have destroyed a ship, you have the option to make a hasty retreat.

The HTML should show the starting and final hull of both the player and the alien ships.

After the game, prompt the user to let them know if they won or lost, and ask if they would like to play again.

#### A game round looks like this:

1. You attack the first alien ship (update alien ship hull in HTML).
1. If the ship survives, it attacks you (update your ship hull in HTML).
1. If you survive, you attack the ship again.
1. If it survives, it attacks you again … repeat until either your or the alien ship is destroyed.
1. You win the game if you destroy all of the aliens.
1. You lose the game if you are destroyed.

#### USS HelloWorld Ship Properties

- **hull** is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
- **firepower** is the amount of damage done to the hull of the target with a successful hit.
- **accuracy** is the chance between 0 and 1 that the ship will hit its target.

#### Your spaceship, the USS HelloWorld, should have the following properties:

- hull - 20
- firepower - 5
- accuracy - 0.7

#### The alien ships should each have the following ranged properties determined randomly:

- hull - between 3 and 6 (inclusive)
- firepower - between 2 and 4 (inclusive)
- accuracy - between 0.6 and 0.8 (inclusive)

### Bonus Features:

- The aliens send a random number of ships (not 6 every time) to attack Earth.
- When the game is over, you are asked if you would like to play again.
   + when you opts to play again, the game is reset back to default.
- You have the option to recharge your shields after you defeat an alien ship.
   + However, recharging does not always work, improves your hull by a random number, and allows the aliens to attack you first.

### Credits:

- Background design is from [Jen Saxena at Medium.com](https://medium.com/@jensaxena/css-tutorial-animated-geometric-galaxy-background-ad3835c36ce1).
- Sounds are from [freesound.org](https://freesound.org).
- Images are from [Pixel Starships Wiki](https://pixelstarships.fandom.com/wiki/Category:Faction) and [gifer.com](https://gifer.com/en/gifs/explosion).

### Future Work:

- Game Quality Improvements:
    + Custom theme music controls.
    + Slow down and add shooting lasers to the individual battles.
    + Add a captain's log - to include number of aliens left to kill, player ship stats, etc.
- You can choose which alien to attack.
- Add missiles.
    + You only have a limited number of them, but they do a lot of damage.
    + You can say before each battle if you want to use one of your missles.
- The aliens can attack more than one at a time.
- Evil alien scientists have created an alien mega-ship.
    + This mega-ship contains a number of "weapon pods" that each have their own individual hit points.
    + These "weapon-pods" must all be destroyed before you can begin doing damage to the main ship, which also has its own hit points.
- Make the aliens stronger after each battle.
- So far the entire game is just one battle, with many aliens.
    + Implement a game that consists of multiple battles where enemies respawn for a new battle at the end of the old battle.
    + Keep track of points for the number of wins the player has.
    + Distribute medals and power ups to the player depending on points.
