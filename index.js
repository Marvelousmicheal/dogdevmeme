   
 $(document).ready(function(){
    // Generate a random number between 1000 and 9999
    var randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Append the number to the div
    $('#numberDiv').text(randomNumber);
});
   
   
   
   
   $(document).ready(function(){
    var commands = [
        { type: 'cmd', text: '$ npm install <del>$DAWG</del>$DAWG' },
        { type: 'output', text: '+$DAWG@1.0.0 installed' },
        { type: 'cmd', text: '$ cd $DAWG' },
        { type: 'cmd', text: '$ npm run Bark' },
        { type: 'output', text: '\nInitialization complete\n----------------------------------------------\n$DAWG: Stats # ./$DAWG/bark.stats\n\n  Scenario: Doggo conquers the park\n     0% chasing tail\n    20% barking at squirrels\n    40% fetching stick\n    60% digging holes\n    80% wagging tail\n   100% good boy\n\n ---------- -------------- --------- --------- -----\n  MARKET CAP   TOTAL SUPPLY   TAX BUY   TAX SELL   LP\n ---------- -------------- --------- --------- -----\n  5B          500K           0%       0%        SNACK' },
        { type: 'cmd', text: '$ npm run Fetch' },
        { type: 'output', text: 'Fetch completed' },
        { type: 'cmd', text: '$ npm run launch' },
        { type: 'output', text: 'CEX listing confirmed. DEX trading is LIVE.' },
        { type: 'cmd', text: '$ npm run Walk' },
        { type: 'output', text: 'Walk initiated. Remember to bring bags!' },
        { type: 'cmd', text: '$ npm run Sit' },
        { type: 'output', text: 'Doggo is sitting. Awaiting further commands.' },
        { type: 'cmd', text: '$ npm run Stay' },
        { type: 'output', text: 'Doggo is staying. Good boy!' },
        { type: 'cmd', text: '$ npm run Play' },
        { type: 'output', text: 'Playing initiated. Doggo is happy!' },
        { type: 'cmd', text: '$' }
      ];

            function displayCommands(index) {
                if (index >= commands.length) return;

                var command = commands[index];
                if (command.type === 'cmd') {
                    // Remove previous caret
                    $('.t-caret').hide();
                    
                    $('#terminal').append('<kbd class="cmd cmd' + index + '"></kbd>');
                    $('.cmd' + index).t(command.text, {
                        speed: 50,
                        caret: true,
                        blink: true,
                        mistype: 5,
                        repeat: 0,
                        pause_on_click: false,
                        pause_on_tab_switch: false,
                        fin: function() {
                            $('#terminal').append('<br>');
                            displayCommands(index + 1);
                        }
                    });
                } else {
                    setTimeout(function() {
                        $('#terminal').append('<span class="output">' + command.text.replace(/\n/g, '<br>') + '</span><br><br>');
                        displayCommands(index + 1);
                    }, 200); // Slight delay for output appearance
                }
            }

            displayCommands(0);
        });