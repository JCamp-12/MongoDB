##Promises Review

promises are extremely important when working with mongo
because promises are the primary way that we will be interacting with our database.

1) open text editor
2) new file index.html
3) inside new create head tag, body tag, inside body tag add button.  inside of script tag, add in console.log of game is starting.
4) create a game of click, set a counter variable and if count is over 5 provide a win alert, or if not a loss alert



####These two code samples are the same

``` <head></head>
<body>
  <button>Click!</button>
    <script>
      function startGame() {
        console.log('game is starting');
        let counter = 0;
        document.querySelector('button').addEventListener('click', () => {
          ++counter
        })

        setTimeout(() => {
          if (counter > 5){
            alert('You won! Your clicks: ' + counter);
          } else {
            alert('Loser, try again');
          }
        }, 2000)
      }

      startGame();
    </script>
</body>
```
this
<><> is the same as <><>
this
```<head></head>
  <body>
    <button>Click!</button>
      <script>
        function startGame() {
          console.log('game is starting');
          let counter = 0;

          document.querySelector('button').addEventListener('click', () => {
            ++counter
          })
  
          return new Promise ((resolve, reject) => {
            setTimeout(() => {
              if (counter > 5) {
                resolve();
              } else {
                reject();
              }
            }, 3000)

          });
          }

        startGame()
          .then(() => alert('You Win'))
          .catch(() => alert('You lost!'));
      </script>
  </body>
  ```

### Promises - states 3 of promises
  1. unresolved - waiting for something to finish
  1. resolved - something finished and it all went ok
  1. rejected - something finished and something went bad






#### Example:

* Fields marked with an asterisk are required. Everything else is supplimental information about our power rangers.





`http://localhost:3030`




## [GET] `/api/rangers/all`

| Endpoint      |     Type      |  data |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

> This would turn into a block quote.