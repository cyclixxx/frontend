<script>
  let Dragon = `
  const LEVEL_MAP = {
    easy: { count: 3, size: 4 },
    medium: { count: 2, size: 3 },
    hard: { count: 1, size: 2 },
    expert: { count1, size: 3 },
    master: { count: 1, size: 4 },
  }`
</script>

<div class="sc-hcupDf fkQdDC">
   <div class="item">
    <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">Game events are translation of the randomly generated floats into a relatable outcome that is
      game specific. This includes anything from the outcome of a dice roll to the order of the cards
      in a deck, or even the location of every bomb in a game of mines.</p>
      <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">Below is a detailed explanation as to how we translate floats into events for each particular
        different game on our platform.</p>
        <h2>Blackjack, Hilo & Baccarat</h2>
        <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">In a standard deck of cards, there are 52 unique possible outcomes. When it comes to playing
          Blackjack, Hilo &amp; Baccarat on our platform, we utilise an unlimited amount of decks when
          generating the game event, and therefore each turn of a card always has the same probability. To
          calculate this, we multiply each randomly generated float by 52, and then translate that result
          into a particular card, based on the following index:</p>

          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">
            <pre class="pre svelte-amanii">      
            <code class="code svelte-amanii">
              // Index of 0 to 51 : ♦2 to ♣A
            const CARDS = [ 
              ♦2, ♥2, ♠2, ♣2, ♦3, ♥3, ♠3, ♣3, ♦4, ♥4,  
              ♠4, ♣4, ♦5, ♥5, ♠5, ♣5, ♦6, ♥6, ♠6, ♣6, 
              ♦7, ♥7, ♠7, ♣7, ♦8, ♥8, ♠8, ♣8, ♦9, ♥9, 
              ♠9, ♣9, ♦10, ♥10, ♠10, ♣10, ♦J, ♥J, ♠J, 
              ♣J, ♦Q, ♥Q, ♠Q, ♣Q, ♦K, ♥K, ♠K, ♣K, ♦A, 
              ♥A, ♠A, ♣A 
            ]; 
            
            // Game event translation
            const card = CARDS[Math.floor(float * 52)];</code>
          </pre>

          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The only differentiating factor involved with these games is that with <strong>Hilo</strong> and
            <strong>Blackjack</strong>
            there is a curser of 13 to generate 52 possible game events for cases where a large amount of cards
            are required to be dealt to the player, whereas
            when it comes to <strong>Baccarat</strong> we only ever need 6 game events generated to cover the
            most amount of playable cards possible.
          </p>

          <h2>Diamond Poker</h2>
          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">When playing Diamond Poker, there is 7 possible outcomes in the form of gems. To achieve this,
            we multiply each float generated by 7 before it is translated into a corresponding gem using the
            following index:</p>
            <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">
              <pre class="pre svelte-schitm"> 
                <code class="code svelte-schitm">// Index of 0 to 6 : green to blue
              const GEMS = [ green, purple, yellow, red, cyan, orange, blue ];

              // Game event translation
              const gem = GEMS[Math.floor(float * 7)];</code>
                  </pre>

          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">Both the dealer and the player are dealt 5 gems each,
            which means that a complete game of Diamond Poker requires the generation of 10 game events. The
            first 5 are assigned to the dealer and the second 5 are assigned to the player.</p>

            <h2>Diamonds</h2>
            <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">When playing Diamonds, there is 7 possible outcomes in the form of gems. To achieve this, we
              multiply each float generated by 7 before it is translated into a corresponding gem using the
              following index:</p>
              <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Index of 0 to 6 : green to blue
                const GEMS = [ green, purple, yellow, red, cyan, orange, blue ];
                
                // Game event translation
                const gem = GEMS[Math.floor(float * 7)];</code>
                    </pre>

                    <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The player is then dealt 5 gems.</p>
           <h2>Dice Roll</h2>
           <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">In our version of dice, we cover a possible roll spread of 00.00 to 100.00, which has a range of
            10,001 possible outcomes. The game event translation is done by multiplying the float by number
            of possible outcomes and then dividing by 100 so that the resulting number fits the constraints
            of our stated dice range.</p>
            <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Game event translation
              const roll = (float * 10001) / 100;</code>
                  </pre>
      <h2>Limbo</h2>
      <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">When it comes to Limbo, we use a two-step process. Firstly, we take the float and multiply it by
        both the maximum possible multiplier and the house edge. Then, in order to generate a game event
        that has
        <a class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white" href="https://en.wikipedia.org/wiki/Probability_distribution" data-sveltekit-reload="off" data-sveltekit-preload-data="off" data-sveltekit-noscroll="" target="_blank" rel="external noreferrer noopener" weight="semibold"><span>probability distribution</span> <svg fill="currentColor" viewBox="0 0 64 64" class="svg-icon css-oluyn3" style=""> <title></title> <path fill-rule="evenodd" clip-rule="evenodd" d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z"></path></svg></a>
        , we divide the maximum possible multiplier by the result of the first step to create the game event
        in the form of a crash point.</p>
        <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Game event translation with houseEdge of 0.99 (1%)
          const floatPoint = 1e8 / (float * 1e8) * houseEdge;
          
          // Crash point rounded down to required denominator
          const crashPoint = Math.floor(floatPoint * 100) / 100;
          
          // Consolidate all crash points below 1
          const result = Math.max(crashPoint, 1);</code>
          </pre>

          <h2>Plinko</h2>
          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">For any game of Plinko, the generated outcome is based on the path of the falling ball. The game
            event determines the direction of the falling ball for each level in the falling process.
            Players can choose between 8 and 16 pins of play,
            which determines the number of game events required to generate a complete path from top to
            bottom. Since there are only two possible directions (left or right) the translation is done by
            multiplying each float by 2, which maps to the following index:</p>
            <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Index of 0 to 1 : left to right
              const DIRECTIONS = [ left, right ];
              
              // Game event translation
              const direction = CARDS[Math.floor(float * 2)];</code>
                  </pre>
                  <h2>Roulette Roll</h2>
          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">Our Roulette is derived from the European version of the game where the wheel consists of 37
            possible different pockets, ranging from 0 to 36. The game event is calculated by multiplying
            the float by 37 and then translated into a corresponding pocket using the following index:</p>
        <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Index of 0 to 36
          const POCKETS = [ 
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
            30, 31, 32, 33, 34, 35, 36
          ];
            
          // Game event translation
          const pocket = POCKETS[Math.floor(float * 37)];</code>
          </pre>

          <h2>Keno</h2>
          <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">Traditional Keno games require the selection of 10 possible game events in the form of hits on a
            board. To achieve this, we multiply each float by the number of possible unique squares that
            exist. Once a hit has been placed, it cannot be chosen again, which changes the pool size of the
            possible outcomes. This is done by subtracting the size of possible maximum outcomes by 1 for
            each iteration of game event result generated using the corresponding float provided, using the
            following index:</p>
            <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// Index of 0 to 39 : 1 to 40
              const SQUARES = [ 
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                31, 32, 33, 34, 35, 36, 37, 38, 39, 40
              ];
                
              const hit = SQUARES[Math.floor(float * 40)];</code>
              </pre>
              <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The fisher-yates shuffle implementation is utilised to prevent duplicate possible hits being
                generated.</p>

                <h2>Mines</h2>
                <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">A mine game is generated with 24 separate game events, in the form of mines on the board. Each
                  float is multiplied by the number of possible unique tiles still remaining on the board. This is
                  done by subtracting the number of tiles remaining by 1 for each iteration of game event result
                  generated using the corresponding float provided. The location of the mine is plotted using a
                  grid position from left to right, top to bottom.</p>

                  <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The fisher-yates shuffle implementation is utilised to prevent duplicate possible hits being
                    generated. Between 1 and 24 game event results are used, based on the settings chosen.</p>
                    <h2>Video Poker</h2>
                <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">A video poker game involves 52 separate game events, in the form of cards in a deck. Each float
                  is multiplied by the number of possible cards still remaining in the deck. This is done by
                  subtracting the number of cards remaining by 1 for each iteration of game event result generated
                  using the corresponding float provided. This is done by selecting a card from the following
                  index:</p>
                  <pre class="pre svelte-schitm">    
                    <code class="code svelte-schitm">
                      // Index of 0 to 51 : ♦2 to ♣A
                    const CARDS = [ 
                      ♦2, ♥2, ♠2, ♣2, ♦3, ♥3, ♠3, ♣3, ♦4, ♥4,  
                      ♠4, ♣4, ♦5, ♥5, ♠5, ♣5, ♦6, ♥6, ♠6, ♣6, 
                      ♦7, ♥7, ♠7, ♣7, ♦8, ♥8, ♠8, ♣8, ♦9, ♥9, 
                      ♠9, ♣9, ♦10, ♥10, ♠10, ♣10, ♦J, ♥J, ♠J, 
                      ♣J, ♦Q, ♥Q, ♠Q, ♣Q, ♦K, ♥K, ♠K, ♣K, ♦A, 
                      ♥A, ♠A, ♣A 
                    ]; 
                    // Game event translation
                    const card = CARDS[Math.floor(float * 52)];
                  </code>
                </pre>
                <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The fisher-yates shuffle implementation is utilised to prevent duplicate cards being generated.</p>
              <h2>Crash</h2>

              <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">See the
                <a class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white" href="https://bitcointalk.org/index.php?topic=5162888.0" data-sveltekit-reload="off" data-sveltekit-preload-data="off" data-sveltekit-noscroll="" target="_blank" rel="external noreferrer noopener"><span>BitcoinTalk seeding thread</span> 
                  <svg fill="currentColor" viewBox="0 0 64 64" class="svg-icon css-oluyn3" style=""> 
                    <title></title> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z"></path></svg></a> to learn about how we utilise the salt hash based provable fairness modal for
                this particular game.</p>

                <h2>Slide</h2>
                
              <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">See the
                <a class="inline-flex relative items-center gap-2 justify-center rounded-sm font-semibold whitespace-nowrap ring-offset-background transition disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.98] bg-transparent text-white betterhover:hover:bg-transparent betterhover:hover:text-white focus-visible:outline-none text-sm leading-none [&amp;_svg]:text-grey-200 [&amp;:hover>svg]:text-white" href="https://bitcointalk.org/index.php?topic=5162888.0" data-sveltekit-reload="off" data-sveltekit-preload-data="off" data-sveltekit-noscroll="" target="_blank" rel="external noreferrer noopener"><span>BitcoinTalk seeding thread</span> 
                  <svg fill="currentColor" viewBox="0 0 64 64" class="svg-icon css-oluyn3" style=""> 
                    <title></title> 
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.823 53.176h42.353V39.941h7.059v20.294H3.765V3.765h20.293v7.058H10.823v42.353Zm28.236-42.353V3.765h21.176V24.94h-7.059v-9.123L27.88 41.115l-4.994-4.995 25.297-25.296H39.06Z"></path></svg></a> to learn about how we utilise the salt hash based provable fairness modal for
                this particular game.</p>

              <h2>Dragon Tower</h2>
              <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">A Dragon Tower game is generated with 9 separate game events, in the form of the levels up the
                tower. We generate a number of eggs depending on the difficulty for each level, and have a range
                of tiles the egg can be on also represented by an integer.</p>
                <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style=""><pre class="pre svelte-schitm">      <code class="code svelte-schitm">// count represents the number of eggs
                  // size represents the number of possible squares
                 {Dragon}
                  </code>
                      </pre>
                      <p class="weight-normal line-height-150pct align-left size-base text-size-base responsive-type-scale variant-subtle with-icon-space svelte-17v69ua" style="">The fisher-yates shuffle implementation is utilised to prevent duplicate eggs on a row.</p>
    </div>
</div>


<style>
   
</style>